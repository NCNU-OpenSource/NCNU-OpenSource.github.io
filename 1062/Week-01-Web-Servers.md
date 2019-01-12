###### tags: `1062` `LSA` `Web Servers` `ncnu`
# 1062 LSA Week 01 - Review : Web Servers設定


## 網頁（HTTP）伺服器
1. apache
2. lighttpd
3. nginx
- `$cd /var/www`
- `$sudo mkdir apache2 lighttpd nginx` 先建立好各個目錄


### Apache2
* `$sudo apt install apache2` 安裝Apache2
* `$sudo vim /etc/apache2/ports.conf` 避免port衝突（LISTEN 8080）
- `$sudo vim /etc/apache2/sites-available/000-default.conf` 文件路徑設定（DocumentRoot /var/www/apache2)
- `$sudo cp /var/www/html/index.html /var/www/apache2/index.html` 將首頁複製至設定好的路徑裡
- 啟用與停止
    - `$sudo service apache2 start`
    - `$sudo service apache2 stop`
    - `$sudo service apache2 restart`
        - `/etc/`
            - `systemctl` `systemd` `init.d`：啟動/關閉 script

### lighttpd
- `$sudo apt install aptitude` 簡化套件安裝與管理的文字介面程式
    - `$aptitude`
    - 按下 `/` 輸入 `lighttpd` 搜尋 lighttpd
    - 對 lighttpd 按 `+` ('shift'+'=') 標記加入安裝列
    - 按 `G` 出現預覽，再按 `G` 真正執行
- `$sudo vim /etc/lighttpd/lighttpd.conf` 設定port與路徑
- `$sudo cp /var/www/html/index.lighttpd.html /var/www/lighttpd/index.lighttpd.html` 將預設首頁複製至剛剛設定的路徑裡
- 啟用與停止
    - `$sudo /etc/init.d/lighttpd start`
    - `$sudo /etc/init.d/lighttpd stop`
    - `$sudo /etc/init.d/lighttpd restart`


### nginx
- `$sudo apt install nginx` 安裝nginx
- `$sudo vim /etc/nginx/sites-available/default` 路徑設定，port使用預設的
- `$sudo cp /var/www/html/index.nginx-debian.html /var/www/nginx/index.nginx-debian.html` 複製預設首頁至設定好的路徑