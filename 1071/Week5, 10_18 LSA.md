# Week5, 10/18 LSA
### 檔案權限
+ `chmod +x <filename>`替案檔所有人添加執行權限
+ `u/g/o +/- r/w/x` 替特定群組添加權限
+ 用數字來代表各個權限
    + r:4
    + w:2
    + x:1
    + -:0
+ `chmod 444 test.txt`
    權限變成`-r--r--r--`
+ `chmod 111 test.txt`
    權限變成`-x--x--x--`
+ `chmod 000 test.txt`
    權限變成`----------`
+ `chmod 777 test.txt`
    權限變成`-rwxrwxrwx`
+ `chmod g+r test.txt`
	+ 將權限加給group

:::info
+ 問題:有辦法去砍身份不是自己的檔案？
有電腦的最高權限就可以 `sudo rm -rf Maildir`
如果沒有電腦的最高權限是沒辦法刪的哦
如果本來是自己沒有權限(不能讀)的檔案 copy 到自己的 home/ 底下，還是沒辦法讀的
+ 問題:什麽是把root 關掉？ 
其實是避免root這個賬號被別人/遠端登入

- root這個帳號沒有辦法被遠端登入
- root 是所有系統都會有的帳號

+ 問題：硬碟分割的意義？
如果整個大分割區有一個小地方壞掉就會影響整個分割區，但是磁碟分割後，壞掉了我們就只需要一個分割區一個分割區救援，甚至判斷壞掉分割區的重要程度，去考量要花多少時間金錢救援
磁區分很細的壞處: 一滿就是爆了 就寫不進去了，如果再加的話的功夫還蠻高的，例如：停機，有掉資料的風險
一個分隔區有沒有辦法在兩顆硬碟上面。簡單來説NO，複雜來説YES，可以透過軟體,lvm 但是做法複雜，也有風險。
  
:::
tmp 不容使用者去交換檔案的地方。 因爲他又 t bit.

auth.log 是任何外部連缐都會記錄在這裏 ，内容包括ip , 名字 等等。

### FHS
`/boot` 跟根目錄通常會放在同一個硬碟裏面。
`/boot` 2-3版本的系統的版本，開機檔案50MB左右
`/boot` 可以不用分割
`/swap` 最少要記憶體的一半，如果是桌機可以用到記憶體的兩倍。
`/usr` 不太需要把這個磁區分割出來
`/var` 底下的/cache, /lib等等的獨立出來

### Telnet 
+ 輸入什麽東西在網路上都可以抓到，是純明文
+ BBS 也是一種Telnet服務

### Http
+ 都走純明文
+ Connection Status 代碼
	+ 200 Ok
	+ 300 滾蛋(redirect)
	+ 400 使用者問題
	+ 500 伺服器問題
+ HTTP/1.0 版本是最老的穩定版

### 指令
+ ` du -sh <directory>` : disk usage `-s` summary `-h` human readable
+ `whois` : 查看ip所屬單位
+ `host`: 查看網址的ip
+ `telnet <ip/domain> <port>`: 遠端連線(明文)
+ `ssh <username>@<ip/domain>`: 遠端連線(密文)
+  `apt list-upgrade` 確定要更新的

### 小知識
+ [LVM](https://zh.wikipedia.org/wiki/%E9%82%8F%E8%BC%AF%E6%8D%B2%E8%BB%B8%E7%AE%A1%E7%90%86%E5%93%A1) (Logical Volume Management)
+ [Local Exploit](http://www.yourdictionary.com/local-exploit-or-intrusion)
+ [SSD比較不穩定](https://www.mobile01.com/topicdetail.php?f=159&t=5090784)
	+ 有使用限制的
	+ 寫入多會比較快老化
	+ SSD存的檔案超過70%是會變慢的
	+ SLC 是比較耐寫的版本
+ VPS (Virtual Private Server) 虛擬主機
+ 如何讓機器知道使用者要連入機器的服務？輸入Port， 個別Port 個別服務。
+ demo網址 http://ftp.ubuntu-tw.org/
+ [Virtual Host](https://zh.wikipedia.org/wiki/%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA) : 在一臺機器擺很多不一樣的網站，回傳的東西會依據網址列輸入的東西。
+ aptitude
	+ / 搜尋
	+ ^ 開頭
	+ $ 結尾
	+ n 下一筆
	+ q 往上一層跳
	+ i 開頭代表要安裝的
	+ A 開頭代表Auto
	+ gg 確定安裝
	+ `+` 要安裝 (綠色)
	+ `-` 要卸載 (紫色)
	+ u update
### VPS
digitalocean 邀請連結(BT提供):
https://m.do.co/c/7a14e0e84052 

