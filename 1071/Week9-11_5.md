# Week9, 11/5 LSA

### Vsftpd
`apt install vsftpd`
`ftp localhost` 預設為 20 和 21 port
`sudo vim /etc/vsftp.conf`

anonymous_enable=YES
no_anon_password=YES 不須密碼，直接進入 vsftpd 伺服器
anon_root=/var/ftp/ 若沒有ftp此資料夾，須創建一個

ftpd_banner=Welcome to FTP.

chroot_local_user=YES 會使預設使用者無法離開家目錄
chroot_list_enable=YES
chroot_list_file=/etc/vsftpd/chroot_list 若沒有vsftpd此資料夾，須創建一個

allow_writeable_chroot=YES



:::info
設定檔改完請記得重新啟動
sudo service vsftpd restart
:::

`sudo adduser <user_name>` 新增使用者(含有家目錄)

影片 Source: http://163.22.17.70/~bluet/Revolution_OS/