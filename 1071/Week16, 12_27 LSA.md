Week16, 12/27 LSA
===

## 期中考 iptables 設定
[參考答案](https://paper.dropbox.com/doc/LSA-1072-midterm-XCxnK38VIa4RiQPNOzpbk)

## 上週錯誤更正

:::info
因為之前共筆版本為去年的 Raspbian，當時預設的軟體源不同，故可能沒有辦法正確用 `sed` 取代
:::

1. 先備份原始軟體源
```python=
sudo cp /etc/apt/sources.list /etc/apt/sources.list.$(date +%F)
```
2. 修改套件庫來源
> 改成就在隔壁的 ubuntu-tw 站
> 
> 這的步驟是將 `/etc/apt/sources.list` 中的字串 `http://raspbian.raspberrypi.org/raspbian/` 替換為 `http://ftp.ubuntu-tw.org/mirror/raspbian/raspbian/`
> [color=teal]

```shell=
sudo sed -i 's"http://raspbian.raspberrypi.org/raspbian/"http://ftp.ubuntu-tw.org/mirror/raspbian/raspbian/"' /etc/apt/sources.list
```
## GPIO
> GPIO（英語：General-purpose input/output），通用型之輸入輸出的簡稱，其接腳可以供使用者由程式控制自由使用

## 麵包板
> 同一個數字列 ABCDE 欄互通，直排的 `+` 及 `-` 各別互通

## 電阻

[計算電阻](https://www.digikey.tw/zh/resources/conversion-calculators/conversion-calculator-resistor-color-code-4-band)

## 杜邦線
> 公頭 -> 凸的, 母頭 -> 凹的

## 樹莓派

![](https://openclipart.org/image/2400px/svg_to_png/280972/gpiopinsv3withpi.png)

:::info
上面灰色部分（左邊奇數 / 右邊偶數）為板子接腳順序編號
橘色部分寫著 `GPIO編號` 則為BCM編號
:::

## Python 基本用法
```python=
# 引入函式庫
import RPi.GPIO as GPIO

# 設定編號模式
# GPIO.setmode(GPIO.BOARD) -> 利用板子上的順序編號
# GPIO.setmode(GPIO.BCM) -> 利用 GPIO 編號
GPIO.setmode(GPIO.BOARD)

# 設定接腳模式, GPIO.IN 輸入模式, GPIO.OUT 輸出模式
GPIO.setup(這邊填你的接腳, GPIO.OUT)

# 接腳讀取
GPIO.input(這邊填你的接腳)

# 接腳輸出, GPIO.HIGH = 高電位, GPIO.LOW = 低電位
GPIO.output(這邊填你的接腳, GPIO.HIGH)
```

### 先讓電燈亮一下

#### 先跟著附誦一次 `長正短負`， LED長腳接正、短腳接負
> 把長腳接到某個可用的 PIN 腳，並且把短腳接 GND，再來看看對它用 python 做做看

:::info
教你如何 Google 關鍵字
raspberry pi 你的設備名稱 你想寫的語言
例如：raspberry pi 溫濕度 python
通常都有很詳細的教學
:::

### DHT22

[參考資源](https://kingfff.blogspot.com/2018/05/raspberry-pi-3-model-bdht22.html)

```shell=
## 先安裝 git
sudo apt-get install git
## clone 別人家寫好的程式
git clone https://github.com/adafruit/Adafruit_Python_DHT.git
## 裝一下函式庫
cd Adafruit_Python_DHT
sudo apt-get install build-essential python-dev python-openssl
sudo python setup.py install
## 切換資料夾
cd examples
## 執行程式
sudo ./AdafruitDHT.py 22 你的PIN腳
```

### PWM SG90 伺服馬達
[參考資源](https://blog.everlearn.tw/當-python-遇上-raspberry-pi/raspberry-pi-3-mobel-3-利用-pwm-控制伺服馬達)

### MAX7219 8x8 LED 燈
[參考資源](http://atceiling.blogspot.com/2014/03/raspberry-pi-max7219-8x8-led-matrix.html)

### HC-SR04 超聲波感測器
[參考來源](https://sites.google.com/site/rasberrypintust/shu-mei-pai-xiao-ji-qiao/8-hc-sr04-chao-yin-bo-gan-ce-qi)

### 蜂鳴器
[Ref](https://github.com/ZacharyIgielman/PiPiano/blob/master/examples/buzzer.py)

### PIR 人體紅外線
[參考資源](http://atceiling.blogspot.com/2014/02/raspberry-pi-pir-passive-infrared.html)

## NCNU-OpenSource
[連結](https://github.com/NCNU-OpenSource)

|組別|學號|姓名|Github帳號|主題|需要的設備(Sensor)|
|---|---|---|---|---|---|
|1|106213019|蘇美婷|lulala88|WaterLulala||
|2|107213517|楊宜明|YeeSheep|泡泡音樂盒||
|3|105213007|王 威|OliverWangWei|都看看是誰來了！||
|4|106213022|莊詠婷|tiffany92257|BLC|無|
|5|105213019|許家瑋|JiaWeiHsu|Camera應用|Camera|
|6|104321024|蔡旻勳|kent1201|Music_Broadcast|無|
|7|106321009|羅罡兆|jim5405|窮人的防毒AP|無|
|8|104321051|林煒星|seng96|我不要熱死|無|
|9|104321070|鄭芷君|paperelmo|仙人掌不要死|沉水馬達+土壤濕度模組+水管2條|


### 報告順序
> 每組報告 15-20 分鐘


|組別|順序|
|---|---|
|1|六|
|2|二|
|3|九|
|4|七|
|5|五|
|6|三|
|7|四|
|8|八|
|9|一|