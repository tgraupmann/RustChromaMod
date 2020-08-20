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
		private bool _mWaitForExit = true;
		private Thread _mThread = null;
		private HttpListener _mHttpListener = null;
		
	
		public RustChromaMod()
		{
			System.Console.WriteLine("{0}: Started!", this.GetType());
			
			_mWaitForExit = true;
			
			_mHttpListener = new HttpListener();
			
			try
			{
				//_mHttpListener.Prefixes.Add("http://localhost:5006/");
				//_mHttpListener.Start();
				
				//ThreadStart ts = new ThreadStart(WebWorker);
				//_mThread = new Thread(ts);
				//_mThread.Start();
			}
			catch (System.Exception)
			{
				System.Console.WriteLine("Failed to start Chroma Proxy!");
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

            }
			
			System.Console.WriteLine("{0}: Exited!", this.GetType());
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
						
						/*
						string response = "Hello World!";

						if (string.IsNullOrEmpty(context.Request.Url.LocalPath))
						{
						}
						
						byte[] bytes = UTF8Encoding.UTF8.GetBytes(response);
						context.Response.ContentEncoding = Encoding.UTF8;
						context.Response.AddHeader("ContentType", "utf8");
						context.Response.OutputStream.Write(bytes, 0, bytes.Length);
						context.Response.OutputStream.Flush();
						*/
					}
				}
				catch(System.Exception)
				{
				}
				Thread.Sleep(0);
			}
		}
	}
}
