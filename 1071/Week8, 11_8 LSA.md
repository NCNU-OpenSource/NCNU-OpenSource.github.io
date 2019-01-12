# Week8, 11/8 LSA

`sudo nginx -t`查看nginx設定檔是否成功套用,語法是否有錯

`sudo lighttpd -f /etc/lighttpd /etc/lighttpd/lighttpd.conf`查看lighttpd設定檔是否成功套用

`sudo netstat -ntupl`印出電腦每個port的連線狀況

:::warning
1.預設 lighttpd 跟 nginx 都是跑在80port，所以兩個才不能一起跑
2.default server 只能有一個
:::

### nginx proxy load balance

選擇一個設定檔做proxy （代理伺服器）
```nginx
# 請添加在 server{} 外
upstream backend {
    server 127.0.0.1:8081;
    server 127.0.0.1:8082;
}
```
```nignx
# try_files $uri $uri/ =404;
location / {
    proxy_pass http://backend;
}
```
但是 localhost:8081 和 localhost:8082 還是能通道後面的主機

### ufw(防火牆)

`sudo apt install ufw` 安裝ufw

`sudo ufw enable` 啟動ufw

`sudo ufw status`查看ufw狀態

`sudo ufw status verbose`查看ufw詳細狀態

`sudo ufw -h`ufw help

製作規則:
`sudo ufw allow 80`允許80port對外開放
`sudo ufw deny 8081` 禁止 8081 port 對外開放

### apache
`sudo apt install apache2`
`vim ports.config` 用於設定 port (預設 80)

`000-default.conf` http config

`default-ssl.conf` https config

`sudo a2ensite 000-default.conf` 啟用 apache2 設定檔(跟 reload 相同功能, apache2 專屬)

`sudo a2dissite 000-default.conf` 關閉apache2設定檔

`sudo a2enmod rewrite`apache2 起用 rewrite 模組

`sudo a2enmod userdir`apache2 起用 userdir 模組（讓apache讀取~/public_html/ 底下的東西）(讓一般用戶也可建網頁)

`sudo service apache2 restart`重啟apache2

`.htaccess` apache使用者權限控制

:::info
mkdir ~/public_html 

創一個 index.html 在 ~/public_html/ 底下

然後拜訪 http://127.0.0.1/~username/
:::

### OSI Model
![](https://i.imgur.com/Shg4ttv.png)












