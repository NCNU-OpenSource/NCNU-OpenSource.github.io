---
hackpadID: B8CalmI9bbu
hackpadWorkspace: ncnu-opensource
tags: hackpad-import, ncnu-opensource
---
# Week 11 Raspberry pi

2015/05/21

*   去年的LSA - Raspberry pi ssl 線教學： [](https://ncnu-ossg.etherpad.mozilla.org/1?)https://ncnu-ossg.etherpad.mozilla.org/1?

[](https://www.raspberrypi.org/documentation/installation/installing-images/linux.md)https://www.raspberrypi.org/documentation/installation/installing-images/linux.md

**OS**

*   下載 Raspbian OS 映像檔 [](http://downloads.raspberrypi.org/raspbian_latest)http://downloads.raspberrypi.org/raspbian_latest
*   確定 SD 卡掛載位置
    *   df: Display free disk space
    *   diskutil list: List disks
*   卸載 SD 卡
    *   sudo diskutil unmountDisk /dev/disk[N] 
*   將映像檔燒入 SD 卡
    *   sudo dd if=[IMG file location] of=/dev/disk[N] bs=4M
    *   若出現 **dd: bs: illegal numeric value**，請將 bs 值改為小寫。 ex: bs=4m

**使用 TTL 線連上 pi 以操控**

1.  箭頭靠外，插入。

![](https://hackpad-attachments.s3.amazonaws.com/ncnu-opensource.hackpad.com_B8CalmI9bbu_p.350539_1432174100140_thumb_IMG_4875_1024.jpg)

2\. TTY 線 USB 端接上電腦

*   Ubuntu:

*   sudo screen /dev/ttyUSB0 115200

*   OS X: 

*   screen /dev/cu.usbserial 115200

*   Driver: [](http://www.prolific.com.tw/US/ShowProduct.aspx?pcid=41&showlevel=0041-0041)http://www.prolific.com.tw/US/ShowProduct.aspx?pcid=41&showlevel=0041-0041

3\. 連上後，插上 pi 的電源、登入

*   username: pi
*   password: raspberry

登入Pi 後 sudo raspi-config  （（有關系統的設定））

4\. 插上網路線，更新套件來源

*   sudo apt-get update

5.  安裝後置式運算程式、vim、SSH

*   sudo apt-get install postfix vim openssh-server

6\. 寄信

*   sendmail -t [主旨] foo@bar.com

*   -t 主旨無效耶

*   輸入完內文後，兩次 Contronl + d 以結束寄出

7\. 取得 pi 的 IP 後，即可在自己的電腦用 SSH 遠端登入

*   ifconfig | grep inet | awk ’{print $2}’

8\. 自動寄信 shell

*   新增一檔案 sendip.sh 於 ~ 目錄

[](http://reader.roodo.com/rocksaying/archives/19886844.html)http://reader.roodo.com/rocksaying/archives/19886844.html

[](https://wiki.debian.org/LSBInitScripts)https://wiki.debian.org/LSBInitScripts

*   #!/bin/sh
*   ### BEGIN INIT INFO
*   # Provides:           sendip
*   # Required-Start:     $all
*   # Required-Stop:    
*   # Default-Start:      2 3 4 5
*   # Default-Stop:     
*   # Short-Description:  Run /etc/sendip if it exist
*   ### END INIT INFO

*   echo "Subject: [yourname]@rpi says" > /home/pi/rpiip.mail
*   echo "From: Me<3 " >> /home/pi/rpiip.mail
*   echo "To: [youremail add]" >> /home/pi/rpiip.mail
*   ifconfig | grep inet | awk ’{print $2}’ >> /home/pi/rpiip.mail
*   /usr/sbin/sendmail -t -f [foo@bar.com] -v -i < /home/pi/rpiip.mail

*   更改檔案權限

*   sudo chmod 755 sendip.sh

*   複製檔案到 /etc/init.d

*   sudo cp sendip.sh /etc/init.d

*   沒錯的話是更新吧親

*   sudo update-rc.d sendip.sh defaults

*   pi 重開機試試吧親

*   sudo reboot

[](http://raspberrypihq.com/how-to-add-wifi-to-the-raspberry-pi/)http://raspberrypihq.com/how-to-add-wifi-to-the-raspberry-pi/

[](http://www.howtogeek.com/167425/how-to-setup-wi-fi-on-your-raspberry-pi-via-the-command-line/)http://www.howtogeek.com/167425/how-to-setup-wi-fi-on-your-raspberry-pi-via-the-command-line/

apt-get install mailutils

*   #!/bin/sh

*   ### BEGIN INIT INFO
*   # Provides:             email_ip_address
*   # Required-Start:       $all
*   # Required-Stop:
*   # Default-Start:        2 3 4 5
*   # Default-Stop:
*   ### END INIT INFO

*   ifconfig | awk ’/inet addr/ { sub(/addr:/, "", $2); if ($2 != "127.0.0.1") print $2}’ | mail -s "Raspberry Pi IP address" **_<u>email_address</u>_**

[](http://elinux.org/RPi_raspi-config#expand_rootfs_-_Expand_root_partition_to_fill_SD_card)http://elinux.org/RPi_raspi-config#expand_rootfs_-_Expand_root_partition_to_fill_SD_card

week13

[](https://github.com/prasmussen/gdrive)https://github.com/prasmussen/gdrive

複製[drive-linux-rpi v1.8.0](https://drive.google.com/uc?id=0B3X9GlR6EmbnRDJ1Z2Y4UWpWU00)的網址

在pi上使用wget下載剛剛的網址

wget ’複製網址’

將下載的檔案更名方便執行

mv ’下載檔案檔名’ drive

更改檔案權限為775

sudo chmod 775 drive

執行檔案可以查看指令

./drive

把 drive 移動到 /usr/local/bin

就可以直接以 drive 下指令的方式執行

拿不到 ip 的可以試試看這個方式：

*   ~$ sudo vim /etc/rc.local

find the following line:

*   printf "My IP address is %s\n" "$_IP"

add this line below it

*   printf "My IP address is %s\n" "$_IP" | sendmail {{mail_address}}

ip問題是不是買個這個就解決了(？

[](http://goods.ruten.com.tw/item/show?21443540660386)http://goods.ruten.com.tw/item/show?21443540660386

若raspberry pi無法連線

sudo nano /etc/network/interfaces

(把內容修改成)

auto lo

*   iface lo inet loopback

*   auto eth0
*   allow-hotplug eth0
*   iface eth0 inet dhcp

*   auto wlan0
*   allow-hotplug wlan0
*   iface wlan0 inet dhcp
*   wireless-essid NCNU
*   wireless-mode managed
*   iface default inet dhcp

重新啟動：

sudo /etc/init.d/networking resta
