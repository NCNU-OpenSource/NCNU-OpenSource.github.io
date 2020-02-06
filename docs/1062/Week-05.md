###### tags: `1062` `LSA` `ncnu`
# 1062 LSA Week 05（2018/04/12）

## Review Network and Security
* NCNU CTF - Somebody's Great Website - http://128.199.191.19:3000/
* 攻略技巧：(求救！)(私)
  1. `' or 1 = 1`
  2. ``
  3. ``
  4. `page=../../../../../../../etc/group`
  5. base64, MD5
  6. ``
  7. `;ls`
  8. apktool
  9. gdb, gdb-peda
  10. nmap

## Docker
- [什麼是docker?](https://yeasy.gitbooks.io/docker_practice/content/introduction/what.html)
- 安裝（2個步驟）:
 `sudo apt-get install docker.io`
 `sudo docker pull ubuntu`
 
- 使用 Link 讓多臺 docker 能夠互相溝通
- `docker ps -a` 顯示所有 container
- `docker inspect {dockerID}`
- run:`docker run -it {REPOSITORY} /bin/bash`
- commit and save: `docker commit -m "modified message" {container ID} {save name}`
- [如何利用 Docker 強化網站安全 ](https://www.slideshare.net/timhsu/howtoprotectwebincontainer)

### 網路

https://hackmd.io/4FT8JMn4SgyI-OjUDGWqpg#

What is WebSocket? differ from HTTP2

QUIC, TLS 3
