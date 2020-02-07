# Week 05(2019/10/17)


###  VIM設定檔

`set cursorline` 游標所在處啟用光棒(畫螢光筆)row
`set cursorcolumn` 游標所在處啟用光棒(畫螢光筆)colum
`set clipboard=unnamedplus` 共用剪貼簿
`syntax on` 語法上色
`set nu` 設定行號

### ssh連線到其他裝置
`ssh [username]@localhost` 連線到本機

查 ip
```
ifconfig 
```
連線
```
ssh username 要連線的裝置的username@ip
密碼為要連線的裝置的密碼
```
詢問是否要繼續
```
螢幕會出現 type'yes'or'no' 要輸入完整的yes三字
```
離開
```
exit
```
### OSI

TCP/IP 四層架構
把 OSI 最上層的表現層、應用層、展示層合成為一應用層
資料鏈結層、傳輸層、網路層

port 埠：位於傳輸層的通訊協定通常需要指定的port, 用於唯一確定正在使用的網路連結。
21: FTP
22: SSH
23: TELNET
80：http
443: HTTPS
...

packet 封包：:bird: :cloud: :cloud: :cloud: :cloud: :cloud: 

追蹤節點：
```
traceroute <ip>或<網址> #ipv4
traceroute6 <ip>或<網址> #ipv6
```
※虛擬機中無法使用的話請加上`-I` 參數試試

DHCP：

子網路遮罩 mask：可以算出兩IP是否在同一網段內

DNS(DomainNameSystem)網域名稱系統：

dig：可做dns解析 ex:`dig youtube.com`

ip + port：決定連線後的應用程式

`cat /etc/hosts`：看電腦的 host 設定，去DNS伺服器請求ip前會查找這個檔案。


非對稱式加密
先把一把公鑰丟在機器裡，之後確認私鑰是否符合，就不用每次ssh都要打密碼
ssh-keygen：生成金鑰

cd ~/.ssh（金鑰放在 .ssh 目錄底下）
```
id_rsa  id_rsa.pub（公開金鑰）
```
安裝 nginx（ 裝好會自動啟動 ） 
```
sudo apt-get install nginx
```
如果沒啟動可使用下面指令啟動
```
sudo service nginx start
```
看 nginx 狀態
```
sudo service nginx status
```
ifconfig 看 ip 去看該 ip 是否有 welcome to nginx 畫面，有就是有裝好

到 hosts 設定更改該 server Dns
```
sudo nano /etc/hosts 
```