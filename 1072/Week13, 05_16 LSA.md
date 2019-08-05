# Week 13(2019/05/16) - 備份與自動化

本週簡報: [本週 Slide](https://docs.google.com/presentation/d/1wJTCemM79a-d8FDMcgH6nDHAyifFsLjQzEL8xYDYnaw/edit?usp=sharing)
> 備份很重要 更重要的是異地備份 天災人禍難以預測，
不小心一把火，可能就沒了

:::info
如果安裝軟體遇到用`curl  ... 然後 | sh `等的 指令 ，
:warning:最好不要直接Pipe 
:ok:先下載下來看沒有毒才安裝
:::

# Data Duplicator (dd)
+ sync 邊寫邊備份 → 速度比較慢
+ fsync 直接把資料丟掉緩衝區再慢慢背負 → 速度比較快

``` 
sudo dd if=/dev/sdb of=/home/..../backup.img
if = 要備份的東西 # input
of = 被分到哪裏 # output
```

+ `dd`+`gzip` 備份的話 = 把要備份的硬碟裏面的0壓縮掉，再備份
	+ 好處 ：資料比較少，備份比較快
+ tar 只是打包沒有壓縮, 所以要大悲gzip 來使用
	+ tar 對打包多個檔案才會比較有作用

### ZFS（俗稱 Zetta File System）
:::danger
不要用在根目錄！雖然可以，但是設定很麻煩！
一般把用到的資源，如docker、需要用到的目錄、db等目錄設到ZFS
:::
+ Zpool - 邏輯硬碟管理能力 
+ 有snapshot 的功能
+ 有Copy-on-write & 自動修復的功能

[指令參考 FreeBSD](https://www.freebsd.org/doc/zh_TW/books/handbook/zfs-zfs.html)

:::info
#### 淺談 LZ4
壓縮率不是最好的
但是速度是最快的
:::
+ 建立快照 `zfs snapshot {snapshot name exp:datapool/docs@version1}`
+ 看建立的快照 `zfs lists -t snapshot`
+ 刪除快照  `zfs destroy {snapshot name}`
+ 把snapshot掛載到其他目錄`zfs clone datapool/docs@version3 datapool/docs/v3` 改變Mount point 只能在已經建立zfs系統的硬碟使用 
+ ZFS 變快的方法
	+ ZIL 很像 raid 卡上面的記憶體（8G） 
		+ 結果寫入就會變很快
	+  L2ARC 
		+ 第二層用讀很快的 SSD，不用買貴貴 ECC Memory 來 cache，其實也蠻快的

:::danger
1. XFS：比較不開放，但是效能也不錯
2. BTRFS：
:::

### 100MB.bin
`$ wget https://speed.hetzner.de/100MB.bin`

- 上課介紹的是 FileSystem 的部分
- 可以虛擬成新的硬碟
![](https://louwrentius.com/static/images/zfs-overview.png)

## RAID
### Raid 0（以兩顆硬碟為例，須為雙數)
檔案直接一分為二，分別存入硬碟，速度最快
:warning: 一個掛就再見

### Raid 1: Mirror (以兩個硬碟為例)
速度慢，需要 Mirror
檔案雙向存入(Mirror)

### Raid 5(至少三顆硬碟，容量：N-1)
- 會將檔案一分為二存放並且額外將 Hash 值存在第三顆硬碟，只要其中一顆掛，可以由其中兩顆恢復
- 效能不一定，會較花費 CPU，需要檢驗 Checksum
- 效能也取決於RAID卡
### Raid 6(至少四顆硬碟，容量：N-2)
同RAID 5，但hash則會建立在兩顆(RAID 5 一顆)。

### RAID 10(RAID 1 + RAID 0)
兩顆Mirror，一顆做分割？
## RAID Speed:
0 > 5|6 > 1

:::info
可以利用上述組合來達到目標效能
:::

# DR Disaster Recovery

## Hot backup
備援站硬體及軟體與線上站差不多，可以立即轉換

## Warm(Mix) backup
介於前後兩者之間，可以在少數操作之下上線備援

## Cold backup
備援站只資料，軟體及硬體較不完整，需要啟用的話要花更多時間

### SCP 
`scp -P {Port number} {要上傳的檔案} {遠端主機的目錄}`
`-r` recursive 用於目錄
`-l` limit 限制速度
`-C` compress 壓縮

### Rsync
+ 可以填過沒有變動的檔案（差異備份？）
+ 可以本地備份 或 遠端備份
+ 遠端備份的方式
	+ `rsync -avzh -e 'ssh -p {port number}' {要備份的目錄} {遠端主機的目錄}`
+ `--delete` 一邊備份一邊刪除原本的檔案
+ `--delete-after` 備份完成後再刪除

## 組態管理
### Ansible
+ 重複的流程自動化
    + e.g. install vim etc.
+ Infrastructure as a Code
    + 硬軟體設定變成code
    + git