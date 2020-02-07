# Week 10

### nat table
![](https://i.imgur.com/PW4kY6f.png)

prerouting 
postrouting

firewall 設定網路介面卡開啟 bridge 
ip a 後 ip 為10.105開頭
firewall 測試對外網路
```
ping 8.8.8.8
```
student 因為和 firwall 在同網段下，測試兩者連線
```
ping 192.168.xx.xx
```
---
### 要讓 student 透過 firewall 送封包出去 
(原本電腦是不提供轉送封包的功能，那是路由器的責任)
```
sudo cat /proc/sys/net/ipv4/ip_forward
```
default 是 0 代表沒有轉送功能 > 改成 1
```
sudo vim /etc/sysctl.conf
```
修改 `net.ipv4.ip_forward=0` 這行，拿掉該行註解並將 0 修改成 1
```
sudo sysctl -p
```
顯示為 `net.ipv4.ip_forward = 1` 代表完成

也開啟 student 
```
route -n                          
#-n 參數為拒絕反解，減少顯示不必要的資料
```
gateway : 決定封包怎麼丟

要更改 gateway ，因為要將封包改送給 firewall ，並由 firewall 代為向外網送出
student上面:
```
sudo route add default gw "gatewayID" (到 firewall 上面看)
```
上列指令設定的gatewayID為firewall IP，但firewall網卡有三張因此有三個IP，則選擇與該機器（student）同網段下的IP。

> 同網段：看IP slash `/` 後的數字，以192.168.3.1/24為例，24代表有IP 32bits前面的24 bits被覆蓋，因此只要前面24bits（IP前三數字）相同即為在相同網段下。


如果設定錯誤:
```
sudo route delete default gw "gatewayID"
```
---
### 設好gateway，但firewall不知道怎麼把封包送出去

firewall:
把別的來源東西轉發出去
```    
sudo iptables -t nat -A POSTROUTING -o ([對外]網卡名稱) -s student上的ip -j MASQUERADE 
```
> MASQUERADE 虛偽：因firewall把封包向外網傳送時，在內網內student的是虛擬ip(Private IP)無法被外網辨認，因此必須將IP轉換為firewall自身的對外IP(Public IP)。
---
tcpdump指令可擷取某個interface的封包，類似wireshark，可用來測試電腦是否有收到對方封包，這裡用來確認gateway是否有設定錯誤。
```
sudo tcpdump -i 對內網卡名稱(ex:enp0s3) 'src 192.168.x.x(ip)'
```
然後student去ping，就會收到封包

---
設定讓出的去的封包，回來的時候就不會被擋:
```
sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
```
> ESTABLISHED：UPD快、TCP穩。TCP會以三向交握建立連後才傳送資料，Firewall對外開啟連線後開啟一個特定的port與對方通訊，firewall 從外網接收到資料後傳送到student接收資料的port。ESTABLISHED只開放已經建立連線的封包經過。

> RELATED：只接受與自己主機送出的封包有關的封包
---
到/etc/resolv.conf
```
sudo vim /etc/resolv.conf
```
新增``nameserver 8.8.8.8``（Google的DNS）

HWaddr xxxxxxxx : 卡號，獨一無二
ARP查詢
genmask : 網段大小

---
### 解決firewall可以ping 8.8.8.8 但是沒辦法ping其他網址
```
cat /proc/sys/net/ipv6/conf/all/disable_ipv6
```
看是不是0
如果是就打
```
echo 1|sudo tee /proc/sys/net/ipv6/conf/all/disable_ipv6
```
把1寫進去將ipv6關掉

原因：老師說學校網路走ipv6不太穩定所以有可能ping不到

---
### 遠端備份 (rsync)

Ubuntu環境下安裝rsync
``` 
sudo apt install rsync -y
```
```
rsync -avhz 檔案名稱 遠端位置(ssh格式一樣):
example: rsysc -avhz filename username@ip: //or @ipaddress
//filename: 欲備份檔案
//username@....: 備份目的地
```
冒號指的是從遠端家目錄開始算，後面可再加路徑指定資料位置

#### 參數
- a : 封裝方式備份，整個資料夾
- v : 備份過程之細節
- h : human readable
- z : 壓縮備份內容，
- --delete : 將多出來的檔案，維持同步
- --delete-after : 
- --progress：顯示進度條
- --bwlimit=300：限制網路頻寬

`cp -r a a2` 可拷貝資料夾

rsync 設定檔:
/etc/rsyncd.conf 

可以設定給別人備份:
/etc/default/rsync

[rsync vs scp](https://stackoverflow.com/questions/20244585/how-does-scp-differ-from-rsync)

---
crontab 工作排程
