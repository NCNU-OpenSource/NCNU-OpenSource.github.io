# Week1, 9/20 LSA

## 課前需求

請各位同學在上課前，先把 `virtualbox` 與 `ubuntu的iso檔` 先下載至本機。

* [virtual box](https://www.virtualbox.org/)
* [ubuntu](https://www.ubuntu-tw.org/modules/tinyd0/)

ubuntu請選擇 ` Ubuntu 桌面版本`,`16.04 LTS（支援至 2021 年 04 月）`

也請各位同學可以攜帶隨身碟，當天上課可以與其他同學傳檔案。如果全部人都在當天才下載，網路會非常慢。

[課堂 telegram 群組](https://t.me/joinchat/GFtBzlGAoyqo1Dg7XRdVsw)


以下請輸入姓名

105213028 丁翊軒 資管三
107213506 張　真 資管碩一
106213017 蔡佳軒 資管二
106213019 蘇美婷 資管二
107213517 楊宜明 資管碩一
106407023 陳于真 教政二
104321070 鄭芷君 資工四
104321060 何曉倩 資工四
104321051 林煒星 資工四
104321003 謝萬霖 資工四
104321002 何建宏 資工四
105213007 王　威 資管三
104321024 蔡旻勳 資工四
104321059 錢詠恩 資工四
104321067 梁杏兒 資工四
106321009 羅罡兆 資工二
104321062 王子佳 資工四
106213014 歐芷欣 資管二
106213022 莊詠婷 資管二
105213019 許家瑋 資管三
105213004 陳冠瑜 資管三
107213511 劉嘉瑜 資管碩一

# 9/20

更新軟體源:
> apt-get update
:::info
出現權限不符記得加上 sudo
:::

清除頁面:
> clear
> ctrl + L

安裝 vim (文字編輯器):
> sudo apt-get install vim
> (1.8版本) apt-get 或 apt
安裝套件
> sudo apt-get install < package-name >

列出現在目錄下的所有檔案
> ls

轉到目錄位置
> cd < path >

建立檔案
> touch < file-name >

顯示檔案內容
> cat < file >

----

### vim (Vi IMproved) 下指令用法
打開檔案 (如果沒有檔案, 存檔的話會新增檔案)
> vim < file-name > (可以用tab補齊檔案名稱)

```vim
i -> 進入 insert(編輯) 模式
在其他模式中按下 esc -> 退回一般模式

: 下的指令
w -> write
q -> quit
指令可合併使用 先寫入再離開 ->:wq
```

- `i` => 開啟輸入模式
- `esc` => 離開輸入模式
- `/` => 後面加入搜尋該檔案的字元或字串
- `dd` => 刪除本行
- `normal mode` + `:`
    - 後面加入要執行的動作

        1. `q` 離開
        2. `q!` 強制離開
        3. `wq` 儲存後離開

        4. `set nu` 顯示行數
            - ![](https://i.imgur.com/r8sd0mq.png)
        5. `w !sudo tee %` **進入檔案忘記sudo時可以在裡面sudo取得寫入修改的權限**
        6. `!` 可以執行 bash 指令

-----

ubuntu 中文輸入法 [點我](http://blog.xuite.net/yh96301/blog/342227672-Ubuntu+16.0.4%E6%96%B0%E5%A2%9E%E4%B8%AD%E6%96%87%E8%BC%B8%E5%85%A5%E6%B3%95-%E6%96%B0%E9%85%B7%E9%9F%B3%E8%BC%B8%E5%85%A5%E6%B3%95)
- 其他輸入法（速成/倉頡）
```
sudo apt-get install ibus-table-quick5
sudo apt-get install ibus-table-cangjie5
```
其他輸入法(無蝦米)
```
sudo apt install fcitx-table-boshiamy
```

System Settings > Language Support > Keyboard Input Method : IBus
> sudo apt install ibus-chewing ibus-zhuyin
>logout and login

所在目錄層
> `pwd`

回到上一層
> `cd ..`

檔案與目錄的檢視
> `ls -< args >`
> >  `-l` 詳細列出檔案
> >  `-la` 所有檔案列出來（包含設定檔）
> >  `-lah` 將輸出的資訊以比較容易閱讀的格式呈現
> > `< file-name >` 可直接看檔案內容

編輯 `.vimrc` 可以更改vim的設定(home目錄下)
>vim ~/.vimrc
* `set number`  "顯示行號"
* `set cursorline` "底綫"
* `set cindent` "自動縮排

:::info
[其他設定參考 - ncku csie wiki](http://wiki.csie.ncku.edu.tw/vim/vimrc#介面優化)
:::

```
刪除檔案
> rm < file-name >

强制遞迴刪除
> rm -r </dir>
+ -r recursive

建立資料夾
> mkdir </dir>

移動檔案(更改名稱)
> mv <old file-name> <new file-name>

更改檔案位置
> mv <file-name> <資料夾>

process 的執行狀態(正在執行的program叫做process)
> top
> cat /etc/apt
```

- [xorg](https://zh.wikipedia.org/wiki/X.Org_Server)
- [compiz](https://zh.wikipedia.org/zh-tw/Compiz)



查詢指令
> man <指令>

找出跟這指令相關的指令
> apt search <指令>

找出跟這套件相關的套件 briefly
> apt-cache search < package name >

顯示完整的套件資料
> apt-cache show < package name >

顯示套件來源
> apt-cache policy vim
![](https://i.imgur.com/0hjiqTp.png)

軟體來源位置
> /etc/apt/sources.list

16.04在設定面板中
18.04點擊左下角`顯示應用程式`的圖示

或是用指令直接修改
`sudo sed -i 's/tw.archive.ubuntu.com/ftp.ubuntu-tw.net/g' /etc/apt/sources.list`

`.<name>` 開頭都是隱形檔案
