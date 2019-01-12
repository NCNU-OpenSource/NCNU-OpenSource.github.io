###### tags: `ncnu` `1062` `lsa`

Week 09(2018/05/10)
===

# Web Framework

## 常見 Web Framework
1. PHP Laravel
2. Ruby on Rails
3. Python Django
4. Node.js Express 
5. Java JSP
### 好處
1. 模組化設計統一 coding style，也方便日後維護
2. 前後端分離
3. 分離商業邏輯、路由、資料庫存取、呈現方式
4. 衆多套件庫
5. 防各種攻擊 (SQL injection, XSS, CSRF…)
### 誰在用

#### Laravel

1. 9GAG

#### Django

1. Instagram
2. Mozilla Firefox, MDN
3. OpenStack Horizon

#### Ruby on Rails 

1. Airbnb
2. Github
3. Twitter

#### Express

1. IBM
2. FOX SPORTS
3. Yandex
Demo time

[Docker連結](https://hub.docker.com/r/jackkuo/django_security_demo/)
`$ docker pull jackkuo/django_security_demo`
`$ docker run -it -p 8001:8001 jackkuo/django_security_demo`
`$ docker ps -a`看哪些在run

#### CSRF
以下檔案全部放在 localhost 可以被自己 WebServer(Apache, lighttpd) 讀取的路徑
`cd /var/www/[WebServer]`


setcookie.php
```php
    <?php
    $value = 'Cookie is LSA';
    
    setcookie("TestCookie", $value);
    setcookie("TestCookie", $value, time()+3600);  /* expire in 1 hour */
    ?>
```
send.html
```html
    <html>
    <head>
    <meta charset="utf-8"/>
    </head>
    <form id="form1" action="http://localhost:8001/" method="POST">
    <input  type="hidden" value="csrf la" name="name">
    <input type="submit">
    </form>
    <script type="text/javascript">
    function send(){
      form1.submit();
    }
    setTimeout(send, 3500);
    </script>
    </html>
```
receive.php
```php
    <?php
    
    if(!empty($_POST["name"]))
        echo $_POST["name"]."<br>";
    else
        echo "nothing<br>";
    
    if(isset($_COOKIE['TestCookie']))
        echo $_COOKIE['TestCookie'];
    
    ?>
```

### 快速清除cookie

沒事別點擊以下連結 https://superlogout.com/
(清除登入狀態)

# SDN Introduction
### Build a simple SDN network
1) `sudo apt install mininet`
2) `sudo mn --controller...`

[mininet安裝及使用方法](https://sites.google.com/site/sdnruantidingyiwanglu/vmware-xia-zai-yu-an-zhuang/mininet)