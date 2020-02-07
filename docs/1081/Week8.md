# Week 08

請同學先安裝 ubuntu18 server

[下載連結](http://ftp.ncnu.edu.tw/ubuntu-cd/18.04.3/ubuntu-18.04.3-live-server-amd64.iso)

是安裝 server 版本，不要裝錯！

:::danger
注意 : 開 VM 時印碟大小最小要給 10G
:::

`VBoxManage clonehd <s.vdi> <d.vdi>`

複製出來的 VM 請取下列兩個名字

1. http-service

2. student

```
sudo hostnamectl set-hostname student
```
```
reboot
```
更改檔案的位置：
```
vim /etc/hosts
vim /etc/hostname
```
## DMZ 

![](https://i.imgur.com/FP8pU9G.png)

Firewall 會有三張網卡
一個對應 student(名稱一樣)
一個對應 http-service(名稱一樣)
一張對外 bridge


網路 > 新增網段(http-service、student)：
```
網路名稱：http-service2
CIDR:10.20.2.0/24
```
```
網路名稱：student2
CIDR:10.20.1.0/24
```
網路 > 網路介面卡(bridge)
```
NAT網路
http-service
```
```
NAT網路
student
```

## Firewall

``ifconfig`` / ``ip a``(可以看到所有網卡，連未啟用的也是)


sudo apt install ifupdown
啟動網卡：
```
sudo ifup 網卡名稱
```
原始方法 :+1: (改完interfaces之後記得ifup)
```
sudo vim /etc/network/interfaces
```
```
auto 網卡名稱
iface 網卡名稱 inet dhcp
```

在student和http-service設定網路介面卡

### 對不同網站發封包
student ping http-service
```
(http-service):ifconfig(找http-service的ip)
```
```
ping http-service的ip
```
http-service ping student
```
(student):ifconfig(找student的ip)
```
```
ping student的ip
```

### ping 的錯誤訊息

Request time out：當所經過的路由器的路由表中具有到達目標的路由(理論上可達)，但是卻一直沒收到設備的回應，這時候會出現"Request time out"。也就是你ping傳送的封包理論上是能送達對方，卻沒收到回應的封包，有可能的障礙是：防火牆、設定不回應、回應的封包丟失(相關網路設定錯誤)等。(路是通的，只是沒回應)

Destination host unreachable：當路由表中連到達目標的路由都沒有時，ping這個設備就會出現"Destination host unreachable"。也就是：router上沒有到達對方的路徑資訊，不知道在哪裡，封包該往哪裡送。(找不到抵達對方的路)

[參考](https://blog.xuite.net/metafun/life/85495210-Ping%E6%8C%87%E4%BB%A4%E8%88%87Destination+host+unreachable+%E5%92%8C+Request+time+out%22%E4%B9%8B%E5%8D%80%E5%88%A5)