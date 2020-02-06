小盛<3
===
# [Tunning 10GB Network card on linux](https://docs.google.com/presentation/d/188JUXrQtPwe3rOHEjxbQCLgJqXU5A-FXuzgeXLr1x7g/edit)

```
$ vim /etc/ssh/sshd_config
加上
GatewayPorts

$ ssh -NfR 19000:IP:5000 name@your_server
```

autossh : 監控 ssh，斷掉會自己重新連線
redir : tcp port redirector

最初的network => 將電子訊號轉換成binary的形式互相傳遞
HTTP傳送時會將URL、Cookie等等包成一個封包，Kernel會將封包解析成TCP、IP、MAC等等欄位的多個封包再傳送，傳到目的端Kernel會再把封包組合成payload


sk_wait_data() 在等（？處理好的 data
所有封包進來都要跑這些流程

### [巨型影格(Jumbo Frames)](https://zh.wikipedia.org/wiki/%E5%B7%A8%E5%9E%8B%E5%B8%A7)
- 1500 MTU是一般標準/基本在使用

### Bandwidth Delay product(BDP):
- High-speed terrestrial network: 1Gbit/s. 1ms RTT
- BxD = 10^9 b/s * 10^-3


#ifconfig `<interface>` txqueuelen 5000 避免不夠用

強制使用同一顆 CPU 以提升 cache hit rate

使用 polling 而不是 interrupt 進而提升效能

讓網卡去計算 checksum 之類的東西以減少 CPU 負擔
使用 iftool 去查看開啓，可以減少 CPU 15% loading

### [NAPI與pure interrupt driver的效能比較](http://daydreamer.idv.tw/rewrite.php/read-58.html)

### Kernel Setting
`$ sysctl -a | grep net`

[PCIe 速度](https://zh.wikipedia.org/wiki/PCI_Express)

# Docker
>[color=red]解決問題：當你把一些內容掛載在docker上，若一直繁瑣的更改程式碼/內容，而需要更新docker，此舉非常繁瑣
>

manual: `docker run --help|less`
Q: what is docker `-v`?
check it out via `manual`

將位於此CONTAINER ID的"檔案"移到新的鏡像
`docker commit -m "[檔案名]" [CONTAINER ID] [新的鏡像名]`

把現在目錄掛載進Docker(的Data資料夾)
`$ docker run -v $PWD:/data -it ubuntu ubuntu`
> $PWD : print working directory
>

`$ docker run -v $PWD:/data -d ubuntu ubuntu`
> -d: run in background
>

`$ docker ps`：顯示目前正在執行container
`$ docker ps -a`：一覽無遺
`$ docker inspect {id}`
`$ docker inspect --format '{{ .NetworkSettings.IPAddress }}'`
[]()
### example:
`$echo <?php php_info() ?>`
`$ docker run -v $PWD:/data -it ubuntu ubuntu`
`$ls`
後，會與原本目錄上的內容一致。
達成成就:star:



## docker-compose
目前一個docker，但若全部服務在一個docker就不太佳
有問題則需要打掉重製。
比較佳的方法：一個docker一個服務，而希望開啟時可自動化

- 定義:
  - services
    - depends on
  - app
    - depends on:
      - db?

services啟動後run什麼command
... to be continue.

`$docker-compose up`: run the service
> BT's demo
> 開啟順序：mongo > influxdb > postgres > redis > neo4j > app1 > app2 ...  > nginx1 etc.
> 關閉順序：nginx1 > .... app2 > app1 > ... >mongo
>>[color=red] 仍可透過`docker ps -a`檢視


`$docker-compose up redis`:only run redis
`$docker-compose up -d`:run in background
`$docker-compose up app`:app start, and will start what is required.
`$docker-compose up --scale app=6`:add an extra app6.(next startup will stop this unless add app6 to config file)
`$docker-compose app -log`:check log
`$docker-compose stop`:stop all


# another service? `kvm` or `lxc`,`lxd`, [google](www.google.com) it.
