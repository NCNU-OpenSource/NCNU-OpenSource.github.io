# Week 02(2019/09/19)

## 指令

- 將軟體下載源換成 ftp.ubuntu-tw.net(該資料源在暨大)
![](https://i.imgur.com/lzexOHI.png)

* 或使用指令方式來替換:
```
sudo sed -i 's/tw.archive.ubuntu.com/ftp.ubuntu-tw.net/g' /etc/apt/sources.list
```

- 更新軟體資料庫（source list）:
```
更新收藏過的軟體列表：sudo apt update
apt：軟體管理工具
```



* 跳出說明文件：
`<instruction> --help`

* 指令的說明文件:
`man <instruction>`

* 使用 `tab` 補完指令

* 需要 root 權限時 
在指令前面加上 sudo (super user do)來暫時取得權限

* 將目前權限改為 # (super user):
`sudo -s`
將權限改回一般使用者$：
`exit`

* 列出可更新軟體列表：
```
apt list --upgradable 
```
* 升級套件:
```
sudo apt dist-upgrade
```

* 查詢軟體相關內容:
```
apt search <欲查詢的軟體套件>
apt-cache search <套件> (畫面較整潔)
apt-cache search xxx | grep xxx
# grep 可過濾出有確切的搜尋詞彙的結果
```
* apt install 如果跳出 [Y/n] 代表該套件有其他相依套件，大寫 Y 代表預設(直接按 Enter 就選預設)

* 目錄相關：
```
顯示當前目錄路徑：pwd
切換回家目錄：cd 
回上一層目錄：cd ..
切換指定目錄：cd /xx/yy/
印出現在目錄裡有哪些檔案：ls (暗藍色目錄 淡藍色檔案 綠色特殊隱藏檔案)
```

* ubuntu 版本號命名規則為:
西元年/月份 (ex. 16.04:2016/04, 18.04:2018/04 )
每兩年更新一次 LTS 版本