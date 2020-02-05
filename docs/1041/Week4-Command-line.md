---
hackpadID: 0aKV4wKbT5Y
hackpadWorkspace: ncnu-opensource
tags: hackpad-import, ncnu-opensource
---
# 1041 Week4 Command line

2015/10/08 1041LSA

**指令(Terminal)**

sudo = super user do  讓你擁有root權限

ctrl+alt+T=開啟terminal

ctrl+shift+T 開新分頁

alt+1  切換第一個分頁

ls:印出該目錄下的所有檔案（不包括隱藏檔）

ls -a:印出該目錄下的所有檔案（包括隱藏檔）

ls -al：印出該目錄下的所有檔案（包括隱藏file and 權限）

cat:開啓檔案

tac:把檔案倒過來印（第一行變最後一行）

less : 有翻頁功能

sudo adduser _[使用者名稱]_ : 新增使用者

apt-get

**PPA套件庫**

處理軟體相依性的套件庫,自動安裝軟體執行時會使用到的相關程式

**安裝程式**

軟體與更新 源碼X   ftp.ub[untu](ftp://ub)[-tw.n](ftp://ubuntu)[et](ftp://ubuntu.n)

mirror site @ ncnu:  [](http://ftp.ubuntu-tw.net/mirror/ubuntu/)http://ftp.ubuntu-tw.net/mirror/ubuntu/

sudo dpkg -i [安裝.deb檔]

sudo apt-get install -f : 自動修復安裝時相依性的問題

apt-cache search : 搜尋電腦內是否有此檔案

sudo apt-get update: 執行更新清單的動作

webupd8:提供ubuntu教學及ppa的團隊

Oracle-java8 安裝

sudo add-apt-repository ppa:webupd8team/java

sudo apt-get update

sudo apt-get install oracle-java8-installer

openssh-server

sudo apt-get install openssh-server

ssh username@ip

**VIM**

:q : 退出

:wq : 儲存並退出

vimrc: vim的設定檔
