# 1061 LSA week 8 (2017/11/08) 共筆 - https / samba
lighttpd 靜態網頁
nginx 可接受很多連線
apache2 很肥很大


```
$ telnet localhost 80
```

[Let's Encrypt](https://letsencrypt.org/getting-started/)
[nginx / ubuntu 17.01](https://certbot.eff.org/#ubuntutzesty-nginx)

### installation
```

```

```
$ /etc/letsencrypt
```
### letsencrypt certbot
### mozilla https
### crontab autorenewal
```
cmd
scp,sftp,rsync
ncftp
package
samba
proftpd
```

### Samba 設定
```
1.主機使用者
2.主機檔案權限
3.samba 使用者
4.samba (smb.conf) 設定
```
- create mask = 新增一個「檔案」的時候，這個檔案權限自動設多少

- directory mask = 新增一個「目錄」的時候，這個目錄權限自動設多少

```linux
$ sudo apt-get install samba
$ sudo vim /etc/samba/smb.conf

```