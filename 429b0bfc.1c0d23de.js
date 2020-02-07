(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var l=a(1),r=a(9),p=(a(0),a(233)),n={},b={id:"1032/Week-4-LAMP-Drupal-and-Tther-HTTPd",title:"Week-4-LAMP-Drupal-and-Tther-HTTPd",description:"# Week 4 LAMP, Drupal, and other HTTPd",source:"@site/docs/1032/Week-4-LAMP-Drupal-and-Tther-HTTPd.md",permalink:"/docs/1032/Week-4-LAMP-Drupal-and-Tther-HTTPd",editUrl:"https://github.com/NCNU-OpenSource/NCNU-OpenSource.github.io/edit/src/docs/1032/Week-4-LAMP-Drupal-and-Tther-HTTPd.md",sidebar:"someSidebar",previous:{title:"Week-3-4-Package-Management-Command-Line",permalink:"/docs/1032/Week-3-4-Package-Management-Command-Line"},next:{title:"Week-5-Virtual-host-Apache-lighttpd",permalink:"/docs/1032/Week-5-Virtual-host-Apache-lighttpd"}},c=[{value:"Homework 4 \u6b65\u9a5f",id:"homework-4-\u6b65\u9a5f",children:[]},{value:"Other",id:"other",children:[]}],i={rightToc:c};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(l.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h1",{id:"week-4-lamp-drupal-and-other-httpd"},"Week 4 LAMP, Drupal, and other HTTPd"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Apache \u8cc7\u8a0a")),Object(p.b)("p",null,"/etc/apache2/mods-available$"),Object(p.b)("p",null,'ls |grep "mpm"'),Object(p.b)("p",null,"MPM (Multi-processing modules)"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"worker\uff1a\u5f71\u5206\u8eab",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"worker\u662f\u591a\u9032\u7a0b\u591a\u7dda\u7a0b\u6a21\u578b\uff0c\u4e00\u500b\u9032\u7a0b\u6709\u591a\u500b\u7dda\u7a0b\uff0c\u6bcf\u500b\u7dda\u7a0b\u8655\u7406\u4e00\u500b\u9023\u63a5\u3002\u8207prefork\u76f8\u6bd4\uff0cworker\u6a21\u5f0f\u66f4\u7bc0\u7701\u7cfb\u7d71\u7684\u5167\u5b58\u8cc7\u6e90\u3002\u4e0d\u904e\uff0c\u9700\u8981\u6ce8\u610fworker\u6a21\u5f0f\u4e0b\u7684Apache\u8207php\u7b49\u7a0b\u5e8f\u6a21\u584a\u7684\u517c\u5bb9\u6027\u3002"))),Object(p.b)("li",{parentName:"ul"},"prefork \uff1a\u4eba\u6d77\u6230\u8853",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"prefork\u4e2d\u6c92\u6709\u7dda\u7a0b\u7684\u6982\u5ff5\uff0c\u662f\u591a\u9032\u7a0b\u6a21\u578b\uff0c\u4e00\u500b\u9032\u7a0b\u8655\u7406\u4e00\u500b\u9023\u63a5\uff1b\u7a69\u5b9a\uff1b\u97ff\u61c9\u5feb\u3002\u5176\u7f3a\u9ede\u662f\u5728\u9023\u63a5\u6578\u6bd4\u8f03\u5927\u6642\u5c31\u975e\u5e38\u6d88\u8017\u5167\u5b58\u3002"))),Object(p.b)("li",{parentName:"ul"},"event\uff1a\u63a5\u5230request\u5c31\u65b0\u589e\u4e00\u500bthread\u4f86\u89e3\u6c7a\u9700\u6c42 (\u8ddfworker\u540c\u985e\uff0c\u6bd4\u5b83\u597d)\uff1a",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"event\u662fworker\u6a21\u5f0f\u7684\u8b8a\u7a2e\uff0c\u5b83\u628a\u670d\u52d9\u9032\u7a0b\u5f9e\u9023\u63a5\u4e2d\u5206\u96e2\u51fa\u4f86,\u5728\u958b\u555fKeepAlive\u5834\u5408\u4e0b\u76f8\u5c0dworker\u6a21\u5f0f\u80fd\u5920\u627f\u53d7\u7684\u4e86\u66f4\u9ad8\u7684\u4e26\u767c\u8ca0\u8f09\u3002 event\u6a21\u5f0f\u4e0d\u80fd\u5f88\u597d\u7684\u652f\u6301https\u7684\u8a2a\u554f\uff08HTTP\u8a8d\u8b49\u76f8\u95dc\u7684\u554f\u984c\uff09\u3002")))),Object(p.b)("p",null,"KeepAlive \u9810\u8a2doff,\u5efa\u8b70\u6539\u6210on >>\u7528\u65bc\u8a2d\u5b9a\u4f3a\u670d\u5668\u8981\u4e0d\u8981\u958b\u555f\u9023\u7e8c\u8acb\u6c42\u7684\u529f\u80fd\uff0c"),Object(p.b)("p",null,"KeepAliveTimeout \u8a2d\u5b9a\u6301\u7e8c\u591a\u9577\u7684\u6642\u9593\u95dc\u9589\u9023\u7dda >>\u7528\u65bc\u8a2d\u5b9a\u4f7f\u7528\u8005 \u300e\u9023\u7e8c\u300f \u8acb\u6c42\u7b49\u5f85\u7684\u6642\u9593\u4e0a\u9650\uff0c\u5982\u679c\u4f7f\u7528\u8005\u9023\u7e8c\u8acb\u6c42\u7684\u6642\u9593\u8d85\u904e\u6b64\u6578\uff0c\u5247\u7d42\u6b62\u6b64\u8acb\u6c42\u670d\u52d9\u3002"),Object(p.b)("p",null,"MaxKeepAliveRequests >>\u8a2d\u5b9a\u4f3a\u670d\u5668\u6240\u80fd\u63a5\u53d7\u4e4b\u6700\u5927\u9023\u7e8c\u8acb\u6c42\u91cf"),Object(p.b)("p",null,"VVV ",Object(p.b)("a",Object(l.a)({parentName:"p"},{href:"http://apache.jz123.cn/mod/prefork.html"})),Object(p.b)("a",Object(l.a)({parentName:"p"},{href:"http://apache.jz123.cn/mod/prefork.html"}),"http://apache.jz123.cn/mod/prefork.html")," VVV"),Object(p.b)("p",null,"StartServers - apache\u4e00\u57f7\u884c\u7684process\u6578\uff0c\u53ef\u540c\u6642\u8655\u7406\u7684request\u6578"),Object(p.b)("p",null,"MinSpareServers"),Object(p.b)("p",null,"MaxSpareServers"),Object(p.b)("p",null,"ServerLimit - Server \u5141\u8a31\u914d\u7f6eprocess\u6578\u4e0a\u9650, \u8a2d\u5b9a\u61c9 >= MaxClients"),Object(p.b)("p",null,"MaxClients - \u6700\u5927\u53ef\u540c\u6642\u8655\u7406\u7684 connection \u6578"),Object(p.b)("p",null,"MaxRequestsPerChild - \u4e00\u500bApache sever\u5728\u8655\u7406\u8a72\u6578\u76ee\u5f8c\uff0c\u6703\u81ea\u52d5\u4e2d\u6b62\u4e26\u91cd\u555f"),Object(p.b)("p",null,"ThreadLimit"),Object(p.b)("p",null,"ThreadsPerChild"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"DPKG \u5de5\u5177")),Object(p.b)("p",null,"sudo dpkg-reconfigure (INSTALL \u7684\u5957\u4ef6\u540d\u7a31)\xa0\xa0 >> \u91cd\u65b0\u8a2d\u5b9a"),Object(p.b)("p",null,"dpkg -L (\u5957\u4ef6\u540d\u7a31)\xa0 >> LIST\u5957\u4ef6\u7684\u6240\u6709FOLDER & FILE"),Object(p.b)("p",null,"dpkg -S (\u8def\u5f91) >> \u67e5\u770bFOLDER/FILE \u662f\u90a3\u500b\u5957\u4ef6\u7684"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Lighttpd \u8cc7\u8a0a")),Object(p.b)("p",null,"lighttpd << \u7528\u5728\u975c\u614b\u7db2\u9801\u6700\u597d"),Object(p.b)("p",null,Object(p.b)("a",Object(l.a)({parentName:"p"},{href:"http://redmine.lighttpd.net/projects/lighttpd/wiki/Docs_Configur"})),Object(p.b)("a",Object(l.a)({parentName:"p"},{href:"http://redmine.lighttpd.net/projects/lighttpd/wiki/Docs_Configur"}),"http://redmine.lighttpd.net/projects/lighttpd/wiki/Docs_Configur"),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Welcome to lalala.com\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ation"),Object(p.b)("p",null,Object(p.b)("a",Object(l.a)({parentName:"p"},{href:"http://redmine.lighttpd.net/projects/lighttpd/wiki/Docs_ModProxy"})),Object(p.b)("a",Object(l.a)({parentName:"p"},{href:"http://redmine.lighttpd.net/projects/lighttpd/wiki/Docs_ModProxy"}),"http://redmine.lighttpd.net/projects/lighttpd/wiki/Docs_ModProxy")),Object(p.b)("p",null,"lighty-enable-mod > proxy\xa0\xa0\xa0 ",Object(p.b)("strong",{parentName:"p"},"\u6700\u5f8c\u4e00\u62db\u5fc5\u7528\u79d8\u6280")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"\u91dd\u5c0d\u672c\u6a5f\u8a2d\u5b9a\u5047\u7684 DNS \u67e5\u8a62\u8cc7\u6599")),Object(p.b)("p",null,"/etc/hosts"),Object(p.b)("p",null,"/etc/resolv.conf"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Drupal")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u5b89\u88dd\uff1a",Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"http://blogs.yyes.chc.edu.tw/post/2/2714"})),Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"http://blogs.yyes.chc.edu.tw/post/2/2714"}),"http://blogs.yyes.chc.edu.tw/post/2/2714")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"https://help.ubuntu.com/community/Drupal"})),Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"https://help.ubuntu.com/community/Drupal"}),"https://help.ubuntu.com/community/Drupal")," << \u6700\u53ef\u4fe1")),Object(p.b)("p",null,"ubuntu drupal multi sites"),Object(p.b)("p",null,"/etc/drupal/7/sites/"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Drupal + VirtualHost + multi-site \u6559\u5b78\u6587\u4ef6")),Object(p.b)("p",null,Object(p.b)("a",Object(l.a)({parentName:"p"},{href:"http://ubuntuguide.org/wiki/Drupal7_tips#Multi-site_Installation"})),Object(p.b)("a",Object(l.a)({parentName:"p"},{href:"http://ubuntuguide.org/wiki/Drupal7_tips#Multi-site_Installation"}),"http://ubuntuguide.org/wiki/Drupal7_tips#Multi-site_Installation"),"\xa0"),Object(p.b)("pre",null,Object(p.b)("code",Object(l.a)({parentName:"pre"},{}),"*   #\n*   # Virtual hosting configuration for Drupal6\n*   #\n*   #\n*   <VirtualHost *:8080>\n*   ServerAdmin _webmaster_@_mysite_1.mydomain.org_\n*   #\n*   DocumentRoot /usr/share/drupal7/\n*   ServerName _mysite_1.mydomain.org_\n*   ServerAlias *._mysite_1.mydomain.org_ _mysite_1.mydomain.org_\n*   RewriteEngine On\n*   RewriteOptions inherit\n*   </VirtualHost>\n*   #\n*   <VirtualHost *:8080>\n*   ServerAdmin _webmaster_@_mysite_2.mydomain.org_\n*   #\n*   DocumentRoot /usr/share/drupal7/\n*   ServerName _mysite_2.mydomain.org_\n*   ServerAlias *._mysite_2.mydomain.org_ _mysite_2.mydomain.org_\n*   RewriteEngine On\n*   RewriteOptions inherit\n*   </VirtualHost>\n\n*   \u6ce8\u610f\u4e8b\u9805\uff1a\n*   1\\. \u6587\u7ae0\u5167\u5f88\u591a\u5730\u65b9\u6253\u6210 drupal6\uff0c\u6211\u5011\u8981\u7528 druapl7\n*   /ports.conf 2\\. \u6587\u7ae0\u4e2d\uff0c\u300csudo cp -r /etc/drupal/6/sites/default /etc/drupal/6/sites/_mysite_1.mydomain.org\u300d\u4e2d\u7684\u300ccp -r\u300d\u61c9\u6539\u6210\u300ccp -a\u300d\uff0c\u5426\u5247\u6703\u6709\u932f\u8aa4 ( \u932f\u8aa4\u662f\u6307 \u6a94\u6848\u7684\u6b0a\u9650\u8a2d\u5b9a\u932f\u8aa4\uff0c\u5c0e\u81f4\u7121\u6cd5\u9023\u63a5)_\n*   3\\. sudo rm /etc/drupal/6/sites/_mysite_2.mydomain.org_/files\xa0 \u5728files \u5f8c\u9762\u52a0 /\xa0 \u5373GG , \u606d\u559c\u4f60\u76f4\u63a5\u5e79\u6389\u7cfb\u7d71\u6a94\n*   4\\. \u6587\u7ae0\u4e2d\u300csudo nano /etc/apache2/sites-available/_drupal6virtualhost_\u300d\u61c9\u6539\u70ba\u300c\u300d(\u6a94\u6848\u5f8c\u9762\u8981\u6709 .conf)(\u6c92\u6709conf \u7684\u8a71\u6703LOAD\u4e0d\u5230\u8a2d\u5b9a)\uff0c\u4e26\u4e14\u4e4b\u5f8c\u7684\u300csudo ln -s /etc/apache2/sites-available/_drupal6virtualhost_ /etc/apache2/sites-enabled\u300d\u4e5f\u8981\u8ddf\u8457\u6539\u70ba\u300csudo ln -s /etc/apache2/sites-available/_drupal6virtualhost_.conf /etc/apache2/sites-enabled\u300d\n*   5\\. /etc/hosts \u88e1\u8981\u65b0\u589e IP\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 DOMAINNAME\n*   6\\. \u6700\u5f8c\u5230 DOMAINNAME:PORT/drupal7/install.php\n*   7.\xa0 a2ensite drupal7virtualhost.conf\xa0\xa0\xa0\xa0 domainname:8080/\xa0 \u5c31\u80fd\u6307\u5411DRUPAL\n*   8\\. restart apache\n")),Object(p.b)("p",null,"default \u662f\u4e00\u500b\u6a21\u5177"),Object(p.b)("p",null,"sudo netstat -ntupl\xa0\xa0 \u67e5\u8a62\u672c\u6a5f\u7db2\u8def\u548c\u5916\u754c\u7db2\u8def\u9023\u7dda\u7684\u6307\u4ee4"),Object(p.b)("h2",{id:"homework-4-\u6b65\u9a5f"},"Homework 4 \u6b65\u9a5f"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"LAMP")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u5b89\u88dd Apache\uff08apache2\uff09\u3001MySQL\uff08mysql-server\uff09\u3001PHP\uff08php5\uff09"),Object(p.b)("li",{parentName:"ul"},"\u4fee\u6539 Apache \u7684 Listen port \u70ba 8080\xa0",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"\u4fee\u6539\u6a94\u6848 /etc/apache2/ports.conf\xa0"))),Object(p.b)("li",{parentName:"ul"},"\u8a2d\u5b9a Apache \u7684 VirtualHost",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u500b site \u8a2d\u5b9a\u6a94 /etc/apache2/sites-available/drupal.conf",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"\u8a2d\u5b9a\u5169\u500b VirtualHost"),Object(p.b)("li",{parentName:"ul"},"Port \u7686\u70ba 8080"),Object(p.b)("li",{parentName:"ul"},"ServerName \u5206\u5225\u70ba wow.com \u53ca lalala.com"),Object(p.b)("li",{parentName:"ul"},"DocumentRoot \u7686\u70ba /usr/share/drupal7"),Object(p.b)("li",{parentName:"ul"},"\u56e0\u70ba\u5169\u500b\u7db2\u7ad9\u7686\u5403\u540c\u4e00\u500b Drupal \u7a0b\u5f0f\u78bc\uff0c\u8b93 Drupal \u81ea\u5df1\u8655\u7406 multisite\u3002"))),Object(p.b)("li",{parentName:"ul"},"\u555f\u7528\u8a72\u7db2\u7ad9\u8a2d\u5b9a",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"sudo a2ensite drupal.conf"))))),Object(p.b)("li",{parentName:"ul"},"\u91cd\u65b0\u555f\u52d5 Apache\xa0",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"sudo service apache2 restart")))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Lighttpd")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u5b89\u88dd Lighttpd\uff08lighttpd\uff09",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"sudo apt-get install lighttpd"))),Object(p.b)("li",{parentName:"ul"},"Redirect all connections on wow.com or lalala.com to 127.0.0.1:8080",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"\u4fee\u6539\u6a94\u6848 /etc/lighttpd/conf-available/10-proxy.conf"),Object(p.b)("li",{parentName:"ul"},"\u7528\u610f\uff1a\u8b93 Lighttpd \u5075\u6e2c\u5230 HTTP header \u7684 host \u6b04\u4f4d\u70ba wow.com \u6216 lalala.com \u6642\uff0c\u5c07\u4e4b\u8f49\u7d66 Apache\uff08\u672c\u6a5f:8080\uff09/ports.conf\xa0"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"http://en.wikipedia.org/wiki/List_of_HTTP_header_fields"}),"\u95dc\u65bc HTTP header")," ",Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"http://en.wikipedia.org/wiki/List_of_HTTP_header_fields"})),Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"http://en.wikipedia.org/wiki/List_of_HTTP_header_fields"}),"http://en.wikipedia.org/wiki/List_of_HTTP_header_fields"))))),Object(p.b)("p",null,"![](",Object(p.b)("a",Object(l.a)({parentName:"p"},{href:"https://hackpad-attachments.s3.amazonaws.com/hackpad.com_ujJqgyYdkmL_p.350566_1427980421413_Screenshot"}),"https://hackpad-attachments.s3.amazonaws.com/hackpad.com_ujJqgyYdkmL_p.350566_1427980421413_Screenshot")," from 2015-04-02 21:12:08.png)"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u555f\u7528 mod \u8a2d\u5b9a",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"sudo lighttpd-enable-mod proxy"),Object(p.b)("li",{parentName:"ul"},"\u6703\u81ea\u52d5\u5c07 /etc/lighttpd/conf-available/10-proxy.conf \u8907\u88fd\uff08\u9084\u662f\u9023\u7d50\uff1f\uff09\u5230 /etc/lighttpd/conf-enabled/10-proxy.conf"))),Object(p.b)("li",{parentName:"ul"},"\u91cd\u65b0\u555f\u52d5 Lighttpd",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"sudo service lighttpd restart")))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Drupal")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u5b89\u88dd Drupal 7\uff08drupal7\uff09"),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"\u5b89\u88dd\u5f8c\u4f4d\u7f6e\u6703\u5728 /etc/drupal/7/"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Register the Drupal module with Apache"),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"\u62f7\u8c9d\u539f\u6709\u4e4b\u8a2d\u5b9a\u6a94\u81f3 apache \u7684 mods-available \u76ee\u9304\u4e0b\uff0c\u4e26\u6539\u540d\u70ba drupal.conf",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"sudo cp /etc/drupal/7/apache2.conf /etc/apache2/mods-available/drupal.conf"))),Object(p.b)("li",{parentName:"ul"},"\u555f\u52d5\u8a72\u6a21\u7d44",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"sudo a2enmod drupal"))),Object(p.b)("li",{parentName:"ul"},"[optional]","\xa0 \u555f\u52d5 Apache \u7684 rewrite \u6a21\u7d44",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"sudo a2enmod rewrite"))),Object(p.b)("li",{parentName:"ul"},"\u91cd\u65b0\u555f\u52d5 Apache"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u8a2d\u5b9a Drupal multisite")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u4e00\u958b\u59cb\u5b89\u88dd Drupal \u6642\uff0cDB\u3001\u7db2\u7ad9\u540d\u7b49\u8cc7\u6599\u7686\u8a2d\u5b9a\u65bc /etc/drupal/7/sites/default/ \u4e2d\uff0c\u56e0\u6b64\u8981\u628a\u8a72\u8cc7\u6599\u593e\u8907\u88fd\u4e26\u6539\u540d\u3002")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u8907\u88fd /etc/drupal/7/sites/default/ \u4e26\u6539\u540d\u70ba wow.com"),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"sudo cp -a /etc/drupal/7/sites/default /etc/drupal/7/sites/wow.com"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u91cd\u65b0\u8a2d\u5b9a Drupal\xa0"),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"\u4f7f\u7528 dpkg-reconfigure \u4f86\u91cd\u65b0\u8a2d\u5b9a drupal7 \u9019\u500b\u5df2\u5b89\u88dd\u7684 package",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"sudo dpkg-reconfigure drupal7"))),Object(p.b)("li",{parentName:"ul"},"\u91cd\u65b0\u8a2d\u5b9a\u6642\uff0c\u7b49\u65bc\u662f\u91cd\u65b0\u88dd\u4e00\u500b\u65b0\u7684 Drupal site\uff0c\u56e0\u6b64\u8a2d\u5b9a\u8981\u8207\u524d\u4e00\u500b\u4e0d\u540c\u3002",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"Reinstall database for drupal7 ? => Yes"),Object(p.b)("li",{parentName:"ul"},"MySQL username => \u63db\u4e00\u500b"),Object(p.b)("li",{parentName:"ul"},"MySQL database name => \u63db\u4e00\u500b"))))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u4fee\u6539 host\uff0c\u5c07 wow.com \u53ca lalala.com \u6307\u5411\u672c\u6a5f\uff0c\u907f\u514d\u9023\u5230\u7db2\u969b\u7db2\u8def\u4e0a\u771f\u6b63\u7684 wow.com \u8ddf lalala.com\u3002"),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"\u4fee\u6539 /etc/hosts"),Object(p.b)("li",{parentName:"ul"},"\u589e\u52a0\u5169\u9805",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"127.0.0.1 wow.com"),Object(p.b)("li",{parentName:"ul"},"127.0.0.1 lalala.com"))))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u5b89\u88dd Drupal site"),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"\u958b\u555f ",Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"http://wow.com"})),Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"http://wow.com"}),"http://wow.com")," \u53ca ",Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"http://lalala.com"})),Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"http://lala%5Bl%5D(http://lala)a.com"}),"http://lala[l](http://lala)a.com")," \u9032\u884c\u5b89\u88dd"),Object(p.b)("li",{parentName:"ul"},"lighttpd \u6703\u81ea\u52d5\u5c07\u9019\u5169\u500b\u7db2\u5740\u8f49\u5230 8080 port \u7d66 Apache \u8655\u7406")))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"\u6e2c\u8a66")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u6aa2\u67e5\u7db2\u8def\u9023\u7dda\u72c0\u614b",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"sudo netstat -ntupl"),Object(p.b)("li",{parentName:"ul"},"port 80 \u662f\u5426\u7531 lighttpd \u76e3\u807d\uff1f\xa0"),Object(p.b)("li",{parentName:"ul"},"port 8080 \u662f\u5426\u7531 apache2 \u76e3\u807d\uff1f"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"http://wow.com"})),Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"http://wow.com"}),"http://wow.com")," \u53ca ",Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"http://lalala.com"})),Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"http://lalala.com"}),"http://lalala.com")," \u662f\u5426\u70ba\u4e0d\u540c\u7684 Drupal \u7ad9")))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Q&A")),Object(p.b)("h2",{id:"other"},"Other"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"/usr/share/drupal7/.htaccess")),Object(p.b)("pre",null,Object(p.b)("code",Object(l.a)({parentName:"pre"},{}),'<FilesMatch "**\\.(engine|inc|info|install|make|module|profile|test|po|sh|.*sql|theme|tpl(\\.php)?|xtmpl)(~|\\.sw[op]|\\.bak|\\.orig|\\.save)?$|^(\\..*|Entries.*|Repository|Root|Tag|Template)$|^#.*#$|\\.php(~|\\.sw[op]|\\.bak|\\.orig\\.save)$**">\n\n\xa0 Order allow,deny\n\n</FilesMatch>\n')),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"minimum configuration"),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(l.a)({parentName:"li"},{href:"http://wiki.nginx.org/PHPFcgiExample"}),"nginx + php5-fpm"),"\xa0"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"root /usr/share/drupal7;")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"server_name ",Object(p.b)("u",null,"domain.tld"),";")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"location ~ ",".","(htaccess|engine|inc|info|install|make|module|profile|test|po|sh|.",Object(p.b)("em",{parentName:"p"},"sql|theme|tpl(",".","php)?|xtmpl)(~|",".","sw","[op]","|",".","bak|",".","orig|",".","save)?$|^(",".","."),"|Entries.",Object(p.b)("em",{parentName:"p"},"|Repository|Root|Tag|Template)$|^#."),"#$|",".","php(~|",".","sw","[op]","|",".","bak|",".","orig",".","save)$ {")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"deny all;")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"}")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("a",Object(l.a)({parentName:"p"},{href:"https://wiki.ubuntu.com/Lighttpd%2BPHP"}),"lighttpd + php-cgi"),"\xa0")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"$HTTP",'["host"]',' == "',Object(p.b)("strong",{parentName:"p"},Object(p.b)("u",null,"domain.tld")),'" {')),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},'server.document-root = "/usr/share/drupal7"')),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"$HTTP",'["url"]',' =~ "',".","(htaccess|engine|inc|info|install|make|module|profile|test|po|sh|.",Object(p.b)("em",{parentName:"p"},"sql|theme|tpl(",".","php)?|xtmpl)(~|",".","sw","[op]","|",".","bak|",".","orig|",".","save)?$|^(",".","."),"|Entries.",Object(p.b)("em",{parentName:"p"},"|Repository|Root|Tag|Template)$|^#."),"#$|",".","php(~|",".","sw","[op]","|",".","bak|",".","orig",".",'save)$" {')),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},'url.access-deny = ("")')),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"}")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"}"))))}o.isMDXComponent=!0},233:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var l=a(0),r=a.n(l);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},p=Object.keys(e);for(l=0;l<p.length;l++)a=p[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)a=p[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},u=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(l.forwardRef)((function(e,t){var a=e.components,l=e.mdxType,p=e.originalType,n=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=o(a),s=l,O=u["".concat(n,".").concat(s)]||u[s]||m[s]||p;return a?r.a.createElement(O,b({ref:t},i,{components:a})):r.a.createElement(O,b({ref:t},i))}));function O(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=a.length,n=new Array(p);n[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:l,n[1]=b;for(var i=2;i<p;i++)n[i]=a[i];return r.a.createElement.apply(null,n)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);