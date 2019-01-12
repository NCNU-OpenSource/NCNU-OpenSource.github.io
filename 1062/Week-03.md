###### tags: `1062` `LSA` `ncnu`
# 1062 LSA Week 03 - Review : 



## 建立反向通道 Reverse SSH
>### [Reverse SSH Tunnel實際運用，搭配auotssh永不斷線，putty建立反向tunnel](https://easylife.tw/2043 "Reverse SSH Tunnel實際運用，搭配auotssh永不斷線，putty建立反向tunnel")
>### [SSH PORT FORWARDING EXAMPLE](https://www.ssh.com/ssh/tunneling/example)
>> [name=Mike Sam 覃融亮]
>> [time=Fri, Mar 23, 2018 4:23 PM]
>> [color=red]問題情景：今日我出差，在台北，有一份重要文件留在平時的工作機台上了，想RDP暨大網路內的一台主機，剛好有同學有一台VM借我當作橋樑連接
>> `ssh -L {localhost}:{待會RDP用port}:{暨大網路內的一台主機ip}:{RDP預設3389port} {VM登錄賬戶}@{VM地址}`
>> 即可解決以上問題~

目標主機：
`ssh -NfR 2345:localhost:22 bluet@bluet.org`


中繼主機：
`netstat -ntupl | grep 2345`
> 應該會看到 Port 被佔用了

遠端主機：
`ssh blut@blut.org`
`ssh localhost -p 2345`

`Ps aux|grep ssh`

## 防呆功能
`sudo vipw`, 這個是編輯 /etc/passwd
`sudo vigr`, 這個是編輯 /etc/group

在logout之前如果要在背景跑某些program，記得在整串指令之前下個"nohup"，不然logout的時候該program也會一起結束。

## DropBear
### 安裝
`$ sudo apt-get install dropbear`
`$ sudo vim /etc/default/dropbear`

然後編輯此列
```
DROPBEAR_PORT = 22  
DROPBEAR\_EXTRA\_ARGS = "-p 443 -p 80"      --\> if you want extra ports
```
移除OpenSSH Service
```
$ sudo /etc/init.d/ssh stop`
$ sudo update-rc.d remove
```
啟動DropBear
```
$ sudo /etc/init.d/dropbear start
$ sudo update-rc.d start
```
### Dropbear
DropBear 是一個小型的ssh，可以跨平台使用，主要是用在嵌入式系統上

### [使用 chroot 监狱限制 SSH 用户访问指定目录](https://linux.cn/article-8313-1.html)

### rssh
[ubuntu 教學](https://ubuntuforums.org/showthread.php?t=1929414)
[home page](http://www.pizzashack.org/rssh/)

## debootstrap

迷你 Debian 系統

### 安裝

```
$ sudo apt install debootstrap
$ mkdir  rootfs-debian
$ debootstrap --arch i386 sid rootfs-debian http://debian.linux.org.tw/debian

```

# mount -- bind
> [name= Mike Sam 覃融亮]
> [time=Fri, Mar 23, 2018 4:23 PM]
> [color=blue]
> 這個功能很好用，可雙向同步資料夾內容，Mac OS上似乎不支援，但有另類類似的方法。
> 詳細的可點擊參考[Mac OS X下使用bindfs实现mount的目录绑定功能](http://linfan.info/blog/2012/02/28/bindfs-on-mac/)，實際測試後是可用的喔 :star: