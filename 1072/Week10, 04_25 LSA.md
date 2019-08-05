# Week 10(2019/04/25) - 虛擬化技術 Docker
[本次分享 Slide](https://docs.google.com/presentation/d/1wYhJkBQkx0jS-oyJG-2imdI7p93wti4XZqR9Jc49PxE/edit?usp=sharing)

[安裝Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

[Play with Docker](https://labs.play-with-docker.com)

[Play with Docker 課程](https://training.play-with-docker.com)

檢查Docker Version
`docker -v` or `docker version`


# VM 與 Docker 圖解
![](https://i.imgur.com/4yDSaul.jpg)
> ###### source : [阿舍的隨手記記](https://www.arthurtoday.com/2014/12/docker-vs-lxc-container.html)

## 適合Docker
- 沒開放使用者登錄
    - (ssh)危險(讓無關第三者看到 docker container 資料)
    - 不方便
- 只提供網頁服務等比較單純的 Service
- :warning:需要大量檔案硬碟讀寫（建議mount其他硬碟）

## Docker Engine
> 針對所有容器做統一管理
+ 映像檔(Image)
    + 設定檔
+ 容器(Container)
    + Image run 起來的環境
+ 倉庫(Repository)
    + 放image的地方（不同版本）
    + 使用者上傳image 
+ 註冊表(Registry)
	+ 在官方下載

### Docker Hub(Repository)
- Docker 使用方法有兩種
1. 重頭自己裝
2. 去 [Docker Hub](https://hub.docker.com/) 找別人做好的 image
3. 有official image
    + 比較安全
4. 還有看使用、點擊數量等的image

### Hello world to download image
> 本地沒有的話就會去 Docker hub 找 & 自動下載

```shell=
sudo docker run hello-world
```

## Image Commands

- ### List image(查看本地所有)
    -
    ```
    docker image ls
    docker images
    ```
- ### Pull image
    -
    ```
    docker pull {image name}:{tag}

    {tag}: 版本號 也可以直接 latest

    ## ex. docker pull ubuntu:16.04
    ```
- ### Run image
    - `-i` 從 STDIN 輸入
    - `-t` 開新的 TTY (terminal)
    - `--name` 設定instance的名稱 (方便管理)
    - `--rm` 程式結束後自動清除container
    ```
    docker run ...

    ## ex. docker run -t -i ubuntu:16.04 /bin/bash
    ```
    Run Image 後會產生該 container
- ### Remove <None> image
    - `docker image prune`
- ### Commit Image
    - Tag是唯一，Name可重複，若兩者相同，`oldest`會被<None>取代
    
    
    
## Container Commands
- ### Check 查看
    ```
    docker ps # 只能查看 running
    # -a 才能看到沒有在執行的 container
    # -q 只顯示 container id
    docker ps [-a] [-q]
    ```
- ### Stop container(仍可run)
    ```
    docker container stop {CONTAINER ID | NAME}
    ```
    批次：`docker stop $(docker container ls -a -q)`
    
- ### Remove container(已不存在)
    ```
    docker container rm {CONTAINER ID | NAME}
    ```
    批次：`docker container rm $(docker container ls -a -q)`
    全部：`docker container prune`

- ### 最小的OS
    
    > [name=維基百科]
    > ###### Alpine Linux是一個由社群開發的Linux作業系統，該作業系統以安全為理念，面向x86路由器、防火牆、虛擬私人網路、IP電話盒及伺服器而設計。
    ```shell
    docker pull alpine
    ```
#### Docker 生命週期
> 目的執行某個程式 Ex. Nginx / Apache
> 卻想要把它封起來裝在某個安全的區域
> That's container [color=teal]

image -> run process -> 結束 -> container terminate (停止)

特殊應用: 跑進某個 container 做事情, 執行 Shell(bash)

### Docker volume

> 用來保存容器內資料(長期儲存)
> 生命週期結束之後還會活著

```shell=
# 建立 Docker volume
docker volume create --name <volume>
# 查看 Docker volume
docker volume ls
# 掛載 volume
docker run -v {volume}:{path} {image}
```

### Docker Export & Import
- Export
    - `docker export {Container ID} > {file name}`
- Import
    - `docker import {file name} - {image name}:{tag}`
- Export and import practice:
    - 
    ```shell
    ```
 
:::info
Docker using AUFS - layer file system

Layer 可以 cache
EX: 裝 nginx 直接把該 layer cache 抓進來, 有需要更改的再去改
:::

### Docker Swarm

把多個 images 組成類似群組的存在，用來分散工作負擔，可以來做負載平衡、服務不中斷的服務。

Container 的資料外部儲存(Volume)，不依賴內部儲存

:::info
圖形化服務
```shell=
docker service create --name=viz --publish=8080:8080/tcp --constraint=node.role==manager --mount=type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock dockersamples/visualizer
```

利用 Telent 連線至 `/var/run/docker.sock` 也可以看到
:::