# Week 03(2019/09/26)

## LSA 課程期末專案 GitHub
[NCNU Open source](https://github.com/NCNU-OpenSource)

## Open Source 社群：
- [MOLi 開放創新自造者實驗室](https://moli.rocks/)
    - [官方 Telegram](https://t.me/MOLi_rocks)
    - [Puli_food 推薦 BOT](https://t.me/puli_food_bot)
- [台中自由軟體愛好者社群 (TFC)](https://www.facebook.com/groups/tfc.tw/)
- [COSCUP](https://coscup.org/2019/)
- [Mozilla Taiwan](https://www.mozilla.org/zh-TW/)

## 目錄結構
![](https://i.imgur.com/mqlqF6P.png)

windows分爲 C:/ D:/等等
linux中一切是由根目錄開始的
- ~ : 家目錄
- / : 根目錄

開啟終端機快捷鍵 : ctrl + alt + t
終端機開新分頁: ctrl + shift + t



## FHS
- [FHS](https://zh.wikipedia.org/wiki/文件系统层次结构标准)
檔案系統階層標準（英語：Filesystem Hierarchy Standard，FHS）定義了 Linux 作業系統中的主要目錄及目錄內容。

指令存於bin目錄 ex:ls pwd
`ls -al` → 查看檔案權限(共9個欄位)
- l : 檔案詳細資訊(use a long listing format)
- a : 顯示隱藏檔(.開頭)
- h : 用常見單位顯示(human-readable)

### 第一個字元判斷檔案類型
- `d` : 目錄
- `l` : link 鏈接檔
- `-` : 一般型檔案
- `c` : 可做IO(輸入輸出)的設備
- `b` 

### 從第二個字元後(含)
:::info
從第二個字元後 每三個字元代表一個使用者身分
依順序分別為owner group others
:::
- `r` : read 讀取
- `w` : write 寫
- `x` : execute 執行



## 指令

### 如何查看指令怎麼使用？
`man + 指令`

### echo
`echo` : print
`echo $PATH` : 印出路徑
`echo "hello" > hello`: 寫入"hello"到檔案 hello 中 (覆蓋原本的)
`echo "123" >> hello`: 寫入"123"到檔案 hello 中 (加在原本的後面)


### 更改檔案權限
`chmod` 更改檔案權限
ex: chmod +x 檔案
把檔案新增可執行的權限(全部人)
```
＊延伸: 
想要各別設定 owner group others 權限

1.八進位語法
chmod的八進位語法的數字說明：

r:4

w:2

x:1

-:0

所有者的權限用數字表達：屬主的那三個權限位的數字加起來的總和。如rwx ，也就是4+2+1 ，應該是7。

用戶組的權限用數字表達：屬組的那個權限位數字的相加的總和。如rw- ，也就是4+2+0 ，應該是6。

其它用戶的權限數字表達：其它用戶權限位的數字相加的總和。如r-x ，也就是4+0+1 ，應該是5。

例如修改檔案myfile的權限

$ chmod 664 myfile
$ ls -l myfile
-rw-rw-r--  1   57 Jul  3 10:13  myfile

2.符號模式
使用符號模式可以設定多個專案：who（用戶類型），operator（運算子）和permission（權限）
命令chmod將修改who指定的用戶類型對檔案的存取權限，用戶類型由一個或者多個字母在who的位置來說明

who的符號模式表所示:
who	用戶類型	說明
u	user	檔案所有者
g	group	檔案所有者所在組
o	others	所有其他用戶
a	all	所用用戶, 相當於 ugo

operator的符號模式表:
Operator	說明
+	        為指定的用戶類型增加權限
-	        去除指定用戶類型的權限
=	        設定指定用戶權限的設定，即將用戶類型的所有權限重新設定

permission的符號模式表:
模式	名字	       說明
r	讀	       設定為可讀權限
w	寫	       設定為可寫權限
x	執行權限        設定為可執行權限
X	特殊執行權限     只有當檔案為目錄檔案，或者其他類型的用戶有可執行權限時，才將檔案權限設定可執行
s	setuid/gid     當檔案被執行時，根據who參數指定的用戶類型設定檔案的setuid或者setgid權限
t	貼上位	       設定貼上位，只有超級用戶可以設定該位，只有檔案所有者u可以使用該位

例子：
chmod u+x filename 在這裡，u的意思是user指用戶本人；
+的意思是增加權限；x是指可執行檔


對目錄的所有者u和關聯組g增加讀r和寫w權限:

$ chmod ug+rw mydir
$ ls -ld mydir
drw-rw----   2 unixguy  uguys  96 Dec 8 12:53 mydir

對檔案的所有用戶ugo刪除寫w權限:

$ chmod a-w myfile
$ ls -l myfile
-r-xr-xr-x   2 unixguy  uguys 96 Dec 8 12:53 myfile

對mydir的所有者u和關聯組g設定成讀r和可執行x權限:

$ chmod ug=rx mydir
$ ls -ld mydir
dr-xr-x---   2 unixguy  uguys 96 Dec 8 12:53 mydir
```
[延伸取自維基百科](https://zh.wikipedia.org/wiki/Chmod)

### 查詢檔案
`whereis + 檔案`

### 查看詳細檔案型態
`file + 檔案`

### 檢視硬碟使用狀況
`df`
`df -h`
h: human readble

### 以樹狀圖檢視所有執行中的作業
 `pstree`

### 顯示開機訊息 /顯示硬體狀態
`dmesg`
`dmesg |grep sda` 顯示硬碟狀態資訊

### 
- 指令 `less` + 文字檔
純文字檔案分頁顯示
- 指令 `tail` + 文字檔
`tail` 顯示文件最後十行
`tail -f` 文件一有更新便顯示

### 查看所有正在執行的程序
指令`ps aux`
 
### 觀察系統狀態
指令 `top`
`1` 顯示cpu

### Top 指令

![](https://i.imgur.com/4Cw2ZqV.jpg)
- `PR` 就是 priority 的意思，優先權
- `NI` nice值，數值越小代表優先權越高 [NI vs PR](https://www.itread01.com/content/1545888456.html)
- `VIRT` virtual memory; 該行程使用的虛擬記憶體總量，單位**kb** (VIRT=SWAP+RES)
- `RES` resource; 該行程程使用的、未被使用的實體記憶體大小，單位**kb** (RES=CODE+DATA)
    - `CODE` 可執行的程式碼佔用實際的記憶體大小，單位**kb** (Text segment)
    - `DATA` [記憶體配置概念](https://blog.gtwang.org/programming/memory-layout-of-c-program/)
- `SHR` shared memory; 共用記憶體大小，單位**kb**

- `S` 為行程的狀態，D=不可中斷的睡眠狀態 R=運行 S=睡眠 T=跟蹤/停止 Z=僵屍進程
- `%MEM` 行程使用實體記憶體的百分比，並不包含虛擬的。
- `shift + m` 以mem排序


## 根目錄下的資料夾
- /sbin/
存放 superuser 用的指令

- /boot/
盤古第一支程式
initrd.img-5.0.0-23generic

- /boot/grub/
修改掌控開機流程

- /cdrom/
光碟機

- /dev/
放的是設備 device
一般硬碟名字sda1 sda2...
特別硬碟名字nvme... (SSD硬碟)

- /run/
放正在執行中的程序

- /var/
放常變動的資料

- 路徑/var/log/ 

- /swap/
當memory不夠及電腦睡眠時會將mem中優先度低的軟體idle放到swap中，所以swap設定的比mem高會比較好

### 動手製作 8jia9 指令

在 `bin` 目錄底下新增一個檔叫做 `8jia9`
- > sudo vim /bin/8jia9

在該檔案寫下你喜歡的指令
- ```bash=
  #!/bin/bash
  
  ls
  pwd
  ```
- **第一行不是註解而是設定 `default shell`**

這時可以檢查一下該檔案的狀態，應該是**無法執行**
- > ls -l /bin/8jia9
- ![](https://i.imgur.com/VFdZwc4.png)

將 `8jia9` 的狀態調整為**可執行**
- > sudo chmod +x /bin/8jia9

以上步驟完成後就可以下 8jia9 這個指令～
- ![](https://i.imgur.com/6IQ3kqK.png)
