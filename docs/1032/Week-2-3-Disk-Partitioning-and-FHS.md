# Week 2-3: Disk Partitioning and FHS

2015/03/12  NCNU LSA

1.  Download Virtual box
2.  Download Virtual Box Extension Pack 
3.  [](http://ftp.ubuntu-tw.org/mirror/ubuntu-releases/)[http://ftp.ubuntu-tw.org/mirror/ubuntu-releases/](http://ftp.ubuntu-tw.org/mirror/ubuntu-releases/)[](http://ftp.ubuntu-tw.org/mirror/ubuntu-releases/-) -> Download 14.04.02-server-XXX.iso
4.  Manual format 虛擬機裡面 手動分割磁碟, 小組討論 要怎麼規劃
5.  上網查資料

## 題目:

```
1.  公司對外 WebServer (PHP 之類)           , 2, 7
2.  FileServer (NAS, FTP, NFS) 之類的        , 3, 4, 
3.  學生網頁伺服器,                                     , 5 ,**賴原群,** 8 
4.  Mail Server.                                              , 6, Mirase
```

<undefined>*   HDD: 80G</undefined>

## 布魯踢誒講解

*   "/" 根目錄：目前建議可以不用額外切割
*   "/boot"：存放 kernel ，目前建議也是可以不用額外切割。
*   /swap：
    *   過往記憶體不夠（ex: 128MB, 512MB...）是兩倍記憶體為基準
    *   不過現在記憶體滿多, 通常不會開太大容量~~放魔法茂林~~
    *   至少要跟記憶體一樣大小
    *   悅悅好棒棒

*   /tmp：暫時資料夾、使用者、server、惡意攻擊程式通常會存放在上面，可以將 tmp 額外分割出來。
*   再將此目錄設定成不能執行，提高安全。

**FTP**

*   FTP quota：以軟體來去控管各個 user 的空間容量
*   通常會切割 home 底下的 /ftp 分割區
*   /etc -> ftp user information

**Mail**

*   需要/var/mail：儲存使用者信件, 通常不太切割
*   /var/spool

## 一：公司對外 WebServer (PHP 之類)

**第二組**

/boot 200M

/var 50G

/ 15G

/home 10G

/swap 4.8G

**第七組**

/boot  3G

/var 40G

/ 2G

/home 15G

/swap 10G

/tmp 5G

## 二：FileServer (NAS, FTP, NFS) 之類的

**第三組**

/ - 5G

/home -1G 

*   /files - 65G

/var - 2G

/tmp - 5G

/swap - 2G

**第四組**

/　　: 3GB

/usr : 4GB

/var : 4GB

/tmp : 5GB

/swap : 4GB

/home: 60GB

## 三：學生網頁伺服器

**第五組**

/ 10GB

/home 68GB

/swap 2GB

**賴原群組**

/          26G

/home 50G

/swap  4G

**第八組**

/ 10G

/home 68G

/swap 2G

## 四：Mail Server

**第六組**

/ 1G

/usr 1G

/var/mail 40G

/var/spool 31G

/home 4G

/backup 1G

/swap 2G

**Mirase 組**

/ var

*   /spool 55G

/ 5G

/home 15G

/tmp 5G

/swap 10G

~~/mirase ∞~~

## 參考資料

FHS (Filesystem Hierarchy Standard) - [Wikipedia](http://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84%E6%A0%87%E5%87%86) 

[](http://www.linuxnix.com/2013/09/what-is-a-mount-point-in-linuxunix.html)[http://www.linuxnix.com/2013/09/what-is-a-mount-point-in-linuxunix.html](http://www.linuxnix.com/2013/09/what-is-a-mount-point-in-linuxunix.html)
