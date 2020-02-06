# 1041 Week 2 Install Ubuntu, FHS

2015/09/24 

## Install Ubuntu

1.download Tuxboot & Ubuntu-desktop-amd64 (ftp.ncnu.edu.tw)

*   如果Tuxboot會crash，可以使用Universal USB installer(Live USB) by APP大大

2.windows 使用Tuxboot 做為 開機隨身碟; Ubuntu 搜尋 "製作開機碟" 

*   (保留空間：每次開機可以儲存設定)

3.open Tuxboot > pre-download > grub iso > OK

*   右鍵系統管理員執行

4.磁碟切割：搜尋gparted **(灌在外接硬碟或隨身碟的略過此步驟)**

*   在最大塊上面按右鍵選resize
*   大大給到60GB，硬碟切30GB，一半一半

5.桌面Install ubuntu > 盡量接電源安裝 > 安裝類型：其他(之前有切過) > 在可用空間新增分割區"+"(根目錄 / & swap)

*   swap給100MB，意思意思 

6.開機程式的裝置 -> sda

7.使用者自行設定

## FHS Filesystem Hierarchy Standard

1.  先了解FHS是什麼
2.  bin中的檔案別亂砍
3.  設定檔/etc/...
4.  預設目錄皆為家目錄 ,~為家目錄符號
5.  [_使用者名稱_]@[_主機名稱_] ~>
6.  /var/log 有各個運行程式的log file
7.  superuser權下底下執行指令一定需要輸入密碼
8.  webserver資料儲存在/var/www/...

60GB

1.  公司對外的 web server
2.  File server (FTP)
3.  學生網頁伺服器
4.  Mail server

**主機硬碟分割**

1.  Linux 每個目錄存放不同用途的檔案，在還沒確定主機用途時可只切割 

*   / 
*   /home 
*   swap

1.  進階使用者可規劃為：

*   一般個人使用桌機 
    *   / 
    *   /boot 
    *   /usr 
    *   /var 
    *   /home 
    *   /backup 
    *   swap
*   Mail server 
    *   / 
    *   /boot 
    *   /usr 
    *   /var 
    *   /var/spool (mail 放在 /var/spool/mail) 
    *   /home 
    *   /backup 
    *   swap
*   Web server 
    *   / 
    *   /boot 
    *   /usr 
    *   /var 
    *   /home (加大空間) 
    *   /backup 
    *   swap
*   掛載目錄之空間，與主機用途有關。例如：規劃為 Mail server 則 /var/spool 空間要大。
