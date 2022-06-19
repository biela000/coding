using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Duncan
{
    public partial class Form1 : Form
    {
        private TcpListener server;
        private TcpClient client;
        private BinaryReader reading = null;
        private BinaryWriter writing = null;
        private Thread waitForConnect;
        private List<string> bannedClients = new List<string>();
        public Form1()
        {
            InitializeComponent();
            Load += Form1_Load;
        }
        private void Form1_Load(object sender, EventArgs e)
        {
            string curDir = Directory.GetCurrentDirectory();
            wbMessageOutput.Navigate(new Uri(String.Format("file:///{0}/index.html", curDir)));
        }
        public void BroadcastToServer(string message, ref String sender)
        {
            wbMessageOutput.Document.GetElementById("root").InnerHtml = wbMessageOutput.Document.GetElementById("root").InnerHtml + ("<p class=\"user-message\"><b>" + sender + "</b>: " + message + "</p>");
        }
        private void btStart_Click(object sender, EventArgs e)
        {
            bwGUIHandler.RunWorkerAsync();
        }

        private void btStop_Click(object sender, EventArgs e)
        {
            bwStopHandler.RunWorkerAsync();
        }

        private void bwGUIHandler_Do_Work(object sender, DoWorkEventArgs e)
        {
            bwStopHandler.CancelAsync();
            IPAddress IpAddress = null;
            try
            {
                IpAddress = IPAddress.Parse(tbIpAddress.Text);
                int port = nudPort.Text != "" ? System.Convert.ToInt16(nudPort.Text) : 69;
                Server.StartServer(IpAddress, port);
                wbMessageOutput.Invoke(new MethodInvoker(delegate
                {
                    wbMessageOutput.Document.GetElementById("root").InnerHtml = wbMessageOutput.Document.GetElementById("root").InnerHtml + ("<h2 class=\"server-finished\">Server work started</h2>");
                }));
                btSend.Invoke(new MethodInvoker(delegate
                {
                    btSend.Enabled = true;
                }));
                btStart.Invoke(new MethodInvoker(delegate
                {
                    btStart.Enabled = false;
                }));
                btStop.Invoke(new MethodInvoker(delegate
                {
                    btStop.Enabled = true;
                }));
                btCancelSearch.Invoke(new MethodInvoker(delegate { btCancelSearch.Enabled = true; }));
            }
            catch
            {
                MessageBox.Show("Wrong IP address!", "Error");
                return;
            }
            try
            {
                //server = new TcpListener(IpAddress, port);
                Server.server.Start();
                waitForConnect = new Thread(() =>
                {
                    while (true)
                    {
                        //lbMessages.Invoke(new MethodInvoker(delegate
                        //{
                        //    lbMessages.Items.Add("Server working...");
                        //}
                        //    ));
                        try
                        {
                            TcpClient tcpClient = Server.server.AcceptTcpClient();
                            BinaryReader streamReader = new BinaryReader(tcpClient.GetStream());
                            string name = streamReader.ReadString();
                            if (bannedClients.Contains(name))
                            {
                                BinaryWriter tmpWriter = new BinaryWriter(tcpClient.GetStream());
                                tmpWriter.Write("SIGKILL");
                                tcpClient.Close();
                                continue;
                            }
                            while (Server.names.Contains(name))
                            {
                                name += "-sobowtór";
                            }
                            wbMessageOutput.Invoke(new MethodInvoker(delegate
                            {
                                wbMessageOutput.Document.GetElementById("root").InnerHtml = wbMessageOutput.Document.GetElementById("root").InnerHtml + ("<h2 class=\"user-welcome\">" + name + " dołączył!" + "</h2>");
                            }));
                            Server.names.Add(name);
                            Server.users.Add(new Client(ref tcpClient, ref streamReader, ref name, DateTime.Now.ToString("h:mm:ss tt"), this));
                            lbClientList.Invoke(new MethodInvoker(delegate
                            {
                                lbClientList.Items.Add(name);
                            }));
                        }
                        catch (SocketException ex)
                        {
                        }
                        
                    }
                });
                waitForConnect.Start();
                //btCancelSearch.Invoke(new MethodInvoker(() => { btCancelSearch.Enabled = true; }));
                //client = server.AcceptTcpClient();
                //IPEndPoint IP = (IPEndPoint)client.Client.RemoteEndPoint;

                //NetworkStream ns = client.GetStream();
                //reading = new BinaryReader(ns);
                //writing = new BinaryWriter(ns);
                //if (reading.ReadString() == "polska")
                //{
                //    bwMessageSender.RunWorkerAsync();
                //}
                //else
                //{
                //    client.Close();
                //    server.Stop();
                //}
            }
            catch (Exception ex)
            {
                wbMessageOutput.Invoke(new MethodInvoker(delegate
                {
                    wbMessageOutput.Document.GetElementById("root").InnerHtml = wbMessageOutput.Document.GetElementById("root").InnerHtml + ("<h2 class=\"error-message\">Error initializing server!</h2>");
                }));
                MessageBox.Show(ex.ToString(), "Error");
                btStart.Invoke(new MethodInvoker(() =>
                {
                    btStart.Enabled = true;
                }));
                btStop.Invoke(new MethodInvoker(() =>
                {
                    btStop.Enabled = false;
                }));
            }
        }

        private void bwMessageSender_DoWork(object sender, DoWorkEventArgs e)
        {
            string messageReceived;
            while ((messageReceived = reading.ReadString()) != "SIGKILL")
            {
                wbMessageOutput.Invoke(new MethodInvoker(delegate
                {
                    wbMessageOutput.Document.GetElementById("root").InnerHtml = wbMessageOutput.Document.GetElementById("root").InnerHtml + ("<p>" + messageReceived + "</p>");
                }));
            }
            client.Close();
            server.Stop();
        }

        private void btSend_Click(object sender, EventArgs e)
        {
            bwServerMessageHandler.RunWorkerAsync();
        }

        private void btCancelSearch_Click(object sender, EventArgs e)
        {
            bwCancelHandler.RunWorkerAsync();
        }

        private void bwStopHandler_DoWork(object sender, DoWorkEventArgs e)
        {
            lbClientList.Invoke(new MethodInvoker(delegate
            {
                lbClientList.Items.Clear();
            }));
            btSend.Invoke(new MethodInvoker(delegate
            {
                btSend.Enabled = false;
            }));
            btCancelSearch.Invoke(new MethodInvoker(delegate { btCancelSearch.Enabled = false; btCancelSearch.Text = "Pause"; }));
            if (Server.users.Count > 0)
            {
                try
                {
                    while (Server.users.Count > 0)
                    {
                        Server.users[0].writing.Write("SIGKILL");
                        Server.users[0].client.Close();
                        Server.Delete(Server.users[0]);
                    }

                    //foreach (Client client in Server.users)
                    //{
                    //    Server.Delete(client);
                    //    client.client.Close();
                    //}
                }
                catch
                {
                    wbMessageOutput.Invoke(new MethodInvoker(delegate
                    {
                        wbMessageOutput.Document.GetElementById("root").InnerHtml = wbMessageOutput.Document.GetElementById("root").InnerHtml + ("<h2 class=\"disconnected-clients\">All clients disconnected</h2>");
                    }));
                }
            }
            Server.server.Stop();
            if (waitForConnect.ThreadState == ThreadState.Suspended)
            {
                waitForConnect.Resume();
            }
            waitForConnect.Abort();
            bwGUIHandler.CancelAsync();
            wbMessageOutput.Invoke(new MethodInvoker(delegate
            {
                wbMessageOutput.Document.GetElementById("root").InnerHtml = wbMessageOutput.Document.GetElementById("root").InnerHtml + ("<h2 class=\"server-finished\">Server work finished</h2>");
            }));
            btStart.Invoke(new MethodInvoker(delegate { btStart.Enabled = true; }));
            btStop.Invoke(new MethodInvoker(delegate { btStop.Enabled = false; }));
        }

        private void bwCancelHandler_DoWork(object sender, DoWorkEventArgs e)
        {
            if (waitForConnect.ThreadState == ThreadState.Running)
            {
                waitForConnect.Suspend();
                btCancelSearch.Invoke(new MethodInvoker(() => { btCancelSearch.Text = "Resume"; }));
            }
            else
            {
                waitForConnect.Resume();
                btCancelSearch.Invoke(new MethodInvoker(() => { btCancelSearch.Text = "Pause"; }));
            }
        }

        private void bwServerMessageHandler_DoWork(object sender, DoWorkEventArgs e)
        {
            string messageSent = tbMessage.Text;
            //if (messageSent == "niemcy")
            //{
            //    lbMessages.Items.Add("Zakończono komunikację");
            //    client.Close();
            //    lbMessages.Items.Add(client.Connected);
            //    server.Stop();
            //}
            wbMessageOutput.Invoke(new MethodInvoker(delegate
            {
                wbMessageOutput.Document.GetElementById("root").InnerHtml = wbMessageOutput.Document.GetElementById("root").InnerHtml + ("<p class=\"server-message\"><b>SERWER</b>: " + messageSent + "</p>");
            }));
            foreach (Client client in Server.users)
            {
                client.writing.Write("<p><b>SERWER</b>: " + messageSent + "</p>");
                client.writing.Flush();
            }
            tbMessage.Invoke(new MethodInvoker(delegate
            {
                tbMessage.Clear();
            }));
        }
        public void KickClient(string clientName)
        {
            foreach (Client client in Server.users)
            {
                if (client.name == clientName)
                {
                    client.writing.Write("SIGKILL");
                    client.client.Close();
                    Server.Delete(client);
                    return;
                }
            }
        }

        private void BanClient(string clientName)
        {
            KickClient(clientName);
            bannedClients.Add(clientName);
        }
        private void btKick_Click(object sender, EventArgs e)
        {
            if (lbClientList.SelectedItem != null)
                KickClient(lbClientList.SelectedItem.ToString());
        }

        private void btBan_Click(object sender, EventArgs e)
        {
            if (lbClientList.SelectedItem != null)
            {
                BanClient(lbClientList.SelectedItem.ToString());
            }
        }

        private void btSendPv_Click(object sender, EventArgs e)
        {
            if (lbClientList.SelectedItem != null)
            {
                string messageSent = tbMessage.Text;
                string chosenClient = lbClientList.SelectedItem.ToString();
                wbMessageOutput.Document.GetElementById("root").InnerHtml = wbMessageOutput.Document.GetElementById("root").InnerHtml + ("<p class=\"server-message private\"><b>SERWER to " + chosenClient + "</b>: " + messageSent + "</p>");
                foreach (Client client in Server.users)
                {
                    if (client.name == chosenClient)
                    {
                        client.writing.Write("<p><b>PV: SERWER</b>: " + messageSent + "</p>");
                        client.writing.Flush();
                        return;
                    }
                }
                tbMessage.Clear();
            }
        }
    }    
}
