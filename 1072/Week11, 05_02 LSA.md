# Week 11(2019/05/02) - 虛擬化技術 KVM/Qemu, LXD , LXC

[KVM LXC LXD slide](https://docs.google.com/presentation/d/11mNVOq10rQFSP7g3X4gL8ZVOLJzgzFnSY6ZOSkL4Dmk/edit?usp=sharing)

## KVM v.s. LXC
:::info
- KVM(qemu)
    - 像是使用 VMware 或是 VirtualBox 虛擬機器軟體，使用軟體來模擬硬體的方式所建立的虛擬機器，使用起來和實體機器相同，可以隨時加入其它設備來擴充硬碟或是記憶體容量。
- LXC(Linux Container)
    - LXC 只能用來執行 Linux 的虛擬機器，但不是所有的 Linux 版本都有支援，要視其有沒有提供 Template 版本而定。所提供的是一個使用環境，所以佔用的磁碟空間和記憶體會比較小，執行效率會損失較低，幾乎接近實體機器的效能，不過，虛擬機器的設定會受限於在建立時，無法做很大的變動。

:::
||KVM|LXC|
|---|---|---|
|虛擬化類型|完整|輕量|
|Guest OS|通用|Linux|
|安全性|好|普通|
|性能|普通|好|

namespace 是個別獨立，不會相互影響


# LXD Practical
```shell
sudo apt-get install lxd lxd-client
sudo apt-get install -t xenial-backports lxd lxd-client snap install lxd
sudo lxd init
sudo lxc launch ubuntu:16.04 first
sudo lxc list
sudo lxc exec first -- /bin/bash
sudo lxc stop first
sudo lxc delete first
```