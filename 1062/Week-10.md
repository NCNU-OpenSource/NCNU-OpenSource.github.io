###### tags: `1062` `LSA` `Web Servers` `ncnu`
# Week 10(2018/05/17) 
# [KVM and Xen](https://hackmd.io/JeGmxDQIQJiODQZPtM67rA?view)
KVM 在符合相關的硬體支援，可以利用bypass的功能，直接存取硬體

xen 因爲由商業公司主導，之前曾想在 Linux kernel 裏面新增其支援，但因爲 Linux 社群怕之後該公司會向所以 Linux 使用者收錢，所以就拒絕了

## KVM 安裝步驟
在 `$ cat /proc/cpuinfo`
以前會用看 `bogomips` 來當做運算速度指標
`$ cat /proc/cpuinfo | grep bogomips`取得bogomips

### [Live Migration](https://hackmd.io/LJc24sCQTp2JLYrk6liLew)

[KSM](https://en.wikipedia.org/wiki/Kernel_same-page_merging) 好棒棒，ram 虛擬機吃多少才用多少

推薦網站 blackgle 讓你變黑黑
geeky.name

問題：VirtualBox, VMware 是否有類似 KSM 相關技術？
> VirutalBox: PageFusion
> VMware：Transparent Page Sharing (TPS)

for create image file 
`qemu-img create -f qcow2 test.img 10G`

command line for create vm
`kvm -m 1024 -net nic,model=pcnet -parallel none -serial none -hda /home/junan/test.img -cdrom ~/Downloads/ubuntu-16.04.4-server-amd64.iso -net user,hostfwd=tcp::5555-:22 -boot menu=on`

iptable port forwarding

設定轉發規則 (本機的 6666 port 轉發到虛擬機 22 port(ssh))
`sudo iptables -t nat -A PREROUTING -p tcp -d 10.105.26.115 --dport 6666 -j DNAT --to-destination 192.168.122.246:22`

允許轉發封包通過 (允許別人電腦連到本機虛擬機（轉到內網））
`sudo iptables -I FORWARD -p tcp -d 192.168.122.25 --dport 22 -j ACCEPT`

`virsh start [名稱]` 開啓機器
`virsh help` 查看指令

[good website](https://geeky.name/)
