# Week 4 LAMP, Drupal, and other HTTPd

**Apache 資訊**

/etc/apache2/mods-available$

ls |grep "mpm"

MPM (Multi-processing modules)

*   worker：影分身
    *   worker是多進程多線程模型，一個進程有多個線程，每個線程處理一個連接。與prefork相比，worker模式更節省系統的內存資源。不過，需要注意worker模式下的Apache與php等程序模塊的兼容性。
*   prefork ：人海戰術
    *   prefork中沒有線程的概念，是多進程模型，一個進程處理一個連接；穩定；響應快。其缺點是在連接數比較大時就非常消耗內存。
*   event：接到request就新增一個thread來解決需求 (跟worker同類，比它好)：
    *   event是worker模式的變種，它把服務進程從連接中分離出來,在開啟KeepAlive場合下相對worker模式能夠承受的了更高的並發負載。 event模式不能很好的支持https的訪問（HTTP認證相關的問題）。

KeepAlive 預設off,建議改成on >>用於設定伺服器要不要開啟連續請求的功能，

KeepAliveTimeout 設定持續多長的時間關閉連線 >>用於設定使用者 『連續』 請求等待的時間上限，如果使用者連續請求的時間超過此數，則終止此請求服務。

MaxKeepAliveRequests >>設定伺服器所能接受之最大連續請求量

VVV [](http://apache.jz123.cn/mod/prefork.html)http://apache.jz123.cn/mod/prefork.html VVV

StartServers - apache一執行的process數，可同時處理的request數

MinSpareServers

MaxSpareServers

ServerLimit - Server 允許配置process數上限, 設定應 >= MaxClients

MaxClients - 最大可同時處理的 connection 數

MaxRequestsPerChild - 一個Apache sever在處理該數目後，會自動中止並重啟

ThreadLimit

ThreadsPerChild

**DPKG 工具**

sudo dpkg-reconfigure (INSTALL 的套件名稱)   >> 重新設定

dpkg -L (套件名稱)  >> LIST套件的所有FOLDER & FILE

dpkg -S (路徑) >> 查看FOLDER/FILE 是那個套件的

**Lighttpd 資訊**

lighttpd << 用在靜態網頁最好

[](http://redmine.lighttpd.net/projects/lighttpd/wiki/Docs_Configur)http://redmine.lighttpd.net/projects/lighttpd/wiki/Docs_Configur           Welcome to lalala.com        ation

[](http://redmine.lighttpd.net/projects/lighttpd/wiki/Docs_ModProxy)http://redmine.lighttpd.net/projects/lighttpd/wiki/Docs_ModProxy

lighty-enable-mod > proxy    **最後一招必用秘技**

**針對本機設定假的 DNS 查詢資料**

/etc/hosts

/etc/resolv.conf

**Drupal**

*   安裝：[](http://blogs.yyes.chc.edu.tw/post/2/2714)[http://blogs.yyes.chc.edu.tw/post/2/2714](http://blogs.yyes.chc.edu.tw/post/2/2714)
*   [](https://help.ubuntu.com/community/Drupal)[https://help.ubuntu.com/community/Drupal](https://help.ubuntu.com/community/Drupal) << 最可信

ubuntu drupal multi sites

/etc/drupal/7/sites/

**Drupal + VirtualHost + multi-site 教學文件**

[](http://ubuntuguide.org/wiki/Drupal7_tips#Multi-site_Installation)http://ubuntuguide.org/wiki/Drupal7_tips#Multi-site_Installation 

*   #
*   # Virtual hosting configuration for Drupal6
*   #
*   #
*   <VirtualHost *:8080>
*   ServerAdmin _webmaster_@_mysite_1.mydomain.org_
*   #
*   DocumentRoot /usr/share/drupal7/
*   ServerName _mysite_1.mydomain.org_
*   ServerAlias *._mysite_1.mydomain.org_ _mysite_1.mydomain.org_
*   RewriteEngine On
*   RewriteOptions inherit
*   </VirtualHost>
*   #
*   <VirtualHost *:8080>
*   ServerAdmin _webmaster_@_mysite_2.mydomain.org_
*   #
*   DocumentRoot /usr/share/drupal7/
*   ServerName _mysite_2.mydomain.org_
*   ServerAlias *._mysite_2.mydomain.org_ _mysite_2.mydomain.org_
*   RewriteEngine On
*   RewriteOptions inherit
*   </VirtualHost>

*   注意事項：
*   1\. 文章內很多地方打成 drupal6，我們要用 druapl7
*   /ports.conf 2\. 文章中，「sudo cp -r /etc/drupal/6/sites/default /etc/drupal/6/sites/_mysite_1.mydomain.org」中的「cp -r」應改成「cp -a」，否則會有錯誤 ( 錯誤是指 檔案的權限設定錯誤，導致無法連接)_
*   3\. sudo rm /etc/drupal/6/sites/_mysite_2.mydomain.org_/files  在files 後面加 /  即GG , 恭喜你直接幹掉系統檔
*   4\. 文章中「sudo nano /etc/apache2/sites-available/_drupal6virtualhost_」應改為「」(檔案後面要有 .conf)(沒有conf 的話會LOAD不到設定)，並且之後的「sudo ln -s /etc/apache2/sites-available/_drupal6virtualhost_ /etc/apache2/sites-enabled」也要跟著改為「sudo ln -s /etc/apache2/sites-available/_drupal6virtualhost_.conf /etc/apache2/sites-enabled」
*   5\. /etc/hosts 裡要新增 IP             DOMAINNAME
*   6\. 最後到 DOMAINNAME:PORT/drupal7/install.php
*   7.  a2ensite drupal7virtualhost.conf     domainname:8080/  就能指向DRUPAL
*   8\. restart apache

default 是一個模具

sudo netstat -ntupl   查詢本機網路和外界網路連線的指令

## Homework 4 步驟

**LAMP**

*   安裝 Apache（apache2）、MySQL（mysql-server）、PHP（php5）
*   修改 Apache 的 Listen port 為 8080 
    *   修改檔案 /etc/apache2/ports.conf 
*   設定 Apache 的 VirtualHost
    *   新增一個 site 設定檔 /etc/apache2/sites-available/drupal.conf
        *   設定兩個 VirtualHost
        *   Port 皆為 8080
        *   ServerName 分別為 wow.com 及 lalala.com
        *   DocumentRoot 皆為 /usr/share/drupal7
        *   因為兩個網站皆吃同一個 Drupal 程式碼，讓 Drupal 自己處理 multisite。
    *   啟用該網站設定
        *   sudo a2ensite drupal.conf
*   重新啟動 Apache 
    *   sudo service apache2 restart

**Lighttpd**

*   安裝 Lighttpd（lighttpd）
    *   sudo apt-get install lighttpd
*   Redirect all connections on wow.com or lalala.com to 127.0.0.1:8080
    *   修改檔案 /etc/lighttpd/conf-available/10-proxy.conf
    *   用意：讓 Lighttpd 偵測到 HTTP header 的 host 欄位為 wow.com 或 lalala.com 時，將之轉給 Apache（本機:8080）/ports.conf 
    *   [關於 HTTP header](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields) [](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields)http://en.wikipedia.org/wiki/List_of_HTTP_header_fields

![](https://hackpad-attachments.s3.amazonaws.com/hackpad.com_ujJqgyYdkmL_p.350566_1427980421413_Screenshot from 2015-04-02 21:12:08.png)

*   啟用 mod 設定
    *   sudo lighttpd-enable-mod proxy
    *   會自動將 /etc/lighttpd/conf-available/10-proxy.conf 複製（還是連結？）到 /etc/lighttpd/conf-enabled/10-proxy.conf
*   重新啟動 Lighttpd
    *   sudo service lighttpd restart

**Drupal**

*   安裝 Drupal 7（drupal7）
    *   安裝後位置會在 /etc/drupal/7/
*   Register the Drupal module with Apache
    *   拷貝原有之設定檔至 apache 的 mods-available 目錄下，並改名為 drupal.conf
        *   sudo cp /etc/drupal/7/apache2.conf /etc/apache2/mods-available/drupal.conf
    *   啟動該模組
        *   sudo a2enmod drupal
    *   [optional]  啟動 Apache 的 rewrite 模組
        *   sudo a2enmod rewrite
    *   重新啟動 Apache
*   設定 Drupal multisite

*   一開始安裝 Drupal 時，DB、網站名等資料皆設定於 /etc/drupal/7/sites/default/ 中，因此要把該資料夾複製並改名。

*   複製 /etc/drupal/7/sites/default/ 並改名為 wow.com
    *   sudo cp -a /etc/drupal/7/sites/default /etc/drupal/7/sites/wow.com
*   重新設定 Drupal 
    *   使用 dpkg-reconfigure 來重新設定 drupal7 這個已安裝的 package
        *   sudo dpkg-reconfigure drupal7
    *   重新設定時，等於是重新裝一個新的 Drupal site，因此設定要與前一個不同。
        *   Reinstall database for drupal7 ? => Yes
        *   MySQL username => 換一個
        *   MySQL database name => 換一個

*   修改 host，將 wow.com 及 lalala.com 指向本機，避免連到網際網路上真正的 wow.com 跟 lalala.com。
    *   修改 /etc/hosts
    *   增加兩項
        *   127.0.0.1 wow.com
        *   127.0.0.1 lalala.com
*   安裝 Drupal site
    *   開啟 [](http://wow.com)http://wow.com 及 [](http://lalala.com)http://lala[l](http://lala)a.com 進行安裝
    *   lighttpd 會自動將這兩個網址轉到 8080 port 給 Apache 處理

**測試**

*   檢查網路連線狀態
    *   sudo netstat -ntupl
    *   port 80 是否由 lighttpd 監聽？ 
    *   port 8080 是否由 apache2 監聽？
    *   [](http://wow.com)http://wow.com 及 [](http://lalala.com)http://lalala.com 是否為不同的 Drupal 站

**Q&A**

## Other

*   /usr/share/drupal7/.htaccess

<FilesMatch "**\.(engine|inc|info|install|make|module|profile|test|po|sh|.*sql|theme|tpl(\.php)?|xtmpl)(~|\.sw[op]|\.bak|\.orig|\.save)?$|^(\..*|Entries.*|Repository|Root|Tag|Template)$|^#.*#$|\.php(~|\.sw[op]|\.bak|\.orig\.save)$**">

  Order allow,deny

</FilesMatch>

*   minimum configuration
    *   [nginx + php5-fpm](http://wiki.nginx.org/PHPFcgiExample) 

*   root /usr/share/drupal7;
*   server_name <u>domain.tld</u>;
*   location ~ \.(htaccess|engine|inc|info|install|make|module|profile|test|po|sh|.*sql|theme|tpl(\.php)?|xtmpl)(~|\.sw[op]|\.bak|\.orig|\.save)?$|^(\..*|Entries.*|Repository|Root|Tag|Template)$|^#.*#$|\.php(~|\.sw[op]|\.bak|\.orig\.save)$ {
*   deny all;
*   }

*   [lighttpd + php-cgi](https://wiki.ubuntu.com/Lighttpd%2BPHP) 

*   $HTTP["host"] == "**<u>domain.tld</u>**" {
*   server.document-root = "/usr/share/drupal7"
*   $HTTP["url"] =~ "\.(htaccess|engine|inc|info|install|make|module|profile|test|po|sh|.*sql|theme|tpl(\.php)?|xtmpl)(~|\.sw[op]|\.bak|\.orig|\.save)?$|^(\..*|Entries.*|Repository|Root|Tag|Template)$|^#.*#$|\.php(~|\.sw[op]|\.bak|\.orig\.save)$" {
*   url.access-deny = ("")
*   }
*   }
