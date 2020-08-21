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
                return 5004;
            }
        }

        private bool _mWaitForExit = true;
        private Thread _mThread = null;
        private HttpListener _mHttpListener = null;
		private StringBuilder _mDebug = new StringBuilder();

        public RustChromaMod()
        {
            PrintToConsole("{0}: Started!", this.GetType());

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

        ~RustChromaMod()
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
        private void WebWorker()
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
            while (_mWaitForExit)
            {
                try
                {
                    if (null != _mHttpListener)
                    {
                        HttpListenerContext context = _mHttpListener.GetContext();
                        if (null != context)
                        {
                            string response = string.Empty;

                            if (string.IsNullOrEmpty(context.Request.Url.LocalPath))
                            {
                            }
                            else
                            {
                                response = @"<html><head><script>
" + script + @"
</script>
<h2>RUST Chroma RGB MOD</h2>
" + "path: " + context.Request.Url.LocalPath + @"
<div>Status</div>
<div>" + _mDebug.ToString() + @"</div>
</html>";
                            }

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
		
		void OnPlayerConnected(BasePlayer player)
		{
			_mDebug.AppendFormat(@"OnPlayerConnected: Player={0}<br/>", player.displayName);
		}
		
		void OnPlayerDisconnected(BasePlayer player, string reason)
		{
			_mDebug.AppendFormat(@"OnPlayerDisconnected: Player={0}<br/>", player.displayName);
		}
		
		object OnMessagePlayer(string message, BasePlayer player)
		{
			_mDebug.AppendFormat(@"OnMessagePlayer: Player={0} Message={1}<br/>", player.displayName, message);
			return null;
		}
		
		#region Player Game Events
		
		void OnPlayerAttack(BasePlayer attacker, HitInfo info)
		{
			_mDebug.AppendFormat(@"OnPlayerAttack: Player={0}<br/>", attacker.name);
		}
		
		object OnPlayerDeath(BasePlayer player, HitInfo info)
		{
			_mDebug.AppendFormat(@"OnPlayerDeath: Player={0}<br/>", player.displayName);
			return null;
		}
		
		void OnPlayerLanded(BasePlayer player, float num)
		{
			_mDebug.AppendFormat(@"OnPlayerLanded: Player={0}<br/>", player.displayName);
		}
		
		void OnPlayerLootEnd(PlayerLoot inventory)
		{
			_mDebug.AppendFormat(@"OnPlayerLootEnd: Inventory={0}<br/>", inventory);
		}
		
		object OnPlayerAssist(BasePlayer target, BasePlayer player)
		{
			_mDebug.AppendFormat(@"OnPlayerRevive: target={0}<br/>", target.displayName);
			_mDebug.AppendFormat(@"OnPlayerRevive: player={0}<br/>", player.displayName);
			return null;
		}
		
		object OnPlayerRevive(BasePlayer reviver, BasePlayer player)
		{
			_mDebug.AppendFormat(@"OnPlayerRevive: reviver={0}<br/>", reviver.displayName);
			_mDebug.AppendFormat(@"OnPlayerRevive: player={0}<br/>", player.displayName);
			return null;
		}
		
		void OnActiveItemChanged(BasePlayer player, Item oldItem, Item newItem)
		{
			_mDebug.AppendFormat(@"OnActiveItemChanged: player={0} oldItem={1} newItem={2}<br/>", 
			player.displayName,
			oldItem == null ? "none" : oldItem.name,
			newItem == null ? "none" : newItem.name);
		}
		
		#endregion Player Game Events
		
		#region Map Game Events
		
		void OnMapMarkerAdded(BasePlayer player, MapNote note)
		{
			_mDebug.AppendFormat(@"OnMapMarkerAdded: player={0}<br/>", player.displayName);
		}
		
		void OnMapMarkersCleared(BasePlayer player, List<MapNote> notes)
		{
			_mDebug.AppendFormat(@"OnMapMarkersCleared: player={0}<br/>", player.displayName);
		}
		
		#endregion Map Game Events
		
		#region Weapon Game Events
		
		void OnExplosiveThrown(BasePlayer player, BaseEntity entity, ThrownWeapon item)
		{
			_mDebug.AppendFormat(@"OnExplosiveThrown: player={0}<br/>", player.displayName);
		}
		
		void OnMeleeThrown(BasePlayer player, Item item)
		{
			_mDebug.AppendFormat(@"OnMeleeThrown: player={0}<br/>", player.displayName);
		}
		
		object OnReloadWeapon(BasePlayer player, BaseProjectile projectile)
		{
			_mDebug.AppendFormat(@"OnReloadWeapon: player={0}<br/>", player.displayName);
			return null;
		}
		
		void OnRocketLaunched(BasePlayer player, BaseEntity entity)
		{
			_mDebug.AppendFormat(@"OnRocketLaunched: player={0}<br/>", player.displayName);
		}
		
		object OnSwitchAmmo(BasePlayer player, BaseProjectile projectile)
		{
			_mDebug.AppendFormat(@"OnSwitchAmmo: player={0}<br/>", player.displayName);
			return null;
		}
		
		void OnWeaponFired(BaseProjectile projectile, BasePlayer player, ItemModProjectile mod, ProtoBuf.ProjectileShoot projectiles)
		{
			_mDebug.AppendFormat(@"OnWeaponFired: player={0} projectile={1}<br/>", player.displayName, projectile.name);
		}
		
		#endregion Weapon Game Events
		
		#region Horse Game Events
		
		object OnHorseLead(RidableHorse horse, BasePlayer player)
		{
			_mDebug.AppendFormat(@"OnHorseLead: Player={0}<br/>", player.displayName);
			return null;
		}
		
		object OnHorseHitch(RidableHorse horse, HitchTrough hitch)
		{
			_mDebug.AppendFormat(@"OnHorseHitch: Horse={0}<br/>", horse);
			return null;
		}
		
		#endregion Horse Game Events
    }
}
