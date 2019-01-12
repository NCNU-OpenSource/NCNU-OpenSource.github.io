---
hackpadID: G84mt2KPRKY
hackpadWorkspace: ncnu-opensource
tags: hackpad-import, ncnu-opensource
---
# Week 3-4 Package Management & Command line

2015/03/19 LSA 

## LAMP 安裝

參考此網址 How to Install LAMP in Ubuntu Server 14.04 LTS

[](http://ubuntuserverguide.com/2014/06/how-to-install-lamp-in-ubuntu-server-14-04-lts.html)http://ubuntuserverguide.com/2014/06/how-t[o](http://ubuntuserverguide.com/2014/06/how-t-install-lamp-in-ubuntu-server-14-04-lts.html)-install-lamp-in-ubuntu-server-14-04-lts.html

**Apache**

*   安裝：sudo apt-get install apache2
*   修改 port：
    *   sudo vi /etc/apache2/ports.conf
    *   將 listen port 端改成 8081
    *   sudo vi /etc/apache2/sites-enabled/000-default.conf
*   重新啟動 apache --> sudo service apache2 restart  _or _ sudo /etc/init.d/apache2 restart
*   測試：[](http://127.0.0.1:8081)http://127.0.0.1:8081 

**info**

web server:Nginx Lighttpd

**3G**

*   Games
*   Gambling
*   Girls

**IPv4 區段**

*   IPv4 區段表
*   廣播封包位置
*   群播封包位置
*   Private IP 區段

## 使用者帳號

**some files**

*   /etc/passwd 以往使用者帳密放置於此
*   /etc/shadow 如今存放密碼的檔案，權限others無法讀取
*   /etc/group 
*   /etc/gshadow
*   /etc/skel

**一探究竟**

* 直接顯示 => sudo cat /etc/shadow

*   root : ! :... => 「!」 代表不讓 root 可登入

![](https://hackpad-attachments.s3.amazonaws.com/hackpad.com_G84mt2KPRKY_p.350566_1426734398256_undefined)

![](https://hackpad-attachments.s3.amazonaws.com/hackpad.com_G84mt2KPRKY_p.350717_1426753016371_undefined)

**group**

*   群組名稱：密碼：群組 ID：群組成員
    *   例：root : x : 0 : root

## apt

*   /etc/apt
    *   sudo apt-get update
    *   sudo apt-get install [name]
    *   sudo apt search [name]
*   /etc/sources.list
    *   建議修改為 [](http://ftp.ubuntu-tw.net/mirror/ubuntu/)http://ftp.ubuntu-tw.net/mirror/ubuntu/
    *   GUI 介面步驟：
        *   系統設定 => 軟體與更新 => 「Ubuntu 軟體」分頁
        *   將「下載自」選擇「其他」
        *   選擇 [](http://ftp.ubuntu-tw.net/mirror/ubuntu/)[h](ftp://ftp.ubuntu-tw.net/mirror/ubuntu/)ttp://ftp.ubuntu-tw.net/mirror/ubuntu/
        *   點選「選擇伺服器」
        *   取消點選「源碼」
    *   使用 vim 手動修改
        *   sudo vim /etc/apt/sources.list
        *   :%s/tw.archive.ubuntu.com/ftp.ubuntu-tw.net\/mirror/g
*   /etc/apt/soucres.list.d/

## host ssh to VM

*   VirtualBox
    *   Network 依舊使用 NAT
    *   進入 Network 設定中的 Port Forwarding
    *   新增規則
        *   Name: ssh
        *   Protocol: TCP
        *   Host Port: 3022
        *   Guest Port: 22
    *   重開 VM => sudo shutdown -r now
    *   在 host 使用 ssh -p 3022 [username]@127.0.0.1 連到 VM
    *   P.S. 記得 VM 要先裝 ssh
        *   安裝：sudo apt-get install openssh-server
        *   檢查是否執行：ps aux | grep ssh

## use software from a PPA

*   加入 PPA：sudo add-apt-repository ppa:[user]/[ppa-name]
*   更新：sudo apt-get update
*   可以安裝想要的套件了：sudo apt-get install [package-name]
*   [](http://www.webupd8.org/2012/01/install-oracle-java-jdk-7-in-ubuntu-via.html)http://www.webupd8.org/2012/01/install-oracle-java-jdk-7-in-ubuntu-via.html

## note

*   sudo [指令]
    *   取得暫時管理權限 
    *   **sudo**（**s**uper**u**ser **do**）
    *   允許使用者透過安全的方式使用特殊的權限執行程式。
    *   visudo : edit /etc/sudoers
*   su 
    *   登入為管理員
    *   也被称为“替代用户”、“超级用户”或“切换用户”，是可以让计算机操作者在[虚拟控制台](http://zh.wikipedia.org/w/index.php?title=%E8%99%9A%E6%8B%9F%E6%8E%A7%E5%88%B6%E5%8F%B0&action=edit&redlink=1)切换当前用户帐户的命令。
    *   没有其他[命令行参数](http://zh.wikipedia.org/wiki/%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%95%8C%E9%9D%A2)时，默认将会将当前用户[提权](http://zh.wikipedia.org/w/index.php?title=%E6%8F%90%E6%9D%83&action=edit&redlink=1)至本地[超级用户](http://zh.wikipedia.org/wiki/%E8%B6%85%E7%BA%A7%E7%94%A8%E6%88%B7)。
*   cd [目錄]
    *   切換目錄
*   man [指令]
    *   查詢某個指令的說明
    *   manual 簡稱
*   cat [檔案]
    *   直接印出檔案
*   ls 
    *   檢視當前目錄的文件 
    *   -a  顯示隱藏文件
    *   -l  List in long format. 
*   dpkg -L 檔名        
*   dpkg -S 檔案路徑
*   more [檔案]
    *   可翻頁檢視
    *   [](http://linux.vbird.org/linux_basic/0220filemanager.php#more)http://linux.vbird.org/linux_basic/0220filemanager.php#more
*   less [檔案]
*   adduser
*   kill
*   google/duckduckgo: ubuntu ppa java oracle
    *   [](http://www.webupd8.org/2012/09/install-oracle-java-8-in-ubuntu-via-ppa.html)http://www.webupd8.org/2012/09/install-oracle-java-8-in-ubuntu-via-ppa.html

*   /etc Host-specific system-wide [configuration files](http://en.wikipedia.org/wiki/Configuration_file)

drupal
