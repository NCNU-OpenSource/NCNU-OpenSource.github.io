# Week 13 Pi (2019/12/12)

## 期末分組 

### 規則
至少一個人跟報告組不一樣

確認每一組都有拿到樹梅派本體、TTL線、SD卡一張(部分組別有拿變壓器)

### 樹梅派設定
到 raspiberry 官網下載(選lite版本)（一組一個人下載即可）：
https://www.raspberrypi.org/downloads/raspbian/
( raspbian 是 for 樹梅派的 OS )

### 使用 ubuntu 系統
將 SD 卡插到電腦裡面
查看硬碟狀況，找到SD卡
```
lsblk -p 
```
卸載SD卡以利格式化
```
sudo umount <path>(記憶體掛載位置)
```
格式化SD卡(2TB以上請使用parted)，此處使用fdisk
```
sudo fdisk <device>(SD卡) 
```
進到Device裡面
```
p 看partition狀態
```
刪除partition
```
d 刪除分割區
```
```
1 查看原始分割配置
```
```
p 看到partition被刪掉了
```
```
n 建立新分割區
```
```
L 看分割區種類 > 選 b FAT 32
```
確認格式化成FAT32格式
```
sudo fdisk <device>(SD卡)
```
### 燒錄
dd:(沒有防呆，千萬不要mount錯位置)
bs 是 blocksize，幾MB可以自己填
```
sudo dd if=Raspibian.img檔 of=掛載位置 bs=1M(mac的m是小寫，mac也可以不加) status=progress conv=fsync
```
### 啟用uart
建立一個目錄
```
mkdir dsdcard
```
mount SD 卡
```
sudo mount <deviceSD卡> <建立的目錄>
```
```
sudo vim ~/Desktop/建立的目錄/config.txt
```
修改config.txt檔案裡面加上enable_uart=1 

### 使用 windows 系統或 mac 請到支援連結找方法
支援連結（格式化筆記）：
https://hackmd.io/@minecola/BJaoPYkAr


### 開始使用樹梅派
:::danger
1. 把剛剛設定好的SD卡放到樹梅派的SD卡槽上（不要接電源）
:::
2. 接上電源，紅燈是電源，黃燈是記憶卡讀取，閃爍是電壓不穩
3. TTL線黑、白、綠接6、8、10腳位（windows、mac要裝驅動，見下方支援連結）

### screen
```
sudo apt install screen 
```
找到usb裝置
```
ls /dev | grep ttyUSB 
```
```
sudo screen /dev/ttyUSB0（找到的usb裝置） 115200
```
### putty 
```
sudo apt install putty
```
打開putty圖形化介面
```
sudo putty
```
:::info
連線進入 pi 後，需要登入
帳號:pi
密碼:raspberry
:::
連結支援：

[如何連線透過 USB 連線至 PI](https://hackmd.io/@minecola/ryYq_Y1AH)

[樹莓派大補帖](https://hackmd.io/@minecola/SyfH2T2TS)

### 樹梅派地區時區設定
```
sudo raspi-config
```
開啟介面選4：選1.2.分別調整地區、時區
地區與編碼 zh_tw UTF-8
時區 Taipei

### 網路設定
修改wifi設定檔
```
sudo vim /etc/wpa_supplicant/wpa_supplicant.conf
```
填入wifi資訊

或

```
sudo raspi-config
```
3.Network Options > 設定 WIFI > 需要WIFI名稱跟密碼

### 設定ssh
```
sudo raspi-config
```
5.Interfacing > ssh > enable

在同個網路環境下就可以用ssh連線了

## 從SD卡設定網路連線及ssh(在沒有螢幕跟ttl線的情況下)

以macOSX為例
因為檔案系統不同的關係，mac只能夠掛載boot磁區
```
#插入SD卡後cd到boot
cd /Volumes/boot
```
建立wifi設定檔,開機時會自動匯入/etc/wpa_supplicant/
```
touch wpa_supplicant.conf
```
編輯wpa_supplicant.conf
用vim, nano或其他文字編輯器都可以
```
country=TW # Your 2位wifi國家碼
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev

network={
    ssid="你的wifi名稱"
    psk="你的wifi密碼"
}
```
在/boot裡加入一個ssh可以在開機的時候自動打開ssh
```
touch ssh
```
插上sd卡開機之後，在macOSX上搜尋local網域內裝置
```
arp -a
```
可以在pi連線前先看一次，pi開機後多出來那一個就是pi，找到就可以用ssh去連他


### pi 自動寄信
mail.py:
```python=
#!/usr/bin/python
import subprocess
import smtplib
import socket
from email.mime.text import MIMEText
import datetime

# Which email address want to send
to = 'XXX'

# Using specific gmail account
gmail_user = 'XXX'
gmail_password = 'XXX'

# SMTP command
smtpserver = smtplib.SMTP('smtp.gmail.com', 587)
smtpserver.ehlo()
smtpserver.starttls()
#smtpserver.ehlo 這行不用加，不影響
smtpserver.login(gmail_user, gmail_password)
today = datetime.date.today()

# Linux Specific shell command
arg='ip route list'
p=subprocess.Popen(arg,shell=True,stdout=subprocess.PIPE)
data = p.communicate()
split_data = data[0].split()
ipaddr = split_data[split_data.index('src')+1]
my_ip = 'Your ip is %s' %  ipaddr
msg = MIMEText(my_ip)
msg['Subject'] = 'IP For RaspberryPi on %s' % today.strftime('%b %d %Y')
msg['From'] = gmail_user
msg['To'] = to
smtpserver.sendmail(gmail_user, [to], msg.as_string())
smtpserver.quit()
```

### gmail 開啟低安全性應用程式
https://myaccount.google.com/lesssecureapps

### 編輯/etc/rc.local 開機自動作業
```
sudo vim rc.local
```
### 在exit之前加入要做的事
```
python mail.py
```