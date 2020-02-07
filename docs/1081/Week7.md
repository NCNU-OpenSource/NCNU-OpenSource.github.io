# Week 07(2019/10/31)

web server：
1. nginx：特性為用較少資源
2. lighttpd：輕量、效能好
3. apache：功能強、效能差

- `netstat -an | less`
    - ntulp 僅列出網路相關內容

- SSL 443port
- reverse proxy:當收到user的request時，會從背後server（叢集）上取得資源，然後再將這些資源返回給用戶端
- reverse proxy + cache server：
- reverse proxy picture
![](https://i.imgur.com/T65wd9F.png)
1024以下的port已被既定的在使用

## lighttpd
nginx、lighttpd 預設port為80
1. 關閉 nginx
    - `sudo service nginx stop`
2. 檢查 nginx 狀態
    - `sudo service nginx status`
3. vim /etc/lighttpd/lighttpd.config` : 修改預設的port -> 8080(約定俗成使用的port是8080or3000)
4. `sudo service lighttpd status` : 查看lighttpd的狀態
5. `sudo service lighttpd start` : 開啟server(+sudo 可以看到開起來的狀態)

## nginx:
```
sudo nginx start
```
可以看到nginx開起來並且沒有跟lighttpd重複，因為lighttpd已經在port 8080

新增 virtual host:
```
sudo cp ./default ./myhost
```
內容會跟default一樣(cp是複製指令)

設定檔內 location/
```
proxy_pass 
```
request 進來的路徑丟給後面的 lighttpd
```
server_name myproxy.com;

location / {
    proxy_pass http://127.0.0.1:8080;
}
```
1.要刪除:
```
default_server;
```
:::warning
default server 在啟動的設定檔中只能有一個
:::


2.去enable連結：sudo ln -s ../sites-available/myproxy

3.設定完記得sudo service nginx restart

## w3m
1. 安裝w3m
    - `sudo apt install w3m`
- 以終端機開啟網頁的工具
2. 開啟網頁
    - `w3m url`
    - Ex: `w3m https://www.google.com`

## ab
- sudo apt install apache2-utils 
- 功能:測webserver效能
- -n : requests numbers
- -c : connecttion
example `ab -n 1000 `http://localhost/

## iptables
`sudo iptables -nL`
- input :　掌管有甚麼東西能進來
- output　：　掌管有甚麼東西能出去
- forward

`sudo iptables -I INPUT -s0.0.0.0 -ptcp --dport 22 -j ACCEPT  `
: 用tcp 走22port就接收 
-I insert 
`sudo iptables -A INPUT -s0.0.0.0 -ptcp --dport 23 -j ACCEPT  `
-A append
REJECT : 仍會回傳封包 ( 容易給攻擊者資訊 )
DROP : 不讀不回，丟棄封包

## DMZ架構
外網 -> nginix(forward) -> 決定要去哪個網段(規劃網段 )
- DMZ : 管制區
- LAN : 受保護的網段
## hw
安裝apache
測試效能便利性