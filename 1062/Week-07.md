###### tags: `1062` `LSA` `ncnu`

What's docker hub
===

# Docker

`$sudo docker search nodejs`
![](https://i.imgur.com/geztxse.png)
- 可以看 stars 數量跟 official 來抉擇裝哪個
- official：官方認證，可優先選
- 安全優先、次者方便性

## PULL 數多原因

- 全世界真的很多人在 pull
- 有人在使用自動化測試
    - 每當push後，或許會自動pull，數量又巨增啦！

## Dockerfile

```sh=
docker build -f 'Dockerfile.postgre.zh_TW' -t 'bluet/postgres_zh_tw.utf-8'
ENV LANG
```

`$ mkdir /home/{username}/{somewhere}/`
`$ vim Dockerfile` (內容如下：)
### v1
```sh=
FROM ubuntu 
#若沒特別標記，預設使用latest

WORKDIR /data

ENTRYPOINT ["/bin/echo","hello"]
```
### v2
```sh=
FROM ubuntu

WORKDIR /data

#RUN apt update && apt install -y node js 
#裝軟體範例？

ENTRYPOINT ["/bin/ls","/data"]
```

### v3 /bin/ls only
```sh=
FROM ubuntu

WORKDIR /data

ENTRYPOINT ["/bin/ls"]
#$ docker run -v $PWD:/data {filename}
#列出當前目錄，切記不能使用相對路徑去掛載
#相對路徑範例：../etc 或 ~/etc

#$ docker run -v /:/data {filename}
#列出container本身的根目錄
```
### v4
```sh=
FROM ubuntu

WORKDIR /data

#RUN apt update && apt install -y node js 
#裝軟體範例？

#ENTRYPOINT ["/bin/ls"]
#---run command below---
#$ docker run -v $PWD:/data {filename} /bin/bash

#$ docker run -v $PWD:/data {filename} /bin/echo hello

#$ docker run -v $PWD:/data {filename} /bin/ls /data

#$ docker run -v $PWD:/data {filename} /bin/ls /lib/

#$ docker ps -a
#檢視歷史執行log

#$ docker rmi {docker container's id}
#個別刪除

#$ sudo docker ps -qa | sudo xargs docker rm -f
#$ sudo docker rm -f $(sudo docker ps -aq)
#一次清完全部全部container? 
```

### v5 
```sh=
FROM ubuntu

ENV LANG $(CONTAINER_LOCALE).UTF-8
#把環境變數變成utf-8

ENV PY_EXE python2.7
ENV PYTHONIOENCODING utf-8

WORKDIR /data

#VOLUME /data
#預設這個目錄使用者未來會掛在這個目錄，因為加了這個參數，………………

#COPY {youDir/filename} {containerDir/filename}

COPY source.list /etc/apt/sources.list
# 

RUN apt update && apt install whowatch && apt clean && rm -rf /var/lib/apt/
# 如果base是使用ubuntu,會自動在每一行的cache清掉，只需要
# RUN apt update && apt install whowatch

# 錯誤範例：
# RUN apt update && apt install whowatch iotop apache2

# 正確範例：記得 -y
# RUN apt update && apt install -y whowatch iotop apache2

#RUN {command}
#e.g:RUN apt update && apt install -y node js 
#裝軟體範例
```
### <font color="red">Command</font> to build and run DOCKER
`$ cd {to somewhere you saved the file}`
`$ docker build -t "{filename}" .` 
`$ docker run "{filename}"`

### [another way instead of using `$ sudo docker`](https://docs.docker.com/v1.7/installation/ubuntulinux/)

`$ sudo usermod -aG docker {$USER}`

> $USER : current user

## Notes

ENTRYPOINT 預設執行指令(若不指定指令 則使用此指令)

WORKDIR 進入哪一個目錄(若沒有該目錄 則會自動建立，權限 755)

把所有（包含 running）containers 一次刪除 `docker rm $(docker ps -aq)`







---







# 題外話：沒事請多用，多一分資安意識，少一分風險
保護自己安全避免 XSS 攻擊，只要能看到網頁想看的部分即可
1. Mozilla：[NoScript](https://addons.mozilla.org/zh-TW/firefox/addon/noscript/) :star:
2. Chrome：[ScriptSafe](chrome-extension://oiigbmnaadbkfbmpbfijlflahbdbdgdf/html/options.html)


## 編輯器推薦
`$ apt install geany`

## 參考指令

- pstree
- iotop
- last
- w
- whowatch
    - t : view整個系統上的process
- last
- lastlog
- top
    - wa: io wait
    - sy: run huge program
    - d
    - s
- sudo du -sh {/path/}：check file storage
    - sudo du -sh /var/lib/apt/

## 課堂練習

### 自製nodejs image

`$ mkdir node-lsa`

`$ vim Dockerfile`
```sh=
FROM node
https://hub.docker.com/_/httpd/
WORKDIR /data

ENTRYPOINT ["/usr/local/bin/node", "index.js"]
```


`$ mkdir index.js`
```javascript=
console.log("hello")
```

`$ docker build -t "node-lsa" .`

`$ docker run -v $PWD:/data node-lsa`


>note : 使用`docker run -v`時 一定要絕對路徑，否則會出問題
>[color=red]
>
https://hub.docker.com/_/httpd/

## protect

- unhide
- tripwire
- portsentry 必裝
- fail2ban 必裝
- chkrootkit: 查rootkit
- rkhunter

