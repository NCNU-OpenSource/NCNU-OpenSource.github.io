# Week 06(2019/10/24)

### nginx (web server)設定檔位置
```
cd /etc/nginx
```
`nginx.conf`：主設定檔
基本的東西放在主設定檔，其他各式各樣的東西放在其他地方
```
/etc/nginx/sites-available
```
設定檔以供啟用，寫在裡面但並不一定有用到
```
/etc/nginx/sites-enabled
```
實際有在運作，連結到available以啟用

```
/etc/nginx/sites-available/default
```
預設檔案位置:

index index.php (line39):連結到你的index.php（或其他名字）

location:指定url，可以使用正則表達式

sever name(line41):對應到某個domain name 

server(line16):port

include xxx (line61、62):連結其他的東西進來使用

root:找檔案名稱、目錄去找檔案，沒有就回報404

連結檔案
`ln -s <src> <dst>`

使用絕對路徑如果更改位置會整個爆炸
所以使用相對路徑是較好的

log檔存於 var/log

### demo

新增html檔:
directory: `/var/www/html`
```
vim test.html
```
瀏覽器打開 `localhost/test.html` 即可顯示test畫面

如果 vim 中存取權限不夠(沒有 sudo), 可以用以下方式來儲存:
`:w !sudo tee %`

更改dafault檔:(/etc/nginx/sites-available)
到 sites-enable 去連結

確認語法是否有誤
```
sudo nginx -t 
```
reload nginx
```
sudo service nginx reload
```

到`/etc/hosts`設定一個本機host的 doamin name
```
sudo vim /etc/hosts
```
開啟瀏覽器看剛剛改的


### sever ip 與 domain 

一台伺服器，可擁有多組ip
127.0.0.1 : ip
google.com : 網域名稱
com.tw : 不屬於完整的網域名稱
.tw : 結尾域（ex：.org .edu .moe）

Fully qualified domain name(FQDN)

TCP:
```
收到會傳訊確認通道是否暢通
速度慢
```
UDP:
```
東西直接丟，丟了有沒有傳到不知道（射後不理）
速度快
```

![](https://i.imgur.com/d4Hirov.png)
![](https://i.imgur.com/va2oCCQ.png)

:laughing: :laughing: :laughing: 

### telnet
```
真正的屌咖上網是不用瀏覽器的
by BlueT(1984 ~ )
```
使用telnet連上指定網址
```
telnet ssh.bluet.org 80
```
bluet.org 為網址 80為port(網頁)
```
telnet 123.123.123 (ip)
```
也可以指定ip連線

### 

做一個連結到目的地位置
```
sudo ln -s ../sites-available/default default（後面的default 會連到前面的位置）
```
### 

```
sudo apt install lighttpd
```
```
sudo service nginx stop
```
```
sudo service lighttpd start
```
到 /etc/lighttpd 裡 .conf 開 8080 port




>真正的屌咖上網是不用瀏覽器的
>[name=BlueT][time=Thu, Oct 24, 2019 6:24 PM][color=#2f6db5]

```
>>> type(BlueT)
>>> <class '屌咖'>
```
