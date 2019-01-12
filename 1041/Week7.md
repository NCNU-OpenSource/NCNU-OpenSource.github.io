---
hackpadID: PPihlYRFQ4t
hackpadWorkspace: ncnu-opensource
tags: hackpad-import, ncnu-opensource
---
# 1041 Week7 

VM/VPS  VM:virtual machine  VPS:virtual private server:

icinga

cacti         監控server的工具

SNMP     收集伺服器資訊

sudoer   設定sudo的工具

ssh key   生成公開金鑰

lsa.BlueT.org

droplets

homework:自行產生一把ssh key, lsa.BlueT.org

icinga　跟　nagios    

只紀錄 on off  並提供警報

cacti

紀錄機器每個時間點的狀態

uptime  

netstat

snmpwalk

MIB(Management information base)

指令：ssh-copy-id  

adduser blueT（自己的名稱）

cat /etc/passwd

visudo

etc/groups （存放所有的群組）

## 修改權限

vigr (find ur group and edit) -s

## SSH-KEY

ssh bluet@188.166.239.9

ssh-copy-id bluet@188.166.239.9

sudo netstat -ntupl

inet6 addr 只有一條, fe80開頭>沒有IPv6 ; 2001 -> useful IPv6sudo 

agentAddress udp:161ssh

ps aux|grep snmp (check ur snmp)  |不是小寫L

127.0.0.1都是連到自己（假如不是監控自己的話把這個註解掉）

## snmp

sudo apt-get install cacti snmpd 

sudo vim  /etc/snmp/snmpd.conf

改：  

*   把上面的註解掉後輸入
*   agentAdress udp:161
*   rocommunity secret 127.0.0.1
*   sysLocation   Singapore
*   sysContact     Blue@BlueT.org 

之後重啟：

    sudo service snmpd  restart

檢查snmp狀態：

    sudo netstat -ntupl

    sudo netstat -ntupl|grep 161 

    ====>應該會看到類似：udp        0      0 0.0.0.0:161             0.0.0.0:*

## cacti

連到localhost/cacti

**預設帳密：**

admin 

admin

or

cactiadmin

cactiadmin

**新增使用者：**

user management --> add --> **Graph all allow --> create **

**Web Setting：**

0\. 左邊Device --> 刪掉localhost後recreate

1\. host tamplate ->local linux machine

2\. snmp version  ->2

3\. SNMP Community-> secret

4\. create (snmp沒設定會error)

5\. add Associated Data Queries

6\. unix -ping latency [add] 

7\. snmp XXX [add] (有三個都要+)

8\. save

9\. Create Graphs for this Host(右上角) ->全部打勾然後一直下一步

10\. 回去index按graphs(左上角）後右上角山丘圖片按一按(showing picture == successful)

*   要等一陣子才會有監測的結果

11\. Description--> 有意義的名子所以可以隨便取   

     Hostname-->完整的主機名稱或 ip address

12.

第二個作業是監測 lsa.bluet.org

step1   add 一個新的 device 

step2  把  Description可以隨便取 , Hostname-->  lsa.bluet.org

step3  host template -> Generic SNMP-enabled Host

step4  snmp version  ->2

step5  SNMP Community -> secret

接下來的步驟就跟上面的一樣

再等一陣子去左上graphs就會有了

**ssh加密登入伺服器：**

    //產公開金鑰

   ssh-keygen

   3次的enter鍵

   //連線

   ssh-copy-id s101213006@lsa.bluet.org(範例)

**修改user密碼：**

   指令： passwd
