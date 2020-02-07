# Week 14

### sshfs
把遠端家目錄掛到當前目錄中 ncnu 目錄下
```
sshfs xxx@ip:sources ./ncnu/ 
```
### ftp
查看檔案伺服器狀態
```
sudo service proftpd status
```
ftp 連接檔案伺服器
```
ftp x.x.x.x(ip) 
```
連線後 login
會變為: `ftp>`
```
ls:列出檔案伺服器目錄底下的東西
!ls:查看當地目錄的東西
(加!就是本地)
```
下載檔案
```
get 檔案
mget 檔案 //multiple get
```
上傳檔案
```
put 檔案
mput 檔案 //multiple put
```
在瀏覽器網址輸入:
```
ftp://ip
```
會有較直觀UI

### filezilla
filezilla:
```
sudo apt install filezilla
```
可以有介面執行ftp上傳與下載

### proftpd 
/etc/proftpd/proftpd.conf
打開匿名使用者存取權
```
anonymous 匿名使用者
匿名使用者的存取權限管控
```

查看ftp的使用紀錄及用戶
```
ftpwho
```
查看ftp的用戶數量
```
ftpcount
```
config檔案架構
`````
# 關於主機相關的設定
設定項目一  參數內容
設定參數二  參數內容
　
# 關於某些目錄的權限設定
<Directory "完整目錄名稱">
...
...
...
</Directory>
　
# 關於 Anonymous 的目錄與權限設定
<Anonymous "匿名登入時候的匿名者根目錄">
...
...
　<Limit 一些動作>
　...
　...
　</Limit>
</Anonymous>
`````


### .ftpaccess
http://manpages.ubuntu.com/manpages/bionic/zh_TW/man5/ftpaccess.5.html

### sftp
基本上跟ftp一樣，但一定要有帳號密碼才能存取（不允許匿名使用者）
```
sftp 
```


### load balance
不同 worker(apache + lightpd + nginx ) 一起工作分工分擔龐大的網路工作

:::danger
記得 default 先備份一個
:::

cd /etc/nginx/sites-avaliable/default
```
upstream backend {
        server 127.0.0.1:8080;
        server 127.0.0.1:8081;
    }
server {
        listen 80;
        
        location / {
            proxy_pass http://backend;
        }
    }
```
### 環境架設
```
nginx 80 port
apache 8081 port
lighttpd 8080 port
```

### 改apache port

cd /etc/apache2/
sudo vim port.conf


![](https://i.imgur.com/t6C5Pd7.png)


重啟server
```
sudo service apacge2 restart
sudo service lighttpd restart
```



`ls /var/www/html` 底下有三個 index
```
index.html 
index.lighttpd.html
index.nginx-debian.html
```

### change Nginx load balance algo: 
http://nginx.org/en/docs/http/load_balancing.html


### raspberry
開啟設定畫面
```
sudo raspi-config  
```
連線到網路 > network options

電腦跟 raspberry 連同網路 > ssh 進raspberry
```
ifconfig eth0
```

在pi中建立mail.py檔案，程式碼如下：
```python=
#!/usr/bin/python
import subprocess
import smtplib
import socket
from email.mime.text import MIMEText
import datetime

# Which email address want to send
to = 'XXX'#(自己的gmail信箱)

# Using specific gmail account
gmail_user = 'XXX'#gmail帳號
gmail_password = 'XXX'#gmail密碼

# SMTP command
smtpserver = smtplib.SMTP('smtp.gmail.com', 587)
smtpserver.ehlo()
smtpserver.starttls()
smtpserver.ehlo()
smtpserver.login(gmail_user, gmail_password)
today = datetime.date.today()

# Linux Specific shell command
arg='ip route list'
p=subprocess.Popen(arg,shell=True,stdout=subprocess.PIPE)
data = p.communicate()
split_data = data[0].split()
ipaddr = split_data[split_data.index('src')+1]
my_ip = 'Your ip is %s' %  ipaddr
msg = MIMEText(my_ip)
msg['Subject'] = 'IP For RaspberryPi on %s' % today.strftime('%b %d %Y')
msg['From'] = gmail_user
msg['To'] = to
smtpserver.sendmail(gmail_user, [to], msg.as_string())
smtpserver.quit()
```

### gmail 開啟低安全性應用程式
https://myaccount.google.com/lesssecureapps

用途是寄送在樹莓派開機時，寄送郵件來發出樹莓派ip
到gmail設定低安全應用程式存取權 > 開啟
```
chmod +x mail.py
./mail.py
```
如果遇到編碼問題無法寄信，程式碼前面加上
```
#coding=utf-8
```
###
:::danger
要記得去目標信箱收信，嘗試太多次可能是 ip 被 gmail ban 掉，
換一個 ip 試試看。
:::

開機時會執行的程式
### 
```
sudo vim /etc/rc.local
```
# hw

自行 繼電器 & gpio
期末專題規劃(組名!!!極重要!!!)

[繼電器的簡單 demo](https://hackmd.io/@minecola/HJVurQD0H)

