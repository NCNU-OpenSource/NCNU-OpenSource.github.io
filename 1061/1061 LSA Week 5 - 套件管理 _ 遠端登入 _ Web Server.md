# 1061 LSA Week 5 - 套件管理 / 遠端登入 / Web Server

## 套件管理
[RPM](https://en.wikipedia.org/wiki/Rpm_(software)) 套件管理功能較差，使用久了容易？？(安全性低，長期使用難以管理?)

### apt

=> Ubuntu 和 Debian 所用的套件管理程式

`$/var/lib/apt/lists` 常變的目錄

可用 `cat` or `less` 看看 `/etc/apt/sources.list` （軟體的載點清單）

sudo apt update
sudo apt install [name]
sudo apt search [name]

#### 套件來源清單（source.list）

所在位置：`/etc/apt/sources.list`

建議將來源改為在 NCNU 的 mirror 站： `ftp.ubuntu-tw.net`

- GUI 介面修改步驟：
    - 系統設定 => 軟體與更新 => 「Ubuntu 軟體」分頁
    - 將「下載自」選擇「其他」
    - 選擇 hftp://ftp.ubuntu-tw.net/mirror/ubuntu/
    - 點選「選擇伺服器」
    - 取消點選「源碼」
- CLI 介面修改步驟：
    - 使用 perl 
        - 將 `/etc/apt/sources.list` 做文字取代
        - `$ sudo perl -pi.bak -e 's/tw.archive.ubuntu.com/ftp.ubuntu-tw.net/' /etc/apt/sources.list`
        - 指令說明：
            - `-p` 為一行一行進行處理 
            - `-i` 對檔案進行備份
            - `-e` 處理方法 's/目標字串/要替換成的字串/'
    - 使用 vim
        - __
    - 使用 sed
        - `$sudo sed -i 's/tw.archive.ubuntu.com/ftp.ubuntu-tw.net/g' /etc/apt/sources.list`

### perl

- 很久很久以前就存在一把很厲害瑞士刀叫做 [Perl](https://en.wikipedia.org/wiki/Perl) 
- 所有 Linux 系統預設安裝


可在 CLI 直接執行單行程式：
`perl -E 'say 345*4567'` 
`perl -e 'print 123*123'`

### aptitude
sudo aptitude
crtl t - 列表
q 退出、上一層
/ 搜尋（可以使用正規表達式）
* 搜尋 `^lib` 以lib開頭,配合 n 往下搜尋
* 搜尋 `-per$` 以per結尾
* 按 `+` 兩次`g` 即可安裝選取套件  
* (取消選取-->ctrl+`-`)

pi - purge install, 從沒安裝過的乾淨安裝
參考文件：
https://wiki.ubuntu-tw.org/index.php?title=Aptitude

### 查看 network interface 資訊
`ifconfig` 
- eth? 表示有線網路
- w??? 表示無線網路 (ex wls1)

### SSH
`ssh user@ip_addr_or_domain_name -p port`
-X  代表 X11 forwarding，有機會使用圖形化界面軟體
-v  偵錯模式，會顯示詳細狀態訊息
如果本機用戶名跟遠端一樣，可以不用 user@
如果使用預設 22 port，可以不用 -p port
不想輸入密碼或密碼太多不便管理，可以使用金鑰登入 `ssh-copy-id {{user}}@{{host}}`
產生 ssh key `ssh-keygen -t rsa`

### 三種常見 http server
* Apache    8080
* lighttpd  8081
* Nginx     80
:::info
安裝時建議可以改完port再安裝下一個, 避免port衝突
:::

若想同時使用多個 http server可以使用 proxy
若想多個域名對應到同一個IP可以使用 name base 的 virtual host

### 安裝 drupal7
- POSTFIX 為郵件伺服器
- 設定檔放在 available裡面
- `$ln -s /etc/apache2/sites-available/default-ssl.conf /etc/apache2/sites-enabled/`
- `$sudo service apache2 restart`
- `$sudo a2ensite your_site`
- `$sudo netstat -nutpl|grep apache`
- `$sudo vim /etc/apache2/ports.conf` 改成 8080 port,避免待會安裝其他 http server會造成衝突
- `$sudo service apache2 restart` 重新啟動
- `$sudo netstat -nutpl|grep apache` 
- `$sudo apt install lighttpd nginx-full`

### dpkg 介紹
- `dpkg -la` 列出已安裝套件 
- -l list
- -a all


#### 正規表達式
/a/	含字母 “a” 的字串，例如 “ab”, “bac”, “cba”	“xyz”
/a./	含字母 “a” 以及其後任一個字元的字串，例如 “ab”, “bac”（若要比對.，請使用 \.)
/^xy/	以 “xy” 開始的字串，例如 “xyz”, “xyab”（若要比對 ^，請使用 \^）
/xy$/	以 “xy” 結尾的字串，例如 “axy”, “abxy”以 “xy” 結尾的字串，例如 “axy”, “abxy” （若要比對 $，請使用 \$）
[13579]	包含 “1” 或 “3” 或 “5” 或 “7” 或 “9” 的字串，例如：”a3b”, “1xy”	“y2k”
[0-9]	含數字之字串
[a-z0-9]	含數字或小寫字母之字串
[a-zA-Z0-9]	含數字或字母之字串
b[aeiou]t	“bat”, “bet”, “bit”, “bot”, “but”
[^0-9]	不含數字之字串（若要比對 ^，請使用 \^）
[^aeiouAEIOU]	不含母音之字串（若要比對 ^，請使用 \^）
[^\^]	不含 “^” 之字串，例如 “xyz”, “abc”
> 

## 作業筆記區

:::warning
記得先修改apache port to 8080
:::

### lighttpd

- `$sudo aptitude`: 開啟圖形化套件管理頁面
- 按下`/`輸入`^lighttpd$`: 搜尋lighttpd
- 對`lighttpd`按+: 選取安裝
- 按`GG`: 安裝
- `$sudo vim /etc/lighttpd/lighttpd.conf`
- 更改`server.port = 8081`
- `$sudo /etc/init.d/lighttpd start`: 啟動服務
- `$sudo netstat -ntupl | grep lighttpd`: 查看服務是否開啟 

### nginx

- `sudo apt-get install nginx-full`

安裝完應該就預設跑在80 port

- `sudo netstat -ntupl | grep 'nginx\|apache\|lighttpd'`: 查看nginx、apache、lighttpd分別run在哪個port