using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Windows.Forms;

namespace Duncan
{
    public static class Server
    {
        public static string address;
        public static int port;
        public static TcpListener server;
        public static List<string> names = new List<string>();
        public static List<Client> users = new List<Client>();
        public static void StartServer(IPAddress ip, int port)
        {
            server = new TcpListener(new IPEndPoint(ip, port));
        }
        public static void Delete(Client disconnectedClient)
        {
            names.Remove(disconnectedClient.name);
            users.Remove(disconnectedClient);
            disconnectedClient.message.Abort();
        }
        public static void BroadcastByServer(String message, string sender)
        {
            foreach (Client client in users)
            {
                client.writing.Write("<p><b>" + sender + "</b>: " + message + "</p>");
                client.writing.Flush();
            }
        }
        public static void Broadcast(String message, string sender, Form1 currWindow)
        {
            currWindow.wbMessageOutput.Invoke(new MethodInvoker(delegate
            {
                currWindow.wbMessageOutput.Document.GetElementById("root").InnerHtml = currWindow.wbMessageOutput.Document.GetElementById("root").InnerHtml + ("<p class=\"user-message\"><b>" + sender + "</b>: " + message + "</p>");
            }));
            foreach (Client client in users)
            {
                try
                {
                    client.writing.Write("<p><b>" + sender + "</b>: " + message + "</p>");
                    client.writing.Flush();
                }
                catch
                {
                    
                }
            }
        }
    }
    
}
