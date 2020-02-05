# Week 14(2019/05/23) - 自動部署、自動測試
自動部署本周簡報 : [本周 Slide](https://docs.google.com/presentation/d/1wJTCemM79a-d8FDMcgH6nDHAyifFsLjQzEL8xYDYnaw/edit?usp=sharing)
自動測試簡報 : [簡報](https://docs.google.com/presentation/d/17LyztipJfLjisX3Xdi9DuHQwR2gw1hl7tvd9jcSZyqM/edit?usp=sharing)
# Ansible
+ 無中間代理
+ 重複的流程自動化
+ 模組化
+ 基礎建設即代碼
### 安裝步驟
```
+ sudo apt-get install -y python-software-properties software-properties-common
+ sudo add-apt-repository -y - ppa:ansible/ansible; sudo apt-get update
+ sudo apt-get install -y ansible
```
+ 被控端 Node
```
+ sudo apt-get install -y openssh-server
```
+ Server
```
mkdir ~/Ansible
cd ~/Asnible
vim ansible.cfg
vim hosts用於編輯主機群
sudo apt-get install -y sshpass
```
### 執行
+ `ansible all -m ping` 嘗試 ping 主機
+ `ansible all -m command -a “echo Hi”`

### Playbook
+ 結構化 Framework
+ 讓 Ansible 最佳化
+ Play (為特定目的)
+ Task (執行步驟)
+ Modules(Ansible 所提供的各種操作方法)
+ vim testConnect.yml
```
---
- hosts: server
  tasks:
    # Task 1: Test connection
    - name: Test connection
      ping:
      register: message

    # task 2
    - name: Show result
      debug:
        msg: "{{ message }}"

```
+ `sudo apt install ansible-lint` 用於輔助
+ `ansible-playbook {testConnect.yml}`

[Ansible 參考](https://ithelp.ithome.com.tw/users/20031776/ironman/1022)

[Ansible 教學](https://legacy.gitbook.com/download/pdf/book/chusiang/automate-with-ansible)

[強者 Ansible 教學簡報](https://docs.google.com/presentation/d/11YuRZpVyH1rr00qxe9JsjAipYcB7gGNYOlIMlV3kSYo/edit?fbclid=IwAR0702eNkcDdfi6KCdvWoBnY4Mh8buu7Wa708ZMLwTw1l1ZwgfamewKO3sM#slide=id.p)

# CI/CD
[簡報](https://docs.google.com/presentation/d/17LyztipJfLjisX3Xdi9DuHQwR2gw1hl7tvd9jcSZyqM/edit?usp=sharing)

### CI (Continuous Integration)
+ 持續性整合 : 自動進行建置，測試，回報錯誤


### CD (Continuous Delivery & Continuous Deployment)
+ 持續性發布 : 所有的變更都會被自動部署到生產環境中
+ 持續性部署 : 所有的變更都可以被部署到生產環境中，但是出於業務考慮，可以選擇不部署

### 常見 CI/CD 工具
+ Jenkins : 專案設定較複雜，不推薦初學者使用
+ Travis CI
+ Bamboo
+ Drone

### Drone
+ [install](https://docs.drone.io/installation)
`
### Runner(CI Server)
+ version control + Continuous Integration
### Drone Cloud
+ https://cloud.drone.io/

