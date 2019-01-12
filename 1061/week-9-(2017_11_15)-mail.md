###### tags: `1061`
###### LSA筆記規則：{`$：user mode` / `#：root mode`}
# 1061 LSA week 9 (2017/11/15) 共筆 - mail
## scp 安全，但需要經常打指令
```
$scp {檔案} {username}@{ip}:{路徑}
```
Example <span style="display:inline-block">$$\Longrightarrow$$</span> `$scp index.html username@10.10.10.10:~/home/username/directory`
scp 上傳檔案會預設成664權限，若要更高可到config檔更改。
> ### 針對有設定安全性之提醒，有的人會把預設port更改
> -P 指定 port，若是預設 22 則可以不用輸入
> `example: $scp -p {port} {檔案名稱} {username}@{ip}:{路徑}`
>>好用心，推。
>>好用心，推。
---
## sftp 比ftp安全，一般主機只要有ssh就可用sftp
SSH File Transfer Protocol
```
$ sftp {username}@{ip}
$ get {path}
```
>> ###  Example
>> ```
>> $ sftp index.html username@10.10.10.10
>> sftp> get index.html
>> ```
> [color=red]
> ### sftp指令
> - 在指令前面多打個 l 代表在本地端執行
> pwd -> current directory
> lpwd -> local current directory
> get * -> download whole file within the directory
> 好軟體推薦：[FileZilla](https://filezilla-project.org/)

## ncftp
```
$ sudo apt install ncftp
$ ncftp ftp.ncnu.edu.tw
ncftp> get robots.txt
```

> ### 指定使用者登入
>`$ ncftp -u {username} -p {password}`
> #### 若無 -u 則預設使用 anonymous
> 

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


Webmail 推薦: squirrelmail
下週上課前請先了解何謂 TCP/IP, OSI