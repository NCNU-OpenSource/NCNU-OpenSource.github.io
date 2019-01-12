# 1061 LSA week 7 (2017/11/1) 共筆 - 套件打包 / 遠端監控 / Web Server
##### 2017/10/25 為自習，故無共筆

## 課前需求
確保3個WebServer已裝好
- lighttpd : port 8081
- apache2 : port 8080
- nginx : 80
- 檢查3個WebServer是否active的指令
`$sudo netstat -ntupl | grep 'apache\|nginx\|lighttpd'`

---

安裝套件：
- nc `$sudo apt-get install netcat`
- snmpwalk `$sudo apt-get install snmp`
- fakeroot `$sudo apt-get install fakeroot`
- checkinstall `$sudo apt-get install checkinstall`
- snmpd `$sudo apt-get install snmpd`
- nagios
- cacti

---

>### Installing IPSumDump
```
$ wget http://www.read.seas.harvard.edu/~kohler/ipsumdump/ipsumdump-1.86.tar.gz
$ gunzip ipsumdump-1.86.tar.gz
$ tar -xvf ipsumdump-1.86.tar
$ cd ipsumdump-1.86/
$ ./configure
$ make
$ sudo make install
```
>下載：
>- [ipsumdump](http://read.seas.harvard.edu/~kohler/ipsumdump/)
>>  [欲了解 解壓縮 功能](http://note.drx.tw/2008/04/command.html) 
>>  摘自凍仁的筆記
>
---
## 課堂共筆
`$nc -vl 1234` nc listen port 1234

`sudo vim /etc/snmp/snmpd.conf`
* agentAddress  udp:127.0.0.1:161 預設值 -> 註解掉
* `agentAddress udp:161,udp6:[::1]:161` 將前面註解去掉
* ACCESS CONTORL, e.g. `recommunity LSA 10.33.0.0/16`
    * LSA 為密碼，可自行更改，不建議使用個人常用密碼
    * 第三列為限定哪些網域可以連線

`snmpwalk -v2c -c public -O e 127.0.0.1`
- -v 為版本
- -c 為 community
- 

### Vim 指令
`:q!` 強制結束不儲存
`:wq!` 強制寫入並強制結束(不推荐)
### SNMP
`snmpwalk -v 2c -c public -O e 163.22.32.201` 不要玩它QuQ

回去練習安裝：cacti & nagios

### deb creation
```
$ls ipsumdemp-1.86.tar.gz
```

### tar.gz
 [欲了解 解壓縮 功能](http://note.drx.tw/2008/04/command.html) 
- tar 將檔案打包
`$tar zxvf 壓縮檔檔名 壓縮後檔名` 解壓縮
`$tar zcvf `壓縮
- gz 將檔案壓縮


### 環境變數
`- echo $PATH` 顯示環境變數
`export PATH="/path/to/dir:$PATH"` 在 ~/.bashrc 最底下添加即可新增環境變數


### 安裝 ipsumdump 乾淨方法
```
$ fakeroot checkinstall --fstrans --install=no
$ dpkg -la|grep ipsumdump
$ sudo dpkg -i /home/{username}/tmp/ipsumdump-1.86/ipsumdump_1.86-1_amd64.deb
$ ipsumdump
$ man ipsumdump
```
- fstrans 怕該安裝檔不符合 FHS 標準

### ssh遠端開啟多個terminal tab方法
[了解byobu-screen傳送門](https://linux.die.net/man/1/byobu-screen)
```
$ byobu-screen -RUD
```
{Ctrl + A} then {C}
{Ctrl + A} then {Shift + '} 列出所有列表
{Ctrl + A} then {Ctrl + D} 退出但暫存

- U 強制使用 unicode


## mysql autobackup
[谷歌傳送門](https://www.google.com.tw/search?ei=msT5Wdz_O8Gb0gSqzK74DQ&q=automysqlbackup+ppa&oq=automysqlbackup+ppa&gs_l=psy-ab.3..0i30k1j0i8i30k1.9162.9480.0.9571.4.4.0.0.0.0.86.86.1.1.0....0...1.1.64.psy-ab..3.1.86....0.X6IKtR0JxPQ)
```
$ sudo apt-get install automysqlbackup
$ sudo vim /etc/automysqlbackup/automysqlbackup.conf/
$ ls /var/lib/automysqlbackup
```


```
$ vim /etc/resolv.conf
$ vim /etc/nsswitch.conf
$ vim /etc/hosts
```
# To-Do List
在/var/www/內製作三個目錄，讓三個不同的WebServer Root Directory進入不同目錄
## example for lighttpd
`$ /etc/lighttpd/lighttpd.conf`
`$ /etc/lighttpd/conf-enable/11-drupal6.conf`
    - server.document-root = {自定義目錄}

## 自行深入了解
谷歌 `nginx proxy`
谷歌 `ubuntu nginx proxy_pass`

**Load Balancing with Nginx**
./sites-available/{檔名}
```
//上課講解
upstream pool {
 server 127.0.0.1:8080;
 server 127.0.0.1:8081;
}

server {
  listen 80;
  server_name mynameislalala.com;
  
  location / {
    proxy_pass http://pool;
  }
  
}
```
`$ sudo ln -s /etc/nginx/sites-available/{name} /etc/nginx/sites-enabled/`

**Run Multiple Websites Using Nginx Webserver**
source:https://www.liberiangeek.net/2015/07/how-to-run-multiple-websites-using-nginx-webserver-on-ubuntu-15-04/

## 查IP位置
`$ host www.google.com`

## 本機設定 DNS
`127.0.0.1 your_domain_name` 寫在 /etc/hosts
ex. 127.0.0.1       apach.your_name.com
即可透過瀏覽器去造訪
