using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Oxide.Core;
using Oxide.Core.Configuration;
using Oxide.Core.Libraries.Covalence;
using Oxide.Core.Plugins;
using Oxide.Game.Rust.Libraries.Covalence;
using ProtoBuf;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;
using System.Web;

namespace Oxide.Plugins
{
	[Info("RustChromaMod", "Razer", "1.0.0")]
	[Description("Detects game events to play Chroma SDK lighting on RUST clients")]
	public class RustChromaMod : RustPlugin
	{
		private int Port
		{
			get
			{
                return 5000;
			}
		}

		private bool _mWaitForExit = true;
		private Thread _mThread = null;
		private HttpListener _mHttpListener = null;
		private StringBuilder _mDebug = new StringBuilder();
		private System.Object _mLock = null;
		private Dictionary<string, JArray> _mPlayerStates = null;

		const string PLAYER_STATE_EVENT = "event";

		public RustChromaMod()
		{
			AddToServerStatus("{0}: Started! {1}", this.GetType(), System.DateTime.Now);

			_mLock = new System.Object();
			_mPlayerStates = new Dictionary<string, Newtonsoft.Json.Linq.JArray>();

			_mWaitForExit = true;

			_mHttpListener = new HttpListener();

			try
			{
				_mHttpListener.Prefixes.Add(string.Format("http://*:{0}/", Port));
				_mHttpListener.Start();

				ThreadStart ts = new ThreadStart(WebWorker);
				_mThread = new Thread(ts);
				_mThread.Start();
			}
			catch (System.Exception)
			{
				PrintToConsole("Failed to start Chroma Proxy!");
			}
		}

		public void Unload()
		{
			_mWaitForExit = false;

			try
			{
				if (null != _mHttpListener)
				{
					_mHttpListener.Abort();
				}
			}
			catch (System.Exception)
			{
				PrintToConsole("Failed to abort HttpListener!");
			}

			try
			{
				if (null != _mHttpListener)
				{
					_mHttpListener.Stop();
				}
			}
			catch (System.Exception)
			{
				PrintToConsole("Failed to stop HttpListener!");
			}

			try
			{
				if (null != _mThread)
				{
					_mThread.Abort();
					_mThread = null;
				}
			}
			catch (System.Exception)
			{
				PrintToConsole("Failed to abort Thread!");
			}

			PrintToConsole("{0}: Exited!", this.GetType());
		}

		private string ReadJavaScriptFile()
		{
			string script = string.Empty;
			try
			{
				string path = @"oxide\plugins\RustChromaMod.js";
				using (FileStream fs = File.Open(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
				{
					using (StreamReader sr = new StreamReader(fs))
					{
						script = sr.ReadToEnd();
					}
				}
			}
			catch (System.Exception)
			{
				PrintToConsole("Failed to read Javascript!");
			}
			return script;
		}

		JArray GetPlayerState(string displayName)
		{
			if (string.IsNullOrEmpty(displayName))
			{
				return null;
			}
			JArray result;
			lock (_mLock)
			{
				if (_mPlayerStates.ContainsKey(displayName))
				{
					result = _mPlayerStates[displayName];
				}
				else
				{
					result = new JArray();
					_mPlayerStates[displayName] = result;
				}
			}
			return result;
		}

		void AddToPlayerState(JArray playerState, JObject data)
		{
			lock (_mLock)
			{
				playerState.Add(data);
			}
		}

		private void WebWorker()
		{
			string script = ReadJavaScriptFile();
			while (_mWaitForExit)
			{
				try
				{
					if (null != _mHttpListener)
					{
						HttpListenerContext context = _mHttpListener.GetContext();
						string response = string.Empty;
						if (null != context)
						{
							if (string.IsNullOrEmpty(context.Request.Url.LocalPath))
							{
							}
							else if (context.Request.Url.LocalPath.StartsWith("/Animations/"))
							{
								try
								{
									string path = @"oxide\plugins\" + context.Request.Url.LocalPath;
									byte[] buffer = null;
									using (FileStream fs = File.Open(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
									{
										buffer = new byte[fs.Length];
										fs.Read(buffer, 0, buffer.Length);										
									}

									context.Response.ContentEncoding = Encoding.UTF8;
									context.Response.AddHeader("ContentType", "application/octet-stream");
									context.Response.AddHeader("Cache-Control", "no-cache");
									context.Response.OutputStream.Write(buffer, 0, buffer.Length);
									context.Response.OutputStream.Flush();
									context.Response.Close();
								}
								catch (System.Exception)
								{
									PrintToConsole("Failed to read Javascript!");
								}
							}
							else if (context.Request.Url.LocalPath == "/status.html")
							{
								response = _mDebug.ToString();
							}
							else if (context.Request.Url.LocalPath == "/players.json")
							{
								lock (_mLock)
								{
									JArray data = new JArray();
									foreach (KeyValuePair<string, JArray> kvp in _mPlayerStates)
									{
										data.Add(kvp.Key);
									}
									response = data.ToString();
								}
							}
							else if (context.Request.Url.LocalPath == "/player.json")
							{
								lock (_mLock)
								{
									JArray data = new JArray();
									string selectedPlayer = context.Request.QueryString["player"];
									if (selectedPlayer == null ||
										string.IsNullOrEmpty(selectedPlayer))
									{
										foreach (KeyValuePair<string, JArray> kvp in _mPlayerStates)
										{
											JArray playerData = kvp.Value;
											foreach (JObject eventData in playerData)
											{
												data.Add(eventData);
											}
										}
									}
									else if (_mPlayerStates.ContainsKey(selectedPlayer))
									{
										JArray playerData = _mPlayerStates[selectedPlayer];
										foreach (JObject eventData in playerData)
										{
											data.Add(eventData);
										}
										playerData.Clear(); //clear data after sending
									}
									response = data.ToString();
								}
							}
							else
							{
								script = ReadJavaScriptFile(); //debug reload each time so I can make changes
								response = @"<html><head><script>
" + script + @"
</script>
<h2>RUST Chroma RGB MOD</h2>
" + "path: " + context.Request.Url.LocalPath + @"

<div>Players:</div>
<div id=""divPlayers""></div>
<br/><br/>

<div>Player State:</div>
<div id=""divPlayerState""></div>
<br/><br/>

<div>Server Status:</div>
<div id=""divServerStatus""></div>
<br/><br/>

</html>";
							}
						}

						if (!string.IsNullOrEmpty(response))
						{
							byte[] bytes = UTF8Encoding.UTF8.GetBytes(response);
							context.Response.ContentEncoding = Encoding.UTF8;
							context.Response.AddHeader("ContentType", "utf8");
							context.Response.AddHeader("Cache-Control", "no-cache");
							context.Response.OutputStream.Write(bytes, 0, bytes.Length);
							context.Response.OutputStream.Flush();
							context.Response.Close();
						}
					}
				}
				catch (System.Exception)
				{
					PrintToConsole("Failed to send response!");
				}
				Thread.Sleep(0);
			}
		}

		void AddToServerStatus(string msg, params object[] format)
		{
			_mDebug.AppendFormat(msg, format);
			_mDebug.AppendLine("<br/>");
		}

		void OnPlayerConnected(BasePlayer player)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnPlayerConnected";
				data["player"] = player.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnPlayerConnected: Player={0}", player.displayName);
		}

		void OnPlayerDisconnected(BasePlayer player, string reason)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnPlayerDisconnected";
				data["player"] = player.displayName;
				data["reason"] = reason;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnPlayerDisconnected: Player={0}", player.displayName);
		}

		object OnMessagePlayer(string message, BasePlayer player)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnMessagePlayer";
				data["player"] = player.displayName;
				data["message"] = message;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnMessagePlayer: Player={0} Message={1}", player.displayName, message);
			return null;
		}

		#region Player Game Events

		void OnPlayerAttack(BasePlayer attacker, HitInfo info)
		{
			JArray playerState = GetPlayerState(attacker.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnPlayerAttack";
				data["player"] = attacker.displayName;
				data["attacker"] = attacker.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnPlayerAttack: Player={0}", attacker.displayName);
		}

		object OnPlayerDeath(BasePlayer player, HitInfo info)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnPlayerDeath";
				data["player"] = player.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnPlayerDeath: Player={0}", player.displayName);
			return null;
		}

		void OnPlayerLanded(BasePlayer player, float num)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnPlayerLanded";
				data["player"] = player.displayName;
				data["num"] = num;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnPlayerLanded: Player={0}", player.displayName);
		}

		void OnLootEntityEnd(BasePlayer player, BaseCombatEntity entity)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnLootEntityEnd";
				data["player"] = player.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnLootEntityEnd: Player={0}", player.displayName);
		}

		object OnPlayerAssist(BasePlayer target, BasePlayer player)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnPlayerAssist";
				data["player"] = player.displayName;
				data["target"] = target.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnPlayerRevive: target={0}", target.displayName);
			AddToServerStatus(@"OnPlayerRevive: player={0}", player.displayName);
			return null;
		}

		object OnPlayerRevive(BasePlayer reviver, BasePlayer player)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnPlayerRevive";
				data["player"] = player.displayName;
				data["reviver"] = reviver.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnPlayerRevive: reviver={0}", reviver.displayName);
			AddToServerStatus(@"OnPlayerRevive: player={0}", player.displayName);
			return null;
		}

		string GetItemDisplayName(Item item)
		{
			return (item == null || item.info == null || item.info.displayName == null || string.IsNullOrEmpty(item.info.displayName.english)) ? "none" : item.info.displayName.english;
		}

		void OnActiveItemChanged(BasePlayer player, Item oldItem, Item newItem)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnActiveItemChanged";
				data["player"] = player.displayName;
				data["oldItem"] = GetItemDisplayName(oldItem);
				data["newItem"] = GetItemDisplayName(newItem);
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnActiveItemChanged: player={0} oldItem={1} newItem={2}",
			player.displayName,
			GetItemDisplayName(oldItem),
			GetItemDisplayName(newItem));
		}

		#endregion Player Game Events

		#region Map Game Events

		void OnMapMarkerAdded(BasePlayer player, MapNote note)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnMapMarkerAdded";
				data["player"] = player.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnMapMarkerAdded: player={0}", player.displayName);
		}

		void OnMapMarkersCleared(BasePlayer player, List<MapNote> notes)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnMapMarkersCleared";
				data["player"] = player.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnMapMarkersCleared: player={0}", player.displayName);
		}

		#endregion Map Game Events

		#region Weapon Game Events

		void OnExplosiveThrown(BasePlayer player, BaseEntity entity, ThrownWeapon item)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnExplosiveThrown";
				data["player"] = player.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnExplosiveThrown: player={0}", player.displayName);
		}

		void OnMeleeThrown(BasePlayer player, Item item)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnMeleeThrown";
				data["player"] = player.displayName;
				data["item"] = GetItemDisplayName(item);
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnMeleeThrown: player={0} item={1}", player.displayName, GetItemDisplayName(item));
		}

		object OnReloadWeapon(BasePlayer player, BaseProjectile projectile)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnReloadWeapon";
				data["player"] = player.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnReloadWeapon: player={0}", player.displayName);
			return null;
		}

		void OnRocketLaunched(BasePlayer player, BaseEntity entity)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnRocketLaunched";
				data["player"] = player.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnRocketLaunched: player={0}", player.displayName);
		}

		object OnSwitchAmmo(BasePlayer player, BaseProjectile projectile)
		{
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnSwitchAmmo";
				data["player"] = player.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnSwitchAmmo: player={0}", player.displayName);
			return null;
		}

		void OnWeaponFired(BaseProjectile projectile, BasePlayer player, ItemModProjectile mod, ProtoBuf.ProjectileShoot projectiles)
		{
			/*
			Array playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnWeaponFired";
				data["player"] = player.displayName;
				AddToPlayerState(playerState, data);
			}
			*/
			AddToServerStatus(@"OnWeaponFired: player={0} projectile={1}", player.displayName, projectile.name);
		}

		#endregion Weapon Game Events

		#region Horse Game Events

		object OnHorseLead(RidableHorse horse, BasePlayer player)
		{
			Array playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnHorseLead";
				data["player"] = player.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnHorseLead: Player={0}", player.displayName);
			return null;
		}

		object OnHorseHitch(RidableHorse horse, HitchTrough hitch)
		{
			BasePlayer player = BasePlayer.FindByID(hitch.OwnerID);
			if (null != player)
			{
				Array playerState = GetPlayerState(player.displayName);
				if (null != playerState)
				{
					JObject data = new JObject();
					data[PLAYER_STATE_EVENT] = "OnHorseHitch";
					data["player"] = player.displayName;
					AddToPlayerState(playerState, data);
				}
				AddToServerStatus(@"OnHorseHitch: Player={0}", player.displayName);
			}
			return null;
		}

		#endregion Horse Game Events
	}
}
