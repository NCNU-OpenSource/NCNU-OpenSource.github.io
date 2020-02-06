# 1041 Week 3 OSS History, FHS

2015/10/01 1041 LSA 

課程聊天室：[](https://tlk.io/ncnu-lsa)https://tlk.io/ncnu[-](https://tlk.io/ncnulsa)lsa   聊天室常開，歡迎加入

大家記得要共筆喔喔喔喔喔喔喔喔喔 >\\\\\\\\\\<  :100: :100: :100:  :smirk: :smirk: 

terminal => Ctrl + Alt + T

w3m 

*   需要 `sudo apt-get install w3m`

*   desktop 沒有預設安裝好此套件

## OSS History

Open Source vs Free Software Source

= 開放原始碼 vs 自由軟體

**Free Software**

*   能自由運行，不管任何用途
*   能自由參考，修改原始碼至使用者想要的用途
*   能自由發放複製版本
*   能自由發放修改過的版本
*   (現有的)皆爲Open Source
*   不是賣這個軟體而是用專業收取服務費 

 ([](http://www.gnu.org/philosophy/free-sw.html))http://www.gnu.org/philosophy/free-sw.html)

**Open Source**

*   有些Open Source License有過多的限制(e.g. 不允許自行修改程式碼、限制使用者、用途)
*   不全然爲Free Software

 ([](http://www.gnu.org/philosophy/open-source-misses-the-point.html))http://www.gnu.org/philosophy/open-source-misses-the-point.html)

Open Source

Read => 能讀原始碼怎麼寫

Rewrite => 能自由修改程式碼

Share => 能分享修改後的程式碼

Improve => 能與原作者共同改進程式

**「開放源碼是一種開發軟體的方法論；自由軟體則是社會運動。」**

開放源碼運動認為，非自由軟體 （non-free software） 還算是湊合理想的替代案。而自由軟體運動認為，非自由軟體之存在，即表徵了社會問題的存在，針對這個問題，自由軟體就是解決方案。  取自gnu.org

open source:可以有不同授權（ex:雙重授權）,限定使用方式

free software:軟體一律不收費,以維護軟體及功能客製化等收取服務費用,不能限制讓誰使用

*   free to use
*   Study and Fix (Modify)  任意學習.修改
*   Redistribute (Share)  重新散播

補 Telegram的傳奇：[](http://www.leiphone.com/news/201509/fjutCWkZ3qUrbBt6.html)http://www.leiphone.com/news/201509/fjutCWkZ3qUrbBt6.html

Homebrew 作者被打槍的twitt：[](https://twitter.com/mxcl/status/608682016205344768)https://twitter.com/mxcl/status/608682016205344768

OSI (Open Source Initiative) Certified Licenses => 認證過GPL、Apache、BSD等Licenses

Public License => 貢獻給社會的授權

WTFPL (**Do What The Fuck You Want To Public License**)

**OSS AND FLOSS**

OSS =/= FLOSS

OSS : Better Software

FLOSS(Free/Libre) : The Freedom of Use and Modify

## FHS

UNIX系統底下所有東西都是檔案，一切起源於 /（根目錄）

"/" => 斜線, slash

"\" => 反斜線, backslash

"~" =>

"/home/~"=> 個人的家目錄

*   使用 vim 手動修改source.list
    *   sudo vim /etc/apt/sources.list
    *   :%s/tw.archive.ubuntu.com/ftp.ubuntu-tw.net\/mirror/g
