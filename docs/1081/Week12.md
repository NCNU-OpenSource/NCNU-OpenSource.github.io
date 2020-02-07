# Week 12(2019/12/05)

![](https://i.imgur.com/9Sdd2Qp.png)

![](https://i.imgur.com/Z1MnJOx.jpg)

iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 \
     -j DNAT --to-destination 172.16.0.2:80 
     
     
iptables -t nat -A POSTROUTING -o eth1 -s 172.16.0.4 -j MASQUERADE


## 調整預設編輯器
第一次打開 crontab 會可以選編輯器，但如果要更改的話：
sudo vim ~/.bashrc
export EDITOR=vim(你熟悉的編輯器)

## proxy
sites-avaliable(or sites-enable):
location /{
    proxy_pass http://127.0.0.1:8080
}

改 lightppd.conf 


![](https://i.imgur.com/mUsh45B.jpg)

![](https://i.imgur.com/afzggr0.jpg)

nginx 設定檔

```nginx
location /sh {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://localhost:5000;
}
```

內網的 Python 服務：
```python
import flask
from flask import request

app = flask.Flask(__name__)
app.config["DEBUG"] = True


def get_usr_ip():
    ip = ''
    if request.headers.get('X-Forwarded-For'):
        ip = request.headers.get('X-Forwarded-For').split(',')[0]
    elif request.headers.get('X-Real-Ip'):
        ip = request.headers.get('X-Real-Ip')
    else:
        ip = request.remote_addr
    return ip

@app.route('/sh', methods=['GET'])
def sh():
    print(request.remote_addr)
    ip = get_usr_ip()
    if ip == '1.2.3.4':
        return "<h1>Welcome ADMIN, Your IP is: " + ip + "</h1>"
    else:
        return "<h1>You are not ADMIN, Your IP is: " + ip + "</h1> "

@app.route('/nsh', methods=['GET'])
def nsh():
    print(request.headers)
    return "<h1>Your IP is: " + get_usr_ip() + "</h1>"
```

sudo apt install proftpd
