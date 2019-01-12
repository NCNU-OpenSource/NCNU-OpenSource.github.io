##### tags:`ncnu` `lsa`

how to disable ipv6 ?
https://www.ubuntu-tw.org/modules/newbb/viewtopic.php?post_id=190590

如果大家VM裡面，網路連不上的話（（歡迎來這裡，推推
(https://geeky.name/content/disable-ipv6-support-ubuntulinux)


# Haproxy & MariaDB Cluster

### 安裝haproxy
`sudo apt install haproxy`

### 查看版本
`$ haproxy -v`

### 查看設定檔
`$ cat /etc/haproxy/haproxy.cfg`

### 編輯設定文件

`$ sudo nano /etc/haproxy/haproxy.cfg`

#### 登入 admin 界面設定檔
```
listen admin_stats
    bind 0.0.0.0:9999
    stats refresh 30s
    stats uri /
    stats realm Haproxy Manager
    stats auth admin:admin
    stats hide-version
```
#### Load Balance
```
listen http-in
    bind *:8888
    server server1 10.0.2.5:80 maxconn 32
    server server2 127.0.0.1:8080 maxconn 32
```
    
####  Load Balance 設定檔的另一種寫法

```
frontend http-in
    bind *:9900
    default_backend group1

backend group1
    mode http
    server server1 10.0.2.5:80 check
```

### 啟用服務

`$ sudo service haproxy start`

### 在不修改原始設定檔的狀態下，使用另一個設定：
```shell=
$ mkdir haproxy
$ cd haproxy
$ nano website.cfg
```

```
global
    daemon
    maxconn 256

defaults
    mode http
    timeout connect 3000ms
    timeout client 3000ms
    timeout server 3000ms

listen http-in
    bind *:8888
    server server1 127.0.0.1:8080 maxconn 32
    server server2 127.0.0.1:8080 maxconn 32

listen admin_stats
    bind 0.0.0.0:9999
    stats refresh 30s
    stats uri /
    stats realm Haproxy Manager
    stats auth admin:admin
    #stats hide-version
```
執行（須先stop原服務）
`$ haproxy -f website.cfg`


## MariaDB 10.1 安裝
也可以到這裡選擇適合的來源 https://downloads.mariadb.org/mariadb/repositories/
https://www.howtoforge.com/tutorial/how-to-install-and-configure-galera-cluster-on-ubuntu-1604/
```shell=
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8

sudo sh -c "echo 'deb https://mirrors.evowise.com/mariadb/repo/10.1/ubuntu '$(lsb_release -cs)' main' > /etc/apt/sources.list.d/MariaDB101.list"

sudo apt update

sudo apt install mariadb-server mariadb-client 

sudo apt install socat rsync

sudo mysql -u root -p

GRANT ALL ON *.* TO `root`@`%` IDENTIFIED BY "rootpwd";
FLUSH PRIVILEGES;
```


### 如果出現Error Message (plugin unix_socket is not loaded...)
在
`/etc/mysql/mariadb.conf.d/50-server.cnf`
或是
`/etc/mysql/my.cnf`
或是 
`/etc/my.cnf`
的 [mysqld] section 中加入
```
plugin-load-add = auth_socket.so
```
### Cluster 設定
(新增一設定檔)
`$ sudo nano /etc/mysql/conf.d/galera.cnf`

```
[mysqld]
binlog_format=ROW
bind-address=0.0.0.0

wsrep_on=ON
wsrep_provider=/usr/lib/galera/libgalera_smm.so

wsrep_cluster_name='test_cluster'
wsrep_cluster_address='gcomm://'

wsrep_node_name='db1'
wsrep_sst_auth=root:rootpwd
wsrep_sst_method=rsync
```
叢集中第一台啟用時所用的指令
`$ sudo galera_new_cluster`

其餘啟用的指令
`$ sudo service mysql start`

檢查 galera cluster
`$ mysql -u root -p -e "SHOW STATUS LIKE 'wsrep_%'; " `

`$ sudo mysql -u root -p -e "SHOW STATUS LIKE 'wsrep_cluster_size'; " `

遠端連線
`$ sudo mysql -u root -p -h 10.0.2.7 -P 3306`



Cluster Check:
https://github.com/olafz/percona-clustercheck

git clone https://github.com/olafz/percona-clustercheck

sudo mv clustercheck /usr/bin

sudo chmod 755 /usr/bin/clustercheck

`$ sudo apt install xinetd`

`$ service xinetd stop`

sudo nano /etc/xinetd.d/mysqlchk
```
service mysqlchk
{
    disable = no
    flags = REUSE
    socket_type = stream
    port = 9200
    wait = no
    user = nobody
    server = /usr/bin/clustercheck
    log_on_failure += USERID
    only_from = 0.0.0.0/0
    per_source = UNLIMITED
}
```
sudo nano /etc/services

`mysqlchk   9200/tcp    #Galera Clustercheck`

檢查xinetd及clustercheck是否正常運作
telnet localhost 9200

haproxy+MariaDB example

    listen mariadb_cluster_writes 

       bind 0.0.0.0:13304

       mode tcp

       option httpchk

       server node01 10.0.2.6:3306 check port 9200

       server node02 10.0.2.7:3306 check port 9200 backup

>問題：如何改設定檔不停機？
>[name=俊甫]