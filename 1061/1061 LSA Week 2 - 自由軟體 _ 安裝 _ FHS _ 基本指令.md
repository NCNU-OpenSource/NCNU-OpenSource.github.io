# 1061 LSA Week 2 - 自由軟體 / 安裝 / FHS / 基本指令
[Moodle傳送門](http://moodle.ncnu.edu.tw/course/view.php?id=36083) & [課綱](https://ccweb.ncnu.edu.tw/student/aspmaker_course_opened_detail_viewview.asp?zyear=1061&courseid=135110&zclass=0)
---
### 下載點：
1. [ubuntu-16.04.3-desktop-amd64.iso](http://ftp.ubuntu-tw.org/mirror/ubuntu-releases/16.04/ubuntu-16.04.3-desktop-amd64.iso)
2. [ubuntu-16.04.3-server-amd64.iso](http://ftp.ubuntu-tw.net/ubuntu-releases/16.04.3/ubuntu-16.04.3-server-amd64.iso)
3. [VirtualBox](https://www.virtualbox.org)
:::success
安裝時定義格式：
vhd：能在windows7 旗艦版下打開無需工具
vmdk：是vm虛擬機的格式 可以被支持
vdi：是virtualbox自己的格式
:::
4. [在ubuntu安裝中文輸入法](http://blog.xuite.net/yh96301/blog/287374341-Ubuntu+14.04%E5%AE%89%E8%A3%9D%E9%8D%B5%E7%9B%A4%E8%BC%B8%E5%85%A5%E6%B3%95%E7%B3%BB%E7%B5%B1gcin)
---
## Opensouce
-opensource 可供大家共同使用source code的App
-演算邏輯,原始碼
-share(read,rewrite ,share,improve)
-可以規定我們如何使用
## Free software
-使用者可以自由使用
## 自由軟體運動
- Free to use
- Study and Fix (Modify) [Richard Matthew Stallman](https://zh.wikipedia.org/wiki/%E7%90%86%E6%9F%A5%E5%BE%B7%C2%B7%E6%96%AF%E6%89%98%E6%9B%BC)
- Redistribute (Share)

## 自由軟體基金會(FSF)
- https://zh.wikipedia.org/wiki/%E8%87%AA%E7%94%B1%E8%BD%AF%E4%BB%B6%E5%9F%BA%E9%87%91%E4%BC%9A

## Licence 授權
- [GPL](https://zh.wikipedia.org/wiki/GNU通用公共许可证)
- [BSD](https://zhhttp://stackoverflow.com/.wikipedia.org/wiki/BSD许可证)
- [sourceforge](http://sourceforge.net/)
- [google code](http://code.google.com/)
- [apache](http://www.apache.org/)
- [化簡為繁的 Apache-2.0 授權條款](https://www.openfoundry.org/tw/legal-column-list/8581-the-elaborate-license-apache-20)
- [stackoverflow](http://stackoverflow.com/)
- [常見開源協議](https://github.com/qyxxjd/License)
- [code project](http://www.codeproject.com/)
- [自由軟體簡介](http://ccckmit.wikidot.com/op:opensource)
---
OSI (Open Source Institude Certified Licenses)

[OSS](https://zh.wikipedia.org/w/index.php?title=Open_Source_Software&action=edit&redlink=1)$\neq$ [FLOSS](https://zh.wikipedia.org/wiki/%E8%87%AA%E7%94%B1%E5%8F%8A%E5%BC%80%E6%94%BE%E6%BA%90%E4%BB%A3%E7%A0%81%E8%BD%AF%E4%BB%B6)


## 輸入法
fcitx-chewing > 新酷音
不建議使用 ibus

### 目錄
根目錄：`/` 最上層
使用者家目錄： `/home/{{user name}}`
>[color=red]注意：全世界只有Windows使用`\`
### Linux下檔案和目錄的顏色代表的含義
|顏色|代表意義|
|-|-|
|藍色檔|目錄|
|白色檔|般性檔，如文字檔，設置檔，源碼檔等|
|淺藍色檔|連結檔，主要是使用ln命令建立的檔|
|綠色檔|可執行檔，可執行檔程式|
|紅色檔|壓縮檔或包檔|
### Linux下用字元表示的檔案類型
:::danger
`字元`rwxrwxrwx
<font color="white">-：普通檔</font>
<font color="blue">d：目錄檔表示directory</font>
<font color="lightblue">l：連結檔</font>
b：塊設備檔
c：字元設備檔
p：管道檔
s：Unix域套接字
:::
### Linux下檢視檔案細節指令
`ls -alht /` 
- a 隱藏檔(`.xxx`)
- l 把每個檔案的詳細資訊列出來
- h human readale
- t 時間排序
### Linux下查詢指令用法
`man {{command}}`：顯示該指令用法，ex: `man ls`
`{{command}} --help`: 通常指令會有 help 參數可以下，ex: `ls --help`



### Linux下常用指令
|指令|簡介|
|-|-|
|pwd|Print Working Directory/列出當前位置的絕對路徑|
|cp|CoPy/要被複製的檔案路徑 複製檔的檔案路徑|
|touch|要新增的檔案的檔名.副檔名|
|cat|CATch, 那 tac呢？|
|rm|ReMove|
|rmdir|ReMove DIRectory ([與 `rm -r ` 差異](https://teamtreehouse.com/community/rm-r-vs-rmdir))|
|ps|list process status|
|jobs|list active jobs|
|kill|kill process by pid| 
|alias|create an alias|
|id|show user's ID|
|tab (按鍵) |快速輸入,不需要全部打出來|

## 根目錄常見重要的目錄
|目錄名稱|目錄內容|
|-|-|
|/	|根目錄，包含整個Linux系統的所有目錄和檔案。|
|/usr|	用來存放系統指令、應用程式等。|
|/var|	系統執行時，需要暫時記錄部分資料或存放一些暫存檔，都會放置在這個目錄裡。如Apache、FTP、MAIL等。|
|/home|	預設用來放置帳號的自家目錄。|
|/tmp|	供全部使用者暫時放置檔案的目錄。|
|/bin|	放置操作系統時，所需使用的各種指令。例如 cp、login、mv、rm等。|
|/boot|	系統啟動時必須讀取的檔案，包含系統核心在內。|
|/dev|	存放周邊設備代號的檔案。如硬碟的 /dev/hda 。|
|/etc|	放置與系統設定、管理相關的檔案。如記載帳號名稱的 passwd 檔，投影密碼檔 shadow 檔。|
|/mnt|	預設有 /mnt/cdrom 和 /mnt/floppy 兩個目錄在這裡，用來做為光碟機和軟碟機掛載點。|
|/root|	系統管理者的家目錄。|
|/sbin|	存放系統啟動時需執行的程式。|
|/proc| 存放process的所有細節 |
## [crontable排程使用(檔案位置 /etc/crontab)](https://www.puritys.me/docs-blog/article-20-cron-jobs-crontab-%E6%8E%92%E7%A8%8B%E6%95%99%E5%AD%B8.html)
|分鐘|小時|日|月|星期|執行身分|指令|

大格是tab，小格是空白，會自動縮排 
 ```
 17 *    * * *    root    cat /etc/passwd
 ```


## Ubuntu's Advanced Packaging Tool 套件管理 
| command ||
|-|-|
|$apt search|一個用來找指令的指令|
|$apt -cache|快取|
|$sudo apt install `{{package}}`|安裝|
---
|待整理到|Linux下常用指令|
|-|-|
|$sudo -s|Switch到root| 
|$sudo -su|Switch User|
|$sudo -i|是啥?[answer](https://askubuntu.com/questions/70534/what-are-the-differences-between-su-sudo-s-sudo-i-sudo-su)|
|$su|輸入root密碼 取得root權限 但環境變數沒變|
|$sudo cat /etc/sudoers|![](https://i.imgur.com/DMd2Uj2.png)|
|$cat /var/log/auth.log|track auth log|
|$sudo fdisk -l /dev/sda|Fragment Disc?|
|$sudo /etc/sudoers/
|$su -|用root登入而非有root權限的使用者|



- Linux 一開始會把第一個使用者加入root群組
- Linux 沒有 C,D槽


- `$PATH`  所有指令、程式都會從~`$PATH`環境變數記載的路徑找尋執行檔

Q1：假設你有1個Server並具1TB的硬碟，若要給很多人使用WebServer，你要怎麼分割給每個使用者？要怎麼特別的處理它？...

Q2：如果你要架一個email的話，你會用到哪些目錄？(根目錄?開頭V)，規劃一個email伺服器，一樣是1TB的硬碟

Q3：分割出來，事後救援會比較容易救援嗎？使用上會不會更有效果？

待補充，邊聽邊寫會漏 QQ我沒聽到 nice
🆘