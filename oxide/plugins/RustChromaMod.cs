using Newtonsoft.Json;
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

        public RustChromaMod()
        {
            AddToServerStatus("{0}: Started! {1}", this.GetType(), System.DateTime.Now);
			
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
							else if (context.Request.Url.LocalPath == "/status.html")
							{
								response = _mDebug.ToString();
							}
                            else
                            {
								script = ReadJavaScriptFile(); //debug reload each time so I can make changes
                                response = @"<html><head><script>
" + script + @"
</script>
<h2>RUST Chroma RGB MOD</h2>
" + "path: " + context.Request.Url.LocalPath + @"
<div>Status</div>
<div id=""divStatus"" />
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
			AddToServerStatus(@"OnPlayerConnected: Player={0}", player.displayName);
		}
		
		void OnPlayerDisconnected(BasePlayer player, string reason)
		{
			AddToServerStatus(@"OnPlayerDisconnected: Player={0}", player.displayName);
		}
		
		object OnMessagePlayer(string message, BasePlayer player)
		{
			AddToServerStatus(@"OnMessagePlayer: Player={0} Message={1}", player.displayName, message);
			return null;
		}
		
		#region Player Game Events
		
		void OnPlayerAttack(BasePlayer attacker, HitInfo info)
		{
			AddToServerStatus(@"OnPlayerAttack: Player={0}", attacker.displayName);
		}
		
		object OnPlayerDeath(BasePlayer player, HitInfo info)
		{
			AddToServerStatus(@"OnPlayerDeath: Player={0}", player.displayName);
			return null;
		}
		
		void OnPlayerLanded(BasePlayer player, float num)
		{
			AddToServerStatus(@"OnPlayerLanded: Player={0}", player.displayName);
		}
		
		void OnPlayerLootEnd(PlayerLoot inventory)
		{
			AddToServerStatus(@"OnPlayerLootEnd: Inventory={0}", inventory);
		}
		
		object OnPlayerAssist(BasePlayer target, BasePlayer player)
		{
			AddToServerStatus(@"OnPlayerRevive: target={0}", target.displayName);
			AddToServerStatus(@"OnPlayerRevive: player={0}", player.displayName);
			return null;
		}
		
		object OnPlayerRevive(BasePlayer reviver, BasePlayer player)
		{
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
			AddToServerStatus(@"OnActiveItemChanged: player={0} oldItem={1} newItem={2}", 
			player.displayName,
			GetItemDisplayName(oldItem),
			GetItemDisplayName(newItem));
		}
		
		#endregion Player Game Events
		
		#region Map Game Events
		
		void OnMapMarkerAdded(BasePlayer player, MapNote note)
		{
			AddToServerStatus(@"OnMapMarkerAdded: player={0}", player.displayName);
		}
		
		void OnMapMarkersCleared(BasePlayer player, List<MapNote> notes)
		{
			AddToServerStatus(@"OnMapMarkersCleared: player={0}", player.displayName);
		}
		
		#endregion Map Game Events
		
		#region Weapon Game Events
		
		void OnExplosiveThrown(BasePlayer player, BaseEntity entity, ThrownWeapon item)
		{
			AddToServerStatus(@"OnExplosiveThrown: player={0}", player.displayName);
		}
		
		void OnMeleeThrown(BasePlayer player, Item item)
		{
			AddToServerStatus(@"OnMeleeThrown: player={0} item={1}", player.displayName, GetItemDisplayName(item));
		}
		
		object OnReloadWeapon(BasePlayer player, BaseProjectile projectile)
		{
			AddToServerStatus(@"OnReloadWeapon: player={0}", player.displayName);
			return null;
		}
		
		void OnRocketLaunched(BasePlayer player, BaseEntity entity)
		{
			AddToServerStatus(@"OnRocketLaunched: player={0}", player.displayName);
		}
		
		object OnSwitchAmmo(BasePlayer player, BaseProjectile projectile)
		{
			AddToServerStatus(@"OnSwitchAmmo: player={0}", player.displayName);
			return null;
		}
		
		void OnWeaponFired(BaseProjectile projectile, BasePlayer player, ItemModProjectile mod, ProtoBuf.ProjectileShoot projectiles)
		{
			AddToServerStatus(@"OnWeaponFired: player={0} projectile={1}", player.displayName, projectile.name);
		}
		
		#endregion Weapon Game Events
		
		#region Horse Game Events
		
		object OnHorseLead(RidableHorse horse, BasePlayer player)
		{
			AddToServerStatus(@"OnHorseLead: Player={0}", player.displayName);
			return null;
		}
		
		object OnHorseHitch(RidableHorse horse, HitchTrough hitch)
		{
			AddToServerStatus(@"OnHorseHitch: Horse={0}", horse);
			return null;
		}
		
		#endregion Horse Game Events
    }
}
