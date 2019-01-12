###### tags: `1062` `LSA``ncnu`
# other shells

> vim /etc/shells

![](https://i.imgur.com/bvTqhhZ.png)

### What is bash ?

Bash(GNU Bourne-Again Shell)
許多Linux平台都內建的shell

### What is /bin/sh ?

以下黃色區塊節錄至[鳥哥] (http://linux.vbird.org/linux_basic/0340bashshell-scripts.php) (鳥哥用centOS)
:::warning
這是因為 /bin/sh 其實就是 /bin/bash (連結檔)，使用 sh shell.sh 亦即告訴系統，我想要直接以 bash 的功能來執行
:::

事實上

![](https://i.imgur.com/2Om1JgV.png)

:::success
GNU/Linux 操作系统中的 /bin/sh 本是 bash (Bourne-Again Shell) 的link，但因為bash過於複雜，有人把bash從[NetBSD](https://zh.wikipedia.org/zh-tw/NetBSD)移植到Linux並且重新命名為dash(Debian Almquist Shell)。Dash比Bash更輕量，符合[POSIX](https://zh.wikipedia.org/wiki/POSIX)標準
:::

以下說法不完全正確
~~-   /bin/sh (已經被 /bin/bash 所取代)~~

### rbash
rbash就是Restricted Shell，限制版的bash
相較於bash有些指令不能使用
1.  cd command (Change Directory)
2.  PATH (setting/ unsetting)
3.  ENV aka BASH_ENV (Environment Setting/ unsetting)
4.  Importing Function
5.  Specifying file name containing argument ‘/’
6.  Specifying file name containing argument ‘-‘
7.  Redirecting output using ‘**>**‘, ‘**>>**‘, ‘**>|**‘, ‘**<>**‘, ‘**>&**‘, ‘**&>**‘
8.  turning off restriction using ‘**set +r**‘ or ‘**set +o**‘

### tmux
tmux 是個 terminal multiplexer，他除了可以保存 session 外，還有視窗分割、視窗切換、多人共享畫面等等功能。
分成:
server : 會負責管理所有的session

session : session 之間彼此獨立，通常是一個專案會開一個 session

window : 終端機的畫面，一個 session 裡面可以有多個 window

pane : window 切成好幾個小區塊

常用方式:
一邊跑程式，一邊監控 CPU 使用率
一邊寫程式一邊看結果
ssh 到遠端伺服器跑程式

補充:
- `ctrl+b+[` 可以進入捲動模式 q退出
- 可以在~/.bashrc新增tmux 讓terminal啟動時就執行





### tcsh and csh

Tcsh是csh的加強版，完全兼容csh。它不但具有csh的全部功能，還有有令行编辑、拼寫校正、歷史紀錄等功能，語法相似於C語言。

而csh(C shell)從UNIX第六版的`/bin/sh`誕生，也是[Bourne shell](https://zh.wikipedia.org/wiki/Bourne_shell "Bourne shell")的前身。C shell有不少特別的功能，比如`aliases`(別名)、`command history`(命令的歷史)。

(這些功能不知道為什麼特別XD ? 歡迎補充)


### Conclusion

- /bin/sh (依照系統指向其他shell，也不一定真的會指向，真的有sh shell，功能陽春)
- /bin/bash (Linux內建shell)
- /bin/tcsh (整合C Shell，提供更多的功能)
- /bin/csh (已經被 /bin/tcsh 所取代)