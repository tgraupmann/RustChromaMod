using Newtonsoft.Json.Linq;
using ProtoBuf;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;

namespace Oxide.Plugins
{
	[Info("RustChromaMod", "Razer", VERSION)]
	[Description("Detects game events to play Chroma SDK lighting on RUST clients")]
	public class RustChromaMod : RustPlugin
	{
		const string VERSION = "1.0.2";
		const int SERVER_PORT = 5000;

		private bool _mWaitForExit = true;
		private Thread _mThread = null;
		private HttpListener _mHttpListener = null;
		private StringBuilder _mDebug = new StringBuilder();
		private System.Object _mLock = null;
		private Dictionary<string, JArray> _mPlayerStates = null;

		const string PLAYER_STATE_EVENT = "event";

		public RustChromaMod()
		{
			AddToServerStatus("{0}: Version={1}: Started! {1}", this.GetType(), VERSION, System.DateTime.Now);

			_mLock = new System.Object();
			_mPlayerStates = new Dictionary<string, Newtonsoft.Json.Linq.JArray>();

			_mWaitForExit = true;

			_mHttpListener = new HttpListener();

			try
			{
				_mHttpListener.Prefixes.Add(string.Format("http://*:{0}/", SERVER_PORT));
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
				if (_mPlayerStates.ContainsKey(displayName.ToLower()))
				{
					result = _mPlayerStates[displayName.ToLower()];
				}
				else
				{
					result = new JArray();
					_mPlayerStates[displayName.ToLower()] = result;
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
							else if (context.Request.Url.LocalPath.StartsWith("/stop"))
                            {
								Unload();
							}
							else if (context.Request.Url.LocalPath.StartsWith("/Animations/"))
							{
								try
								{
									string path = @"oxide\plugins\" + context.Request.Url.LocalPath;
									if (File.Exists(path))
									{
										byte[] buffer = null;
										using (FileStream fs = File.Open(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
										{
											if (fs.Length > 0)
											{
												buffer = new byte[fs.Length];
												fs.Read(buffer, 0, buffer.Length);										
											}
										}
										
										if (null != buffer)
										{
											context.Response.ContentEncoding = Encoding.UTF8;
											context.Response.AddHeader("ContentType", "application/octet-stream");
											context.Response.AddHeader("Cache-Control", "no-cache");
											context.Response.OutputStream.Write(buffer, 0, buffer.Length);
											context.Response.OutputStream.Flush();
											context.Response.Close();
										}
									}
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
										data.Add(kvp.Key.ToLower());
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
									else if (_mPlayerStates.ContainsKey(selectedPlayer.ToLower()))
									{
										JArray playerData = _mPlayerStates[selectedPlayer.ToLower()];
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
			if (player.IsNpc)
			{
				return;
			}
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
			if (player.IsNpc)
			{
				return;
			}
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
			if (player.IsNpc)
			{
				return null;
			}
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
				Item item = attacker.GetActiveItem();
				if (null != item &&
					null != item.info &&
					null != item.info.displayName &&
					!string.IsNullOrEmpty(item.info.displayName.english))
                {
					data["active_item"] = item.info.displayName.english;
                }
				else
                {
					data["active_item"] = string.Empty;
				}
				if (null != info &&
					!string.IsNullOrEmpty(info.HitEntity._name))
				{
					data["hit_entity"] = info.HitEntity._name;
				}
				else
                {
					data["hit_entity"] = info.HitEntity.GetType().Name;
				}
				AddToPlayerState(playerState, data);
				AddToServerStatus(@"OnPlayerAttack: data={0}", data.ToString());
			}
		}

		object OnPlayerDeath(BasePlayer player, HitInfo info)
		{
			if (player.IsNpc)
			{
				return null;
			}
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
			if (player.IsNpc)
			{
				return;
			}
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
			if (player.IsNpc)
			{
				return;
			}
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
			if (player.IsNpc)
			{
				return null;
			}
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
			if (player.IsNpc)
			{
				return null;
			}
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

		object OnPlayerRespawn(BasePlayer player)
		{
			if (player.IsNpc)
			{
				return null;
			}
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnPlayerRespawn";
				data["player"] = player.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnPlayerRespawn: reviver={0}", player.displayName);
			return null;
		}

		string GetItemDisplayName(Item item)
		{
			return (item == null || item.info == null || item.info.displayName == null || string.IsNullOrEmpty(item.info.displayName.english)) ? "none" : item.info.displayName.english;
		}

		void OnActiveItemChanged(BasePlayer player, Item oldItem, Item newItem)
		{
			if (player.IsNpc)
			{
				return;
			}
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnActiveItemChanged";
				data["player"] = player.displayName;
				data["old_item"] = GetItemDisplayName(oldItem);
				data["new_item"] = GetItemDisplayName(newItem);
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnActiveItemChanged: player={0} oldItem={1} newItem={2}",
				player.displayName,
				GetItemDisplayName(oldItem),
				GetItemDisplayName(newItem));
		}

		object OnItemAction(Item item, string action, BasePlayer player)
		{
			if (player.IsNpc)
			{
				return null;
			}
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnItemAction";
				data["player"] = player.displayName;
				data["item"] = GetItemDisplayName(item);
				data["action"] = action;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnItemAction: player={0} item={1} action={2}",
				player.displayName,
				GetItemDisplayName(item),
				action);
			return null;
		}

		void OnItemUse(Item item, int amountToUse)
		{
			BasePlayer player = item.GetOwnerPlayer();
			if (player.IsNpc)
			{
				return;
			}
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnItemUse";
				data["player"] = player.displayName;
				data["item"] = GetItemDisplayName(item);
				data["amountToUse"] = amountToUse;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnItemUse: player={0} item={1} amountToUse={2}",
				player.displayName,
				GetItemDisplayName(item),
				amountToUse);
		}

		#endregion Player Game Events

		#region Map Game Events

		void OnMapMarkerAdded(BasePlayer player, MapNote note)
		{
			if (player.IsNpc)
			{
				return;
			}
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
			if (player.IsNpc)
			{
				return;
			}
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
			if (player.IsNpc)
			{
				return;
			}
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
			if (player.IsNpc)
			{
				return;
			}
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
			if (player.IsNpc)
			{
				return null;
			}
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
			if (player.IsNpc)
			{
				return;
			}
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
			if (player.IsNpc)
			{
				return null;
			}
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
			if (player.IsNpc)
			{
				return;
			}
			JArray playerState = GetPlayerState(player.displayName);
			if (null != playerState)
			{
				JObject data = new JObject();
				data[PLAYER_STATE_EVENT] = "OnWeaponFired";
				data["player"] = player.displayName;
				AddToPlayerState(playerState, data);
			}
			AddToServerStatus(@"OnWeaponFired: player={0} projectile={1}", player.displayName, projectile);
		}

		#endregion Weapon Game Events

		#region Horse Game Events

		object OnHorseLead(RidableHorse horse, BasePlayer player)
		{
			if (player.IsNpc)
			{
				return null;
			}
			JArray playerState = GetPlayerState(player.displayName);
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
				if (player.IsNpc)
				{
					return null;
				}
				JArray playerState = GetPlayerState(player.displayName);
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
		
		#region Input Events
		
		void OnPlayerInput(BasePlayer player, InputState input)
		{
			if (player.IsNpc)
			{
				return;
			}
			if (input.WasJustPressed(BUTTON.JUMP)) {
				JArray playerState = GetPlayerState(player.displayName);
				if (null != playerState)
				{
					JObject data = new JObject();
					data[PLAYER_STATE_EVENT] = "OnPlayerJump";
					data["player"] = player.displayName;
					AddToPlayerState(playerState, data);
				}
				//AddToServerStatus(@"OnPlayerJump: Player={0}", player.displayName);
            }
			else if (input.WasJustPressed(BUTTON.DUCK)) {
				JArray playerState = GetPlayerState(player.displayName);
				if (null != playerState)
				{
					JObject data = new JObject();
					data[PLAYER_STATE_EVENT] = "OnPlayerDuck";
					data["player"] = player.displayName;
					AddToPlayerState(playerState, data);
				}
				AddToServerStatus(@"OnPlayerDuck: Player={0}", player.displayName);
            }
			else if (input.WasJustPressed(BUTTON.SPRINT)) {
				JArray playerState = GetPlayerState(player.displayName);
				if (null != playerState)
				{
					JObject data = new JObject();
					data[PLAYER_STATE_EVENT] = "OnPlayerSprint";
					data["player"] = player.displayName;
					AddToPlayerState(playerState, data);
				}
				AddToServerStatus(@"OnPlayerSprint: Player={0}", player.displayName);
            }
		}
		
		#endregion Input Events
	}
}
