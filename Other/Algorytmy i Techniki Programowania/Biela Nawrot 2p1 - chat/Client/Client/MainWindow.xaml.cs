using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.ComponentModel;
using System.IO;

namespace Client
{
    /// <summary>
    /// Logika interakcji dla klasy MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private string host;
        private int port;
        private BinaryReader reader;
        private BinaryWriter writer;
        private TcpClient client = null;
        private bool ActiveCall = false;
        private string password;
        private string wbContent = "<html lang=\"pl\"> <head> <meta charset=\"UTF-8\"> <style>body{ background-color: #2B2E4A; color: #EEEEEE; } hr{ background-color: #E84545; color: #E84545; } </style> </head> <body> <p>Oczekiwanie na połączenie...</p> <hr>";
        public MainWindow()
        {
            InitializeComponent();
            wb.NavigateToString(wbContent + "</body> </html>");
            worker.WorkerSupportsCancellation = true;
            chat.WorkerSupportsCancellation = true;
            worker.DoWork += worker_DoWork;
            chat.DoWork += chat_DoWork;
        }

        private BackgroundWorker worker = new BackgroundWorker();
        private BackgroundWorker chat = new BackgroundWorker();

        private void wbRefresh(string text)
        {
            wbContent += (" " + text);
            wb.NavigateToString(wbContent + "</body> </html>");
        }

        private void btConnect_Click(object sender, RoutedEventArgs e)
        {
            if(tbIP.Text != "" && tbPorts.Text != "" && tbPassword.Text != "")
            {
                host = tbIP.Text;
                port = System.Convert.ToInt16(tbPorts.Text);
                password = tbPassword.Text;
            }
            else
            {
                MessageBox.Show("Proszę wypełnić wszystkie pola!", "Alert", MessageBoxButton.OK, MessageBoxImage.Warning);
                wbRefresh("<p>Błędne dane!</p>");
                return;
            }
            
            worker.RunWorkerAsync();
        }

        private void chat_DoWork(object sender, DoWorkEventArgs e)
        {
            string message;
            while((message = reader.ReadString()) != "SIGKILL")
            {
                wb.Dispatcher.BeginInvoke(new Action(delegate ()
                {
                    wbRefresh("<p>" + DateTime.Now.ToString("HH:mm:ss") + ": </p>");
                    wbRefresh("<p>" + message + "</p> <hr>");
                    //lsMessages.Items.Add(DateTime.Now.ToString("HH:mm:ss") + ":");
                    //lsMessages.Items.Add(message);
                }));
            }
            wb.Dispatcher.BeginInvoke(new Action(delegate ()
            {
                wbRefresh("<p> Rozłączono </p> <br>");
            }));
            client.Client.Close();
            btStop.Dispatcher.BeginInvoke(new Action(delegate ()
            {
                btStop.IsEnabled = false;
            }));
            btConnect.Dispatcher.BeginInvoke(new Action(delegate ()
            {
                btConnect.IsEnabled = true;
            }));
            btSend.Dispatcher.BeginInvoke(new Action(delegate ()
            {
                btSend.IsEnabled = false;
            }));
            worker.CancelAsync();
            ActiveCall = false;
            chat.CancelAsync();
        }

        private void worker_DoWork(object sender, DoWorkEventArgs e)
        { 
            btStop.Dispatcher.BeginInvoke(new Action(delegate ()
            {
                btStop.IsEnabled = true;
            }));
            btConnect.Dispatcher.BeginInvoke(new Action(delegate ()
            {
                btConnect.IsEnabled = false;
            }));
            btSend.Dispatcher.BeginInvoke(new Action(delegate ()
            {
                btSend.IsEnabled = true;
            }));
            try
            {
                client = new TcpClient(host, port);
                NetworkStream ns = client.GetStream();
                reader = new BinaryReader(ns);
                writer = new BinaryWriter(ns);
                writer.Write(password);
                ActiveCall = true;
                chat.RunWorkerAsync();
                wb.Dispatcher.BeginInvoke(new Action(delegate ()
                {
                    wbRefresh("<p>Nawiązano połączenie z " + host + " na porcie " + port + "</p> <br>");
                    //lsMessages.Items.Add("Nawiązano połączenie z " + host + " na porcie: " + port);
                }));
            }
            catch (Exception ex)
            {
                wb.Dispatcher.BeginInvoke(new Action(delegate ()
                {
                    wbRefresh("<p>Błąd: nie udało sie nawiązać połączenia! </p> <br>");
                    //lsMessages.Items.Add("Błąd: nie udało się nawiązać połączenia!");
                }));
                MessageBox.Show(ex.ToString(), "Alert", MessageBoxButton.OK, MessageBoxImage.Hand);
                ActiveCall = false;
                btStop.Dispatcher.BeginInvoke(new Action(delegate ()
                {
                    btStop.IsEnabled = false;
                }));
                btConnect.Dispatcher.BeginInvoke(new Action(delegate ()
                {
                    btConnect.IsEnabled = true;
                }));
                btSend.Dispatcher.BeginInvoke(new Action(delegate ()
                {
                    btSend.IsEnabled = false;
                }));
                if (client != null)
                {
                    client.Client.Close();
                }
                worker.CancelAsync();
            }
        }

        private void btSend_Click(object sender, RoutedEventArgs e)
        {
            string messageSend = tbChat.Text;
            if (writer != null)
            {
                writer.Write(messageSend);
                //writer.Write("SIGKILL");
                //wbRefresh("<p>" + DateTime.Now.ToString("HH:mm:ss") + ": </p>");
                //wbRefresh("<p>" + messageSend + "</p> <hr>");
                //lsMessages.Items.Add(DateTime.Now.ToString("HH:mm:ss") + ":");
                //lsMessages.Items.Add(messageSend);
                tbChat.Clear();
            }
        }

        private void btStop_Click(object sender, RoutedEventArgs e)
        {
            if (writer != null)
            {
                writer.Write("SIGKILL");
                wb.Dispatcher.BeginInvoke(new Action(delegate ()
                {
                    wbRefresh("<p> Rozłączono </p> <br>");
                }));
                client.Client.Close();
                btStop.IsEnabled = false;
                btConnect.IsEnabled = true;
                btSend.IsEnabled = false;
                worker.CancelAsync();
                chat.CancelAsync();
                ActiveCall = false;
            }
        }
        
        private void MainWindow_Closing(object sender, CancelEventArgs e)
        {
            if (writer != null)
            {
                writer.Write("SIGKILL");
            }
            wb.Dispatcher.BeginInvoke(new Action(delegate ()
            {
                wbRefresh("<p> Rozłączono </p> <br>");
            }));
            client.Client.Close();
            btStop.IsEnabled = false;
            btConnect.IsEnabled = true;
            btSend.IsEnabled = false;
            worker.CancelAsync();
            chat.CancelAsync();
            ActiveCall = false;
        }
    }
}