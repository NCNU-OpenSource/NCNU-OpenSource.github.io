# Week6, 10/25 LSA

### ssh
安全的遠端連線
- ssh ip
- ssh -v -p 22 username@ip
- 以金鑰認證，自動認證登入 ssh-copy-id https://www.ssh.com/ssh/copy-id

### scp
+ `scp <filename> <ip/domain>:<path>` 傳送檔案到遠端機器
冒號後方沒有加東西的話，預設為加入家目錄
+ `scp <filename> <ip/domain>:<server path> <your path>`
    從遠端傳送檔案到自己機器
+ `scp -r <filename> <ip/domain>:<server path> <your path>`
    從遠端傳送多個檔案到自己機器
+ `ip a` / `ip addr` 取代 `ifconfig`

### WebServer nginx
+ `sudo apt install nginx` 安裝webserver nginx
打開瀏覽器打 <自己的ip> 會看到Welcome to nginx 

+ `/etc/nginx/sites-available/` 設定檔存放處

+ `/etc/nginx/sites-enabled/` 啟動設定檔

+ `/etc/nginx/sites-available/default`
```
server {
     listen 80 default_server (IPV4)
     listen [::]:80 default_server (IPV6) 
 } // 聽取的port
 ```
+  `root /var/www/html`預設讀取資料夾

+  `index index.html index.htm index.nginx-debian.html`預設讀取首頁

+ `sites-enabled ` 裏面存放的捷徑是從`sites-available` 那裏soft-link 過來的 

+ `ln -s <source path> <destination path>`  如果destination 的filename 沒有指定就會用source的檔案名稱

+ `sudo nginx -t` 檢查設定檔有沒有問題

+ `sudo nginx -s reload` reload server

+ `sudo vim /etc/hosts` 一個表格裡面放ip和其對應的string，讓使用者打string導到跟它匹配的ip

+ `server_name <self define string>`把string加在server name 後面　

+ `ping localhost`

+ `sudo nginx -s stop`停止nginx服務

+ `sudo service nginx restart` 重新啓動nginx

:::info
ctrl + shift + r  瀏覽器重新整理頁面(包括快取)
:::
:::warning
每次改完設定檔要reload一次才會套用
:::

### curl
+ `curl <url>` 對網站發請求
+ `curl <url> -I` 回應header
+ `curl --trace-ascii out <url>` 列出内容

### ftp
+ 檔案傳輸協定
+ 使用 20 port 跟 21 port (固定傳指令)
+ 明文
+ http://ftp.ncnu.edu.tw/

`vim ~/.ssh/config`

### sftp

+ 加密過的檔案傳輸協定
+ 使用方式基本上跟ftp相同
+ `sftp <ip/domain>`
+ `l<command>`:sftp連上之後想查看本地狀況，在每個command前面加`l`即可
+ `put <Filename>` 上傳到遠端
+ `get <Filename>` 下載到本地
:::warning
連線了才能打上指令
:::

[差異備份 vs 增量備份](https://ithelp.ithome.com.tw/questions/10089153)

### rsync 
https://zh.wikipedia.org/wiki/Rsync

```
-a 目錄底下檔案一齊上傳,並保留編輯日期
-v 詳細資訊
-r recursive
-e 指定port
-z compress
-h human readable
```
`rsync -vzh <file> <username>@<ip/domain>:<remote path> <local path>`:下載檔案

`rsync -avzh <file> <username>@<ip/domain>:<localpath> <remote path>`:上傳檔案

### rclone
+ 儲存裝置供應商
+ [設定 教學](https://blog.csie.io/rclone-loves-google-drive.html)

### Let's Encrypt
`sudo certbot --nginx`
https://letsencrypt.org/
Https 's' 的安全憑證

### Wildcard 
https://en.wikipedia.org/wiki/Wildcard_certificate
【坑】要先申請wildcard 再申請安全憑證（之前申請的要全砍掉）

