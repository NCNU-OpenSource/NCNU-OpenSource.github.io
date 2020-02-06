###### tags: `1061`

# 1061 LSA week 11 (2017/11/29) 共筆 - iptables

### IPtables
- 順序很重要，在前面的規則會先執行
- -A 該規則增加在原本規則的最後面
- -I
- -i Interface(介面卡)
- -jDrap 建議使用，不會回應較省資源
- -jRecject 會回應 ICMP 錯誤訊息

---
[refer](http://s2.naes.tn.edu.tw/~kv/iptables.htm)
### iptables - Firewall setting (mail server)
* 以下是:別人可以送信給你 mail server
```
 #open HTTP port 80 webserver
  iptables -A OUTPUT -o eth2 
```
  
### iptables - Firewall setting(FTP)
* `iptables -A INPUT -i eth2 -p udp -s 192.16.3.13 --sport 137 -j ACCEPT`

## 期中考
![](https://i.imgur.com/QnTg9Sd.jpg)

- 請在 Ubuntu 下安裝 VM，並在 VM 下裝兩個 Ubuntu(u1, u2)
    - 21:52 改成可在 Windows 或 Ubuntu 下即可。
- 外網連至 u1 的 nginx，會轉跳到 u2 的 drupal(proxy)
    - 外網無法連至 u2 的 drupal
- 外網 sftp u1 -p 2200 連至 u2
    - 外網無法 sftp u2