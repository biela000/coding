   M S B A M L   `   `   `  ����A  =Client, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullclr-namespace:ClientClient  5   	       Client.MainWindow   5   	   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   &localclr-namespace:Client     5   	   -   5          �Name$  mwClient��5   	    � Icon$ 
amogus.ico��5   	    � Title$ Nuntius��5	   	   $	��450��6   $	��800��6&    � 	Resources 5
       �� 
TargetType �� Property �� Value �� 
TargetType ��Name	 J� SnapsToDevicePixels
 ��Name �� Triggers P� Property P� Value �� 
TargetName��%�  '��       �� 5   
   " ��6   .�5      ��  � ��$ Center=�64   �� 5       � �� 5      �� 5      " ��6&   .R�5      �� $ border��6!   #��z��61   #��z��6]   #��z��6�   	 . ._�5      �� $
 contentPresenter��6/   |�.  #��z��6[   #��z��6�   ��. #	 z	 6�   #��z��6  5       5      P� 5       � {� .  . �5   "   �� $ contentPresenter��6K    � �� �#0000006i   5      5      5      5      5      .��5      � ���	#FF2B2E4A.+�5   
   �� -   5         ��Name$ 	btConnect��5      $��	20,0,20,0q�6$   $��Connect��68   $
��Left=�6J   $��600,278,0,0q�6e   $	��Top=�6z   $	��170��6�   ���	#FF53354A���	#FFEEEEEE6�   �� 5   
   -   5         ��Name$
 tbIP��5      $
��Left=�6    $��23��6;   $��
654,33,0,0q�6G    �� TextWrapping$
 Wrap=�6[   $	��Top=�6o   $	��120��6�   ���	#FF53354A���	#FFEEEEEE6�   �� 5    
   -   5         ��Name$
 lbIP��5       $��	Adres IP:��6   $
��Left=�62   $��
583,33,0,0q�6M   $	��Top=�6a   ���	#FFEEEEEE6y   �� 5!   
   -   5        $ lbPort��5!      $��Port:��6    $
��Left=�60   $��583,120,0,0q�6K   $	��Top=�6`   ���	#FFEEEEEE6x   �� 5"   
   -   5        $ tbPorts��5"      $
��Left=�6#   $��24��6>   $��654,122,0,0q�6J   $
 Wrap=�6_   $	��Top=�6s   $	��120��6�   ���	#FF53354A���	#FFEEEEEE6�   �� 5#   
   -   5        $ btSend��5#      $
��Send��6!   $
��Left=�60   $��
58,364,0,0q�6K   $	��Top=�6_   $	��492��6w   {�.  ���	#FF53354A���	#FFEEEEEE6�   �� 5$   
   -   5        $ tbChat��5$      $
��Left=�6#   $��47��6>   $��
58,293,0,0q�6J   $
 Wrap=�6^   $	��Top=�6r   $	��492��6�   ���	#FF53354A���	#FFEEEEEE6�   �� 5%   
   -	   5        $ btStop��5%      $
��Stop��6!   $
��Left=�60   $��600,325,0,0q�6K   $	��Top=�6`   $	��170��6x   {�.  ���	#FF53354A���	#FFEEEEEE6�   �� 5&   
   -
   5        $ 
lbPassword��5&      $��Nazwa:��6$   $
��Left=�65   $��587,191,0,0q�6P   $	��Top=�6e   ���	#FFEEEEEE6}   �� 5'   
   -   5        $ 
tbPassword��5'      $
��Left=�6&   $��23��6A   $��654,194,0,0q�6M   $
 Wrap=�6b   $	��Top=�6v   $	��120��6�   ���	#FF53354A���	#FFEEEEEE6�   (  "System.Windows.Controls.WebBrowser  5(   
   -   5        $��wb��5(      $
��Left=�6   $	��225��6:   $��	63,33,0,0q�6G   $	��Top=�6Z   $	��487��6r    J� OpacityMask �	#FF53354A6~   5)      5*      