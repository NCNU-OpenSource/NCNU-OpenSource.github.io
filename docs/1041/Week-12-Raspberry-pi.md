
# Week 12 Raspberry pi 

[Week 11 Ra](/OwDgpgjAJgTArAFgLRgJyiQucpNTMAYyRFQENUxgA2KYAIzgDMg=)

[](https://www.raspberrypi.org/documentation/installation/installing-images/linux.md)[https://www.raspberrypi.org/documentation/installation/installing-images/linux.md](https://www.raspberrypi.org/documentation/installation/installing-images/linux.md) 

**準備系統**

*   下載 Raspbian OS 映像檔 [](http://downloads.raspberrypi.org/raspbian_latest)[http://downloads.raspberrypi.org/raspbian_latest](http://downloads.raspberrypi.org/raspbian_latest)
*   確定 SD 卡掛載位置
    *   Linux：df: Display free disk space
    *   OSX：diskutil list: List disks
*   卸載 SD 卡
    *   OSX：`sudo diskutil unmountDisk /dev/disk[N] `
        *   Linux：`sudo umount /dev/mmcblk0p1` or `/dev/sdd1`
*   將映像檔燒入 SD 卡
    *   sudo dd if=[IMG file location] of=/dev/disk[N] bs=4m
    *   若出現 **dd: bs: illegal numeric value**，請將 bs 值改為小寫。 ex: bs=4m

**第一次登入**

1.  TTY 線 USB 端接上電腦

*   Ubuntu:

*   sudo screen /dev/ttyUSB0 115200

*   OS X: 

*   screen /dev/cu.usbserial 115200

*   Driver: [](http://www.prolific.com.tw/US/ShowProduct.aspx?pcid=41&showlevel=0041-0041)[http://www.prolific.com.tw/US/ShowProduct.aspx?pcid=41&showlevel=0041-0041](http://www.prolific.com.tw/US/ShowProduct.aspx?pcid=41&showlevel=0041-0041)

1.  連上後，插上 pi 的電源、登入

*   username: pi
*   password: raspberry

登入pi後 sudo raspi-config(修改系統設定)

*   1.擴增 
*   4.設定時區 語言
*   5.開啟相機模組
*   6.紀錄全世界有哪些pi在使用
*   7.超頻—>模式建議選擇：medium
*   8.

**換成更快的軟體來源**

1.  新增一行軟體來源在原本的前面 (/etc/apt/soures.list) 建議先安裝vim

*   [deb](http://ftp.ubuntu-tw.net/mirror/raspbian/) [](http://ftp.ubuntu-tw.net/mirror/raspbian/raspbian/)http://f[t](http://f)[p](http://ft)[.u](http://ftp)[b](http://ftp.u)[u](http://ftp.ub)[n](http://ftp.ubu)[t](http://ftp.ubun)[u](http://ftp.ubunt)[-](http://ftp.ubuntu)[t](http://ftp.ubuntu-)[w](http://ftp.ubuntu-t)[.n](http://ftp.ubuntu-tw)[e](http://ftp.ubuntu-tw.n)[t](http://ftp.ubuntu-tw.ne)[/](http://ftp.ubuntu-tw.net)[m](http://ftp.ubuntu-tw.net/)[i](http://ftp.ubuntu-tw.net/m)[r](http://ftp.ubuntu-tw.net/mi)[r](http://ftp.ubuntu-tw.net/mir)[o](http://ftp.ubuntu-tw.net/mirr)[r](http://ftp.ubuntu-tw.net/mirro)[/](http://ftp.ubuntu-tw.net/mirror)[r](http://ftp.ubuntu-tw.net/mirror/)[a](http://ftp.ubuntu-tw.net/mirror/r)[s](http://ftp.ubuntu-tw.net/mirror/ra)[p](http://ftp.ubuntu-tw.net/mirror/ras)[b](http://ftp.ubuntu-tw.net/mirror/rasp)[i](http://ftp.ubuntu-tw.net/mirror/raspb)[a](http://ftp.ubuntu-tw.net/mirror/raspbi)[n](http://ftp.ubuntu-tw.net/mirror/raspbia)[/](http://ftp.ubuntu-tw.net/mirror/raspbian)[r](http://ftp.ubuntu-tw.net/mirror/raspbian/)[a](http://ftp.ubuntu-tw.net/mirror/raspbian/r)[s](http://ftp.ubuntu-tw.net/mirror/raspbian/ra)[p](http://ftp.ubuntu-tw.net/mirror/raspbian/ras)[b](http://ftp.ubuntu-tw.net/mirror/raspbian/rasp)[i](http://ftp.ubuntu-tw.net/mirror/raspbian/raspb)[a](http://ftp.ubuntu-tw.net/mirror/raspbian/raspbi)[n](http://ftp.ubuntu-tw.net/mirror/raspbian/raspbia)[/](http://ftp.ubuntu-tw.net/mirror/raspbian/raspbian) [wheezy main contrib non-free rpi](http://ftp.ubuntu-tw.net/mirror/raspbian/raspbian/)

1.  執行更新指令,更新套件來源

*   `sudo apt-get update`
