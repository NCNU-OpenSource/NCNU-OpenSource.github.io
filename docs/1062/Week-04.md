###### tags: `1062` `LSA` `ncnu`

Resource
==
* Slide [Web Security](https://www.slideshare.net/ssuser86d124/web-security-92308170)
* Slide [Linux 網路部署](http://moodle.ncnu.edu.tw/mod/resource/view.php?id=468344)
* NCNU CTF - Somebody's Great Website - http://128.199.191.19:3000/

Network
===
### TCP/IP
![「tcp/ip」的圖片搜尋結果](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/UDP_encapsulation.svg/350px-UDP_encapsulation.svg.png)

### DMZ
DMZ:將對外的服務隔離起來，使DMZ的區域沒辦法打進內網。
BT的親身經歷：某單位將重要的 server 跟內網綁一起，沒有dmz，又剛好他們 Windows 的 IIS 權限開很高，透過 sniffer 就不小心拿到了一些重要的資料。另外最好的情況是 DMZ 跟 NAT 完全切開。

### iptables
- 封包的處理流程
![「iptable」的圖片搜尋結果](https://images2017.cnblogs.com/blog/732967/201801/732967-20180131164529234-1655331154.png)

- 主要功能：
  1.拒絕來自某些ip的封包進入
    `iptables -t filter -A INPUT -s 201.8.31.1 -j drop`

  2.拒絕讓Internet的封包進入主機的某些port
    `iptables -A INPUT -p tcp -s 201.8.31.1 --dport 2018 -j drop`

  4.拒絕讓帶有某些特殊flag（SYN、ICMP)的封包進入
  5.分析硬體位置（MAC）來決定連線與否
  6.實現Port Forwarding
- NAT教學
  - 讓內網的電腦可以連到外網
  `sudo sysct1 -w net.ipv4.ip_forward=1`
  `iptables -t nat -A POSTROUTING -s 192.168.1.1 -j MASQUERADE`
  - 讓外網的封包傳給內網的伺服器
  `iptables -t nat -A PREROUTING -p tcp -d 201.8.31.1 \-dport 8080 -j    DNAT --to-destination 192.168.1.1:80...(不完整)`


ICMP 是網路的偵錯協定，例如我們常用的ping指令，其實就是向目標機器送一個IMCP echo Request(0)， 對方機器就會回傳一個icmp echo Response(8)，就能知道目標機器是否能從我這邊打入。
TCP 3-way-handshake:為了確保我跟目標主機的可靠性，在我傳資料給他之前先告訴他("安安 我想跟妳建立連線(SYN)")，對方機器表示("好，我可以跟妳進行連線(SYN/ACK)")，我再告訴他("好，那我確定跟妳建立連線，開始傳資料給妳(ACK)")(例如http是屬於tcp的連線)。
UDP:我不管對方有沒有收到，就直接送資料過去(常用在VoIP)

DROP 跟 Reject 差別：REJECT會回傳對方一個 RST message（例如中國的防火長城，就是透過RST訊息讓牆內的瀏覽器知道沒辦法連線youtube;或是server的port根本沒開,也會送RST給client)，DROP的話就是不管他了0.0

BT 補充：因爲 driver 的關係，基本上現在電腦中所有的卡號想改多少就可以改多少，只是合不合法（valid）而已

內部 IP 使用還是得遵循保留 IP 的[規定](https://en.wikipedia.org/wiki/Reserved_IP_addresses)使用 private 網段，若是使用非保留 IP，那會在該台電腦斷線後，其他內網裝置想去連線時，會連到外部機器

### 防止 SQL Injection

[用變數方式存取以防止 SQL Injection](https://qiita.com/hyakuson/items/68ccdb2e50b45759586e)
[npm SQL Injection Module](https://www.npmjs.com/package/sql-injection)

### 討論問題

- SYN 等 flag 是在 iptables 的哪邊處理判斷？
