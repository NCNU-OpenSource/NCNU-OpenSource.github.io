###### tags: `1061`

# Week 12 共筆

加油可以在這邊交流
XD
// 設定ssh快速的連線
```
Host {名稱}
    HostName {ip}
    User {帳號}
```    
在家目錄vim .ssh/config

查看Route Destination:
sudo route -n

在U3上面新增route到U4
sudo route add -net 172.16.2.1 netmask 255.255.255.255 gw 192.168.23.3

開啟ipv4 forward # 重要！！就算加route ,設定iptables FORWARD都還是不行，因為此功能沒有打開 
sudo sysctl -w net.ipv4.ip_forward=1

U4 to 8.0.0.0/8
sudo route add -net 8.0.0.0 netmask 255.0.0.0 gw 172.16.2.1