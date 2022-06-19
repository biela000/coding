namespace Duncan
{
    partial class Form1
    {
        /// <summary>
        /// Wymagana zmienna projektanta.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Wyczyść wszystkie używane zasoby.
        /// </summary>
        /// <param name="disposing">prawda, jeżeli zarządzane zasoby powinny zostać zlikwidowane; Fałsz w przeciwnym wypadku.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Kod generowany przez Projektanta formularzy systemu Windows

        /// <summary>
        /// Metoda wymagana do obsługi projektanta — nie należy modyfikować
        /// jej zawartości w edytorze kodu.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.btStart = new System.Windows.Forms.Button();
            this.btStop = new System.Windows.Forms.Button();
            this.lIpAddresses = new System.Windows.Forms.Label();
            this.lPorts = new System.Windows.Forms.Label();
            this.tbIpAddress = new System.Windows.Forms.TextBox();
            this.bwGUIHandler = new System.ComponentModel.BackgroundWorker();
            this.tbMessage = new System.Windows.Forms.TextBox();
            this.btSend = new System.Windows.Forms.Button();
            this.bwMessageSender = new System.ComponentModel.BackgroundWorker();
            this.btCancelSearch = new System.Windows.Forms.Button();
            this.bwStopHandler = new System.ComponentModel.BackgroundWorker();
            this.bwCancelHandler = new System.ComponentModel.BackgroundWorker();
            this.bwServerMessageHandler = new System.ComponentModel.BackgroundWorker();
            this.wbMessageOutput = new System.Windows.Forms.WebBrowser();
            this.nudPort = new System.Windows.Forms.TextBox();
            this.lbClientList = new System.Windows.Forms.ListBox();
            this.btKick = new System.Windows.Forms.Button();
            this.btBan = new System.Windows.Forms.Button();
            this.btSendPv = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btStart
            // 
            this.btStart.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(83)))), ((int)(((byte)(53)))), ((int)(((byte)(74)))));
            this.btStart.FlatAppearance.BorderSize = 0;
            this.btStart.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btStart.Location = new System.Drawing.Point(152, 501);
            this.btStart.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.btStart.Name = "btStart";
            this.btStart.Size = new System.Drawing.Size(124, 39);
            this.btStart.TabIndex = 0;
            this.btStart.Text = "Start";
            this.btStart.UseVisualStyleBackColor = false;
            this.btStart.Click += new System.EventHandler(this.btStart_Click);
            // 
            // btStop
            // 
            this.btStop.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(83)))), ((int)(((byte)(53)))), ((int)(((byte)(74)))));
            this.btStop.Enabled = false;
            this.btStop.FlatAppearance.BorderSize = 0;
            this.btStop.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btStop.Location = new System.Drawing.Point(284, 501);
            this.btStop.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.btStop.Name = "btStop";
            this.btStop.Size = new System.Drawing.Size(124, 39);
            this.btStop.TabIndex = 1;
            this.btStop.Text = "Stop";
            this.btStop.UseVisualStyleBackColor = false;
            this.btStop.Click += new System.EventHandler(this.btStop_Click);
            // 
            // lIpAddresses
            // 
            this.lIpAddresses.AutoSize = true;
            this.lIpAddresses.Location = new System.Drawing.Point(23, 44);
            this.lIpAddresses.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.lIpAddresses.Name = "lIpAddresses";
            this.lIpAddresses.Size = new System.Drawing.Size(26, 22);
            this.lIpAddresses.TabIndex = 3;
            this.lIpAddresses.Text = "IP";
            // 
            // lPorts
            // 
            this.lPorts.AutoSize = true;
            this.lPorts.Location = new System.Drawing.Point(266, 46);
            this.lPorts.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.lPorts.Name = "lPorts";
            this.lPorts.Size = new System.Drawing.Size(43, 22);
            this.lPorts.TabIndex = 4;
            this.lPorts.Text = "Port";
            // 
            // tbIpAddress
            // 
            this.tbIpAddress.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(83)))), ((int)(((byte)(53)))), ((int)(((byte)(74)))));
            this.tbIpAddress.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.tbIpAddress.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F);
            this.tbIpAddress.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(238)))), ((int)(((byte)(238)))), ((int)(((byte)(238)))));
            this.tbIpAddress.Location = new System.Drawing.Point(56, 44);
            this.tbIpAddress.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.tbIpAddress.Name = "tbIpAddress";
            this.tbIpAddress.Size = new System.Drawing.Size(164, 32);
            this.tbIpAddress.TabIndex = 5;
            // 
            // bwGUIHandler
            // 
            this.bwGUIHandler.WorkerSupportsCancellation = true;
            this.bwGUIHandler.DoWork += new System.ComponentModel.DoWorkEventHandler(this.bwGUIHandler_Do_Work);
            // 
            // tbMessage
            // 
            this.tbMessage.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(83)))), ((int)(((byte)(53)))), ((int)(((byte)(74)))));
            this.tbMessage.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.tbMessage.Font = new System.Drawing.Font("Microsoft Sans Serif", 16F);
            this.tbMessage.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(238)))), ((int)(((byte)(238)))), ((int)(((byte)(238)))));
            this.tbMessage.Location = new System.Drawing.Point(20, 565);
            this.tbMessage.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.tbMessage.Name = "tbMessage";
            this.tbMessage.Size = new System.Drawing.Size(1180, 37);
            this.tbMessage.TabIndex = 7;
            // 
            // btSend
            // 
            this.btSend.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(83)))), ((int)(((byte)(53)))), ((int)(((byte)(74)))));
            this.btSend.Enabled = false;
            this.btSend.FlatAppearance.BorderSize = 0;
            this.btSend.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btSend.Location = new System.Drawing.Point(20, 612);
            this.btSend.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.btSend.Name = "btSend";
            this.btSend.Size = new System.Drawing.Size(693, 39);
            this.btSend.TabIndex = 8;
            this.btSend.Text = "Send";
            this.btSend.UseVisualStyleBackColor = false;
            this.btSend.Click += new System.EventHandler(this.btSend_Click);
            // 
            // bwMessageSender
            // 
            this.bwMessageSender.WorkerSupportsCancellation = true;
            this.bwMessageSender.DoWork += new System.ComponentModel.DoWorkEventHandler(this.bwMessageSender_DoWork);
            // 
            // btCancelSearch
            // 
            this.btCancelSearch.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(83)))), ((int)(((byte)(53)))), ((int)(((byte)(74)))));
            this.btCancelSearch.Enabled = false;
            this.btCancelSearch.FlatAppearance.BorderSize = 0;
            this.btCancelSearch.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btCancelSearch.Location = new System.Drawing.Point(20, 501);
            this.btCancelSearch.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.btCancelSearch.Name = "btCancelSearch";
            this.btCancelSearch.Size = new System.Drawing.Size(124, 39);
            this.btCancelSearch.TabIndex = 9;
            this.btCancelSearch.Text = "Pause";
            this.btCancelSearch.UseVisualStyleBackColor = false;
            this.btCancelSearch.Click += new System.EventHandler(this.btCancelSearch_Click);
            // 
            // bwStopHandler
            // 
            this.bwStopHandler.WorkerSupportsCancellation = true;
            this.bwStopHandler.DoWork += new System.ComponentModel.DoWorkEventHandler(this.bwStopHandler_DoWork);
            // 
            // bwCancelHandler
            // 
            this.bwCancelHandler.WorkerSupportsCancellation = true;
            this.bwCancelHandler.DoWork += new System.ComponentModel.DoWorkEventHandler(this.bwCancelHandler_DoWork);
            // 
            // bwServerMessageHandler
            // 
            this.bwServerMessageHandler.WorkerSupportsCancellation = true;
            this.bwServerMessageHandler.DoWork += new System.ComponentModel.DoWorkEventHandler(this.bwServerMessageHandler_DoWork);
            // 
            // wbMessageOutput
            // 
            this.wbMessageOutput.Location = new System.Drawing.Point(20, 110);
            this.wbMessageOutput.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.wbMessageOutput.MinimumSize = new System.Drawing.Size(32, 34);
            this.wbMessageOutput.Name = "wbMessageOutput";
            this.wbMessageOutput.Size = new System.Drawing.Size(693, 364);
            this.wbMessageOutput.TabIndex = 10;
            // 
            // nudPort
            // 
            this.nudPort.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(83)))), ((int)(((byte)(53)))), ((int)(((byte)(74)))));
            this.nudPort.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.nudPort.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F);
            this.nudPort.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(238)))), ((int)(((byte)(238)))), ((int)(((byte)(238)))));
            this.nudPort.Location = new System.Drawing.Point(315, 44);
            this.nudPort.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.nudPort.Name = "nudPort";
            this.nudPort.Size = new System.Drawing.Size(164, 32);
            this.nudPort.TabIndex = 11;
            // 
            // lbClientList
            // 
            this.lbClientList.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(36)))), ((int)(((byte)(38)))), ((int)(((byte)(57)))));
            this.lbClientList.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.lbClientList.Cursor = System.Windows.Forms.Cursors.Default;
            this.lbClientList.Font = new System.Drawing.Font("Microsoft Sans Serif", 11F);
            this.lbClientList.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(238)))), ((int)(((byte)(238)))), ((int)(((byte)(238)))));
            this.lbClientList.FormattingEnabled = true;
            this.lbClientList.ItemHeight = 26;
            this.lbClientList.Location = new System.Drawing.Point(733, 110);
            this.lbClientList.Name = "lbClientList";
            this.lbClientList.Size = new System.Drawing.Size(467, 364);
            this.lbClientList.TabIndex = 12;
            // 
            // btKick
            // 
            this.btKick.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(83)))), ((int)(((byte)(53)))), ((int)(((byte)(74)))));
            this.btKick.FlatAppearance.BorderSize = 0;
            this.btKick.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btKick.Location = new System.Drawing.Point(1076, 501);
            this.btKick.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.btKick.Name = "btKick";
            this.btKick.Size = new System.Drawing.Size(124, 39);
            this.btKick.TabIndex = 13;
            this.btKick.Text = "Kick";
            this.btKick.UseVisualStyleBackColor = false;
            this.btKick.Click += new System.EventHandler(this.btKick_Click);
            // 
            // btBan
            // 
            this.btBan.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(83)))), ((int)(((byte)(53)))), ((int)(((byte)(74)))));
            this.btBan.FlatAppearance.BorderSize = 0;
            this.btBan.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btBan.Location = new System.Drawing.Point(944, 501);
            this.btBan.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.btBan.Name = "btBan";
            this.btBan.Size = new System.Drawing.Size(124, 39);
            this.btBan.TabIndex = 14;
            this.btBan.Text = "Ban";
            this.btBan.UseVisualStyleBackColor = false;
            this.btBan.Click += new System.EventHandler(this.btBan_Click);
            // 
            // btSendPv
            // 
            this.btSendPv.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(83)))), ((int)(((byte)(53)))), ((int)(((byte)(74)))));
            this.btSendPv.FlatAppearance.BorderSize = 0;
            this.btSendPv.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btSendPv.Location = new System.Drawing.Point(733, 612);
            this.btSendPv.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.btSendPv.Name = "btSendPv";
            this.btSendPv.Size = new System.Drawing.Size(467, 39);
            this.btSendPv.TabIndex = 15;
            this.btSendPv.Text = "Send private";
            this.btSendPv.UseVisualStyleBackColor = false;
            this.btSendPv.Click += new System.EventHandler(this.btSendPv_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(10F, 22F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(43)))), ((int)(((byte)(46)))), ((int)(((byte)(74)))));
            this.ClientSize = new System.Drawing.Size(1220, 669);
            this.Controls.Add(this.btSendPv);
            this.Controls.Add(this.btBan);
            this.Controls.Add(this.btKick);
            this.Controls.Add(this.lbClientList);
            this.Controls.Add(this.nudPort);
            this.Controls.Add(this.wbMessageOutput);
            this.Controls.Add(this.btCancelSearch);
            this.Controls.Add(this.btSend);
            this.Controls.Add(this.tbMessage);
            this.Controls.Add(this.tbIpAddress);
            this.Controls.Add(this.lPorts);
            this.Controls.Add(this.lIpAddresses);
            this.Controls.Add(this.btStop);
            this.Controls.Add(this.btStart);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F);
            this.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(238)))), ((int)(((byte)(238)))), ((int)(((byte)(238)))));
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.Name = "Form1";
            this.Text = "Nuntius";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btStart;
        private System.Windows.Forms.Button btStop;
        private System.Windows.Forms.Label lIpAddresses;
        private System.Windows.Forms.Label lPorts;
        private System.Windows.Forms.TextBox tbIpAddress;
        private System.ComponentModel.BackgroundWorker bwGUIHandler;
        private System.Windows.Forms.TextBox tbMessage;
        private System.Windows.Forms.Button btSend;
        private System.ComponentModel.BackgroundWorker bwMessageSender;
        private System.Windows.Forms.Button btCancelSearch;
        private System.ComponentModel.BackgroundWorker bwStopHandler;
        private System.ComponentModel.BackgroundWorker bwCancelHandler;
        private System.ComponentModel.BackgroundWorker bwServerMessageHandler;
        public System.Windows.Forms.WebBrowser wbMessageOutput;
        private System.Windows.Forms.TextBox nudPort;
        public System.Windows.Forms.ListBox lbClientList;
        private System.Windows.Forms.Button btKick;
        private System.Windows.Forms.Button btBan;
        private System.Windows.Forms.Button btSendPv;
    }
}

