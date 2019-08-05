# Week 08(2019/04/11) - Security

資訊安全
- 實體安全 / Hardware
- 資料安全 / Data
	- 硬碟加密
		- [veracrypt](https://www.veracrypt.fr/en/Home.html)
		- [truecrypt](https://zh.wikipedia.org/zh-tw/TrueCrypt)
- 網路安全 / Network
    - openvpn
    - VPN Server:
        - netbsd

MITM,man in the middle
HTST http

echo -n "12356"  | md5sum
> -n 不換行, md5sum 產生 md5
> base64 -d -> dcode

|Attack|Defense|
|---|---|
|CTF/WarGame|Isolation/HA|
|Data hiding|IDS/IPS|
|WebApp|Data / Connection Encrypting|
|Service|Tools|
|Network|Perl/PHP Security Modules|
|Tools|Forensic|