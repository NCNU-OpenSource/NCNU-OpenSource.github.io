(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return i}));var r=n(1),c=n(9),b=(n(0),n(233)),l={},a={id:"1081/Week6",title:"Week6",description:"# Week 06(2019/10/24)",source:"@site/docs/1081/Week6.md",permalink:"/docs/1081/Week6",editUrl:"https://github.com/NCNU-OpenSource/NCNU-OpenSource.github.io/edit/src/docs/1081/Week6.md",sidebar:"someSidebar",previous:{title:"Week5",permalink:"/docs/1081/Week5"},next:{title:"Week7",permalink:"/docs/1081/Week7"}},p=[{value:"nginx (web server)\u8a2d\u5b9a\u6a94\u4f4d\u7f6e",id:"nginx-web-server\u8a2d\u5b9a\u6a94\u4f4d\u7f6e",children:[]},{value:"demo",id:"demo",children:[]},{value:"sever ip \u8207 domain",id:"sever-ip-\u8207-domain",children:[]},{value:"telnet",id:"telnet",children:[]}],o={rightToc:p};function i(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"week-0620191024"},"Week 06(2019/10/24)"),Object(b.b)("h3",{id:"nginx-web-server\u8a2d\u5b9a\u6a94\u4f4d\u7f6e"},"nginx (web server)\u8a2d\u5b9a\u6a94\u4f4d\u7f6e"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"cd /etc/nginx\n")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"nginx.conf"),"\uff1a\u4e3b\u8a2d\u5b9a\u6a94\n\u57fa\u672c\u7684\u6771\u897f\u653e\u5728\u4e3b\u8a2d\u5b9a\u6a94\uff0c\u5176\u4ed6\u5404\u5f0f\u5404\u6a23\u7684\u6771\u897f\u653e\u5728\u5176\u4ed6\u5730\u65b9"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"/etc/nginx/sites-available\n")),Object(b.b)("p",null,"\u8a2d\u5b9a\u6a94\u4ee5\u4f9b\u555f\u7528\uff0c\u5beb\u5728\u88e1\u9762\u4f46\u4e26\u4e0d\u4e00\u5b9a\u6709\u7528\u5230"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"/etc/nginx/sites-enabled\n")),Object(b.b)("p",null,"\u5be6\u969b\u6709\u5728\u904b\u4f5c\uff0c\u9023\u7d50\u5230available\u4ee5\u555f\u7528"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"/etc/nginx/sites-available/default\n")),Object(b.b)("p",null,"\u9810\u8a2d\u6a94\u6848\u4f4d\u7f6e:"),Object(b.b)("p",null,"index index.php (line39):\u9023\u7d50\u5230\u4f60\u7684index.php\uff08\u6216\u5176\u4ed6\u540d\u5b57\uff09"),Object(b.b)("p",null,"location:\u6307\u5b9aurl\uff0c\u53ef\u4ee5\u4f7f\u7528\u6b63\u5247\u8868\u9054\u5f0f"),Object(b.b)("p",null,"sever name(line41):\u5c0d\u61c9\u5230\u67d0\u500bdomain name "),Object(b.b)("p",null,"server(line16):port"),Object(b.b)("p",null,"include xxx (line61\u300162):\u9023\u7d50\u5176\u4ed6\u7684\u6771\u897f\u9032\u4f86\u4f7f\u7528"),Object(b.b)("p",null,"root:\u627e\u6a94\u6848\u540d\u7a31\u3001\u76ee\u9304\u53bb\u627e\u6a94\u6848\uff0c\u6c92\u6709\u5c31\u56de\u5831404"),Object(b.b)("p",null,"\u9023\u7d50\u6a94\u6848\n",Object(b.b)("inlineCode",{parentName:"p"},"ln -s <src> <dst>")),Object(b.b)("p",null,"\u4f7f\u7528\u7d55\u5c0d\u8def\u5f91\u5982\u679c\u66f4\u6539\u4f4d\u7f6e\u6703\u6574\u500b\u7206\u70b8\n\u6240\u4ee5\u4f7f\u7528\u76f8\u5c0d\u8def\u5f91\u662f\u8f03\u597d\u7684"),Object(b.b)("p",null,"log\u6a94\u5b58\u65bc var/log"),Object(b.b)("h3",{id:"demo"},"demo"),Object(b.b)("p",null,"\u65b0\u589ehtml\u6a94:\ndirectory: ",Object(b.b)("inlineCode",{parentName:"p"},"/var/www/html")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"vim test.html\n")),Object(b.b)("p",null,"\u700f\u89bd\u5668\u6253\u958b ",Object(b.b)("inlineCode",{parentName:"p"},"localhost/test.html")," \u5373\u53ef\u986f\u793atest\u756b\u9762"),Object(b.b)("p",null,"\u5982\u679c vim \u4e2d\u5b58\u53d6\u6b0a\u9650\u4e0d\u5920(\u6c92\u6709 sudo), \u53ef\u4ee5\u7528\u4ee5\u4e0b\u65b9\u5f0f\u4f86\u5132\u5b58:\n",Object(b.b)("inlineCode",{parentName:"p"},":w !sudo tee %")),Object(b.b)("p",null,"\u66f4\u6539dafault\u6a94:(/etc/nginx/sites-available)\n\u5230 sites-enable \u53bb\u9023\u7d50"),Object(b.b)("p",null,"\u78ba\u8a8d\u8a9e\u6cd5\u662f\u5426\u6709\u8aa4"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo nginx -t \n")),Object(b.b)("p",null,"reload nginx"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo service nginx reload\n")),Object(b.b)("p",null,"\u5230",Object(b.b)("inlineCode",{parentName:"p"},"/etc/hosts"),"\u8a2d\u5b9a\u4e00\u500b\u672c\u6a5fhost\u7684 doamin name"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo vim /etc/hosts\n")),Object(b.b)("p",null,"\u958b\u555f\u700f\u89bd\u5668\u770b\u525b\u525b\u6539\u7684"),Object(b.b)("h3",{id:"sever-ip-\u8207-domain"},"sever ip \u8207 domain"),Object(b.b)("p",null,"\u4e00\u53f0\u4f3a\u670d\u5668\uff0c\u53ef\u64c1\u6709\u591a\u7d44ip\n127.0.0.1 : ip\ngoogle.com : \u7db2\u57df\u540d\u7a31\ncom.tw : \u4e0d\u5c6c\u65bc\u5b8c\u6574\u7684\u7db2\u57df\u540d\u7a31\n.tw : \u7d50\u5c3e\u57df\uff08ex\uff1a.org .edu .moe\uff09"),Object(b.b)("p",null,"Fully qualified domain name(FQDN)"),Object(b.b)("p",null,"TCP:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"\u6536\u5230\u6703\u50b3\u8a0a\u78ba\u8a8d\u901a\u9053\u662f\u5426\u66a2\u901a\n\u901f\u5ea6\u6162\n")),Object(b.b)("p",null,"UDP:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"\u6771\u897f\u76f4\u63a5\u4e1f\uff0c\u4e1f\u4e86\u6709\u6c92\u6709\u50b3\u5230\u4e0d\u77e5\u9053\uff08\u5c04\u5f8c\u4e0d\u7406\uff09\n\u901f\u5ea6\u5feb\n")),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/d4Hirov.png",alt:null})),"\n",Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/va2oCCQ.png",alt:null}))),Object(b.b)("p",null,"\ud83d\ude06 \ud83d\ude06 \ud83d\ude06 "),Object(b.b)("h3",{id:"telnet"},"telnet"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"\u771f\u6b63\u7684\u5c4c\u5496\u4e0a\u7db2\u662f\u4e0d\u7528\u700f\u89bd\u5668\u7684\nby BlueT(1984 ~ )\n")),Object(b.b)("p",null,"\u4f7f\u7528telnet\u9023\u4e0a\u6307\u5b9a\u7db2\u5740"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"telnet ssh.bluet.org 80\n")),Object(b.b)("p",null,"bluet.org \u70ba\u7db2\u5740 80\u70baport(\u7db2\u9801)"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"telnet 123.123.123 (ip)\n")),Object(b.b)("p",null,"\u4e5f\u53ef\u4ee5\u6307\u5b9aip\u9023\u7dda"),Object(b.b)("h3",{id:""}),Object(b.b)("p",null,"\u505a\u4e00\u500b\u9023\u7d50\u5230\u76ee\u7684\u5730\u4f4d\u7f6e"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo ln -s ../sites-available/default default\uff08\u5f8c\u9762\u7684default \u6703\u9023\u5230\u524d\u9762\u7684\u4f4d\u7f6e\uff09\n")),Object(b.b)("h3",{id:"-1"}),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo apt install lighttpd\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo service nginx stop\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo service lighttpd start\n")),Object(b.b)("p",null,"\u5230 /etc/lighttpd \u88e1 .conf \u958b 8080 port"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u771f\u6b63\u7684\u5c4c\u5496\u4e0a\u7db2\u662f\u4e0d\u7528\u700f\u89bd\u5668\u7684\n","[name=BlueT][time=Thu, Oct 24, 2019 6:24 PM]","[color=#2f6db5]")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),">>> type(BlueT)\n>>> <class '\u5c4c\u5496'>\n")))}i.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),c=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),i=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},u=function(e){var t=i(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=i(n),j=r,d=u["".concat(l,".").concat(j)]||u[j]||O[j]||b;return n?c.a.createElement(d,a({ref:t},o,{components:n})):c.a.createElement(d,a({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,l=new Array(b);l[0]=j;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var o=2;o<b;o++)l[o]=n[o];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);