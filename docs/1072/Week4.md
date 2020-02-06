# Week 04(2019/03/14) 
view partition uuid:`sudo blkid`

:::info
如果做了disk partition，基本上資料會遺失且救不回來。
:::

`df -h`:查看磁碟狀態 

testdisk:數據恢復工具，主要設計用來幫助恢復丟失的磁碟分區

`apt search <command>`:顯示安裝哪些套件有這個功能

`/dev/shm`,`/tmp`:這兩個地方權限皆是"drwxrwxrwt"(全開)

##### dev/shm: tmpfs, 類似 ramdisk 的功能, 讓檔案載入於記憶體中可以更快讀取使用

:::warning
如果記憶體滿且沒有swap的情況下kernel會隨機把程序關掉
:::

`dd`:硬碟備份，類似`cp` e.g.`dd if=/dev/sda of=backup`

sshfs:一個可以透過 SSH 協定掛載遠端硬碟的工具

nfs:掛載遠端硬碟的伺服器

ngrep:網路封包分析工具 [ngrep](https://blog.gtwang.org/linux/linux-ngrep-network-packet-analyzer/)

[How to forward X over SSH to run graphics applications remotely?](https://unix.stackexchange.com/questions/12755/how-to-forward-x-over-ssh-to-run-graphics-applications-remotely)