###### tags : `1062` [LSA](https://hackmd.io/c/By4H6JLNW/)
# LSA 1062 Week02 共筆
- [var是什麼?](https://zhidao.baidu.com/question/398779738.html)
> [name=百度][time=Thu, Mar 8, 2018 8:14 PM][color=#dd9573]
>/var 包含系统一般运行时要改变的数据。通常这些数据所在的目录的大小是要经常变化或扩充的。原来 /var 目录中有些内容是在 /usr 中的，但为了保持 /usr 目录的相对稳定，就把那些需要经常改变的目录放到 /var 中了。每个系统是特定的，即不通过网络与其他计算机共享。下面列出一些重要的目录 ( 一些不太重要的目录省略了 ) 。

- [FHS檔案系統階層標準](https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84%E6%A0%87%E5%87%86)

- `$chown` or `$chgrp` 

- [userdir](https://dywang.csie.cyut.edu.tw/dywang/rhel7/node39.html)：每個使用者在自己家裡面有一個目錄，自動變成各使用者的家目錄。

- [inetd](http://linux.vbird.org/linux_basic/0560daemons.php) v.s. [xinetd](http://canred.blogspot.tw/2013/03/xinetd-tcpxinetd.html)
    - rsync (自動執行檔案同步化) hen 好用
    - rsync v.s. scp?
        - scp沒辦法制定server
        - 如果只設定一次：scp
        - 若要雙向同步：rsync
        - 傳輸時想要壓縮請用 rsync
- [init層級](http://nmc.nchu.edu.tw/tanet/Linux_boot.htm)
    - ![](https://i.imgur.com/G2vDHX4.png)
    - :star:沒事別用 init.d 關機，不會叫其他服務儲存 ram 中資料
    - poweroff (會導致資料庫資料未完全寫進時關機)
- [useradd v.s. adduser](http://os.51cto.com/art/201104/256231.htm)
  adduser會呼叫 useradd來幫它做事情（useradd不會加自動加 home目錄）
  useradd -p 要輸入雜湊後的密碼....
  
    - `$su - {username}`: 切換使用者:no_entry:
    - `$sudo su - root` : 千萬不要用:no_entry:
        - 盡量別用 su，盡量用 sudo，<font color=red>但最好是依據group制定對應的權限</font>，否則查起來，不懂是誰經手，只知道是root/sudoers
    - 新建的user或group id通常是1000以上
    - `$/etc/skel` (改內容後再adduser會有何不同？)
        - 對某資料夾權限作修改，則新增之user所產生資料夾依權限設定產生
            - exist user不受影響
- /etc/init.d 
- `$cat /etc/fstab  `
- `df -h` 資料哪裡來？ `mount`? 他們跟一個硬碟分割區中的設定檔案
- ls /etc/rc* ? 裡面的 file 會 link 到 '/init.d/' 裏面，而檔案開頭的 K 代表 KILL， S 則代表 STARAT[LINUX啟動程序](http://nmc.nchu.edu.tw/tanet/Linux_boot.htm)
- run 裡面的 sudo 是做什麼的? 
    >- man sudo裏面有提到

dev link 系統所有h/w


入侵網頁後，
1. /var/www 
2. /tmp （default 777)
3. /var/log
4. /dev/shm
5. who/last/lastlog
---
1. bin 目錄到底是作啥用,以及系統下到底有幾個bin
   `/bin`:如常在單用戶模式可用的必要命令用的命令ls、tar、mv、cat等。
   `/sbin`：放置必要的系统二進制文件，_例如：init、 ip、 mount。 <font color=red>just for root</font>    
   `/usr/bin`：放置可執行程式,這個目錄的檔案與/bin 幾乎是相同的
   `/usr/sbin`：放置管理者使用程式，與 /sbin 相同
### 千萬不要分享:no_entry: `.ssh/` 和 `GPG`
2. tmp資料夾用意，生命週期多久，什麼狀況下會消失？stickid? reboot to clear.
   - 這是讓一般使用者暫時存放檔案的地方，例如你在安裝 Linux 下的軟體時，可能/tmp就是軟體預設的工作目錄。
   - 在系统重启後目录中文件不会被保留。
   - 有空常用 `ls -al` 看有沒有惡意檔案
   - `sudo gedit /etc/default/rcS` 
     把TMPTIME=0，修改成TMPTIME=-1或者是无限大,系统在重新启动後就不会清理你的/tmp目录了。另外，修改之后，以前被系统删除的文件（我的是图片）会自动复原，只是名字改变了。


   
3. [如何檢查目前cpu？](https://magiclen.org/linux-view-cpu/) 
    - `$cat /proc/cpuinfo`
    - top
    - htop (好用) `$sudo apt install htop` before using
    - uptime
    - lscpu
4. 檢驗系統目前安全狀態蠻有用的tools
    - unhide
    - chkrootkit
    - rkhunter

4. root 為什麼不在home內，適不適合獨立分割？
    - 這是系統安全權限方面的設定。
    - root是超級管理員，和普通用戶是有區別的，兩個目錄的權限也是不一樣的。
    - root用戶擁有系統最高權限，在根目錄下給root一個單獨的目錄，這是系統設定好的。
        - [資料源](https://zhidao.baidu.com/question/1112565815234529819.html)
> [name=BT]
> 情景：硬碟損壞，可開機但無法真正開機（電源通，系統損毀）
> 資料救援用
> [Busybox](https://zh.wikipedia.org/wiki/BusyBox)
5. sbin是放什麼東西，為什麼需要獨立？
    - 必要的系统二进制文件，_例如：_ init、 ip、 mount。

6. var： 放極容易變動的資料
7. 備份，debian 存放備份的地方在哪？索引檔？ 
 - /var/backups
 - /backup
9. run、srv： 為目的性、暫時性的目錄，也會存放使用者安裝的軟體
NaNundefined[name=俊甫][color=#dd9573]
NaNundefinedwhile a program is running, it will append a tmp(special) file in `/run`. and it will occur errors if the process exist.
NaNundefined/srv: 會被不遵守 FHS 的程式放一些？？

10. sys較新
11. webfs, [sshfs](https://blog.gtwang.org/linux/sshfs-ssh-linux-windows-mac-os-x/), nfs, samba 自動讓伺服器遠端 mount (FSTAB?)
12. lib & lib64差別，用途？
> [name=逸于yiyu]
64位元的系統只要裝32位元的lib也能執行32位元的檔案

![](https://i.imgur.com/Fhcdfhd.png)
![](https://i.imgur.com/Qq1ZZUc.png)
- [資料源](https://books.google.com.tw/books?id=iiJEDwAAQBAJ&pg=SA2-PA14&lpg=SA2-PA14&dq=lib%E5%92%8Clib64%E5%B7%AE%E7%95%B0&source=bl&ots=z-jnEAeoCW&sig=ZQFjAGH-aXKLtDCZ4E3ZVlFGJg8&hl=zh-TW&sa=X&ved=0ahUKEwjF-7bqztzZAhWBMJQKHZ4EBn8Q6AEIazAH#v=onepage&q=lib%E5%92%8Clib64%E5%B7%AE%E7%95%B0&f=false)
- [ubuntu根目錄各資料夾的功能](http://www.arthurtoday.com/2012/12/ubuntu-file-system-tree-directories.html)


12. Network
    - MTU
    - IP/TCP/UDP/BGP/ICMP
    - What is IP prefix?
    - How FTP transport data? Which port does FTP use?
    - How DNS work under UDP?
    - What is MAC Adress?
    - hping3

13. What's the different between ubuntu(unity) & ubuntu(gnome)?
    - https://askubuntu.com/questions/333237/difference-between-unity-and-gnome
    - http://m.manew.com/thread-29169-1-1.html

14. /dev/shm will put some files would not be store to disk.
- 有一半記憶體大小的空間

15. 善用 who, last, lastlog

# homework
- mount remote server's folder?