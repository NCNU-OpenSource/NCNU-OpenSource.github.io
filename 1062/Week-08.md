###### tags: `1062` `LSA` `ncnu`

# Public Cloud V.S. Private Cloud

## Public Cloud

- 通常有免費額度
- 需要多項功能時成本較低

## Private Cloud

- 隱私
- 設定自由度較高

# Docker Compose
## Build a simple application running on docker compose
`mkdir dockercomposetest`
1. create [app.py](https://docs.docker.com/compose/gettingstarted/#step-1-setup)
2. create requirements.txt
3. create [Dockerfile](https://docs.docker.com/compose/gettingstarted/#step-2-create-a-dockerfile)
4. `docker-compose up`
    (error: cannot connect docker daemon, that's because you not a group user in docker)
   `sudo groupadd docker`
   `sudo gpasswd -a [USERNAME] docker`
   `sudo service docker restart`
5. enter `http://0.0.0.0:5000/` in a browser

# Docker Swarm
`docker swarm init`
## GUI 界面 cluster management tool - [UCP](https://docs.docker.com/ee/ucp/)

- 需要有 docker ee，不便宜唷
1. `curl `
2. `docker image pull docker/ucp:3.0.0`
3. `docker container run --rm -it --name ucp -v /var/run/docker/...?:`


# IDS v.s. IPS -- [slide連結](https://drive.google.com/open?id=1eionfoMT20ay9-7A3sL38AP1MchthGq-fu7IliQ5nsk)

## IDS
1. NIDS 網路型
2. HIDS 主機型(針對個別主機）
3. DIDS 分散式

## Tripwire
- 可以透過 MD5/SHA 等雜湊方式去確認檔案是否有被修改

## honeypot
在系統中弄出有漏洞的環境以誘捕攻擊行爲

## Snort
- 偵測模式(Sniffer Mode)
    - 截取網域內封包顯示在螢幕上
- 封包記錄模式(packet logger mode)
    - 將截取的封包儲存下來，以便日後分析
- 上線模式(inline mode)

待查：偵測模式跟封包記錄模式差在哪？
偵測模式就真的只是打印出封包，可以選擇印 TCP header 或是 IP 與 TCP header 或是包含 data

`$sudo snort -dev`

## BlueT 講解🐵🙈🐵🙈
服務分三層
- load balancer
    - 能知道 app 擴展
- App
    - 橫向擴展
- DB

Nginx 處理必須 reload config file
- 多少會影響到 Performance
- 會不會一 reload 就起不來

nginx.conf:
```
server {
listen 80 default_server;
client_max_body_size 100M;
resolver 127.0.0.11 valid=5s; #dns alive time
set $upstream_endpoint http://app:8000;
location / {
  proxy_pass $upstream_endpoint;
  }
}
```

docker 用 -v 去掛載 IO 速度僅 20 MBps
用虛擬 volume 快多了

container 預設名稱:
docker_influx_1,2,3...

influx:
用來指定 container 的名稱

healthcheck 可以放測試指令

小技巧：
將 config file 掛載進 docker 且設定唯讀，這樣就可以在 docker 環境外直接改 config 讓 service 去讀

Ctrl+C 去關掉 docker-compose 很暴力，請使用 docker-compose down

可以用這方式去指定數量，不必去改 yaml 檔案
`docker-compose up --scale app=7 -d`

https://github.com/BlueT/obj-filter

SonarQube Scanner 

[Travis](https://travis-ci.org/) 用來檢測這次 commit 有沒有將你的程式碼搞壞
通常是先寫測試碼再寫程式碼

[SonarCloud](https://about.sonarcloud.io/)