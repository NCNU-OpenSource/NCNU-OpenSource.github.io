##### tags:`ncnu`,`lsa`
Week 14(2018/06/14)
===

git: https://hackmd.io/tub-rF0BQFWGCf9f3Ap8Fw?both


# HADOOP

## Name Node 
- 在整個 cluster 中只有一個
- 管理 DN
- Backup Node 會在 Name node 死掉時接手


## 安裝

http://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-3.1.0/hadoop-3.1.0.tar.gz

### 下載
- `wget http://ftp.ubuntu-tw.net/mirror/apache-dist/hadoop/common/hadoop-3.1.0/hadoop-3.1.0.tar.gz`

或是

- `wget ftp://ftp.twaren.net/Unix/Web/apache/hadoop/common/hadoop-3.1.0/hadoop-3.1.0.tar.gz`

### 解壓縮

`tar zxvf hadoop-3.1.0.tar.gz`

### 安裝 JAVA
#### opensource 版 JAVA
`sudo apt install openjdk-8-jdk`

#### Oracle 版 Java

1.`sudo apt install python-software-properties`
2.`sudo add-apt-repository ppa:webupd8team/java`
3.`sudo apt update`
4.`sudo apt install oracle-java8-installer`

### 查看版本
`java -version`


### 設定JAVA_HOME
`export JAVA_HOME="/usr/lib/jvm/java-8-oracle"`
或是
`export JAVA_HOME="/usr/lib/jvm/java-8-openjdk-amd64"`

改資料夾名稱
`mv hadoop-3.1.0 hadoop`
### 設定HADOOP PATH

`export HADOOP_HOME=~/hadoop`（hadoop資料夾的絕對路徑）
`export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin`

### 查看版本
`hadoop version`

測試
```
cd hadoop
mkdir input
cp ./etc/hadoop/*.xml ./input/
```

（如果output存在，須先刪除）
`hadoop jar $HADOOP_HOME/share/hadoop/mapreduce/hadoop-mapreduce-examples-*.jar grep ./input ./output 'dfs[a-z.]+'`

### 模擬分散式

hadoop/etc/hadoop/core-site.xml:
```
<configuration>
        <property>
             <name>hadoop.tmp.dir</name>
             <value>file:hadoop/tmp</value>
             <description>Abase for other temporary directories.</description>
        </property>
        <property>
             <name>fs.defaultFS</name>
             <value>hdfs://localhost:9000</value>
        </property>
</configuration>
```
hdfs-site.xml:
("file:" 後為絕對路徑）
```
<configuration>
        <property>
             <name>dfs.replication</name>
             <value>1</value>
        </property>
        <property>
             <name>dfs.namenode.name.dir</name>
             <value>file:~/hadoop/tmp/dfs/name</value>
        </property>
        <property>
             <name>dfs.datanode.data.dir</name>
             <value>file:~/hadoop/tmp/dfs/data</value>
        </property>
</configuration>
```

安裝ssh 
`sudo apt install openssh-server`

設定 ssh 金鑰認證登入：
```
$ ssh-keygen
$ cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
$ chmod 0600 ~/.ssh/authorized_keys
```

or

1. > ssh-keygen
2. > ssh-copy-id localhost

檢查 ssh 登入是否需要密碼：

`ssh localhost`

格式化（第一次執行）
`./bin/hdfs namenode -format`

啟動
`./sbin/start-dfs.sh`

若有JAVA_HOME未設置等Error Messsage

於 hadoop/etc/hadoop/hadoop-env.sh 底部新增
`JAVA_HOME="/usr/lib/jvm/java-8-oracle"`
或是
`JAVA_HOME="/usr/lib/jvm/java-8-openjdk-amd64"`

確認是否成功開啟
`jps`

測試
```
./bin/hdfs dfs -mkdir -p /user/yourusername

hdfs dfs -mkdir input
hdfs dfs -put hadoop/etc/hadoop/*.xml input

hdfs dfs -ls input

hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-*.jar grep input output 'dfs[a-z.]+'

hdfs dfs -get output output

./sbin/stop-dfs.sh
```


YARN(Yet Another Resource Negotiator)
首先修改配置文件 mapred-site.xml：
```
<configuration>
        <property>
             <name>mapreduce.framework.name</name>
             <value>yarn</value>
        </property>
</configuration>
```
接着修改配置文件 yarn-site.xml：
```
<configuration>
        <property>
             <name>yarn.nodemanager.aux-services</name>
             <value>mapreduce_shuffle</value>
            </property>
</configuration>
```
啟動YARN
``./sbin/start-yarn.sh ``
啟動歷史服務器
`./sbin/mr-jobhistory-daemon.sh start historyserver`


瀏覽器開啟網址： http://localhost:8088/cluster

```
./sbin/stop-yarn.sh
./sbin/mr-jobhistory-daemon.sh stop historyserver
```

python 操作 Hadoop 檔案

`pip3 install pyhdfs`

github repo: https://github.com/jingw/pyhdfs

homepage: http://pyhdfs.readthedocs.io/en/latest/pyhdfs.html

### Hadoop Streaming 與 Python

mapper.py
```
import sys
for line in sys.stdin:
    line = line.strip()
    words = line.split()
    for word in words:
         print ('%s\t%s' % (word, 1))
```

`$ chmod a+x mapper.py`

reducer.py
```
from operator import itemgetter
import sys

current_word = None
current_count = 0
word = None

for line in sys.stdin:
    line = line.strip()
    word, count = line.split('\t', 1)
    try:
        count = int(count)
    except ValueError:
        continue
    if current_word == word:
        current_count += count
    else:
        if current_word:  
            print ('%s\t%s' % (current_word, current_count))
        current_count = count
        current_word = word

if current_word == word:
    print ('%s\t%s' % (current_word, current_count))

```

`$ chmod a+x reducer.py`

程式測試
```
$ echo "test1 test2 test2 test1 test3 test1 test" | python3 mapper.py

$ echo "test1 test2 test2 test1 test3 test1 test" | python3 mapper.py | sort | python3 reducer.py
```
mapred-site.xml
```
<property>
    <name>yarn.app.mapreduce.am.env</name>
    <value>HADOOP_MAPRED_HOME=$HADOOP_HOME</value>
</property>
<property>
    <name>mapreduce.map.env</name>
    <value>HADOOP_MAPRED_HOME=$HADOOP_HOME</value>
</property>
<property>
    <name>mapreduce.reduce.env</name>
    <value>HADOOP_MAPRED_HOME=$HADOOP_HOME</value>
</property>
```

1.可以建立一個字串、空白相間的testdata.txt（類同上方echo 內容）

2.存到系統中

`$ hadoop fs -mkdir testDir`
`$ hadoop fs -copyFromLocal testdata.txt testDir`

測試(須先start dfs)

`$ hadoop jar share/hadoop/tools/lib/hadoop-streaming-3.1.0.jar -file mapper.py -file reducer.py -mapper "python3 mapper.py" -reducer "python3 reducer.py" -input testDir/testdata.txt -output output`
or 
`$ mapred streaming -file mapper.py -file reducer.py -mapper "python3 mapper.py" -reducer "python3 reducer.py" -input testDir/testdata.txt -output output`

### 如果虛擬記憶體不足：

mapred-site.xml
```
<property>
    <name>mapreduce.map.memory.mb</name>
    <value>2048</value>
</property>
<property>
    <name>mapreduce.reduce.memory.mb</name>
    <value>2048</value>
</property>
```