###### tags: `1061`

# 1061 LSA week 10 (2017/11/22) 共筆 - mail / TCP/IP / 網路規劃

## postfix demo
[refer 1](http://www.linuxmail.info/mbox-maildir-mail-storage-formats/)
[refer 2](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-postfix-on-ubuntu-16-04)

`$ sudo /etc/postfix/virtual`
```
virtual_alias_maps = hash:/etc/postfix/virtual
virtual_alias_domains = example.com
```
[mailbox v.s. maildir](http://www.coctec.com/docs/service/show-post-30617.html)

### Mailbox
所有信件存放在同一個檔案
Fast
### Maildir
每封信件個別爲一個檔案

#### format
- current 編寫中的信
- new 
- tmp 準備寄出的信

snail mail---->post mail

[mutt](http://www.mutt.org/)

## OSI layer
7.Application
6.Presentation
5.Session
4.Transport
3.Network
2.Data link
1.Physical 

[OSI vs TCP/IP](http://www.electronicdesign.com/what-s-difference-between/what-s-difference-between-osi-seven-layer-network-model-and-tcpip)
[Data Flow in the OSI Model ](https://technet.microsoft.com/en-us/library/cc977591.aspx)
[Seven Layers - step by step](http://blog.boson.com/bid/102793/The-Seven-Layers-of-Networking-Part-II)


### IP由來
+ length => 32bit (byte.byte.byte.byte)
US -> .com
-> ARPAnet

-> DARPA
- [AI hacking ](https://thenextweb.com/insider/2016/08/04/watch-ai-hack-darpa-cyber/)

-> NSA
- 0Day exploit

内網連綫 溝通
- 主要用mac address

外網連綫 溝通
- 整個網路上面IP才是可以溝通的

[ARP vs RARP](http://techdifferences.com/difference-between-arp-and-rarp.html)
- 有錯的就丟掉


[ARP欺騙](https://zh.wikipedia.org/wiki/ARP%E6%AC%BA%E9%A8%99)

[網路剪刀手](https://steachs.com/archives/902) 宿舍 switch 有綁定 uplink, 因此在學校宿舍不管用



MITM - man in the middle attack 
https://blog.trendmicro.com.tw/?p=52362
BBI


HK : 1. telnet看網站(純文字)
     2. 如何HTTPs的網站? [nc](https://blog.gtwang.org/linux/linux-utility-netcat-examples/)
     3. iptables正確用法, 指令一行一行寫出來。(加分:把5台server的Iptables都寫出來,且都有開ssh)
![hw](https://imgur.com/bQoWNKI.png)
        

### 家用 AP
- [DMZ 非軍事區](https://blog.gtwang.org/linux/linux-utility-netcat-examples/)
- [虛擬伺服器](http://www.sapido.com.tw/CH/learning/virtual_server.htm)


# iptables 請至新共筆
[link](https://hackmd.io/c/By4H6JLNW/%2FCwTmFMAYBMEMEYC04BsAONjgCMBmBmREAY0k3AHYQKVZwAmY3FEIA%3D%3D%3D)
