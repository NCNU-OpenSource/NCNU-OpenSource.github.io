---
hackpadID: K4gOJ0VScwe
hackpadWorkspace: ncnu-opensource
tags: hackpad-import, ncnu-opensource
---
# Week 8 FTP, TCP/IP, iptable

2015/04/16 

大家記得要共筆唷 >________<

這樣期中考就可以考高高惹唷 

## FTP

[vsftpd - Secure, fast FTP server for UNIX-like systems](http://blog.udn.com/nigerchen/2261345)

*   proftpd

FTP:

*   from inetd (代理listen，適用在運算能力弱的電腦，需要等待時間)(較少人在使用)
*   standalone 速度快 即時
*   welcom.msg=今日好康
*   /etc/proftpd/proftpd.conf   <Anonymous ~ftp> 是否要允許匿名登入
*   sudo apt-get install ncftp
*   ncftp -u yourUbuntuLoginUsername localhost
*   get filepath
*   put filepath
*   lls=local ls
*   lcd=local cd

ifconfig

route -n

ping      

arp

traceroute

host

dig @8.8.8.8 google.com (@dnsServerIP)

dig gmail.com mx(顯示優先權)

nslookup

ARP&RARP:

*   ARP spoofing

[](http://www.pcnet.idv.tw/pcnet/network/netwo)http://www.pcnet.idv.tw/pcnet/network/netwo

*   但是不可以刪除
*   不可以開「暱名

rk_ip_arp.htm

netcut: reply arp message before router, then other’s will drop the real message
