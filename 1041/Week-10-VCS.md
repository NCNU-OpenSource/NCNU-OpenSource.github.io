---
hackpadID: ypGaR7xT045
hackpadWorkspace: ncnu-opensource
tags: hackpad-import, ncnu-opensource
---
# 1041 Week 10 VCS

2015/11/19 

*   [Slide](https://docs.google.com/presentation/d/1-hyzhUS8YSUpqWKkqqms-ooJzahOL1-r4d-r00mwRZs/edit?usp=sharing)

[](https://github.com/NCNU-OpenSource/1041-Github-Demo)https://github.com/NCNU-OpenSource/1041-Github-Demo

github 新檔案上傳流程

1.git clone [http address]

2.將檔案放到clone後的資料夾

3.git add [file name]

4.git commit

5.git pull

6.git push

7.輸入帳密

8.done

指令

git clone [http address]

git status ：目前發生甚麼事

git diff 看你改了什麼

git add

git commit 寫一個紀錄檔

git push ：把檔案丟上去 (push之前要先pull到最新版本)

git pull：把最新的檔案拉下來

git log

git checkout

git branch ：在本機上新增一個分支

版本修改後的格式

add:

-......

change:

-.....

bugfixed:

-......

remove:

-.....

[](https://help.github.com/articles/set-up-git/)https://help.github.com/articles/set-up-git/

[](http://moodle.ncnu.edu.tw/course/view.php?id=26339)http://moodle.ncnu.edu.tw/course/view.php?id=26339

ftp有兩種運作模式，一個是 active (主動) 一個是 passive (被動)

用來傳遞客戶端與伺服器之間的命令，一般設在 port 21命令通訊埠(Command Port)

真正用來傳遞資料的，一般都設在 port 20資料通訊埠(Data Port)，Port 20 只會用在主動模式下

**Gmail IMAP, SMTP, POP3 設定值**

發表於 [2010 年 09 月 13 日](http://blog.longwin.com.tw/2010/09/google-gmail-set-value-2010/) 由 [Tsung](http://blog.longwin.com.tw/author/jon/)

Google Gmail 得 IMAP, SMTP, POP3 得設定值, 整理如下:

IMAP

*   imap.gmail.com
*   Port: 993
*   Use SSL: Yes

SMTP

*   smtp.gmail.com
*   Port for TLS/STARTTLS: 587
*   Port for SSL: 465

POP3

*   pop.gmail.com
*   Port: 995
*   Use SSL: Yes

**NetWork 問題：**

IP design

FW Rules

Routing

iptables ( 用來過濾封包 ) 

-A -s 0.0.0.0/0 (eth2)

 -d 1.2.3.4/28 (eth1)

 -j accept

*   -AI 鏈名：針對某的鏈進行規則的 "插入" 或 "累加"
*   -A ：新增加一條規則，該規則增加在原本規則的最後面。例如原本已經有四條規則，
*   使用 -A 就可以加上第五條規則！
*   -I ：插入一條規則。如果沒有指定此規則的順序，預設是插入變成第一條規則。
*   例如原本有四條規則，使用 -I 則該規則變成第一條，而原本四條變成 2~5 號
*   鏈 ：有 INPUT, OUTPUT, FORWARD 等，此鏈名稱又與 -io 有關，請看底下。

*   -io 網路介面：設定封包進出的介面規範
*   -i ：封包所進入的那個網路介面，例如 eth0, lo 等介面。需與 INPUT 鏈配合；
*   -o ：封包所傳出的那個網路介面，需與 OUTPUT 鏈配合；

*   -p 協定：設定此規則適用於哪種封包格式
*   主要的封包格式有： tcp, udp, icmp 及 all 。

*   -s 來源 IP/網域：設定此規則之封包的來源項目，可指定單純的 IP 或包括網域，例如：
*   IP  ：192.168.0.100
*   網域：192.168.0.0/24, 192.168.0.0/255.255.255.0 均可。
*   若規範為『不許』時，則加上 ! 即可，例如：
*   -s ! 192.168.100.0/24 表示不許 192.168.100.0/24 之封包來源；

*   -d 目標 IP/網域：同 -s ，只不過這裡指的是目標的 IP 或網域。

*   -j ：後面接動作，主要的動作有接受(ACCEPT)、丟棄(DROP)、拒絕(REJECT)及記錄(LOG)

 參考網站  ：  [](http://linux.vbird.org/linux_server/0250simple_firewall.php#netfilter_syntax)http://linux.vbird.org/linux_server/0250simple_firewall.php#netfilter_syntax

*   ip=1.2.3.4/32
*   network = 1.2.3.0/24

![](https://hackpad-attachments.s3.amazonaws.com/ncnu-opensource.hackpad.com_ypGaR7xT045_p.470593_1447906255011_IMG_20151119_120900.jpg)

public ip  and privite ip

[](http://bravo6608.pixnet.net/blog/post/3536022-public-ip-%E8%88%87-private-ip)http://bravo6608.pixnet.net/blog/post/3536022-public-ip-%E8%88%87-private-ip

**主動式 FTP**

FTP 伺服器開啟 port 21 接受來自外部任意通訊埠的連線(由用戶端要求建立連線) 

FTP 伺服器使用 port 21 連線到外部任一大於 1023 的通訊埠(回應用戶端的命令埠) 

FTP 伺服器使用 port 20 連線到外部任一大於 1023 的通訊埠(伺服器主動建立資料連線) 

FTP 伺服器開啟 port 20 接受來自外部任一大於 1023 的通訊埠連線 (用戶端回覆伺服器資料連線) 

![](https://hackpad-attachments.s3.amazonaws.com/ncnu-opensource.hackpad.com_ypGaR7xT045_p.475553_1448182226947_undefined)

**被動式 FTP (PASV)**

FTP 伺服器開啟 port 21 接受來自外部任意通訊埠的連線(由用戶端要求建立連線) 

FTP 伺服器使用 port 21 連線到外部任一大於 1023 的通訊埠(回應用戶端的命令埠) 

FTP 伺服器開啟一個大於 1023 的通訊埠，接受來自外部任一大於 1023 的通訊埠連線 (用戶端與伺服器建立資料連線) 

FTP 伺服器使用一個大於 1023 的通訊埠，連線到外部任一大於 1023 的通訊埠(伺服器回復資料給用戶端) 

![](https://hackpad-attachments.s3.amazonaws.com/ncnu-opensource.hackpad.com_ypGaR7xT045_p.475553_1448182243950_undefined)

passwd&shadow檔案：

[](http://blog.xuite.net/m740138.m740138/blog/23976669-passwd%E8%88%87shadow%E6%AA%94%E6%A1%88%E6%AC%84%E4%BD%8D%E8%AA%AA%E6%98%8E)http://blog.xuite.net/m740138.m740138/blog/23976669-passwd%E8%88%87shadow%E6%AA%94%E6%A1%88%E6%AC%84%E4%BD%8D%E8%AA%AA%E6%98%8E
