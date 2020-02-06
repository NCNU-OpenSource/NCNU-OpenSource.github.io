# 1061 LSA Week 4 - 常用指令

### 分組狀況請到下方連結填寫
[分組名單](https://docs.google.com/spreadsheets/d/1kjr1GAkp87huNtnqm8MErZZ1mhjexR2hBE4Wk2-6y-8/edit?usp=sharing)

作業範例

| 硬碟 | 目錄名稱  | 大小     |
| --- | -------- | ------- |
| sda1| /abc     | 2GB     | 

`/root != 通常用的根目錄`
`/home/{username} = 通常用的根目錄`
 

規劃硬碟時，通常分割兩個分區
1. root
2. swap（置換分割區） 建議開記憶體的1~2倍大小 `16G Storage`
    
16M ram跑32m 的ie,會一直去存取硬碟到memory

`$dmesg`— 顯示 Linux 開機資訊指令

3. /boot :開機程序用

4. 檢查有沒有swap 
    - `$free -m`
    - `$lsblk -ip /dev/sda`
    - `$sudo fdisk -l ` or `$sudo fdisk -l /dev/sda`
    - `$cat /etc/fstab|grep -i 'swap'`
    - `$grep -i "swap" /etc/fstab` -i:不分大小寫
    - `$grep -irn "swap" /etc`
5. CPU狀態
    - `$top` + <1> 查看多顆 CPU
    - `$top` + <shift+m> 依記憶體用量排序
    - `$cat /proc/cpuinfo` 詳細 CPU資訊

完全格式化硬碟由下列兩者交錯覆蓋
`/dev/urandom`    亂數產生
`/dev/zero`       空白



pipe:
`cat /etc/fstab | grep -i "swap"`

過濾整個資料夾，並顯示行數
`grep -irn "swap" /etc`

`dd`(data duplicator)
`sudo dd if=/dev/zero of=/home/test.txt bs=1m count=1`
　　if : input file
　　of : output file
　　bs : block size(不加單位默認為byte)
　　count: 只處理N個區塊
`sudo dd if=/dev/zero of=/dev/disk1 bs=1024 count=1024` 將引導扇區清空，方便格式化
    
`cat [filename] > [filename] `：
將 cat 顯示的內容寫進另一個檔案內, > 為複蓋, >> 為在原有內容後新增.
（若無指定寫入檔案則會自動新增）
6. First Sector
- 傳統硬碟 在外圈
- 光碟 在內圈
- Flash 隨機位置


RDP (Remote Desktop Protocol) 遠端桌面協定
SSH daemon 設定檔：
`$/etc/ssh/sshd_config` d 代表 daemon
`~/.ssh/config`

可能的config檔名稱
.cfg
.conf
.config
_config

`$cat /var/log/auth.log | grep  sudo | wc` 

head
tail
 
nmap

`$ps aux | grep {yourname} | wc`

`wc` - print newline, word, and byte counts for each file
即時更新：tail -f /var/log/auth.log | grep "sudo"

`tail -f /var/log/auth.log | grep "USER=root ; COMMAND=/bin/ls"`
`tail -f /var/log/auth.log |grep -e 'sudo.*ls' -e 'ls.*sudo'`
[How to grep with multiple AND pattern](https://unix.stackexchange.com/questions/55359/how-to-run-grep-with-multiple-and-patterns)

`$ps -aux|awk '{print $2 $3}' | xargs kill`
`$kill pid`kill -9 -11:dump memory
`$xargs` 把前面的xx，改成後面的xx
`$pstree -p | less`
`$netstat -ntupl`網路的狀態:看等待別人連線的port
看到怪怪的連線，先查看 /tmp 

`$/dev/shm` 也要注意

`$nmap -sS -A 10.0.2.0/24` 網路地圖
伺服器上面盡量別使用 LVM，因為硬碟壞掉救援有困難