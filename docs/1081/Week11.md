# LSA 期中考試

## 手寫

### A - 基本

1. 請問 BT 的 Telegram ID 跟中文名字是什麼？
2. 請問三名助教的中文名字是什麼？
3. NCNU opensource Facebook 的網址是什麼？
4. 請寫出三個你用過的指令跟它的功能？

### B - VM

1. 請問`NAT 網路`, `僅限主機介面卡`, `橋接介面卡` 有何不同？
2. 為何我們一開始用 `NAT 網路` 後來又改成`僅限主機介面卡`？
3. 請問`.iso` 和 `.vdi` 有什麼樣的差別？

### C - 網路

1. 請問課堂上 VM 中拿不到正確 IP address 或是沒 IP address 有可能是哪個（些）部份出了問題？要怎麼解決？

2. 請問如何查看 domain name （並非本機自己設定的）對應的 IP address 位置？請寫出至少兩種或以上方法。（例：google.com）

3. 課堂上提過的 8.8.8.8 與 1.1.1.1 這兩台主機是什麼主機？如何在系統中使用他們？

4. 請判斷以下的 IP address 網段是否相同（要附上過程） 
    - 10.3.127.128/16 與 10.5.1.1/16
    - 192.168.129.218/25 與 192.168.123.1/25

### D - iptables
![](https://i.imgur.com/9Sdd2Qp.png)


（全部 chain 的 policy 請設定為 **DROP**）

1. NAT 區域
    a. 可以連線至 BBI 
    b. 不能被 BBI 連線

2. DMZ 區域
    a. 不能連線至 BBI **（ssh s3 例外）**
    b. 可以被 BBI 連線

3. ssh s3（s3 只是一台區域內的主機）
    a. 可以連線至 NAT 區域
    b. 可以被 BBI 連線

## 實作 (做完舉手請助教看 demo)

1. 請創建一個檔案 private_file，權限改成擁有者可讀可寫可執行，同群組可讀不可寫不可執行，其他人不可讀不可寫不可執行。

2. Linux 中有一個好用的東西叫 crontab，搭配 rsync 使用會是一套很方便的備份流程。請利用 man 或是網路上的資源，查詢 crontab 的設定方式，與 rsync 搭配在每天半夜 3 點鐘，自動將本機 /etc 備份至遠端主機（自行命名）。（切記！請使用差異備份）

3. 有個網域 55669478.gy 的 IP 應為 220.133.158.125，請用課堂教過的方法，以其網域名稱和其 IP 分別測試主機是否在線上。請說明結果與可能的原因。

4. 請在本機架設一個系統，架構為本機架設前端 Nginx 做 reverse-proxy 把使用者請求轉送給 VM 上的後端 Lighttpd 伺服器。Lighttpd 的 index filename 設定為 yi-bra-o.html 內容為包含 “LSA-I 108”的任意資訊。
    - 完成之後使用本機的純文字瀏覽器輸入 http://my-lighttpd/ 時會連到本機 nginx 並被 proxy 得到虛擬機裡面 lighttpd 的頁面。
    
    - 顯示的是自訂的預設頁面內容（yi-bra-o.html 的內容）。

    - 請設定 Nginx 讓後端伺服器能取得 Client 的正確 IP address。

    - 請由 Client 發出一個 HTTP Request，讓 Lighttpd 誤判 Client IP 為偽造的來源。你可以使用瀏覽器 or wget or curl or 任何工具。


## 挑戰題

### 挑戰（一）

網管人員吉吉想要讓每個使用者都能夠擁有個人網頁，但在 `/var/www/html` 目錄底下大多是其公司重要網頁，不敢恣意開權限給大家編輯。而吉吉聽說大多網管人員的做法是使用 Apache 的 UserDir 功能，你可以幫助吉吉設定好嗎？下面連結為範例網站
https://www.csie.ntu.edu.tw/~hungsh/

但是後來，吉吉又發現 Apache 效能不好想換成 Nginx，你可以再次幫助吉吉使用 Nginx 設定 UserDir 嗎？

### 挑戰（二）

吉吉最近在機器上想瀏覽 google 網頁，卻發現機器好像中毒了，總是跳出奇怪的頁面，請嘗試找出原因，不需修復。
```
遠端機器的 IP：54.81.189.210
使用者名稱：student
密碼：LSA
```

### 挑戰（三）
同樣都是遠端連到一台機器上，為什麼 ssh 可以連線但是 sftp 卻不行呢？

```
遠端機器的 IP：52.68.8.53
使用者名稱：student
密碼：LSA
```
