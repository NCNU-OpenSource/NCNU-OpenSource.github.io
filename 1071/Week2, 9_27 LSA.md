# Week2, 9/27 LSA

# 學號與姓名

104321060 何晓倩 資工四
104321070 鄭芷君 資工四
106321009 羅罡兆 資工二
104321059 錢詠恩 資工四
104321051 林煒星 資工四
104321003 謝萬霖 資工四
106213014 歐芷欣 資管二
106213022 莊詠婷 資管二
106213019 蘇美婷 資管二
106213017 蔡佳軒 資管二
104321062 王子佳 資工四
104321067 梁杏兒 資工四
104321024 蔡旻勳 資工四
106407023 陳于真 教政二
105213004 陳冠瑜 資管三
105213019 許家瑋 資管三
107213511 劉嘉瑜 資管碩一
107213506 張 真 資管碩一
107213517 楊宜明 資管碩一
105213028 丁翊軒 資管三
105213007 王 威  資管三
104321002 何建宏 資工四

---
[攻擊Windows](https://www.exploit-db.com/)

[Matrix Runs on Windows XP](https://www.youtube.com/watch?v=yX8yrOAjfKM)

BSD = Berkeley 大学的unix os 

### UNIX之父
- Ken Thompson
- Dennis Ritchie

### OpenSource 推行者
- Richard Stallman

### OpenSource Licence 
- GPL
- BSD
- Apache
- Mozilla
- ...

[Free Software Foundation (FSF)](https://en.wikipedia.org/wiki/Free_Software_Foundation)

[常見的開源授權條款簡介](https://ningyu1.github.io/site/post/25-licence/)

[Is Linux an operating system or a kernel?](https://www.quora.com/Is-Linux-an-operating-system-or-a-kernel)

### OSS and FLOSS
- OSS =/= FLOSS
- OSS : Better Software
- FLOSS : The Freedom of Use and Modify

df (disk filesystem) 显示磁盘分区上的可使用的磁盘空间
df -h `h = human readable`
/dev 是系統設備目錄


### 檔案的資訊
```
d = directory 目錄
b = block device 
c = 設備檔案
- = 一般檔案
```
:::info
/dev/sda : 是電腦中的第一顆硬碟
:::

### Manipulate disk partition table
> sudo fdisk -l /dev/sda 

:::info
### 實作 Homework 
- 建立一個虛擬機 硬碟40G Ubuntu   desktop 16.04
- 自己規劃硬碟
- 繳交作業格式 = open source 格式即可 **絕對不可以ppt,pptx,doc,docx**

### 閱讀 homework
- [FHS](https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84%E6%A0%87%E5%87%86)
- [FHS英文版](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard)
:::