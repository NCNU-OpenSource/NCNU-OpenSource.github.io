# Week7, 11/1 LSA

`^` 開頭
`$` 結尾
`*` 任意字元

### nginx php 設定
```
# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000

location ~ \.php$ {
    include snippets/fastcgi-php.conf;
    
    # With php7.0-cgi alone:
    fastcgi_pass 127.0.0.1:9000;
    # With php7.0-fpm:                                                                         
    fastcgi_pass unix:/run/php/php7.0-fpm.sock;
}`
```
### nginx access control
```
# deny access to .htaccess files, if Apache's document root
# concurs with nginx's one
     location ~ /\.ht {
     deny all;
 }
```

### sftp 
+ `sftp -v destination `  -v 可以看連綫的過程，讓自己知道有沒有在跑
+ `put <家目錄> <遠端目錄>` 上傳
+ 有 `l` 的指令是給local 的指令 ， 沒有在指令前面加上`l`是給遠端目錄的。

### ftp 
`port 21` 固定傳指令
`port 20` 傳指令

#### 指令
`sftp -v localhost`sftp連線本機
`ps aux` 看電腦程序
`ps aux | less ` 看電腦程序(分頁式)
`ps aux | grep ssh` 查看ssh是否正在跑
`get <filename>`下載檔案
`put <filename>`上傳檔案
`get -r <filename>`下載資料夾
`put -r <filename>`上傳資料夾
`l<command>`在本機下指令 ex: `lpwd`, `lcd`, `lls` 
`exit` 退出
`mkdir -p a/b/c/d/e/`一次創多層資料夾
`tree` 小朋友下樓梯

:::info
*測試環境*

ip: 128.199.104.77
username: lsa
passwd: ~!@#$%^&*()_+
:::

:::success
**練習**

`sftp -v xxx@xxxxx`

**(1)**
cd /tmp/
ls
lcd /home/xxxx/
lmkdir 123456789
lcd 123456789
pwd
lpwd

**(2)**
get abc.def
ls
lls

**(3)**
cd 123456789
pwd
lpwd

**(4)**
put abc.def
pwd
ls
lpwd
lls
:::

### rsync
`rsync rsync://ftp.ubuntu-tw.net`

`rsync rsync://ftp.ubuntu-tw.net/ubuntu/dists/xenial/`

`rsync rsync://ftp.ubuntu-tw.net/ubuntu/dist/xenial/Release.gpg ./`

`rsync -av <source> <destination>` 同步雙方資料


rsync同步遠端主機檔案(ssh)
```
rsync -av --delete -e ssh username@xxx.xxx.xxx:/var/www /home/backup/www
```

### crontab
`crontab` 定義定時執行某事件

`sudo vim /etc/crontab`　crontab設定檔

`crontab -l` 列出crontab

`crontab -e` 新增或刪除修改, 會告知是否有做更動

`crontab -r` 刪除crontab

:::warning
請愛用`crontab`指令來設定個人自動化腳本
非必要不用去動到`/etc/crontab`
:::


測試指令 : 
`*/5 * * * * rsync -av rsync://ftp.ubuntu-tw.net/ubuntu/dists/xenial/  /home/bluet/tmp/rsync/xenial/`

[crontab](https://crontab.guru/every-5-minutes)

`/`: 代表"每"
`*`: 代表範圍
`-`: 從哪邊到哪邊

### major webserver
+ nginx　一次可以處理多使用者(連線),適合做proxy server
+ apache 功能很多,速度較慢
+ lighttpd 靜態檔案處理能力佳


`sudo /etc/init.d/<service name> stop`停止某個服務

`sudo service <service name> stop`停止某個服務

`sudo service <service name> status`查看服務status

`sudo netstat -ntupl`只列出正在監聽中的被動等別人來連的port

`0.0.0.0:*`全部封包都接收 

`0.0.0.0` 本機的所有網卡

`sudo iftop` 監聽網卡工具

`w3m http://<url>` 純文字瀏覽網頁

