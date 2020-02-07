# Week 04(2019/10/03)

## Vim
安裝 vim (vim 是一款文字編輯器)
```
sudo apt install vim
```
建立一個檔案
```
touch hello.txt (.py .c ...etc)
```
開啟檔案

```
vim hello.txt
```
插入模式:
```
i (按 i 以插入)
```
查詢指令:
```
:help
```
儲存：
```
:w
```
離開：
```
:q

```
儲存並且離開：
```
:wq
```
強制離開：
```
:q!
```
切換插入模式，並在文章尾
```
一般模式下 A （shift+a）
```

顯示行數 :
一般模式下
```
:set number
```
直接跳到第17行:
```
:17
```
直接 vim 一個不存在的檔案(會直接開啟以該名字為檔名的檔案):
```
vim ~/.vimrc （可以寫自己的 vim 設定檔）寫完記得 :w
```
小寫`O`  游標下空一行，並切換成插入模式
大寫`O`  游標上空一行，並切換成插入模式

## 指令

alias ( asign 一個指令為另一指令或指令組合 )
```
alias "ll"="ls -lah"
```
但離開該視窗該 alias 會無效，要永久生效要到 bashrc 改


放置 bash 的位置(可放置常用指令)
```
vim  ~/.bashrc
```

找東西放在哪
```
which xxx
```


文字編輯器
- nano 
- vi 
- vim
- pico
- emacs（史詩！擁有相當多的外掛可以輔助開發）

開發環境與文字編輯器的差異：
```
純粹編輯文字的工具 versus 可編譯編輯測試執行開發中的程式
```


## 這輩子不會寫到的語言，但你一定要知道！
- [Lisp](https://zh.wikipedia.org/wiki/LISP)
- [Prolog](https://zh.wikipedia.org/zh-tw/Prolog)

## 神奇ㄉ套件管理工具 aptitude
```
sudo apt install aptitude 
```
![](https://i.imgur.com/m3nRqK6.png)

用此安裝格式會有完整的安裝紀錄

```
apt moo
apt moo moo
apt moo moo moo

aptitude moo
aptitude -v moo
aptitude -vv moo
aptitude -vvv moo
aptitude -vvvv moo
aptitude -vvvvv moo
aptitude -vvvvvv moo
```
按 + 標示為準備安裝 （ 會顯示綠色標示 ），按 - 取消，反安裝

是用 "/" 以搜尋 (按\也可以！！)

home 可回到主選單

找下一筆搜尋 "n"
```
regular expression /RegX regeX
```
[online practice regex](https://regex101.com/)


`^ssh` :符合ssh為開頭
`ssh$` :符合ssh為結尾
`^ssh$` :only ssh
`s{2, 3}h`: 2或3個h

gg 以升級
按 g 顯示將有那些套件更新或下載
再按 g 確認正式安裝

開頭p : 安裝後的套件 (purge)
開頭c : 遭移除後的套件 ()
ctrl + T : menu (左右切換選單)
ctrl + E :取消待執行動作

Q:再次安裝，為什麼不用下載?
A:Cache

sudo apt-get autoremove 設定檔 ＆ 暫存檔刪除
-purge 徹底刪除
```
sudo apt-get autoremove --purge^
```
清除過期檔案
```
sudo apt-get autoclean
```


### ssh 設定


查看 ssh 運行狀態
 
- ```ps aux|grep ssh```

ssh 需要一個 port 來接受別人的連線 （ ssh為 22 ）

查詢已開啟的 listen port 
```
sudo netstat -ntupl(需要sudo)
```
`ip a`:127.0.0.1 ( Localhost 所有該組 ip 皆導向自己)

連線至該主機(ssh)
```
ssh user@localhost
```
`ifconfig` : 印出所有連線
`inet addr` : 


