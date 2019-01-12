---
hackpadID: rqobzgW331s
hackpadWorkspace: ncnu-opensource
tags: hackpad-import, ncnu-opensource
---
# 1041 Week 9 Network Design

2015/11/12 

最廣泛使用網路通訊協定: TCP/IP （4層）, OSI （7層）

![](https://hackpad-attachments.s3.amazonaws.com/ncnu-opensource.hackpad.com_rqobzgW331s_p.480591_1447292576735_osi_tcpip.gif)

參考文獻：鳥哥

HTTP、FTP、SSH、SNMP、SMTP、POP3

4 層： 1.data link 2.internet 3.transport 4.application

mac（media access control）layer->第一層

switch->L2   L3

Layer 2 Switch：利用OSI 第二層 MAC 位址的資訊來進行資料交換，它可以記憶學習第一個 Port 連接的 MAC 位址，透過 MAC 位址及封包目的的位址的辨別。 

Layer3 Switch：把<u>路由表</u>的功能加入 L2 Switch，那麼它就會變成 L3 Switch，可以為 VLAN 建立適當的路由表，讓效能更加提昇。L3 的交換器又稱為 IP Switch 或 Switch Router。

**虛擬區域網**（**Virtual Local Area Network**或簡寫**VLAN**, **V-LAN**）是一種建構於區域網路交換技術（LAN Switch）的[網路管理](https://zh.wikipedia.org/wiki/%E7%B6%B2%E7%B5%A1%E7%AE%A1%E7%90%86)的技術，網管人員可以藉此透過控制[交換機](https://zh.wikipedia.org/wiki/%E4%BA%A4%E6%8D%A2%E6%9C%BA)有效分派出入區域網的封包到正確的出入埠，達到對不同實體區域網中的設備進行邏輯分群（Grouping）管理，並降低區域網內大量資料流通時，因無用封包過多導致拥塞的問題，以及提昇區域網的資訊安全保障。

## IP位址分級

**IP固定32 bits**

![](https://hackpad-attachments.s3.amazonaws.com/ncnu-opensource.hackpad.com_rqobzgW331s_p.345652_1447294321253_Screenshot 2015-11-12 10.11.39.png)

參考文獻：[鳥哥](http://linux.vbird.org/linux_server/0110network_basic.php#tcpip_network_comp_class)

**CLASS A 用途 政府機管、國家研究單位、跨國企業**

**IP範圍：1.0.0.0~126.255.255.255 (0.0.0.0為 default route**，**127.0.0.1 為 loopback address，被保留使用)   ((127是特殊用途**

前 8 位元表示 A 級網路位址 (Network ID)，其餘 24 位元表示主機位址 (Host ID)

符合第1個區段(X.)的為同網段       below b c  are 2 3 

00000000\. the first bit is 0 , it is class A     below b c are 2 3

**CLASS B 用途：大型企業、電信業者、大專院校**

同網段：<u>128.0</u>.0.0 ~ <u>191.255</u>.255.255

前 16 位元表示 B 級網路位址 (Network ID)，其餘 16 位元表示主機位址(Host ID)

**CLASS C: ㄧ般企業、ㄧ 般家庭、高國中小**

同網段：<u>192.0.0</u>.0 ~ <u>223.255.255</u>.255

以前 24 位元表示 C 級網路位址Network ID，其餘 8 位元表示主機位址(Host ID)

**CLASS D: 多點廣播(Multicast)**

IP範圍：224~239

保留給 Multicast 使用，因此不配發。也就是說 Class D 等級所使用的IP範圍在224.0.0.0〜239.255.255.255。

**虛擬IP範圍**

**Class A** : **10.0.0.0～10.255.255.255**

<undefined>*   **Class B** : **172 16.0.0～172.31.255.255 ***   **Class C** : **192.168.0.～192.168.255.255 **</undefined>

| RFC1918 name | IP address range | number of addresses | largest | host id size | mask bits | description |
| 24-bit block | 10.0.0.0 - 10.255.255.255 | 16,777,216 | 10.0.0.0/8 (255.0.0.0) | 24 bits | 8 bits | single |
| 20-bit block | 172.16.0.0 - 172.31.255.255 | 1,048,576 | 172.16.0.0/12 (255.240.0.0) | 20 bits | 12 bits | 16 contiguous class B networks |
| 16-bit block | 192.168.0.0 - 192.168.255.255 | 65,536 | 192.168.0.0/16 (255.255.0.0) | 16 bits | 16 bits | 256 contiguous class C networks |

**子網路遮罩計算**

1.某企業分配到class B 的 IP (140.112.x.x)今天想要切成2個子網路(借1個bit)來分配使用。

  (1) 其網路遮罩為？140 It’s Class B =>255.255.128.0  => 11111111.11111111.10000000.00000000 

*   255.255   .128            .0                 /17  (have 17 "1" = 17 bits) 
*   ->2 subnet IP: 140.112." 0~127".X and 140.112."128~255".X/17
*   /17 指該比對17個bit 都符合才會接收

  (2)有效IP位址為？ 140.112.0~127.X  and  140.112.128~255.X (扣除0&255)

2\. 192.168.0.0/28

  (1) 網路遮罩為？192 isClass C => 255.255.255.240 => 11111111.11111111.11111111.11110000 (have 28 "1" = 28bits)

*   255   . 255 . 255 . 240       /28

  (2)可用IP有幾個？2^4-2=14 （-2=>去頭去尾 140.112.0."0" and 140.112.255."255"）

【HW】

140.112.30.72/27 

Net Mask : 255.255.255.224

有效IP位址：

可用IP個數：2^5-2=30

BBI  ->  Firewall / Router / Proxy <- LAN

                                DMZ

實體IP虛擬IP動態IP固定IP

固定IP是寫死的，動態IP是開機產生的

dmz：為一種網絡架構的布置方案，常被使用的架設方案是在不信任的外部網絡和可信任的內部網絡外，建立一個面向外部網絡的物理或邏輯子網，該子網能設置用於對外部網絡的[伺服器](https://zh.wikipedia.org/wiki/%E6%9C%8D%E5%8A%A1%E5%99%A8)主機。

IPtables：在LINUX底下，用以設定連入封包得處理，且對應到需要的功能

iptable 表示法

              iptables -a   -s （eth2）

                                  -d (eth1)

                                  -j accept/drop
