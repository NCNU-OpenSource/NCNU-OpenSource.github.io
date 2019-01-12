##### tags:`ncnu` `lsa`
# [備份](https://paper.dropbox.com/doc/Backup-Qkq0NZPpVMtfqO7JSE9Cf)

- 目錄的話記得加上斜線 `/` ，有些較舊的檔案系統當你使用 scp 沒有加上斜線，會把那個目錄幹掉


`ssh -v`

[BT分享的文章](https://gizmodo.com/email-no-longer-a-secure-method-of-communication-after-1826002682)

將public key複製到遠端:

> ssh-copy-id name@ip 

`rsync` 很好用，除了避免將不該上傳的東西上傳，也可以避免重複上傳

`rsync` 參數 : 

-a , --archive 保留原檔案屬性
-v , --verbose 印出詳細訊息與紀錄
-r , --recursive 遞迴
-R , --relative 保持原檔案完整路徑
-z , --compress 壓縮
-h , (human readable)
--delete local檔案如果刪除，也刪除遠端檔案
--delete 可以再加參數 --before , --after

假如從遠端同步本地端 同步結果會以遠端為準(可以加參數來設定)



[dd_rescue](http://www.garloff.de/kurt/linux/ddrescue/)

`fdisk -l /dev/sda`

0 本身叫做 NULL character，用 vim 打開 dd if=/dev/zero噴出去的檔案是啥都看不到的，但確實占了空間(一堆的 Null Character)


> 記得要救援時，電腦本身也在讀寫，爲了避免刪掉的檔案位置被覆寫，最好是把硬碟拔到另一臺電腦上去救援

PhotoRec:在硬碟備份之後救回誤刪檔案
gddrescue: data recovery tool
/dev/random: 產生一堆亂數

## 將 STDIN 輸出到檔案

1. `cat >> file`
2. `cat - >file`

## [Clonezilla 再生龍](https://clonezilla.nchc.org.tw/news/)

- 備份、還原分割區
- 不分系統
- 中文界面

## rsync server 操作

rsync可以做server，讓其他人來跟偶同步
`rsync rsync://ftp.ubuntu-tw.net`

- 如果檔案沒有私密性，很適合用來分享檔案