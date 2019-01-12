# Week15, 12/20 LSA
###### tags: `1061`, `Project`, `NCNU`, `RaspberryPi`

樹莓派大補帖
===

## 硬體設備
- Raspberry Pi 3 Model B
- MicroSD card
- (Option) MicroSD 轉 SD card
- (Option) 讀卡機
- USB to TTL 線
- (Option) 電源供應用 micro usb

## 系統燒錄
> `目前使用` [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) - 左邊是桌面版(提供圖形化介面)、右邊是CLI版(無圖形化介面)

> `選用` [NOOBS](https://www.raspberrypi.org/downloads/noobs/) - 多系統，左邊是完整版(可以離線安裝)、右邊是Lite版(需要網路)

### 格式化記憶卡
> 此步驟可以直接用

#### MacOS
> 開啟磁碟工具程式並選取記憶卡後點選清除，格式記得設定`MS-DOS (FAT)`

![](https://i.imgur.com/tViVYuC.png)

#### Windows
> 檔案總管右鍵點選記憶卡選擇格式化，將格式設定成`MS-DOS (FAT)`

### 燒錄軟體

燒錄軟體使用`Etcher`([傳送門](https://etcher.io))，支援MacOS及Windows，挺好用的 :+1: 

`安裝方式`
1. 下載、安裝 Etcher
2. 打開，選擇Raspbain安裝檔、記憶卡
3. 按下`Flash!`等待完成

![](https://i.imgur.com/g9Nhq2c.png)

## TTL設定與連接

打開剛剛燒錄好的記憶卡，找到`config.txt`打開在最底下新增
![](https://i.imgur.com/h2rY2Yg.png)
```
# Enable uart
enable_uart=1
```

![](https://i.imgur.com/MzhFME6.png)

完成後將記憶卡插入Raspberry Pi並且接上電源，紅色指示燈為電源、黃色指示燈為記憶卡讀取，如果紅色燈閃爍代表供電不穩。

> Raspberry Pi可利用micro usb及GPIO 5V供電，要注意的是GPIO沒有防電流過載，所以請小心使用

在做下面的動作之前，先當個接線生把對應的GPIO接上，再將USB連到電腦
![](https://www.raspberrypi.com.tw/wp-content/uploads/2014/09/connect-serial-to-raspberry-pi-model-b-plus.png)

### Linux
1. `sudo apt install minicom`
2. `sudo minicom -D /dev/ttyUSB0`
:::info
如果沒有畫面的話按一下Enter
:::
 


### MacOS

1. 安裝[PL2303HXD Driver](http://www.prolific.com.tw/US/ShowProduct.aspx?p_id=229&pcid=41)，安裝後會重新開機
2. 接上TTL USB後打開終端機輸入`ls /dev/cu*`，如果顯示包含`/dev/cu.usbserial`代表驅動及TTL有接到電腦
3. 在終端機輸入`screen /dev/cu.usbserial 115200`連樹莓派
4. 下方沒有出現其他訊息像R/W busy等...且終端機全黑的話(也有可能顯示系統載入的訊息)，可以直接輸入帳號密碼進入系統

### Windows

1. 安裝[Putty](https://www.putty.org) (或用3M RFID Reader光碟裡面的putty0_6.exe也可以)
2. 安裝[PL2303HXD Driver](http://www.prolific.com.tw/US/ShowProduct.aspx?p_id=225&pcid=41)
3. 到裝置管理員看TTL是連線到USB的第幾號COM
4. 打開Putty，`Connection Type`選擇Serial，然後在`Serial Line`輸入剛剛看到的COM，`Speed`打115200即可連線
5. 在畫面中輸入帳號密碼進入系統

:::info
預設帳號密碼
帳號:pi
密碼:raspberry
:::

## 設定Wi-fi連線
> 以下都在黑黑的畫面中進行，而且只能用鍵盤控制

1. 輸入 sudo raspi-config 後輸入密碼到下列畫面
![](https://i.imgur.com/MHj6uwS.png)
2. 選擇`Network Options`並按下enter進入
3. 選擇`Wi-fi`進入
4. 輸入SSID按下enter確認後再輸入密碼(如果沒有密碼可以直接enter完成設定)
5. 選finish回到指令列

* 最後可以在輸入`ifconfig`看一下有沒有網路連線，並且**記住那個IP**
![](https://i.imgur.com/7IMvMvi.png)

## 開啟並建立SSH連線
### 開啟SSH
1. 一樣輸入 sudo raspi-config
2. 選擇`5 Interfacing Options`進入
3. 選擇`P2 ssh`進入
4. 選`YES`
5. 訊息顯示SSH開啟選擇確認離開
6. 選finish回到指令列

> 之後可以拔除TTL線並且使用SSH連線
### 建立SSH連線
#### MacOS
1. 打開終端機並且輸入`ssh pi@剛剛看到的IP`
2. (第一次連線時) 詢問是否建立ECDSA key，輸入`yes`建立
3. 輸入密碼`raspberry`

連線成功會長得像下面圖片
![](https://i.imgur.com/D92CI6x.png)

#### Windows
1. 打開Putty
2. `Connection Type`選ssh
3. `Host name`打剛剛的IP
4. 按Open即可開啟連線，之後輸入密碼即可使用

## 修改時區

1. 輸入`sudo raspi-config`
2. 選擇`4 Localisation Options`
![](https://i.imgur.com/sqcUtjQ.png)
3. 選擇`I2 Change Timezone
![](https://i.imgur.com/Ywui2s5.png)
4. 選擇`Asia`
![](https://i.imgur.com/kRT5ns5.png)
5. 選擇`Taipai`
![](https://i.imgur.com/Fooqc6x.png)

:::info
如果未來使用語音辨識服務需要將語言/時區設定至該語言
:::

## 修改軟體源
> 讓Raspbian不再連線至國外下載

1. 備份原設定檔
```shell=
sudo cp /etc/apt/sources.list /etc/apt/sources.list.$(date +%F)
```

2. 修改套件庫來源
> 改成就在隔壁的 ubuntu-tw 站
> 
> 這的步驟是將 `/etc/apt/sources.list` 中的字串 `http://raspbian.raspberrypi.org/raspbian/` 替換為 `http://ftp.ubuntu-tw.org/mirror/raspbian/raspbian/`
> [color=teal] 2018/12/26 更新

3. 清除原有的 Cache
```shell=
sudo apt-get clean all
```

4. 享受快速的更新
```shell=
sudo apt-get update
```

## 修改語言設定 (**Not sure**)

1. 若 ~/.bashrc 裡有
```shell=
LANGUAGE=en_US:en
LANG=en_US.UTF-8
```
> 先刪掉後在~/.bashrc 裡加上

```shell=
export LC_ALL="en_US.UTF-8"
```
2. 執行
```shell=
sudo locale-gen en_US.UTF-8
sudo dpkg-reconfigure locales 
```

## 自動寄信至信箱

### 傳送檔案至樹莓派

```shell=
    scp `檔案` pi@`樹莓派IP位址`:`路徑`
```
### Python 寄信程式
> 這個程式會放在Pi上，如果是需要放在危險環境的可參考[叡可可筆記](https://hackmd.io/v5qBJEbASjaEU6LTWCVQxQ?view)

```python=
import subprocess
import smtplib
import socket
from email.mime.text import MIMEText
import datetime

# Send to which IP address
to = '寄到哪個e-mail帳號'

# Using specific gmail account
gmail_user = '你的Gmail帳號'
gmail_password = '你的Gmail密碼'

# SMTP command
smtpserver = smtplib.SMTP('smtp.gmail.com', 587)
smtpserver.ehlo()
smtpserver.starttls()
smtpserver.ehlo
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

### 將寄信加入開機程序中

:::warning
建議先安裝vim，方便編輯`sudo apt install vim`
按 I 可以開始編輯
按 ESC 後按 `:` 打 `wq` 再按下 Enter 即可存擋離開
:::

1. `sudo vim /etc/rc.local`
2. 在 `printf ...`那行底下加上
```shell=
python 檔案路徑 (通常為 /home/pi/檔案名稱.py) &
```
![](https://i.imgur.com/bOzL7Of.png)
3. 存擋離開
4. 重開機測試 `sudo reboot`
5. 樹莓派關機 `sudo shutdown -h now`

## Reference
[從序列埠登入到 Raspberry Pi](https://www.raspberrypi.com.tw/tag/usb-to-ttl/)

[多功能的Raspberry Pi 作業一:開機時傳送Pi的 ip](http://ios.hane.tw/2014/12/raspberry-pi-pi-ip.html)

[修改 Raspberry Pi Raspbian Jessie Lite 套件庫來源](http://blog.ilc.edu.tw/blog/index.php?op=printView&articleId=622402&blogId=25793)