using Newtonsoft.Json;
using Oxide.Core;
using System.Collections.Generic;
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
			while (_mWaitForExit)
			{
				try
				{
					if (null != _mHttpListener)
					{
						HttpListenerContext context = _mHttpListener.GetContext();
						if (null != context)
						{						
							string response = "Hello World 1.1!";

							/*
							if (string.IsNullOrEmpty(context.Request.Url.LocalPath))
							{
							}
							*/
							
							byte[] bytes = UTF8Encoding.UTF8.GetBytes(response);
							context.Response.ContentEncoding = Encoding.UTF8;
							context.Response.AddHeader("ContentType", "utf8");
							context.Response.OutputStream.Write(bytes, 0, bytes.Length);
							context.Response.OutputStream.Flush();
							context.Response.Close();
						}
					}
				}
				catch(System.Exception)
				{
					PrintToConsole("Failed to send response!");
				}
				Thread.Sleep(0);
			}
		}
	}
}
