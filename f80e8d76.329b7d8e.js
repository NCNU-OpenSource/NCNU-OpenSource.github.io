(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),c=(n(0),n(233)),o={},l={id:"1072/Week9",title:"Week9",description:"# Week 09(2019/04/18) - \u7cfb\u7d71\u5b89\u5168\u5f37\u5316\u5206\u4eab",source:"@site/docs/1072/Week9.md",permalink:"/docs/1072/Week9",editUrl:"https://github.com/NCNU-OpenSource/NCNU-OpenSource.github.io/edit/src/docs/1072/Week9.md",sidebar:"someSidebar",previous:{title:"Week8",permalink:"/docs/1072/Week8"},next:{title:"Week10",permalink:"/docs/1072/Week10"}},i=[{value:"Virtual Memory \u8abf\u6821",id:"virtual-memory-\u8abf\u6821",children:[{value:"\u4fee\u6539 swap \u555f\u52d5\u6642\u6a5f",id:"\u4fee\u6539-swap-\u555f\u52d5\u6642\u6a5f",children:[]},{value:"min_free_kbyte",id:"min_free_kbyte",children:[]},{value:"overcommit_mem\u3001overcommit_ratio",id:"overcommit_mem\u3001overcommit_ratio",children:[]},{value:"Dirty Page",id:"dirty-page",children:[]},{value:"Huge page && THP",id:"huge-page--thp",children:[]}]},{value:"Kernel",id:"kernel",children:[{value:"User mode v.s. kernel mode",id:"user-mode-vs-kernel-mode",children:[]},{value:"ipcs",id:"ipcs",children:[]}]},{value:"File System(fs)",id:"file-systemfs",children:[]},{value:"OOM(Out of memory)",id:"oomout-of-memory",children:[{value:"panic_on_oom(sys/vm/)",id:"panic_on_oomsysvm",children:[]},{value:"oom_adj",id:"oom_adj",children:[]}]},{value:"Dymanic increase swap",id:"dymanic-increase-swap",children:[]},{value:"Network",id:"network",children:[]}],s={rightToc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"week-0920190418---\u7cfb\u7d71\u5b89\u5168\u5f37\u5316\u5206\u4eab"},"Week 09(2019/04/18) - \u7cfb\u7d71\u5b89\u5168\u5f37\u5316\u5206\u4eab"),Object(c.b)("p",null,"\u7cfb\u7d71\u8abf\u6821 \u2014 \u6539\u4e00\u6539\u8a2d\u5b9a\u7cfb\u7d71\u5c31\u6703\u8b8a\u5feb\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1OjcjFafR-1Pgj8GCFKjl9IIq_11AxUR_ZSb0VwqP2pw/edit?usp=sharing"}),"\u672c\u6b21\u5206\u4eab Slide")),Object(c.b)("h2",{id:"virtual-memory-\u8abf\u6821"},"Virtual Memory \u8abf\u6821"),Object(c.b)("h3",{id:"\u4fee\u6539-swap-\u555f\u52d5\u6642\u6a5f"},"\u4fee\u6539 swap \u555f\u52d5\u6642\u6a5f"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7b49\u5230 memory \u5feb\u88ab\u7528\u5b8c\u518d\u4f7f\u7528 swap\n0: \u5b8c\u5168\u4e0d swap, 100: vise versa\n\u5efa\u8b70\u8abf\u6574 5 ~ 10")),Object(c.b)("p",null,"vmstat"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cd /proc/sys/vm\ncat swappiness\n## \u7de8\u8f2f\nsudo nano swappiness\n## \u6216\uff0cecho\u7684\u6642\u5019\u540c\u6642\u5beb\u5165\necho '10' | sudo tee swappiness\n")),Object(c.b)("h3",{id:"min_free_kbyte"},"min_free_kbyte"),Object(c.b)("p",null,"\u53ef\u80fd\u662f\u4f7f\u7528 swap \u6642\u7684\u66ab\u5b58\u5340\nmaybe... buffer swap \u642c\u56de\u8a18\u61b6\u9ad4\u66ab\u5b58\u7684\u5730\u65b9 (\u5f85\u67e5)"),Object(c.b)("p",null,":::info\nswap: \u628a\u8a18\u61b6\u9ad4\u4e2d\u6bd4\u8f03\u820a\u6c92\u5728\u7528\u7684\u6771\u897f\u642c\u53bb swap \u66ab\u5b58(Disk)\uff0c\u9700\u8981\u4f7f\u7528\u6642\u518d\u5f9e swap \u642c\u56de\u4f86\n:::"),Object(c.b)("h3",{id:"overcommit_mem\u3001overcommit_ratio"},"overcommit_mem\u3001overcommit_ratio"),Object(c.b)("p",null,"\u662f\u5426\u53ef\u4ee5\u53bb\u57f7\u884c\u6bd4\u81ea\u5df1\u8a18\u61b6\u9ad4\u5927\u7684\u7a0b\u5f0f\uff1f"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u70ba\u4ec0\u9ebc\u9700\u8981 virtual memory?")),Object(c.b)("p",null,"\u8a18\u61b6\u9ad4\u4f7f\u7528\u53ef\u4ee5\u4e0d\u9023\u7e8c\uff0c\u4e0d\u5e38\u7528\u7684\u53ef\u4ee5\u653e\u5230 disk \u66ab\u5b58"),Object(c.b)("h3",{id:"dirty-page"},"Dirty Page"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8a18\u9304 page \u6709\u7121\u88ab\u66f4\u6539\n\u5982\u679c\u6709\u88ab\u66f4\u6539\u904e\u6703\u96aa\u4e9b\u9032 Disk \u518d\u5beb\u5230 Memory \u88e1\u9762\uff0c \u7136\u5f8c\u5462\uff1f")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"dirty_ratio\n\u7cfb\u7d71\u6703\u5148\u66ab\u505c I/O \u628a\u8d85\u904e\u7684 memory \u4ee5 system \u7684\u65b9\u5f0f\u5beb\u56de disk"),Object(c.b)("li",{parentName:"ol"},"dirty_background_ratio\n\u7cfb\u7d71\u6703\u958b\u4e00\u500b thread(\u4ee5\u7a0b\u5f0f\u7684\u65b9\u5f0f) \u5c07 dirty page \u5beb\u56de disk")),Object(c.b)("p",null,"\u26a0\ufe0f \u82e5\u9700\u6c42\u5927\u91cf I/O \u5efa\u8b70\u628a dirty \u964d\u4f4e, \u4f8b\u5982 DB ratio: 15, bg_ratio: 3"),Object(c.b)("p",null,":::warning\n\u4e0d\u662f ratio \u76e1\u91cf\u4e0d\u8981\u8abf\n:::"),Object(c.b)("h3",{id:"huge-page--thp"},"Huge page && THP"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u5c0d\u65bc\u5c0f\u7a0b\u5f0f\u4e0d\u597d\u7528"),Object(c.b)("li",{parentName:"ol"},"\u6d6a\u8cbb\u7a7a\u9593\uff08\u4f8b\u5982\u5c0d\u65bc\u8cc7\u6599\u5eab\uff09")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh="}),"# \u8cc7\u6599\u5eab\u4f7f\u7528\u8a18\u61b6\u9ad4\u96f6\u6563\u6240\u4ee5\u4e0d\u9069\u5408 huge page\ncd /sys/kernel/mm/transparent_hugepage/\necho 'never' | sudo tee enabled\n\n# Turn off THP\ncd /proc/sys/vm/\n# \u770b\u4e00\u4e0b(default: 0)\ncat nr_hugepages\n")),Object(c.b)("h2",{id:"kernel"},"Kernel"),Object(c.b)("h3",{id:"user-mode-vs-kernel-mode"},"User mode v.s. kernel mode"),Object(c.b)("p",null,'User program -> "System call" -> interrupt -> CPU \u57f7\u884c\u5c0d\u61c9\u4ee3\u78bc\u547c\u53eb kernel driver -> run -> Check(\u627e shared memory/message queue...)\u6709\u6c92\u6709 imcoming message -> return '),Object(c.b)("h3",{id:"ipcs"},"ipcs"),Object(c.b)("h5",{id:"\uff08inter-process-communication-facilities-\u9032\u7a0b\u9593\u901a\u4fe1\u8a2d\u65bd\uff09"},"\uff08",Object(c.b)("inlineCode",{parentName:"h5"},"I"),"nter-",Object(c.b)("inlineCode",{parentName:"h5"},"P"),"rocess ",Object(c.b)("inlineCode",{parentName:"h5"},"C"),"ommunication facilitie",Object(c.b)("inlineCode",{parentName:"h5"},"S")," \u9032\u7a0b\u9593\u901a\u4fe1\u8a2d\u65bd\uff09"),Object(c.b)("p",null,"\u6703\u986f\u793a message queue, shared message\nsemaphore \u8cc7\u8a0a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh="}),"## \u67e5\u770b\u76ee\u524d queue, shared\nipcs\n## \u67e5\u770b\u9019\u4e9b\u901a\u8a0a\u65b9\u5f0f\u7684\u8a2d\u5b9a\u8cc7\u8a0a\nipcs -l\n")),Object(c.b)("h5",{id:"\u5c0d\u61c9\u53c3\u6578"},"\u5c0d\u61c9\u53c3\u6578"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/HzUhd7U.png",alt:null}))),Object(c.b)("h2",{id:"file-systemfs"},"File System(fs)"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh="}),"cd /proc/sys/fs\n\n# \u6700\u591a\u5bb9\u7d0d\u591a\u5c11 Asyc I/O, \u5982\u70ba DB \u8d8a\u591a\u8d8a\u597d, 1M up, \u81e8\u6642\u9700\u8981\u5927\u91cf\u5beb\u5165\u6642\u6bd4\u8f03\u4e0d\u6613\u88ab\u53d7\u9650\ncat aio-max-nr\n\n# kernel \u4e00\u6b21\u53ef\u4ee5\u638c\u63e1\u7684 file \u6578\ncat \n\n\u516c\u5f0f (mempages * (PAGE_SIZE / 1024)) / 10\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh="}),"# \u91dd\u5c0d\u4f7f\u7528\u8005\u9032\u884c\u8a2d\u5b9a\ncd /etc/security\ncat limits.conf\n\n# \u67e5\u770b limit \u76f8\u95dc\u8a2d\u5b9a\nulimit -a\n# \u8abf\u6574\nulimit (\u9078\u9805, ex: -n = open files) \u6578\u503c\n")),Object(c.b)("h2",{id:"oomout-of-memory"},"OOM(Out of memory)"),Object(c.b)("h3",{id:"panic_on_oomsysvm"},"panic_on_oom(sys/vm/)"),Object(c.b)("h3",{id:"oom_adj"},"oom_adj"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"value -16 ~ 15, \u985e\u4f3c\u512a\u5148\u5e8f, \u8d8a\u5c0f\u8d8a\u4e0d\u5bb9\u6613\u88ab kill")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh="}),"cd  /proc/{which pid}\necho '{value}'| sudo tee oom_adj\n")),Object(c.b)("h2",{id:"dymanic-increase-swap"},"Dymanic increase swap"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"partition disk \u76f4\u63a5\u5207\u786c\u789f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5feb"))),Object(c.b)("li",{parentName:"ol"},"file \u65b0\u589e\u6a94\u6848\u639b\u8f09",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u65b9\u4fbf")))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell="}),"## top \u53ef\u4ee5\u770b\u5230 swap \u8cc7\u8a0a\n## !!\u5148\u4e0b sync (\u540c\u6b65), \u5426\u5247\u901a\u5e38\u662f async\n## !!\u628a swap load \u56de memory\n## \u67e5\u770b\u76ee\u524d swap \u7a7a\u9593\nswapon --show\n## \u589e\u52a0 swap \u6a94\u6848\nsudo fallocate -l 1M /{File name}\n## \u4fee\u6539\u6b0a\u9650\nsudo chmod 600 /{File name}\n## \u639b\u8f09 swap file\nswapon /{File name}\n## \u62ff\u6389\nswapoff /{File name}\n")),Object(c.b)("h2",{id:"network"},"Network"),Object(c.b)("p",null,"\u8abfkernel\u5167buffer"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh="}),"cd /proc/sys/net/core\n## rmem_default : 212992 \u9810\u8a2d\u4e0b\u8f09buffer\u5927\u5c0f\n## rmem_max \ncat rmem_default\n\n## \u6aa2\u67e5\u76ee\u524dnetwork buffer size(\u9700\u5b89\u88dd ifstat \u5957\u4ef6)\nifstat -i eth0 -q 1 1\n")),Object(c.b)("p",null,"\u7528\u8d85\u5f37\u6f14\u7b97\u6cd5\uff08\uff1f\uff09\u52a0\u5feb\u901f\u5ea6"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell="}),"echo 'net.core.default_qdisc=fq' | sudo tee -a sysctl.conf\n\necho 'net.ipv4.tcp_congestion_control=bbr' | sudo tee -a sysctl.conf\n\n## IPv6 (?) \u5f85\u88dc\u5145\n\nsudo sysctl -p\n")),Object(c.b)("p",null,"Network buffer \u4f7f\u7528\u72c0\u614b ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://unix.stackexchange.com/questions/419518/how-to-tell-how-much-memory-tcp-buffers-are-actually-using"}),"https://unix.stackexchange.com/questions/419518/how-to-tell-how-much-memory-tcp-buffers-are-actually-using")),Object(c.b)("h1",{id:"linux-\u9632\u8b77\u6280\u5de7"},"Linux \u9632\u8b77\u6280\u5de7"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u7269\u7406\u9632\u8b77"),Object(c.b)("li",{parentName:"ol"},"set GRUB password(\u907f\u514d Single user mode \u4fee\u6539 root \u5bc6\u78bc)nano 00_header",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"+2FA Google Auth"))),Object(c.b)("li",{parentName:"ol"},"\u78c1\u789f\u52a0\u5bc6",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"VeraCrypt\n- \u5229\u7528\u6ed1\u9f20\u8ecc\u8de1\u4f86\u7522\u751f\u96a8\u6a5f\u7684\u91d1\u9470\u52a0\u5bc6(\u6ed1\u8d8a\u4e45\u5f37\u5ea6\u8d8a\u5f37)"))),Object(c.b)("li",{parentName:"ol"},"passwd\n:::info\n< source: \u7c21\u5831 page 27>")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell="}),"passwd : \u7528\u4f86\u8b8a\u66f4\u4f7f\u7528\u8005\u7684\u5bc6\u78bc\nsudo passwd <username> : \u8b8a\u66f4\u6307\u5b9a\u4f7f\u7528\u8005\u7684\u5bc6\u78bc\npasswd -S : \u986f\u793a\u5bc6\u78bc\u7684\u72c0\u614b\u8cc7\u8a0a\nsudo passwd -S <username> : \u67e5\u770b\u7279\u5b9a\u4f7f\u7528\u8005\u7684\u5bc6\u78bc\u8cc7\u8a0a\nsudo passwd -aS : \u53c3\u6578\u67e5\u95b1\u6240\u6709\u4f7f\u7528\u8005\u7684\u5bc6\u78bc\u72c0\u614b\u8cc7\u8a0a\nsudo passwd -d <username> : \u79fb\u9664\u4f7f\u7528\u8005\u5bc6\u78bc (\u8a72\u4f7f\u7528\u8005\u7684\u5e33\u865f\u4e5f\u6703\u540c\u6642\u88ab\u505c\u7528\uff0c\u7121\u6cd5\u767b\u5165)\nsudo passwd -e <username> : \u8a2d\u5b9a\u5bc6\u78bc\u70ba\u904e\u671f\u72c0\u614b\nsudo passwd -l <username> : \u9396\u5b9a\u4f7f\u7528\u8005\u5bc6\u78bc\nsudo passwd -u <username> : \u89e3\u9396\u4f7f\u7528\u8005\u5bc6\u78bc\n-n -x -w -i : \u8a2d\u5b9a\u6700\u77ed\u671f\u9650\uff0c\u6700\u9577\u671f\u9650\uff0c\u904e\u671f\u524d\u8b66\u544a\uff0c\u5bc6\u78bc\u904e\u671f\u5f8c\u53ef\u4f7f\u7528\u7684\u671f\u9593\n")),Object(c.b)("p",null,"{\u5e33\u865f\u540d\u7a31} P 09/20/2018(\u5efa\u7acb\u65e5\u671f) 0(\u5bc6\u78bc\u6700\u77ed\u671f\u9650) 99999(\u5bc6\u78bc\u6709\u6548\u671f\u9650) 7(\u904e\u671f\u524d\u5e7e\u5929\u8b66\u544a) -1(\u5bc6\u78bc\u591a\u4e45\u904e\u671f(-1=\u5c31\u7b97\u6709\u5bc6\u78bc\u671f\u9650\u4e5f\u4e0d\u6703\u9396\u6389))\n:::"),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"sudoer")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u52a0\u9019\u4e00\u884c\u4ee3\u8868kent1201\u9019\u500b\u5e33\u865f\u53ef\u4ee5\u4f7f\u7528sudo \u4e4b\u5f8c\u4f7f\u7528\u7684\u6642\u5019\u4e0d\u7528\u6253sudo\nkent1201 ALL=(root) /usl/bin/passwd(\u9632\u6b62\u66f4\u6539\u5bc6\u78bc","[?]",")")),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},"/var/tmp \u5f88\u5bb9\u6613\u88ab\u99ed\u5ba2\u5165\u4fb5, \u56e0\u6b64\u7981\u6b62/tmp/\u88e1\u57f7\u884c\u5167\u5bb9\u3001setuid\u7b49...\u6307\u4ee4")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell="}),"sudo mount -o rw,noexec,nosuid,nodev,bind /tmp/ /var/tmp/\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell="}),'## \u5b89\u88dd logcheck\nsudo apt-get install logcheck\n## \u6a21\u5f0f\uff1a\u8b66\u5831\u3001\u8b66\u544a\u3001\u65e5\u5e38\n\n## logcheck\u64f4\u5145\u5de5\u5177\uff0c\u5206\u6790 & \u5217\u51fa \u9700\u8981\u770b\u7684 \nsudo apt-get install syslog-summary\n\n## \u7de8\u8f2f\u8a2d\u5b9a\u6a94\nsudo vim /etc/logcheck/logcheck.conf\n\n## default:22\u884c\nREPORTLEVEL="server"\n\n## default:62\u884c \u555f\u7528 SYSLOGSUMMARY\nSYSLOGSUMMARY=1\n')),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},"nmap \u5075\u6e2c\u7db2\u7ad9\u3001Server\u3001\u670d\u52d9\u7684\u5957\u4ef6")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell="}),"sudo apt-get install nmap\n\nnmap -v --top-port 10 178.128.218.255\nnmap -sA --top-port 10 178.128.218.255\n## \u8f03\u5b8c\u6574\u6383\u63cf\nnmap -sS -A 178.128.218.255\n\nsudo apt-get install portsentry\n\n## \u8a2d\u5b9a\u6a94\nsudo vim /etc/portsentry/portsentry.conf\n\n## portsentry.conf :34 \u8d77\n# \u6709\u9810\u8a2d\u7684\u7d44\u5225\uff0c\u53ef\u91dd\u5c0d\u5176\u53c3\u8003\u4f7f\u7528\n## portsentry.conf :163 KILL_ROUTE\n# \u53d7\u5230\u653b\u64ca\u6642\u8f49\u79fb\n# \n## portsentry.conf :208 iptables\n# Reject \u6703\u50b3\u5c01\u5305, Drop \u76f4\u63a5\u4e1f\n## portsentry.conf :211 iptables, BT\u5efa\u8b70\u53ef\u770b\u770b\n\n")),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},"chkrootkit, unhide, tripwire",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"chkrootkit \u6383\u7784\u670d\u52d9\u6709\u7121\u88ab\u6728\u99ac\u5165\u4fb5")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell=="}),"sudo apt install chkrootkit\nsudo chkrootkit\n")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"unhide \u6aa2\u67e5\u6709\u7121\u96b1\u85cf\u7684 process"),Object(c.b)("li",{parentName:"ul"},"tripwire \u76e3\u63a7\u6a94\u6848\u6216\u8a2d\u5b9a\u6709\u7121\u66f4\u52d5")))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell="}),'## \u5b89\u88dd\nsudo apt-get install tripwire unhide chkrootkit fail2ban\n## tripwire \n##     sitekey > policy & conf\n##     localkey > \nsudo tripwire --init\n\nsudo sh -c "tripwire --check | grep Filename > no-directory.txt"\n## unhide \u6aa2\u67e5\u5be6\u969b\u4e0a\u57f7\u884c\uff0c\u4f46\u523b\u610f\u96b1\u85cf\u7684process\n')),Object(c.b)("ol",{start:7},Object(c.b)("li",{parentName:"ol"},"fail2ban")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell=="}),"## \u4e00\u5b9a\u8981\u8a2d\u5b9a ignore ip\uff0cignore\u81ea\u5df1\ncp -a\u3000\u4e00\u5b9a\u8981\u52a0-a(archive) \n")))}b.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||c;return n?r.a.createElement(d,l({ref:t},s,{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);