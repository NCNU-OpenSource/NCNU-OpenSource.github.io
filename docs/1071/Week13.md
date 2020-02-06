# Week13, 12/13 LSA midterm


Week 13 2018/12/13

規則：
- 如有問題請舉手發問。
- 請在答案紙上作答。
- 請勿編輯本頁面。
- 請勿以私訊或聊天室等任何方式彼此溝通。
    - 當然也請不要直接實體溝通啦... 那算作弊喔 ~>_^*
- 可以上網自由地找資料、補充這學期相對應的共筆頁面。
    - 但是不要直接把答案全篇貼上喔～
        - 可以補充相關資訊、指令範例、參考資料來源等。
        - 參考資料不可以是你寫的解答頁面等。
        - 補充的資訊不能與解答完全相同，至少要改掉相關參數（例如 IP 等）。

**We Are Watching You.**

# 第一大題 25%

- 課程的中文名稱、英文名稱、英文縮寫、你的組別號。5%
- 老師的中文真名、英文真名、常用 ID、Telegram ID、Facebook 個人檔案的名稱、個人網站的網址。10%
- 助教（非愛心助教）的 Telegram 名稱或英文綽號。5%
- 寫三個對老師或這堂課印象深刻的點，或老師的口頭禪、注意到的習慣等。5%

# 第二大題 15%
讓系統定時每 15 分鐘備份你目前電腦的整個 `/home` 目錄到備份主機 `123.45.67.89` 的 abc 使用者家目錄中的 `backups` 資料夾（現在還不存在）。
在備份主機上，每天 6:30 和 18:30 時，以 abc 使用者的身份，自動將此備份資料夾中的所有檔案權限設定為「擁有者可讀可寫可執行，所有其他人都不具任何權限」。
- 123.45.67.89 主機有開 ssh。
- 你有 abc 這個使用者的帳密。
- 每 15 分鐘自動備份的過程中，沒法輸入密碼，須讓這個過程 ssh 能自動認證登入對方主機。
- 只須保留最新資料。

請問該怎麼設定？
請寫出各關鍵指令，若須在特定目錄或環境執行，也請寫出。
若是有其他關鍵環境或資訊等，也請寫出。
例：於 xxx 目錄執行指令 `ooo` 並將結果 www 再 zzz。
- 自動登入設定 5%
- 自動備份設定 5%
- 自動修改權限 5%

# 第三大題 80%

## 情境

- 1. 連線到 eth0 IP port 22 能連上 fw1 ssh。
- 2. 連線到 eth0 IP port 22222 能連上 s3 ssh。
- 3. 連線到 eth0 IP port 80 會進入 fw1 nginx，而 nginx 會動態 load balance (proxy) 給 s1 lighttpd 和 s2 apache。
- 4. DMZ 內的所有主機不能主動連往 BBI。
- 5. DMZ 內的所有主機，除 s3 以外，不能主動連到 NAT。
- 6. s3 可以主動連線至 NAT 所有電腦的 ssh，不能連其他服務。
- 7. NAT 內的主機可以連往任何地方。

![](https://i.imgur.com/hB2M2r3.png)

## 問題
1. fw1 eth0 所拿到的 IP 與 netmask 斜線表答法請照實填入。5%
2. fw1 eth0 所處在的網路環境的起始 IP 與結尾 IP。10%
3. fw1 eth1, eth2 的網卡 IP 與 netmask 斜線表答法。10%
4. NAT 與 DMZ 網段分別的起始 IP 與結尾 IP。10%
5. fw1 上的 iptables 規則（可抽象縮寫，但關鍵參數須寫出）。20%
6. fw1, s1, s2 上分別的：15%
    - 軟體安裝指令。
    - 軟體設定檔的位置。
    - 若須修改設定檔，寫出須修改的關鍵內容（可抽象縮寫，但關鍵設定與參數須寫出）。
7. s1, s2, s3 的 ufw 防火牆規則（可抽象縮寫，但關鍵參數須寫出）。10%



# 加分題（文長） 15%
這是曾經真實發生的問題。

## 情境


資管系有一台 server ，同時設定了許多 DNS 紀錄指向這台機器，包含 `web.im.ncnu.edu.tw` 與 `temp.im.ncnu.edu.tw` 。
在這台機器上的 _Nginx_ 設定了 _Virtual Host_ 依據客戶端連進來時提供的 HTTP Header `Host:` 來提供不同虛擬網站的內容。

某天，苦命小猴子 🙉 發現了奇怪的問題，趕緊求助攻城溼 ⛛相助。奇怪的狀況如下：
- 鍵盤柯南 ⌨ 在學校內網使用瀏覽器及 _curl_ 測試連到 `http://temp.im.ncnu.edu.tw` 時，皆會被 __錯誤地__ 收到 HTTP 301  `https://web.im.ncnu.edu.tw`。
- 在 BBI 要連到這台機器時，則會因不同 client 有不同的狀況，有些能正確地開啟 `http://temp.im.ncnu.edu.tw`，有些卻會被錯誤地收到 HTTP 301 `https://web.im.ncnu.edu.tw`。舉例如下：
    - 啤酒哥 🍺 位在新加坡花天酒地，在 Pub 裡用 Google Pixel 3 XL 手機上的 Android 版 Chrome ，以及預設 Ubuntu 18.04 的 Dell XPS 13 筆電上的 Firefox ，都能正確開啟 `http://temp.im.ncnu.edu.tw`。怎麼試都正常。實在溫拿。
    - 三十吸欸母 🤓 在台灣科技宅都該參加的 COSCUP 2018 研討會，開著三台筆電邊聽議程邊作筆記邊打 0.A.D 邊逛 PTT，不論使用 IBM Thinkpad X61 上的 Ubuntu Linux 16.04，或 ASUS whatever 上的 Windows 10 Home Edition，或 Mac OSX on MacBook Pro 2018 Touchbar，不論使用 Chrome / Firefox / Safari / Edge / curl 等，全部都會被錯誤地收到 301 `https://web.im.ncnu.edu.tw`。連當工具人都失敗，人生好苦。

## 問題

- 請問造成錯誤的原因？ 10%
- 修正的方式是？5%

## 環境配置及相關資訊

### DNS 查詢出來的的確是同一台，配置正確
```
$ host web.im.ncnu.edu.tw
web.im.ncnu.edu.tw has address 163.22.17.179
web.im.ncnu.edu.tw has IPv6 address 2001:e10:6840:17::179
$ host temp.im.ncnu.edu.tw
temp.im.ncnu.edu.tw is an alias for web.im.ncnu.edu.tw.
web.im.ncnu.edu.tw has address 163.22.17.179
web.im.ncnu.edu.tw has IPv6 address 2001:e10:6840:17::179
```

### 兩個外網使用者的網路配置

- 啤酒哥 🍺 能正確開啟 `http://temp.im.ncnu.edu.tw`
    - 啤酒哥 🍺 的網路界面資訊如下：
        ```
        $ ifconfig eth0
        eth0        Link encap:Ethernet  HWaddr aa:dd:bb:77:cc:ab
                    inet addr:188.166.188.226  Bcast:188.166.191.255  Mask:255.255.240.0
                    inet6 addr: fe80::28d7:b6ff:fe78:c80f/64 Scope:Link
                    UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
                    RX packets:22086524 errors:0 dropped:0 overruns:0 frame:0
                    TX packets:26906826 errors:0 dropped:0 overruns:0 carrier:0
                    collisions:0 txqueuelen:1000 
                    RX bytes:5059910282 (5.0 GB)  TX bytes:15538027725 (15.5 GB)

        $ route -n
        Kernel IP routing table
        Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
        0.0.0.0         188.166.176.1   0.0.0.0         UG    0      0        0 eth0
        10.15.0.0       0.0.0.0         255.255.0.0     U     0      0        0 eth0
        188.166.176.0   0.0.0.0         255.255.240.0   U     0      0        0 eth0
        ```
- 三十吸欸母 🤓 被錯誤地 redirect 301 到 `https://web.im.ncnu.edu.tw`
    - 三十吸欸母 🤓 的網路界面資訊如下：
        ```
        $ ifconfig wlan0
        wlan0     Link encap:Ethernet  HWaddr 28:b2:bd:15:f5:04  
                  inet addr:192.168.88.81  Bcast:192.168.88.255  Mask:255.255.255.0
                  inet6 addr: 2001:b011:800e:1fc6:aa78:85e0:d9bd:a7e3/64 Scope:Global
                  inet6 addr: fe80::50a0:c0d:b969:a2cc/64 Scope:Link
                  UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
                  RX packets:13225793 errors:0 dropped:1 overruns:0 frame:0
                  TX packets:5389065 errors:0 dropped:0 overruns:0 carrier:0
                  collisions:0 txqueuelen:1000 
                  RX bytes:14057693740 (14.0 GB)  TX bytes:4665358526 (4.6 GB)
        $ route -n
        Kernel IP routing table
        Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
        0.0.0.0         192.168.88.254  0.0.0.0         UG    600    0        0 wlan0
        169.254.0.0     0.0.0.0         255.255.0.0     U     1000   0        0 br-17b8c74c4d5f
        172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0
        172.18.0.0      0.0.0.0         255.255.0.0     U     0      0        0 br-17b8c74c4d5f
        192.168.88.0    0.0.0.0         255.255.255.0   U     600    0        0 wlan0
        192.168.122.0   0.0.0.0         255.255.255.0   U     0      0        0 virbr0
        ```
    - 被錯誤地 redirect 301 時，以 curl 測試的現象
        ![](https://i.imgur.com/gwqDcpL.png)


### 伺服器 Nginx config

#### Default host
For `*.im.ncnu.edu.tw`

```conf
server {
        if ($host = web.im.ncnu.edu.tw) {
                return 301 https://$host$request_uri;
        } # managed by Certbot

        listen 80 default_server;
        listen [::]:80 default_server;
        server_name web.im.ncnu.edu.tw;
        return 301 https://$server_name$request_uri;
    
}

server {
        listen 443 ssl http2 default_server;
        listen [::]:443 ssl http2 default_server;
        root /var/www/html;

        # Add index.php to the list if you are using PHP
        index index.html index.htm index.nginx-debian.html index.php;

        server_name web.im.ncnu.edu.tw;

        location / {
                
                try_files $uri $uri/ =404;
        }
        location ~ \.php$ {
                fastcgi_pass unix:/run/php/php7.0-fpm.sock;
        }

        ssl_certificate /KEY/DIRECTORY/fullchain.pem; # managed by Certbot
        ssl_certificate_key /KEY/DIRECTORY/privkey.pem; # managed by Certbot
        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

```


#### Virtual host

`temp.im.ncnu.edu.tw` 的 virtual host config


```conf
server {
    listen 80;
 
    server_name temp.im.ncnu.edu.tw;
    server_name_in_redirect off;

    access_log /var/log/nginx/temp_demo.access_log;
    error_log /var/log/nginx/temp_demo.error_log info;

    root /var/www/temp_demo;
    index index.php index.html index.htm default.html default.htm;
    
    # php setting 已檢查過沒有問題
    include snippets/joomla.conf;

}
```


