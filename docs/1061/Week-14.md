###### tags: `1061`

# Week 14 (2017/12/20) 共筆 Raspberry Pi

### Step 1. 裝驅動(Windows/Mac)
Download: [Windows](http://www.prolific.com.tw/US/ShowProduct.aspx?p_id=225&pcid=41)、[MacOS](http://www.prolific.com.tw/US/ShowProduct.aspx?p_id=229&pcid=41)

:::danger
[關於 PL2303HX 在 win8 無法驅動的問題](http://yhhuang1966.blogspot.tw/2015/07/pl2303hx-win8.html)
:::



### Step 2. 燒SD card
下載 [Rasbian](http://ftp.ubuntu-tw.org/mirror/raspbian-downloads/raspbian/images/raspbian-2017-12-01/2017-11-29-raspbian-stretch.zip)或[Rasbian Lite (Command Line)](http://ftp.ubuntu-tw.org/mirror/raspbian-downloads/raspbian_lite/images/raspbian_lite-2017-12-01/2017-11-29-raspbian-stretch-lite.zip)

簡易燒錄工具 Etcher [連結](https://etcher.io)

或Command Line(Mac / Linux)
> 找記憶卡名稱
```
df -h
```

> 燒
```
sudo dd bs=1m或4m(Mac無法) if=你的Rasbian.img路徑 of=你的記憶卡位置 conv=sync
```
ref: https://www.raspberrypi.org/documentation/installation/installing-images/README.md


### Step 3. 開啟TTL連線設定
```
/boot/config.txt
```

enable_uart=1
紅色：power
黑色：接地
白色,綠色

#### 連線
裝PuTTy(Windows)或Screen(Mac / Linux)

Mac
```
screen /dev/tty.usbserial 115200
```

Ubuntu
```
sudo screen /dev/ttyUSB0 115200
```

##### windows
![](https://i.imgur.com/x5Irkop.png)
:::info
COM後面的數字要到控制台>裝置管理員查看
:::

```
sudo raspi-config
```


Expand Filesystem 使 Pi 可以抓到大容量的 SD 卡空間
