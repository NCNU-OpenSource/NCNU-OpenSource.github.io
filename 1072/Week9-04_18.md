# Week 09(2019/04/18) - 系統安全強化分享

系統調校 — 改一改設定系統就會變快
[本次分享 Slide](https://docs.google.com/presentation/d/1OjcjFafR-1Pgj8GCFKjl9IIq_11AxUR_ZSb0VwqP2pw/edit?usp=sharing)

## Virtual Memory 調校

### 修改 swap 啟動時機
> 等到 memory 快被用完再使用 swap
> 0: 完全不 swap, 100: vise versa
> 建議調整 5 ~ 10

vmstat
```shell
cd /proc/sys/vm
cat swappiness
## 編輯
sudo nano swappiness
## 或，echo的時候同時寫入
echo '10' | sudo tee swappiness
```

### min_free_kbyte
可能是使用 swap 時的暫存區
maybe... buffer swap 搬回記憶體暫存的地方 (待查)

:::info
swap: 把記憶體中比較舊沒在用的東西搬去 swap 暫存(Disk)，需要使用時再從 swap 搬回來
:::

### overcommit_mem、overcommit_ratio
是否可以去執行比自己記憶體大的程式？

> 為什麼需要 virtual memory?

記憶體使用可以不連續，不常用的可以放到 disk 暫存

### Dirty Page

> 記錄 page 有無被更改
> 如果有被更改過會險些進 Disk 再寫到 Memory 裡面， 然後呢？

1. dirty_ratio
	系統會先暫停 I/O 把超過的 memory 以 system 的方式寫回 disk
2. dirty_background_ratio
	系統會開一個 thread(以程式的方式) 將 dirty page 寫回 disk

:warning: 若需求大量 I/O 建議把 dirty 降低, 例如 DB ratio: 15, bg_ratio: 3

:::warning
不是 ratio 盡量不要調
:::

### Huge page && THP

1. 對於小程式不好用
2. 浪費空間（例如對於資料庫）

```sh=
# 資料庫使用記憶體零散所以不適合 huge page
cd /sys/kernel/mm/transparent_hugepage/
echo 'never' | sudo tee enabled

# Turn off THP
cd /proc/sys/vm/
# 看一下(default: 0)
cat nr_hugepages
```

## Kernel

### User mode v.s. kernel mode

User program -> "System call" -> interrupt -> CPU 執行對應代碼呼叫 kernel driver -> run -> Check(找 shared memory/message queue...)有沒有 imcoming message -> return 

### ipcs
##### （`I`nter-`P`rocess `C`ommunication facilitie`S` 進程間通信設施）
會顯示 message queue, shared message
semaphore 資訊
```sh=
## 查看目前 queue, shared
ipcs
## 查看這些通訊方式的設定資訊
ipcs -l
```

##### 對應參數

![](https://i.imgur.com/HzUhd7U.png)

## File System(fs)

```sh=
cd /proc/sys/fs

# 最多容納多少 Asyc I/O, 如為 DB 越多越好, 1M up, 臨時需要大量寫入時比較不易被受限
cat aio-max-nr

# kernel 一次可以掌握的 file 數
cat 

公式 (mempages * (PAGE_SIZE / 1024)) / 10
```

```sh=
# 針對使用者進行設定
cd /etc/security
cat limits.conf

# 查看 limit 相關設定
ulimit -a
# 調整
ulimit (選項, ex: -n = open files) 數值
```

## OOM(Out of memory)

### panic_on_oom(sys/vm/)

### oom_adj
> value -16 ~ 15, 類似優先序, 越小越不容易被 kill

```sh=
cd  /proc/{which pid}
echo '{value}'| sudo tee oom_adj
```

## Dymanic increase swap

1. partition disk 直接切硬碟
	- 快
2. file 新增檔案掛載
	- 方便

```shell=
## top 可以看到 swap 資訊
## !!先下 sync (同步), 否則通常是 async
## !!把 swap load 回 memory
## 查看目前 swap 空間
swapon --show
## 增加 swap 檔案
sudo fallocate -l 1M /{File name}
## 修改權限
sudo chmod 600 /{File name}
## 掛載 swap file
swapon /{File name}
## 拿掉
swapoff /{File name}
```

## Network
調kernel內buffer
```sh=
cd /proc/sys/net/core
## rmem_default : 212992 預設下載buffer大小
## rmem_max 
cat rmem_default

## 檢查目前network buffer size(需安裝 ifstat 套件)
ifstat -i eth0 -q 1 1
```

用超強演算法（？）加快速度


```shell=
echo 'net.core.default_qdisc=fq' | sudo tee -a sysctl.conf

echo 'net.ipv4.tcp_congestion_control=bbr' | sudo tee -a sysctl.conf

## IPv6 (?) 待補充

sudo sysctl -p
```

Network buffer 使用狀態 https://unix.stackexchange.com/questions/419518/how-to-tell-how-much-memory-tcp-buffers-are-actually-using

# Linux 防護技巧

1. 物理防護
2. set GRUB password(避免 Single user mode 修改 root 密碼)nano 00_header
	- +2FA Google Auth
3. 磁碟加密
	- VeraCrypt
		- 利用滑鼠軌跡來產生隨機的金鑰加密(滑越久強度越強)
4. passwd
:::info
< source: 簡報 page 27>
```shell=
passwd : 用來變更使用者的密碼
sudo passwd <username> : 變更指定使用者的密碼
passwd -S : 顯示密碼的狀態資訊
sudo passwd -S <username> : 查看特定使用者的密碼資訊
sudo passwd -aS : 參數查閱所有使用者的密碼狀態資訊
sudo passwd -d <username> : 移除使用者密碼 (該使用者的帳號也會同時被停用，無法登入)
sudo passwd -e <username> : 設定密碼為過期狀態
sudo passwd -l <username> : 鎖定使用者密碼
sudo passwd -u <username> : 解鎖使用者密碼
-n -x -w -i : 設定最短期限，最長期限，過期前警告，密碼過期後可使用的期間
```

{帳號名稱} P 09/20/2018(建立日期) 0(密碼最短期限) 99999(密碼有效期限) 7(過期前幾天警告) -1(密碼多久過期(-1=就算有密碼期限也不會鎖掉))
:::

4. sudoer
+ 加這一行代表kent1201這個帳號可以使用sudo 之後使用的時候不用打sudo
kent1201 ALL=(root) /usl/bin/passwd(防止更改密碼[?])

5. /var/tmp 很容易被駭客入侵, 因此禁止/tmp/裡執行內容、setuid等...指令
```shell=
sudo mount -o rw,noexec,nosuid,nodev,bind /tmp/ /var/tmp/
```

```shell=
## 安裝 logcheck
sudo apt-get install logcheck
## 模式：警報、警告、日常

## logcheck擴充工具，分析 & 列出 需要看的 
sudo apt-get install syslog-summary

## 編輯設定檔
sudo vim /etc/logcheck/logcheck.conf

## default:22行
REPORTLEVEL="server"

## default:62行 啟用 SYSLOGSUMMARY
SYSLOGSUMMARY=1
```

5. nmap 偵測網站、Server、服務的套件
```shell=
sudo apt-get install nmap

nmap -v --top-port 10 178.128.218.255
nmap -sA --top-port 10 178.128.218.255
## 較完整掃描
nmap -sS -A 178.128.218.255

sudo apt-get install portsentry

## 設定檔
sudo vim /etc/portsentry/portsentry.conf

## portsentry.conf :34 起
# 有預設的組別，可針對其參考使用
## portsentry.conf :163 KILL_ROUTE
# 受到攻擊時轉移
# 
## portsentry.conf :208 iptables
# Reject 會傳封包, Drop 直接丟
## portsentry.conf :211 iptables, BT建議可看看

```


6. chkrootkit, unhide, tripwire
	- chkrootkit 掃瞄服務有無被木馬入侵
	```shell==
	sudo apt install chkrootkit
	sudo chkrootkit
	```
	- unhide 檢查有無隱藏的 process
	- tripwire 監控檔案或設定有無更動
```shell=
## 安裝
sudo apt-get install tripwire unhide chkrootkit fail2ban
## tripwire 
##     sitekey > policy & conf
##     localkey > 
sudo tripwire --init

sudo sh -c "tripwire --check | grep Filename > no-directory.txt"
## unhide 檢查實際上執行，但刻意隱藏的process
```

7. fail2ban
```shell==
## 一定要設定 ignore ip，ignore自己
cp -a　一定要加-a(archive) 
```