# Week 05(2019/03/21) - `review Network`

### SSH
(補充上禮拜不用密碼的登入方式)

- 產生 RSA 非對稱金鑰
1. 切換到 `~/.ssh`
2. 下指令 `ssh-keygen`
    - 會要求輸入儲存路徑及金鑰密碼(可以按 Enter 以預設方式跳過)
3. 產生兩個檔案 `id_rsa.pub`、`id_rsa`

:::danger
id_rsa 是自己的私鑰(很重要)！不能給別人！！！
:::

4. 把 `id_rsa.pub` 複製到遠端主機的 `~/.ssh/authorized_keys` 就可以登入了


### Nginx

- 利用 `ln -s` 將 sites-available link to sites-enable **不要直接改 enable**

- 可以透過 nginx 將 request proxy to others service

### iptables
> 防火牆、過濾封包、轉送

#### Table 分類
- Filter (封包過濾)
    - 常用 input、output
- NAT (封包轉送)
- Mangle(標記)

```shell=
## 查看

sudo iptables -L -n
## (預設顯示 Filter, L: list, n: 現在的狀態)

sudo iptables -t nat -L -n
## (查看 Nat table)
```

> 1. 會依序由上至下檢查規則，最先符合的會先執行
> 2. 清除 (-F) 不會清除政策 (Policy)

### IPv4、IPv6

#### Route
```shell=
## 查看 routing table
route

## -n 會把 domain 換成 ip
route -n
```

### IPv4

#### Private IP
- 10.0.0.0/8
- 172.16.0.0/12
- 192.168.0.0/16

#### Mask cacular

IP & MASK (AND) = Network IP

- 10.105.16.20(Host IP) 換成二進位
00001010.01101001.00010000.00010100
- MASK / 24 換成二進位 11111111.11111111.11111111.00000000

Network IP = 00001010.01101001.00010000.00000000
(10.105.16.0/24)