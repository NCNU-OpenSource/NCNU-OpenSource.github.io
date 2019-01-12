---
hackpadID: 8zc0sIiUzKw
hackpadWorkspace: ncnu-opensource
tags: hackpad-import, ncnu-opensource
---
# Ｗeek 9 Samba, three-way handshake, iptable

2015/04/23

## Samba

/etc/samba/smb.conf

*   [download]
*   comment = Download
*   path = /var/user/Downloads
*   browseable = no
*   writeable = yes+
*   create mode = 0664
*   directory mode = 0775
*   write list = @usergroup, user1, user2
*   guest ok = yes
*   vet files = /fileName/*.php/

usershare allow guests = no

write list = ＠user ->整個user grou

*   [download]
*   comment = Download
*   path = /var/user/Downloads
*   browseable = no
*   writeable = yes+
*   create mode = 0664
*   directory mode = 0775
*   write list = @usergroup, user1, user2
*   guest ok = yes

p

sudo pdbedit -a [ 要新增的user名]

sudo

*   everything is file

Server版連結command如下：

*   smbclient \\\\localhost\\downloads
*   help (顯示所有可用command)

Linux 檔案存取權限

d rwx rwx rwx 資料夾, 擁有者, 所屬群組, 其他人 權限

   [ 7     7     7]

## 瘟腥參考

*   [鳥哥使用者權限](http://linux.vbird.org/linux_basic/0210filepermission.php)
*   [鳥哥Samba](http://linux.vbird.org/linux_server/0370samba.php)
*   [DMZ](http://zh.wikipedia.org/wiki/DMZ)
