# Week 03(2019/03/07)

dmesg


`$ cat /var/log/auth.log` : 登錄記錄，無論有無登錄成功

ssh = mega package (虛擬套件，沒有一個東西叫ssh，it's相依關係，是指向openssh)


`$ ls -utlra /var/log` : 依時間逆序顯示

`$ locale` 顯示語系相關變數指令
`$ env` : Display, set, or remove environment variables
`$ export` : 通常用於修改環境變數(Set an environment variable)
`$ export | grep -i '{搜尋}'` : i = insensitive
`$ echo` - Display message on screen
`$ readonly` - Mark variables/functions as readonly
`$ shift` - Shift positional parameters

---
`$ LC_ALL=C ls -al` : 暫時以C語系顯示
`$ ls -al`
`$ export LANG=C`

`$ find ./ -iname a*`

`$ mount | grep " / "` : 檢查系統碟是哪個儲存裝置
`$ fdisk -l /dev/sda`
`$df` : 檢視目前在使用/掛載的
`$df -h`
`/home/{帳號}/.bashrc` : 環境變數儲存位置

`$ whereis {指令}` 
`$ type -a cd`
`$ fstab`
`$ blkid`
`# blkid /dev/sda1`
`$ stat fstab`



`kill -11 {process}`
`kill -9 {process}`