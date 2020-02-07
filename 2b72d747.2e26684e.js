(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var l=n(1),b=n(9),r=(n(0),n(233)),c={},a={id:"1041/Week-8-Samba",title:"Week-8-Samba",description:"# 1041 Week 8 Samba\xa0",source:"@site/docs/1041/Week-8-Samba.md",permalink:"/docs/1041/Week-8-Samba",editUrl:"https://github.com/NCNU-OpenSource/NCNU-OpenSource.github.io/edit/src/docs/1041/Week-8-Samba.md",sidebar:"someSidebar",previous:{title:"Week7",permalink:"/docs/1041/Week7"},next:{title:"Week-9-Network-Design",permalink:"/docs/1041/Week-9-Network-Design"}},u=[],o={rightToc:u};function p(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"1041-week-8-samba"},"1041 Week 8 Samba\xa0"),Object(r.b)("p",null,"\u985e\u4f3c\u7db2\u8def\u4e0a\u7684\u82b3\u9130"),Object(r.b)("p",null,"\u5b89\u88ddSamba - > sudo apt-get install samba"),Object(r.b)("p",null,"\u4fee\u6539smb.conf"),Object(r.b)("p",null,"sudo vim /etc/samba/smb.conf"),Object(r.b)("p",null,"[global]"," \u5168\u57df\u8a2d\u5b9a \uff1a Server\u5c0d\u5916\u7684\u8a2d\u5b9a"),Object(r.b)("p",null,"server string \uff1aServer\u986f\u793a\u7684\u540d\u7a31"),Object(r.b)("p",null,"\u5168\u57df\u8b8a\u6578"),Object(r.b)("p",null,"\uff05h\uff1ahost name"),Object(r.b)("p",null,"#Misc"),Object(r.b)("p",null,"usershare allow guests \u6539 no"),Object(r.b)("p",null,"sudo service smbd restart"),Object(r.b)("p",null,"Share Definitions"),Object(r.b)("p",null,"\u683c\u5f0f\uff1a"),Object(r.b)("p",null,"[\xa0\xa0 ]"," \u5206\u4eab\u540d\u7a31"),Object(r.b)("p",null,"[homes]","\u81ea\u52d5\u6210\u70ba\u5206\u4eab\u81ea\u5df1\u5bb6\u76ee\u9304"),Object(r.b)("p",null,"path >>\u4ee5\u7d55\u5c0d\u8def\u5f91\u958b\u59cb"),Object(r.b)("p",null,"browseable\uff1a \u53ef\u5426\u700f\u89bd"),Object(r.b)("p",null,"writeable\uff1a\u53ef\u5426\u7de8\u8f2f"),Object(r.b)("p",null,"write list\uff1a\u53ef\u7de8\u8f2f\u4f7f\u7528\u8005\xa0\xa0\xa0 @\uff1a\xa0\xa0 \u7fa4\u7d44\u6b0a\u9650"),Object(r.b)("p",null,"mode 0664 => 0(\u975e\u7279\u6b8a\u6a94\u6848) 6\uff1aroot\xa0\xa0 6:group\xa0\xa0 4:owner"),Object(r.b)("p",null,"veto file: \u5b8c\u5168\u96b1\u85cf\u6a94\u6848,\u4e0d\u7d66\u5176\u4ed6\u4eba\u770b\u5230"),Object(r.b)("p",null,"guest ok: \u5141\u8a31\u8a2a\u5ba2\u8207\u5426 \uff08yes/no\uff09"),Object(r.b)("p",null,"printer:\u53ef\u8a3b\u89e3\u6389\u5370\u8868\u6a5f\u4ee5\u7bc0\u7701\u8cc7\u6e90"),Object(r.b)("p",null,"testparm: \u6aa2\u6e2c\u8a2d\u5b9a\u662f\u5426\u7b26\u5408\u9700\u6c42"),Object(r.b)("p",null,"\u65b0\u589e\u4f7f\u7528\u8005\uff1a sudo smbpasswd -a\uff08\u65b0\u589e\u4f7f\u7528\u8005\u7684\u6307\u4ee4\uff09\xa0 zxp86021\uff08\u4f7f\u7528\u8005\u540d\u7a31\uff09"),Object(r.b)("p",null,"--\x3e sudo service smbd restart"),Object(r.b)("p",null,"\u67e5\u770b\u4f7f\u7528\u8005\uff1a sudo pdbedit -L"),Object(r.b)("p",null,"\u56e0\u70ba\u8981\u4fee\u6539samba\u8b80\u53d6\u7684\u6b0a\u9650 , \u4e5f\u8981\u4fee\u6539\u6a94\u6848\u539f\u59cb\u6b0a\u9650\u624d\u80fd\u9032\u5165\u8b80\u5beb"),Object(r.b)("p",null,"\u4fee\u6539\u6a94\u6848\u76ee\u9304\u6b0a\u9650\xa0 : sudo chmod 777 (\u4f60\u8981\u9023\u5230\u7684\u8cc7\u6599\u593e\uff09"),Object(r.b)("p",null,"\u4fee\u6539\u53ef\u4f7f\u7528\u7684\u7fa4\u7d44\uff1asudo chown(change owner) \u64c1\u6709\u8005\uff1a\u7fa4\u7d44\xa0 \u8cc7\u6599\u593e\u540d\u7a31"),Object(r.b)("p",null,"samba\u8a2d\u5b9a\u91cd\u9ede\uff1a\u5be6\u9ad4\u76ee\u9304\u7684\u6a94\u6848\u6b0a\u9650\uff0c\u4f7f\u7528\u8005\u7684\u8a8d\u8b49"),Object(r.b)("p",null,"smbpasswd -a ","[username]"),Object(r.b)("p",null,'\xa0- username\u6307\u7684\u662f\u5c07"\u96fb\u8166\u88e1\u7684user"\u65b0\u589e\u5230samba'),Object(r.b)("p",null,"\xa0- \u6240\u4ee5\u6c92\u8fa6\u6cd5\u4f7f\u7528smbpasswd\u7684\u539f\u56e0\uff0c\u901a\u5e38\u662fubuntu\u88e1\u6c92\u6709\u9019\u500buser\uff0c\u53ef\u7528useradd\u65b0\u589e"),Object(r.b)("p",null,"\xa0sudo\xa0 adduser\xa0 ","[name]","\xa0\xa0 \u65b0\u589e\u4e00\u500b\u4f7f\u7528\u8005\u6709\u5bb6\u76ee\u9304"),Object(r.b)("p",null,"\xa0sudo useradd\xa0\xa0 ","[name]","\xa0\xa0 \u65b0\u589e\u4e00\u500b\u4f7f\u7528\u8005\u6c92\u6709\u5bb6\u76ee\u9304"),Object(r.b)("p",null,"\xa0mkdir\xa0 ","[name]"," \u65b0\u589e\u8cc7\u6599\u593e"),Object(r.b)("p",null,"\xa0sudo userdel -r\xa0 ","[NAME]"," \u522a\u6389\u5bb6\u76ee\u9304"),Object(r.b)("p",null,"\xa0/etc/samba/smb.cfg\u4e2d\uff0c\u81ea\u5df1\u65b0\u589e\u7684profiles\u4e0b\u7684path(\u4f8b\u5982path = /mnt/test)\uff0c\u9019\u88e1\u662f\u6307\u5411\u4e00\u500b\u5be6\u9ad4\u4f4d\u7f6e\uff0csamba\u4e26\u4e0d\u6703\u81ea\u5df1\u65b0\u589e\u9019\u500b\u8cc7\u6599\u593e\uff0c\u88ab\u6307\u5411\u7684\u5be6\u9ad4\u4f4d\u7f6e\u8981\u81ea\u5df1\u65b0\u589e\u3002"),Object(r.b)("p",null,"sudo service smbd restart"),Object(r.b)("p",null,"sudo /etc/init.d/samba restart"),Object(r.b)("p",null,"sudo apt-get install mailutils"),Object(r.b)("p",null,"\u67e5\u770b\u662f\u5426\u6709\u7b49\u5f85\u5bc4\u51fa\u7684\u4fe1\uff1amailq"),Object(r.b)("p",null,"\u5bc4\u4fe1\u6307\u4ee4:"),Object(r.b)("p",null,'mail -s "Hello mail" xxxxxxx@mail.com'),Object(r.b)("p",null,"\u5167\u5bb9"),Object(r.b)("p",null,"."),Object(r.b)("p",null,"Cc:\u5bc4\u7d66who\xa0"),Object(r.b)("p",null,"(Ctrl+D)"),Object(r.b)("p",null,"\u53d6\u5f97\u76ee\u524d\u4e3b\u6a5f\u6240\u6709IP\uff1aifconfig \uff5cgrep inet"),Object(r.b)("p",null,"ifconfig \uff5cgrep inet\uff5c awk \u2019{print $2}\u2019\xa0"),Object(r.b)("p",null,"Shell Script"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"create")),Object(r.b)("blockquote",null,Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("p",{parentName:"blockquote"},"append"))),Object(r.b)("p",null,"<\xa0 throw in it"),Object(r.b)("p",null,"ifconfig | grep inet | awk \u2019 NR == 1{print $2}\u2019"),Object(r.b)("p",null,"ifconfig \uff1a\u6293\u53d6IP\u8cc7\u8a0a"),Object(r.b)("p",null,"grep \uff1a\u7be9\u9078\u6709\u5f8c\u9762\u5b57\u4e32\u7684\u5217\uff08inet\uff09"),Object(r.b)("p",null,"awk\uff1a\u505a\u683c\u5f0f\u5316"),Object(r.b)("p",null,"print $2 \uff1a\u4ee5\u7a7a\u683c\u505a\u5206\u9694\uff0c\u7b2c\u4e8c\u500b\u5340\u6bb5"),Object(r.b)("p",null,"NR == 1 \uff1a\u7b2c\u4e00\u5217"),Object(r.b)("p",null,"\u5982\u679c\u8981\u57f7\u884c\u56fa\u5b9a\u7684\u67d0\u4e9b\u6307\u4ee4\uff0c\u53ef\u4ee5\u5c07\u4ed6\u5011\u5beb\u6210\u8173\u672c"),Object(r.b)("p",null,"\u4e5f\u5c31\u662f(.sh)\u6a94\u6848\uff0c\u57f7\u884c\u8173\u672c\u4f7f\u7528 sh \u6307\u4ee4\uff08\u4f8b\uff1ash demo.sh\uff09"),Object(r.b)("p",null,"mail -s \u2019\u4fe1\u4ef6\u6a19\u984c\u2019 xxxxxxx@gmail.com"),Object(r.b)("p",null,"\xa0\uff08content\uff09"),Object(r.b)("p",null,"\xa0\uff08^d\uff09"),Object(r.b)("p",null,"\xa0Cc: \u6536\u4ef6\u4eba\u526f\u672c"),Object(r.b)("p",null,"\xa0\uff08Enter\u7d50\u675f\uff09"),Object(r.b)("p",null,"\xa0context.txt \u70ba\u8981\u5beb\u5165\u4fe1\u4ef6\u7684\u5167\u5bb9"),Object(r.b)("p",null,"\xa0Demo.sh"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"#!/bin/sh")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'echo "Hello World shell script" > /home/username/context.txt')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'echo "I want to email to myself" >>\xa0 /home/username/context.txt')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"ifconfig |grep inet |awk \u2019NR==3 {print $2}\u2019 >> /home/username/context.txt")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'/usr/bin/mail -s "Send My IP" example@gmail.com < /home/username/context.txt'))))}p.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return m}));var l=n(0),b=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,b=function(e,t){if(null==e)return{};var n,l,b={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},i=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=Object(l.forwardRef)((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),i=p(n),O=l,m=i["".concat(c,".").concat(O)]||i[O]||s[O]||r;return n?b.a.createElement(m,a({ref:t},o,{components:n})):b.a.createElement(m,a({ref:t},o))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,c=new Array(r);c[0]=O;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,c[1]=a;for(var o=2;o<r;o++)c[o]=n[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);