using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Sockets;
using System.Threading;
using System.Windows.Forms;

namespace Duncan
{
    public class Client
    {
        public TcpClient client;
        public Thread message;
        public string name;
        public string connectionTime;
        public BinaryReader reading;
        public BinaryWriter writing;
        public List<string> forbiddenWords = new List<string>(){ "kurde", "kurcze", "kurcze pieczone", "jacie", "piotr" };
        public Form1 CurrWindow;

        public Client(ref TcpClient newClient, ref BinaryReader newReading, ref String newName, String newConnectionTime, Form1 currWindow)
        {
            client = newClient;
            reading = newReading;
            name = newName;
            connectionTime = newConnectionTime;
            writing = new BinaryWriter(client.GetStream());
            CurrWindow = currWindow;
            message = new Thread(() =>
            {
                while (true)
                {
                    try
                    {
                        string clientMessage = reading.ReadString();
                        if (forbiddenWords.Contains(clientMessage.ToLowerInvariant()))
                        {
                            currWindow.KickClient(name);
                        }
                        else
                        {
                            Server.Broadcast(clientMessage, name, CurrWindow);
                        }
                    }
                    catch (Exception ex)
                    {
                        Server.Broadcast(("Użytkownik " + name + " opuścił grę"), "SERWER", CurrWindow);
                        currWindow.wbMessageOutput.Invoke(new MethodInvoker(delegate
                        {
                            currWindow.lbClientList.Items.Remove(name);
                        }));
                        Server.Delete(this);
                    }
                }
            });
            message.Start();
        }
    }
    
}
