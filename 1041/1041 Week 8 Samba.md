---
hackpadID: JuTFdc48A7V
hackpadWorkspace: ncnu-opensource
tags: hackpad-import, ncnu-opensource
---
# 1041 Week 8 Samba 

類似網路上的芳鄰

安裝Samba - > sudo apt-get install samba

修改smb.conf

sudo vim /etc/samba/smb.conf

[global] 全域設定 ： Server對外的設定

server string ：Server顯示的名稱

全域變數

％h：host name

#Misc

usershare allow guests 改 no

sudo service smbd restart

Share Definitions

格式：

[   ] 分享名稱

[homes]自動成為分享自己家目錄

path >>以絕對路徑開始

browseable： 可否瀏覽

writeable：可否編輯

write list：可編輯使用者    @：   群組權限

mode 0664 => 0(非特殊檔案) 6：root   6:group   4:owner

veto file: 完全隱藏檔案,不給其他人看到

guest ok: 允許訪客與否 （yes/no）

printer:可註解掉印表機以節省資源

testparm: 檢測設定是否符合需求

新增使用者： sudo smbpasswd -a（新增使用者的指令）  zxp86021（使用者名稱）

--> sudo service smbd restart

查看使用者： sudo pdbedit -L

因為要修改samba讀取的權限 , 也要修改檔案原始權限才能進入讀寫

修改檔案目錄權限  : sudo chmod 777 (你要連到的資料夾）

修改可使用的群組：sudo chown(change owner) 擁有者：群組  資料夾名稱

samba設定重點：實體目錄的檔案權限，使用者的認證

smbpasswd -a [username]

 - username指的是將"電腦裡的user"新增到samba

 - 所以沒辦法使用smbpasswd的原因，通常是ubuntu裡沒有這個user，可用useradd新增

 sudo  adduser  [name]   新增一個使用者有家目錄

 sudo useradd   [name]   新增一個使用者沒有家目錄

 mkdir  [name] 新增資料夾

 sudo userdel -r  [NAME] 刪掉家目錄

 /etc/samba/smb.cfg中，自己新增的profiles下的path(例如path = /mnt/test)，這裡是指向一個實體位置，samba並不會自己新增這個資料夾，被指向的實體位置要自己新增。

sudo service smbd restart

sudo /etc/init.d/samba restart

sudo apt-get install mailutils

查看是否有等待寄出的信：mailq

寄信指令:

mail -s "Hello mail" xxxxxxx@mail.com

內容

.

Cc:寄給who 

(Ctrl+D)

取得目前主機所有IP：ifconfig ｜grep inet

ifconfig ｜grep inet｜ awk ’{print $2}’ 

Shell Script

> create

>> append

<  throw in it

ifconfig | grep inet | awk ’ NR == 1{print $2}’

ifconfig ：抓取IP資訊

grep ：篩選有後面字串的列（inet）

awk：做格式化

print $2 ：以空格做分隔，第二個區段

NR == 1 ：第一列

如果要執行固定的某些指令，可以將他們寫成腳本

也就是(.sh)檔案，執行腳本使用 sh 指令（例：sh demo.sh）

mail -s ’信件標題’ xxxxxxx@gmail.com

 （content）

 （^d）

 Cc: 收件人副本

 （Enter結束）

 context.txt 為要寫入信件的內容

 Demo.sh

*   #!/bin/sh

*   echo "Hello World shell script" > /home/username/context.txt
*   echo "I want to email to myself" >>  /home/username/context.txt

*   ifconfig |grep inet |awk ’NR==3 {print $2}’ >> /home/username/context.txt
*   /usr/bin/mail -s "Send My IP" example@gmail.com < /home/username/context.txt
