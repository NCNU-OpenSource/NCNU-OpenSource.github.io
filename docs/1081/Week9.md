# Week 09

### 網路介面卡
- 橋接介面卡bridge:根據連線的網路取得ip(VM和電腦的ip相同)

- NAT: VM自己給一個ip，無法和別人溝通，VM會通過防火牆把東西給電腦，電腦會幫忙把封包送出去
- NAT網路：電腦可以上網的話，就會走NAT方式
- 僅限主機介面卡：(virtualbox6.0沒有)

---
### 設定環境
工具 -> 網路 -> 新增2張網卡 -> DHCP打開 -> 在firewall的網路的設定上新增兩張介面卡改僅限主機，分別對http-service和student -> student和http-service上調介面卡對上firewall的兩張 -> 測試能否互ping

---
### iptable
linux上的防火牆，kernel上做的，速度更快，但更複雜

不同table，有不同的chain
- filter : input、output、forward
- nat : 
- mangle(太難不講)
- 設定防火牆，需要sudo，建議不要用遠端桌面
---

```sudo iptables -L``` (預設 filter table) :  詳細列出規則
```sudo iptables -L -t filter``` (較嚴謹) 

---
```sudo iptables -p 某chain ACCEPT/DROP``` : 修改Policy
```sudo iptables -p -n ``` : 

---
```
iptables -A INPUT -p icmp -j DROP
```
- ping 相對於是 input，故在INPUT chain修改
- ```-A``` : 可append規則 
- ```-p``` : protocol
- ```-j``` : 做甚麼樣的動作 DROP/ACCEPT
- ```-I``` : insert 規則 || 範例： sudo iptables -I INPUT 1 -j ACCEPT
-- 第一個參數為 chain 的名稱，第二個參數為 rule 的順序，預設值為 1 ，如果你指定為 1 ，那麼新的 rule 會放在列表的最上頭。


---

```sudo iptables -D 某chain ``` : 刪除規則
若只有上要刪除某一行的規則 : 
```iptables -D INPUT 3 ``` : 若有多行，只要刪除INPUT第三行 

---
INPUT DROP會導致ping回來的封包(被動)被drop不見
解決：

```
sudo iptables -A INPUT -m state --state ESTABLISHED -j ACCEPT
```
---

```
sudo iptables-save > iptables.conf
sudo iptables-restore < iptables.conf
```

---

復習 :[鳥哥 linux 9.3章](http://linux.vbird.org/linux_server/0250simple_firewall.php)


---
各式指令：
```
iptables -A INPUT -p icmp -j DROP
```
```
iptables -t filter -A INPUT -p icmp -j DROP
```
```
iptables -L -n
```
```
iptables -L
```
```
iptables -P <chain> <ACCEPT/DROP>
```
```
iptables -F    //reset rules
```
```
iptables -A INPUT -m state --state ESTABLISHED -j ACCEPT
```
```
sudo iptables -A INPUT -i enp0s8 -s 192.168.x.x -j DROP
```

```
sudo iptables -I OUTPUT -p tcp -d 192.168.56.102 --dport ssh -j DROP
```


[鳥哥練習網站](http://linux.vbird.org/linux_server/0250simple_firewall.php#netfilter)

### nginx proxy header 補充
---
更改proxy.conf or /site/avalibale/<my server>，來替封包加料
```
location /{
    proxy_set_header HOST $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxt_pass http://example.com/new/prefix;
}
```
[python3 echo header server](https://gist.github.com/mdonkers/63e115cc0c79b4f6b8b3a6b797e485c7)