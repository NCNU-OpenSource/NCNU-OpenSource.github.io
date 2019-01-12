---
hackpadID: pKEpinkAreO
hackpadWorkspace: ncnu-opensource
tags: hackpad-import, ncnu-opensource
---
# Week 6 Nagios, aptitude, top, iftop, iotop

2015/04/09

## 本日精華：

[](http://vlog.xuite.net/play/VEhjU2gyLTc3MzE2MjcuZmx2)http://vlog.xuite.net/play/VEhjU2gyLTc3MzE2MjcuZmx2

## APTITUDE:套件管理界面

sudo aptitude

![](https://hackpad-attachments.s3.amazonaws.com/hackpad.com_pKEpinkAreO_p.345652_1428549119165_2015-04-09 11:11:31 的螢幕擷圖.png)

**搜尋小技巧**

*   /開啟搜尋
*   搜尋技巧：開頭：^ 結尾：＄
    *   參考：[鳥哥 - 正規表示法](http://linux.vbird.org/linux_basic/0330regularex.php)(Regular Expression) , pcre
*   ^nagios =>找到所有開頭有nagios的軟體
*   nagios$ =>找到結尾nagios的軟體
*   ^nagios3$ =>找到完整的nagios軟體    >> 完全符合^_____$字串

**指令**

*   n >> 下一筆符合的
    *   ENTER 進去 所選軟體的MANUAL
*   q >> 上一層
*   + >> 加入安裝序列
*   - >> 取消加入安裝序列
*   p = 未裝 
*   i = 將要被安裝
*   A = 有相關性 會自動安裝
*   g >> 查看將要安裝列表
    *   再按一次 g >> 安裝列表所有的軟體
*   CTRL+ T 
    *   取消待執行的動作 >>>gg 前還可以用來取消套件列表上的動作

**terminal 直接安裝**

sudo aptitude search ____  >> 在Terminal 執行 

sudo aptitude install ____ >> 在Terminal 執行 

## top

*   top
*   iotop
*   iftop 
    *   -P
    *   -p
    *   -i

sudo aptitude install iotop iftop

sudo top 查看系統狀態 

*   按 1 >> 看個別CPU狀態 清單

sudo iotop 查看所有硬碟狀態

sudo iftop 查看網路流量狀態      

*   -Pp 看到PORT 
*   -i eth0 看指定的網卡狀態
*   左邊是自已 , 右邊是外面

## netstat

*   -n
*   -t
*   -u
*   -p
*   -l

-ntupl

服務埠對應表

*   /etc/services
*   利用正則表達式

## samba

samba:類似windows網路上的芳鄰

[](http://linux.vbird.org/linux_server/0370samba.php#theory_using)http://linux.vbird.org/linux_server/0370samba.php#theory_using

ap

dpkg-reconfigure  postfix

## Nagios

[](http://nagios.sourceforge.net/docs/nrpe/NRPE.pdf)http://nagios.sourceforge.net/docs/nrpe/NRPE.pdf

[](http://nagios.sourceforge.net/docs/nagioscore/3/en/macros.html)http://nagios.sourceforge.net/docs/nagioscore/3/en/macros.html

[](https://help.ubuntu.com/lts/serverguide/nagios.html#nagios-configuration-overview)https://help.ubuntu.com/lts/serverguide/nagios.html#nagios-configuration-overview

[Ignore gvfs file](https://help.ubuntu.com/community/Nagios3#Post_Install_Tasks)

[](http://ip_address:port/nagios3)http://**_ip_address_**:**_port_**/nagios3       web UI

※預設帳號：nagiosadmin

nagios3 -v /etc/nagios3/nagios.cfg           verify config
