# Week 15(2019/05/30) - 自動測試、Linux Asynchronous
自動測試簡報 : [簡報](https://docs.google.com/presentation/d/17LyztipJfLjisX3Xdi9DuHQwR2gw1hl7tvd9jcSZyqM/edit?usp=sharing)  **- Page.73**

# 自動測試
### Node js
##### 安裝
```
+ sudo apt-get install nodejs
```
### VS Code
##### 安裝步驟
+ 官網下載 Visual Studio Code 安裝檔(.deb) 
    +  [鏈結 Link](https://code.visualstudio.com/docs/?dv=linux64_deb)
+ ```cd <VS Code 安裝檔所在目錄>```
+ ```sudo dpkg -i <VS Code 安裝檔>.deb```
+ 開啟程式
    + ```code```

### TDD (Test-Driven Development)
+ 強調先寫測試程式才開發程式。
    + Red–Green–Refactor cycle 循環
        + Red 
        	+ 失敗的測試
        + Green 
        	+ 符合預期的測試
        + Refactor 
        	+ 去除多餘的Code，但必須讓程式通過
        	+ 
        
### BDD (Behavior Driven Development)
+ 強調規格文件和測試之間的關係。
    + User Story 
        + Given 
        + When
        + Then
        
### FIRST Rules

1. Fast 跑得快
2. Independent 測試獨立(不會交互作用)
3. Repeatable 可重複執行
4. Self-Validating 告知結果成功、失敗
5. Timely 應該在產品程式出來前就設計好

### Pure Function
+ Many-to-one Function 
+ One-to-one Function 
+ 即一個輸入只能由一個獨特的輸出

---

Demo case
- https://github.com/BlueT/obj-filter
- https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions

- 安裝 Node.js 10.x

```shell=
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

- tape: 測試套件
- tap-spec: 輸出美觀化

:::info
本地端執行 `nyc --check-coverage --reporter=lcov tape ./t/[0-9]*.test.js | tap-spec`
需加上 npx(利用 npm 套件執行)
`npx nyc --check-coverage --reporter=lcov tape ./t/[0-9]*.test.js | npx tap-spec`
:::

- sonarqube: 程式碼分析、品質測試

# Linux Asynchronous

- 0、Async的問題很複雜，簡單來說從Kernel層開始算-》上面封裝到事件循環（語言層）-》再封裝到架構層-》最後封裝到用戶層，這裡的用戶指的不是一般使用者而指的是web engine的開發人員，即一般俗稱的架構師.....

  於是中間涉及到各種各樣樣的抽象與封裝概念，理解概念的同時另一方面還包含著實作，所以如果你曾深入研究過某種語言的異步文檔，比如你曾讀過Python的[Asyncio文檔](https://docs.python.org/3/library/asyncio.html)，你一定會被其龐雜所震撼，期間涉及到諸如cotroutine\tasks\future\eventloop\transports\protocols等等僅限於語言層的概念(不管哪一個都沒聽過),所以为了不至迷路，在學習Async的過程中时刻保持清醒地認識到我目前正在解決哪个層面的問題是 "always" 有必要的。
  
  ###### 本段重點：為了介紹Epoll，我們將不得不介紹一系列概念。幸運的是我們將遵循從high level api到low level api的順序，不會像網路上絕大多數自己也不懂的教學一樣讓你聽得一頭霧水。

- 1、因此我們首先DEMO一個高層async api，以展現其最終應用效果，如同展現CMOS最後可以做成電腦，而電腦可以用來打game一樣，讓第一次接觸的同學有一個直觀感受。

    RPC：遠程過程調用，架構於Transport Layer之上的進程間通訊協定（如果你對OSI網路通訊分層架構有了解的話）。事實上如果你希望，你可以用TCP/UDP/QUIC等任何協定傳輸層為基礎，在此基礎上建構自己的RPC協定。http封裝作為RPC調用接口基本上是不存在的，因進程間頻繁通訊，RPC協定必須高效，如果TCP有安全性問題我們更願意自己封裝一個RSA在上面也不會選擇HTTP。
    
```Python
# 簡單的RPC server demo.py
from easyrpc import *

s = rpc_server()

@s.register_function()
def fib(n):
    a ,b = 0 ,1
    for i in range(n):
        a ,b = b ,a+b

s.start_serving()
```
以上代碼顯而易見地實現了，註冊RPC服務-》開始RPC服務的步驟。想要實現像偽代碼一樣優雅的代碼，是工程師們長期對Async進行研發的終極目的之二分之一（剩餘二分之一的終極目的是效能）

當你熟悉socket的異步編程特性後，你可以快速地架出這種easyrpc的框架。（這個easyrpc模組我大概做了一個小時左右。） 實現這種框架後的好處是，可以對服務進行基於網路通訊的解耦，所有你所知道的Amazing的web應用基本都是從這裡出發的。

為什麼是RPC？RPC本身作為一個古老的進程間通訊手段，概念提出很久了，技術上卻是很新的。web服務從這裡出發，大概是欣賞其更細緻的力度，相比於MessageQueue、資料庫傳遞等，在絕大多數情況下都更容易抽象業務，有種完全將業務掌握在手心的感覺。而相比於未經網路層隔離的本機通訊FileDiscripter\pipe\memoryshare相比又能避免“一人摔跤全家跌倒”————故而時至今日事實上RPC已經像空氣一般無處不在，只不過大多數人甚至沒有發覺它的存在。

當然如果你想要的話，你也可以將其封裝為HTTP服務，下列代碼也讓我們見識到python架設web server的速度是真的快：

```Python
# 簡單的RPC client demo 封裝為 http.py
from easyrpc import *
from flask import Flask , reuqest
import json

app = Flask(__name__)
rpc = rpc_client()

@app.route('/fib') # 利用get顯式傳遞參數
def fib():
    input_number = int(request.args.get('n'))
    return json.dumps( {
        "answer" : rpc.fib(input_number)
    } )

if __name__ == "__main__":
    app.run(debug=False)
```

這裡我們將服務封裝為RPC，再封裝為HTTP。（當然，因為基於TCP，你也可以自己實現httpserver——如果你想要的話）。總之我們在RPC的基礎上快速地架起了一個所有語言都能通用的斐波那鍥數列服務。（類比地，比如如果你覺得python中的list.sort()非常實用且高效，你可以將其以這種方式暴露接口給java，在java中調用python的sort，非常優雅——雖然基於http並不是一種良好的暴露接口的方式）

但是，這裡出現一個問題，sort是一個常用方法，但如果我們使用`wrk`對這個服務進行壓力測試：
```
% > wrk -t8 -c200 -d10 http://127.0.0.1:5000/fib?n=1
Running 10s test @ http://127.0.0.1:5000/fib?n=1
  8 threads and 200 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   404.04ms   87.20ms   1.68s    92.12%
    Req/Sec    48.53     37.48   190.00     67.56%
  3204 requests in 10.06s, 494.38KB read
  Socket errors: connect 0, read 0, write 0, timeout 11
Requests/sec:    318.34
Transfer/sec:     49.12KB
```
我們發現其效能異常地低，大概已經低到了不可接受的水準。使用8thread，200並發連接進行本地echo，得到平均延遲400ms，QPS約320，完全不具備部署能力。
（為了名譽我在這裡澄清一下，我們使用異步架構假設的RPC，即便是玩具，無論如何性能也是可以輕鬆超過gRPC的，本處性能低下之瓶頸在於web Engine。如果妳曾讀過Flask的代碼，你會發現其封裝非常地優雅、Pythonic，但由於並發基於線程模型——這也是我們接下來要講到的，導致了其面對大量網路I/O時吞吐效能嚴重低下）

###### 本段重點：RPC是一切web應用的基礎，幾乎所有amazing的網絡服務：分佈式雲計算、Load balancing、網路應用如fb、Youtube的後端等等都基於高效的RPC模組進行微服務間通訊。雖然用起來很魔法，但把web I/O的效能做高是困難的，比如我們這裡的Flask就遇到了難以解決的效能瓶頸。那麼是什麼導致了這個問題呢？

###### 補充：如果你對開源RPC架構有興趣的話，流行的框架有gRPC、bRPC、thrift等等。其中以谷歌開源的gRPC效能最差，故我們自己搭建AsyncRPC的效能無論如何也應以超過grpc為及格標準。

2、是什麼導致了網路I/O性能卡頓呢？先別急，我們慢慢來從頭實現一個RPC。過程中自然會遇到這個問題。
理所當然地，我們直觀地會想到從寫一個socket echo server開始：
```Python=
# 簡單的socket echo server.py
from socket import *

# 套接字類型有AF_INET和AF_UNIX可選，協定有SOCK_STREAM/SOCK_DGRAM可選
sock = socket(AF_INET , SOCK_STREAM)
sock.setsockopt(SOL_SOCKET , SO_REUSEADDR , 1)
sock.bind(('',25000))
sock.listen(10)

while True:
    # 每當有人請求建立連接
    client, addr = sock.accept() ; print(f"Connect from {addr}")
    while True:
        data = client.recv(1024)
        if not data:
            break
        client.sendall(b'Got ' + data)       
```
Python的socket programming非常簡單，如果你曾经用C进行过socket編程的話，你可能會理解這是為什麼我們喜歡用Python的其中一條原因。

運行server後，使用`nc localhost 25000`命令進行netconnection測試。可見其可以正常地回文，echo server工作正常。如果我們將回文的部分改成如下的內容：
```python=
while True:
    # 每當有人請求建立連接
    client, addr = sock.accept() ; print(f"Connect from {addr}")
    while True:
        data = int ( client.recv(1024) )
        if not data:
            break
        else:
            a ,b = 0 ,1
            for i in range(n):
                a ,b = b ,a + b
            client.sendall(bytes(a))
```
即向其中插入了fibonacci sequence的邏輯，就實現了一個剛剛demo過的RPC服務，例如現在在`nc localhost 25000`中輸入10，他會返回給你ascii編碼的fibonacci第十項。在此基礎上（如果你熟悉Python特性的話）再進行一系列封裝（包括異常處理等等）就能實現上文中優雅的easyrpc了。 

問題是，當前這個server版本，沒有辦法支持並發連結。例如兩個nc同時連入，只有當第一個人退出之後第二個人的服務才會啟動。顯然這是不及格的RPC服務，那麼如何解決呢？

直觀地我們想到了使用threading , 為每一個連入的用戶單獨開闢一個新線程，讓任務並行：
```Python
# 簡單的socket echo server ———— 利用threading .py
from socket import *
from threading import Thread
from functools import partial # 引入函數裝飾器

sock = socket(AF_INET , SOCK_STREAM)
sock.setsockopt(SOL_SOCKET , SO_REUSEADDR , 1)
sock.bind(('',25000))
sock.listen(10)

# 定義一個 request handler
def hendler(client):
    # open with context processor
    with client:
        while True:
            data = client.recv(1024)
            if not data: break
            client.sendall(b'Got ' + data)

while True:
    # 每當有人請求建立連接
    client, addr = sock.accept() ; print(f"Connect from {addr}")
    # 在新線程中處理用戶的請求
    Thread(target = partial(handerl , client = client)).start()       
```

###### 這樣，我們的server就可以並發地處理用戶的請求了。但其基於多線程模型，雖然我們沒有時間測試，可以想見它的效能是非常差的（有興趣的同學可以測一下它的echo qps）。不遑說，是因為多線程模型下一些固有的，無法解決的機理導致。由於高I/O吞吐在當代已經是一個普及性問題——出門就能撞見的程度，於是工程師們開始了長期的，對於這個問題的解決的探尋，其探尋的結果也就是Async。後事如何，我們下回分解。

###### #課後與老師討論的趣聞，補充一段歷史：async ， thread ， GIL 以及python的愛恨情仇
> “業餘程序員”Guido，在1991年開發Python，在1993年為其加入thread模組（后面在py3中被封裝程度更高的threading所取代），旨在解決並行I/O問題。同時為了解決線程間的資源競爭問題，引入了大名鼎鼎的GIL——global interpreter lock（全局解釋鎖），使得Python可以取得多個系統級線程（他們不是偽造的線程，而是真正的系統級線程），但同一時間只有一個thread可以被解釋，除非發生I/O或C的調用，GIL才會被釋放——這導致了Python雖然在語言層面支持多線程，卻不能通過這點利用CPU多核心的優勢。
> 
> 這種設計在當年是沒什麼問題的（畢竟當年超過2核心的電腦幾乎不存在）————並且雖然廣受新手程序員詬病，直到今天也不能說這是一個不好的設計：如果你看過GIL的源碼，它非常非常單純，它可以輕易地讓你的程式跑的很快（快好幾倍，下文會解釋），並且永遠不會產生死鎖等等多線程競爭資源產生的問題——因為只有一把鎖。
> 
> 可見，當初thread被引入python，目的就只是為了解決I/O密集型任務（至於運算密集型任務，Python中真正利用多核心的模組是multiprocessing ， 這個模組在即將發佈的3.8版本中有重大改進）。但是理所當然地，如果我們的報告主題要繼續講下去的話，代表它不是一個良好的解決方案——因為stackspace、因為usermode到kernelmode的切換、因為搶占式任務導致的算力浪費、等等。因而這個問題也成為Guido長期考慮的一個問題——這種思考一直持續了20年。直到python3.4中asyncio被加入標準庫，3.5版本中引入async/await關鍵字，python3.6更新後（約2016年）aysncio才成為一個工程可用級別的庫。代表著這個長達20年的問題的正式解決。
> 
> 事實上直到今天，多核心電腦橫行的2019年，越來越多人覺得python不能利用多核心性能是非常遺憾的（事實上我們可以用，python社區已經有移除GIL的版本：[gilectomy](https://lwn.net/)以及[pypy的stm版本](http://doc.pypy.org/en/latest/stm.html)，保持Capi的基礎上，將大鎖拆分成無數個用戶級小鎖，其代價也並不高，只是比普通版本慢三倍而已，笑）。
> 
> 如果要問今天Python最大的核心財富是什麼，一個基本共識是一大票世界各地一流高校的科研人員，使用Python開發出了各種易用的科學計算庫，通用且高效，使Python成為科研語言的NO1，而且是唯一，生態繁榮度可以跟Java一較高下的語言（這些也使python可以乘上machine learning的東風）。科研人員為什麼選擇Python？因為非CS專業的研究者喜歡Python同時兼具優雅和強大表達能力的語法————作為語言開發唯一負責人“目光短淺”的Guido的指揮下Python形成了分散的社區，各個核心開發者各自為戰，因而python2在升級為3時並沒有足夠魄力移除GIL，或是為解釋器加入JIT功能。但也正因如此，個人能力有限，唯一能做出貢獻的方式就是修改一些語法————使得PEP中提到的幾乎都是絞盡腦汁想到的語法上的改進，使得Python幾乎成為所有程式語言裡抽象能力最強的，從而得到了科研人員們的青睞。
> 
> 另一點原因是，由於GIL的存在，使得python調用C語言的api異常簡單，用戶層不用考慮多線程複雜的鎖問題————這幾乎是非CS出身科研人員能駕馭的極限。
> 
> 各自為戰的社區、簡單的GIL，幾乎是python今天所有令人詬病原因的起因————不能利用多核心（事實上可以，否則Python在DL中的廣泛使用也不會存在，只不過需要訴諸於C，在記憶體共享上沒有那麼直觀，導致它的開發API實際是不友好的）、語言效能差等等。但也正因如此，為Python積累了今日的核心財富，導致近幾年來Python使用率屢創新高。
> 
> 26年後的今天會是這樣一番局面，恐怕也是1993年的Guido寫下GIL的那几行代码時所沒有想到的吧。



https://docs.google.com/presentation/d/1F1HsznO5RkjQJmn3pF7Bm22Kch_h5h54fPbRZCr7BNY/edit?usp=sharing

+ busy loop
    + 一直while loop

#### Demo一个纯Python实现的事件循环+socketserver代码 ， 事件循环写在上面，业务代码写在下面
```Python
from collections import deque
from selectors import EpollSelector , EVENT_READ , EVENT_WRITE
from asyncio import coroutine
from socket import *
import asyncio

@coroutine
def wait_read(sock):
    yield 'read_wait' , sock

@coroutine
def wait_write(sock):
    yield 'write_wait' , sock

class PlayLoop(object):
    """docstring for PlayLoop"""
    def __init__(self):
        super(PlayLoop, self).__init__()

        self._prepare_to_run = deque()
        self._selector = EpollSelector()

    async def sock_accept(self , sock):
        await wait_read(sock)
        return sock.accept()

    async def sock_recv(self , sock , MaximumBytes):
        await wait_read(sock)
        return sock.recv(MaximumBytes)

    async def sock_sendall(self , sock , data):
        while data:
            await wait_write(sock)
            num = sock.send(data)
            data = data[num:]

    def create_task(self, coro):
        self._prepare_to_run.append(coro)

    def run_forever(self):

        while True:

            while not self._prepare_to_run:

                events = self._selector.select()
                for key, _ in events:
                    # if a cotoutine (key.data which was registered in self.write_wait) was redy to run , it should be append to runlist but poped off from kernel watching list.  
                    # by contrary if a coroutine is appended to kernel watching list ,it should be poped off from loop.runlist   
                    self._prepare_to_run.append(key.data)
                    # key.fileobj == a python data structure which could be understood as representing a file discriptor.  
                    self._selector.unregister(key.fileobj)

            while self._prepare_to_run:

                self.current_task = self._prepare_to_run.popleft()

                try:
                    # you cannot use next to triger a coroutine ,but use send for the same behabior
                    op ,*args = self.current_task.send(None) 

                    # here's a little bit tricky way to get self.write_wait / self.read_wait to register specify coroutine
                    getattr(self , op)(*args)

                except StopIteration:
                    pass

    def write_wait(self , sock):
        self._selector.register(sock , EVENT_WRITE , self.current_task)

    def read_wait(self , sock):
        self._selector.register(sock , EVENT_READ , self.current_task)  

'''
defination of playloop class above
running code below
maybe you can decoupling them into two files ,like test.py and playloop.py
and then 'from playloop import PlayLoop' in test.py
'''

async def handler(loop, client):
    with client:
        while True:
            data = await loop.sock_recv(client, 64) # client.recv()
            if not data:
                break
            print(f"\nIncomming messgae : {data}")
            back = b"Got " + data
            await loop.sock_sendall(client,back)
            print(f"Sent back message : {back}")

async def main(loop):

    sock = socket(AF_INET , SOCK_STREAM)
    sock.setsockopt(SOL_SOCKET , SO_REUSEADDR , 1)
    sock.bind(('',25000))
    sock.listen()
    sock.setblocking(False)
    print(f"Socket serving at {sock.getsockname()}")

    while True:
        client ,addr = await loop.sock_accept(sock)
        loop.create_task(handler(loop,client))

'''
thanks for pluggable eventloop design in python async library , there's chances you can try different types of event loop and then maybe benchmark thier performance respectively

you can try asycnio.loop
or you can try our Playloop
or you can use loop from uvloop
(use `pip install uvloop` to get started)
'''
# import uvloop
# asyncio.set_event_loop_policy(uvloop.EventLoopPolicy())
# loop = asyncio.get_event_loop()

loop = PlayLoop()
loop.create_task(main(loop))
loop.run_forever()
```

### libevent PPT
https://docs.google.com/presentation/d/1GNsCx5-7F7KcgB-dmqh0wCvlq3-6KN3Rt1F_eeWtBlo/edit#slide=id.p