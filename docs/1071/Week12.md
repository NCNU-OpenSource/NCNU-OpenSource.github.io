# Week12, 12/6 LSA

====

![](https://i.imgur.com/QN3Xi1z.png)

+ NAT VM的網絡在本機(自己的電腦)的後面
+ bridge VM的網絡會跟本機的網路同層



如果拿不到ip (bridge)
:::warning
`/etc/network/interfaces`

auto <網卡名稱>
iface <網卡名稱> inet dhcp

:::

`sudo ifup <網卡名稱>`

有關 SNAT / DNAT / MASQUERADE 的愛恨情愁，請參考這兩篇文章：
- https://read-and-thinking.blogspot.com/2009/06/iptablessnatmasquerade.html
- http://linux.vbird.org/linux_server/0250simple_firewall.php#nat_what



----
去年考試的大抄（題目類似但不同）
![iptables chain flow](https://i.imgur.com/sQ5Uzvd.png)



# IPtables

    你也可以寫到設定檔，讓下次開機繼續當router。
    /etc/sysctl.conf:
    net.ipv4.ip_forward = 1                          # 把ip forward功能打開
    sysctl -p /etc/sysctl.conf                       # 使設定檔生效



    #sudo sh ip.sh
    #Environment : 
    #BBI ->(enp0s3)) U1 (enp0s8)[samba/nginx/ssh:2200]-> U2[FTP/drupal/ssh:22]
    
    #清除所有規則
    iptables -F
    iptables -X
    iptables -F -t mangle
    iptables -t mangle -X
    iptables -F -t nat
    iptables -t nat -X
    #設定政策
    iptables -P INPUT DROP
    iptables -P OUTPUT ACCEPT
    iptables -P FORWARD ACCEPT
    #信任本機
    iptables -A INPUT -i lo -j ACCEPT
    #本機向外封包可以回家
    iptables -A INPUT -i eth0 -m state --state RELATED,ESTABLISHED -j ACCEPT
    #BBI can ssh to U1
    iptables -A INPUT -i enp0s3 -p tcp -d 10.105.21.213 --dport 22 -j ACCEPT
    #samba
    #port 445 is for Windows
    iptables -A INPUT -i enp0s3 -p tcp -d 10.105.21.213 --dport 139 -j ACCEPT
    iptables -A INPUT -i enp0s3 -p tcp -d 10.105.21.213 --dport 445 -j ACCEPT
    #BBI可連nginx
    iptables -t nat -A PREROUTING -i enp0s3 -p tcp -d 10.32.20.68 --dport 80 -j DNAT --to-destination 10.0.2.15:80
    iptables 
    #FTP server
    iptables -t nat -A PREROUTING -i enp0s3 -p tcp -d 10.32.20.68 --dport 21 -j DNAT --to-destination 10.0.2.15:21
    iptalbles -A OUTPUT -o enp0s3 -j ACCEPT
    #網外可ssh進U2
    iptables -t nat -A PREROUTING -i enp0s3 -p tcp -d 10.32.20.68 --dport 2200 -j DNAT --to-destination 10.0.2.15:22
    iptables -t nat -A POSTROUTING -d 10.0.2.15 -o enp0s8 -j MASQUERADE
    
    #FTP
    iptables -t nat -A PREROUTING -i enp0s3 -p tcp -d 10.21.20.68 --dport 80 -j DNAT --to-destination 10.0.2.15:80
    
    #偷看 filter table
    echo ""
    echo"=======================filter============================"
    echo ""
    iptables -L -n
    #偷看 nat table
    echo ""
    echo"========================nat=========================="
    echo ""
    iptables -t nat -L -n
    



    簡化 ssh 連線
    $ vim .ssh/config
    HOST u1
      HostName 10.21.20.128
      User JackKuo
      port 3389
    HOST u2
      HostName 163.22.17.229
      User admin
      port 22


## Midterm Conf
    U1 IP: 10.105.11.176 10.0.2.11 10.0.3.8
    U2 IP: 10.0.2.9
    U3 IP : 10.0.2.10
    U4 : 10.0.3.9
    
    
    
    #所有設備都需要的
    
    #清除所有規則
    iptables -F
    iptables -X
    iptables -F -t mangle
    iptables -t mangle -X
    iptables -F -t nat
    iptables -t nat -X
    iptables -P INPUT ACCEPT
    iptables -P OUTPUT ACCEPT
    iptables -P FORWARD ACCEPT
    
    #設定政策
    #:FORWARD ACCEPT [0:0]
    iptables -P INPUT DROP
    iptables -P OUTPUT ACCEPT
    iptables -P FORWARD ACCEPT
    
    #信任本機
    iptables -A INPUT -i lo -j ACCEPT
    iptables -A OUTPUT -o enp0s3 -j ACCEPT
    #本機向外封包可以回家
    iptables -A INPUT -i enp0s3 -m state --state RELATED,ESTABLISHED -j ACCEPTev lo
    
    U1:
    # ssh only from u3 ##############
    iptables -A INPUT -i enp0s8  -p tcp -s 10.0.2.10 -d 10.0.2.11 --dport 22 -j ACCEPT
    # port forward 2222->u3 22
    iptables -t nat -A PREROUTING -i enp0s3 -p tcp -d 10.105.11.176 --dport 2222 -j DNAT --to-destination 10.0.2.10:22
    iptables -t nat -A POSTROUTING -s 10.105.11.176 -d 10.0.2.10 -o enp0s8 -j MASQUERADE
    # port 20, 21 to u2 ftp
    iptables -t nat -A PREROUTING -i enp0s3 -p tcp -d 10.105.11.176 --dport 20 -j DNAT --to-destination 10.0.2.9:20
    iptables -t nat -A PREROUTING -i enp0s3 -p tcp -d 10.105.11.176 --dport 21 -j DNAT --to-destination 10.0.2.9:21
    iptables -t nat -A POSTROUTING -s 10.105.11.176 -d 10.0.2.9 -o enp0s8 -j MASQUERADE
    # accept all from u3
    iptables -A INPUT -i enp0s8 -s 10.0.2.10 -j ACCEPT
    # accept all from u4
    iptables -A INPUT -i enp0s9 -s 10.0.3.9 -j ACCEPT
    
    U2
    # route to 10.0.3.0
    route add -net 10.0.3.0 netmask 255.255.255.0 gw 10.0.2.11 dev enp0s8
    # ssh only from U3
    iptables -A INPUT -i enp0s3 -p tcp -d 10.0.2.9 -s 10.0.2.10 --dport 22 -j ACCEPT
    # ftp
    iptables -A INPUT -i enp0s3 -p tcp -s any/0 -d 10.0.2.9 --dport 20 -j ACCEPT
    iptables -A INPUT -i enp0s3 -p tcp -s any/0 -d 10.0.2.9 --dport 21 -j ACCEPT
    iptables -A INPUT -i enp0s3 -p tcp -s any/0 -d 10.0.2.9 --dport 80 -j ACCEPT
    # accept all from U4
    iptables -A INPUT -i enp0s3 -s 10.0.3.9 -j ACCEPT
    
    U3
    # route to 10.0.3.0
    route add -net 10.0.3.0 netmask 255.255.255.0 gw 10.0.2.11 dev enp0s8
    # smb from U4
    #iptables -A INPUT -i enp0s8 -p udp -s 10.0.3.9 -d 10.0.2.10 --dport 137 -j ACCEPT
    #iptables -A INPUT -i enp0s8 -p udp -s 10.0.3.9 -d 10.0.2.10 --dport 138 -j ACCEPT
    #iptables -A INPUT -i enp0s8 -p tcp -s 10.0.3.9 -d 10.0.2.10 --dport 139 -j ACCEPT
    #iptables -A INPUT -i enp0s8 -p tcp -s 10.0.3.9 -d 10.0.2.10 --dport 445 -j ACCEPT
    # ssh from U1
    iptables -A INPUT -i enp0s8 -p tcp -s any/0 -d 10.0.2.10 --dport 22 -j ACCEPT
    # ssh to U1
    iptables -A INPUT -i enp0s8 -p tcp ! --syn -s 10.0.2.10 --sport 22 -d 10.0.2.6 --dport 1024:65535 -j ACCEPT
    # ssh to U2
    iptables -A INPUT -i enp0s8 -p tcp ! --syn -s 10.0.2.9 --sport 22 -d 10.0.2.6 --dport 1024:65535 -j ACCEPT
    # accept all from U4
    iptables -A INPUT -i enp0s8 -s 10.0.3.4 -j ACCEPT
    
    U4
    # route to 10.0.2.0
    route add -net 10.0.2.0 netmask 255.255.255.0 gw 10.0.3.8 dev enp0s3
    # ssh only from u3
    iptables -A INPUT -i enp0s3 -p tcp -s 10.0.2.10 -d 10.0.3.9 --dport 22 -j ACCEPT
    # ssh to U1
    iptables -A INPUT -i enp0s3 -p tcp ! --syn -s 10.0.2.11 --sport 22 -d 10.0.3.9 --dport 1024:65535 -j ACCEPT
    # ssh to U2
    iptables -A INPUT -i enp0s3 -p tcp ! --syn -s 10.0.2.9 --sport 22 -d 10.0.3.9 --dport 1024:65535 -j ACCEPT
    # ssh to U3
    iptables -A INPUT -i enp0s3 -p tcp ! --syn -s 10.0.2.10 --sport 22 -d 10.0.3.9 --dport 1024:65535 -j ACCEPT
    # smb to U3
    iptables -A INPUT -i enp0s3 -p udp -s 10.0.2.10 --sport 137:138 -d 10.0.3.9 --dport 1024:65535 -j ACCEPT
    iptables -A INPUT -i enp0s3 -p tcp ! --syn -s 10.0.2.10 --sport 139 -d 10.0.3.9 --dport 1024:65535 -j ACCEPT
    iptables -A INPUT -i enp0s3 -p tcp ! --syn -s 10.0.2.10 --sport 445 -d 10.0.3.9 --dport 1024:65535 -j ACCEPT
    
    
    
    可能會用到的指令
    sudo ip route change default via 192.168.1.1 dev eth0
    iptables
    用 dmesg | grep eth 找出網卡
    
