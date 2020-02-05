# Week3, 10/4 LSA

104321002 何建宏
105213007 王 威
107213517 楊宜明
104321059 錢詠恩 資工四
106213014 歐芷欣 資管二
106213019 蘇美婷 資管二
106213017 蔡佳軒 資管二
106213022 莊詠婷 資管二
104321003 謝萬霖 資工四

#
### 硬碟知識
- [wiki](https://zh.wikipedia.org/zh-tw/%E7%A1%AC%E7%9B%98)
- 對I/O的request一次一定是一個sector(512bytes 或是 4k)
- sector alignment 扇区对齐
- 光學的都會有自己的保存期限（包括ＤＶＤ）
- 硬碟讀寫由外圈網内
- [硬碟與儲存設備](http://linux.vbird.org/linux_basic/0105computers.php#pc_hd)

列出硬碟磁區資訊:
`sudo fdisk -l`

[EFI system](https://wiki.archlinux.org/index.php/EFI_System_Partition_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))

完整備份硬碟
`sudo dd if=/dev/sda of=/dev/sdb`

swap 置換空間
較少用的程式會被放到swap

:::info
**磁碟分割區可以有幾個？**

分割磁碟的限制4P (4個主分割)or3P+1E (3個主分割+1個延伸分割)如需建立5個以上的分割就必須建立3P+1E例如:1P = C: , 2P = D: , 3P = E:而F: & G:都必須建立在延伸分割了另外DOS及Windows系列的分割工具都只支援一個主分割要建立多個主分個必需使用其他分割工具才行 (例如:SPFDISK)
:::


### 硬碟分割區
Primary+Extended，Primary有三個(實體分割區)。
Extended可以在另外做出三個延伸(sda5, sda6, sda7)
所以總共加起來有7個，但是實體的只有4個。
 
`sudo blkid /dev/sda*` 
列出所有block的UUID,TYPE

`cat /etc/fstab` 
fstab = filesystem
記錄著系統開機有哪些分割區，並且以被哪一個目錄使用

`sudo blkid /dev/sda1` => block id (uuid)

`mount` => 詳細掛載資訊（包含type, permission等等）

`/bin` => 裡面都是binary的可執行檔



### 檔案屬性
#### 詳細屬性
![](https://i.imgur.com/EOA2RGt.png)

#
#### 檔案權限
![](https://i.imgur.com/OlUKGri.png)
#
#### 檔案類型
    當為[ d ]則是目錄
    當為[ - ]則是檔案
    若是[ l ]則表示為連結檔(link file)；
    若是[ b ]則表示為裝置檔裡面的可供儲存的周邊設備(可隨機存取裝置)；
    若是[ c ]則表示為裝置檔裡面的序列埠設備，例如鍵盤、滑鼠(一次性讀取裝置)。

參考自:http://linux.vbird.org/linux_basic/0210filepermission.php

:::warning
如果路徑當中有" ( "需要以" \ "做跳脫
:::

`/sbin` => 存放必要的system binary 檔案

`/boot` => 盡量不要刪除這裏的檔案


`/boot/grub/grub.cfg` => 開機設定檔

`/dev` => 硬體相關

`..` => 上一層目錄

`echo "hello" > dest` => "hello" 覆蓋 dest 內容

`echo "hello" >> dest` => "hello" 加在 dest 內容之後,參數 -n 把換行拿掉

`/etc` => 存放設定檔

`/etc/fstab` => 硬碟資訊設定檔

`/etc/passwd` => 存放使用者檔案，但是沒密碼

`cat /etc/passwd | grep bluet` => 從 /etc/passwd 抓取 bluet 的資訊

`id`印出 user 的 group 和 user 的 id 

`/etc/shadow` => 存放password(列出的資訊都是加密過的)

`/etc/group` => 存放group資訊

`sudo` superuser permission