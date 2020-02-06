# 1041 Week5

2015/1015 1041 LSA

完全用 GNU/Linux 工作

[](https://chusiang.gitbooks.io/working-on-gnu-linux/content/04.package-management.html)https://chusiang.gitbooks.io/working-on-gnu-linux/content/04.package-management.html

聊天室：[](https://tlk.io/ncnu-lsa)https://tlk.io/ncnu-lsa

有問題可以直皆在上面提問～～ or 我講太快的話

sudo apt-get install aptitude

sudo aptitude

/  搜尋

^apache2$（以apache2開頭結尾）

shift＋＝（把選取的相關套件一併安裝）

c-t＝ctrl+T（開啟menu）

u（更新列表）

gg（安裝）

?（指令介紹）

CMS：內容管理系統

[Regular Expression ](http://linux.vbird.org/linux_basic/0330regularex.php)

## Web server

lighttpd

Nginx  可以同時容納多人連線的服務

## LAMP

drupal＋LAMP(linux,apache,mysql,php)

Alias 「a」 「b」（把a與b作連結）

apache 裡面的檔案 ：

sites-available 站台設定檔  - 根據http呼叫做出不同反應

telnet port 23

在/etc/apache2/conf-available底下建立正確的link

ls -al --> 將錯誤的link移除 --> sudo rm drupal7.conf

*   ln -s (建立鏈結)
*   ln -s 「a」 「b」  （a: 檔案路徑 b:連結名稱）

sudo ln -s ../../drupal/7/apache2.conf drupal7.conf(運用tab可以導引至正確路徑->偷懶)

localhost＝127.0.0.1連上本機

apache2 提供的指令：a2dis___(關閉服務)  a2en___（開啟服務)

a2enconf --> 輸入drupal

sudo service apache2 reload(restart)

[](http://localhost/drupal7/install.php)[http://localhost/drupal7/install.php](http://localhost/drupal7/install.php)  drupal7的檔案安裝精靈

## 安裝Nagios

sudo apt-get install nagios3

localhost/nagios3（在本機開啟nagios3）

帳號：nagiosadmin

etc/nagios3/conf.d（nagios3 的設定檔）

sudo cp localhost_nagios2.cfg [the name what u want].cfg

sudo vim [the name what u want].cfg 修改 host_name,alias,address -> www.ncnu.edu.tw

把disk,current user註解 #

留：define host{

*   use                    generic-host            ; Name of host template to use
*   host_name        www.ncnu.edu.tw
*   alias                   www.ncnu.edu.tw
*   address             www.ncnu.edu.tw

        }

sudo vim hostgroups_nagios2.cfg

在hostgroup 的 http-servers底下的localhost後面加上 ,www.ncnu.edu.tw(有逗點喔)

restart nagios3 (指令 sudo service nagios3 restart)

setting:localhost/nagios3

ifconfig ->查ip

上機考寄通知方法

sudo vim /etc/nagios3/conf.d/contacts_nagios2.cfg

改裡面的email

## icinga

/＊安裝哀新嘎＊/

sudo apt-get install icinga

帳號：icingaadmin

設定檔在etc/icinga/objects/（icinga 的設定檔）

步驟跟nagios3一樣，多把current Load 註解掉

## apache2

/＊安裝apache2＊/

// 開啟aptitude

sudo aptitude

//尋找apache2

/  ->  ^apache2$

//安裝apache2

shift ＋ "＝"  

gg
