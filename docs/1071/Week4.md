# Week4, 10/11 LSA

[常見編碼特點整理](https://wallacenote.wordpress.com/2015/09/27/%E5%B8%B8%E8%A6%8B%E7%B7%A8%E7%A2%BC%E7%89%B9%E9%BB%9E%E6%95%B4%E7%90%86ascii-big5-utf-8/)

### FHS
 + `/boot/`　不可能在　sda　(硬碟)內，會在　sda1/2/3　(分割區)內
 + 沒有被分配到的目錄, 都會被分配到根目錄底下
 + `/dev/loop` [wiki](https://en.wikipedia.org/wiki/Loop_device) / [中文wiki support](https://zh.wikipedia.org/wiki/Loop设备) (有人可以補充嗎？ 我聼不太清楚 **有請愛心助教**)
 + `/home/` 使用者家目錄
 + `/srv/` server 或 service 自己的服務 可放自己寫的軟體
 + `/var/www/` 通常網頁會放在這裏 但是var是比較常變動的資料把網頁存放在這裏有點奇怪。 (相對於系統來說，網頁比較常變動。大多web server預設網頁路徑也在這)
 + `/var/run` 放那個有沒有在執行的檔案
 + `/var/log` 日誌文件（各式各樣重要的紀錄檔）
 + `/var/log/auth.log` 認證的紀錄檔
 + `/var/cache` 放應用程式的緩存文件
 + `.pid` process 的 id
 + `.sock / .socket` 的檔案 當成 FIFO 檔
 + `/opt` 通常為自己的應用程式 照理不會用到這裏
 + `/lib` or `/usr/lib/` 放各式各樣 library 的地方
 + `/mnt` 過去習慣臨時挂載檔案的目錄
 + `/media/<username>` 新版 Ubuntu 硬體插入自動掛載目錄，例如 USB
 + `/proc` process的虛擬檔案
 + `/tmp` 若被侵入可從這發現痕跡
     + `/tmp` 另外分割並設成 noexec 可增加安全性,但可能造成部份應用安裝失敗（會將檔案暫放 /tmp 的應用）
 + `/var/log/auth.log` 嘗試遠端登入主機的紀錄

### 指令

```

> `mount <iso file> <directory>` 掛載印象檔
> `umount <directory>` 卸載印象檔
> `ps` 看目前console執行了多少東西
> `ps aux` 查看所有行程
>> - a : 顯示所有process
>> - u : 以用戶模式顯示
>> - x : 不以terminal區分

> `wc` word count
> `less` 把輸出分頁顯示 可以用鍵盤上下鍵看輸出的資料
> `|` pipe,將前面 stdout 丟給後面作 stdin
>> eg. `cat <filename> | less`
>> `last`  一個月内，沒關機前的登入記錄

> ps aux|grep \`cat lightdm.pid\`
> `/proc/<pid>$ cat stat` <pid>的狀態
> `whereis <filename/directory>` 列出某個 filename或directory的位置
> `chown <要換成的使用者>：<要換成的群組>` change owner
> `netstat -an` 看目前連缐
>  `last` 顯示出登錄過的使用者
>   `w` 現在登入的使用者

```

### Ubuntu 小知識
+ 在terminal 點兩下會反白 就代表複製成功
+ 按下滑鼠中間鍵就可以直接貼上
+ 檔案被讀取時也會更新Access時間,Download server通常會將relatime屬性拿掉,以減輕硬碟負擔
+ [sudo vuln](https://usn.ubuntu.com/3304-1/)

### 權限
- `set uid`功能 ([參考](https://www.phpini.com/linux/linux-set-setuid-setgid-permission))
![](https://i.imgur.com/3blWr17.png)
執行該程式之後產生的process權限為擁有該程式的人之權限
(例如擁有者為B，執行者為A，該process權限為B所有)

### /var/log

ssh遠端登入log file在`/var/log/auth.log`中
善用工具可以簡單分析是否有人嘗試登入你的主機
```
sudo cat /var/log/auth.log | grep "Failed"
```
### 功課
+ 自己規劃一臺伺服器，給系上所有同學使用
+ 128G SSD
+ 400G HDD
+ 功能如下
	+ 每個學生有自己的賬號，可以上傳自己的檔案、當成自己的空間
	+ 提供網頁伺服器的檔案下載
	+ 郵件伺服器
