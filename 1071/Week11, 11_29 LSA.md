# Week11, 11/29 LSA

====
Sample Projects:
- https://github.com/NCNU-OpenSource/
- https://github.com/moli-rocks

### iptables
[iptable settings](http://s2.naes.tn.edu.tw/~kv/iptables.htm)
`iptables -L -n`:查看規則
從第一條開始比對，先比對到的就先作用

#### 參數
- -A append （加在後面）
- -I insert 插播功能（插入自己想要的行內）
- -i interface 介面(ether、wifi等等)
- -S source 
- -D destination
- -j ACCEPT/REJECT/DROP
- -p portocol

### IPV4
[IPv4 wiki](https://zh.wikipedia.org/wiki/IPv4)

xxx.xxx.xxx.0 整個網段(並非router)
xxx.xxx.xxx.1 通常用做DNS
xxx.xxx.xxx.254 當gateway
xxx.xxx.xxx.255 當broadcast

unicast： 單一目標的傳輸方式
multicast: 多個接收者

不該來自外部的網段：
10.0.0.0/8 (Private)
172.16.0.0/12 (Private)
192.168.0.0/16 (Private)
169.254.0.0/16 (Link-Local)


iptables -I INPUT -S 10.105.0.0/19 -j ACCEPT
iptables -A INPUT -j DROP 

![](https://www.zhangguangtong.cn/wp-content/uploads/2016/03/dport-routing-02.png)

![](https://i.imgur.com/r0C5lJ7.png)


### 練習
1.2.3.4 彼端的router
10.105.1.254 人家的gateway
10.105.5.254 自家的gateway

.0.2 是web server(http) 要讓內外都能連(圓柱體)
三角形(.0.3)是ssh 可以讓外面連ssh 可以連到內網ssh
牆裡面是ssh 網管可以從外面連進來管理
防火牆有三個介面(三組IP)
