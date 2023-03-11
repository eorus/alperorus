+++
draft = false
date = 2023-03-06T17:39:28+03:00
lastmod = 2023-03-06T17:39:28+03:00
title= "2023 Yılında ThinkPad X220 ve Kullandığım Programlar"
slug = "thinkpad-x220-programs-uses"
author = ["Alper"]
topics = ["Open Source"]
tags = ["Linux", "Kiss"]
# series = []
description = "2023 yılında hala kullanmaya devam ettiğim Thinkpad X220 ve üzerinde kullandığım WM ve Cli Uygulamalar"

[comments]
host = "fosstodon.org"
username = "eorus"
id = 109977424702639041

+++

Kişisel makinem, [i3wm](https://i3wm.org/) veya [bspwm](https://github.com/baskerville/bspwm) ile Arch koşturduğum 12 yaşında bir **Lenovo ThinkPad X220**. 2023 ylında hala severek kullanıyorum ve o beni bırakana kadar da kullanmaya devam etmek istiyorum. [Arch Linux](https://archlinux.org/) ve artık kısayolları ile benimle bütünleşmiş olan WM'lar ile X220'yi elimden geldiğince verimli hale getirmeye çalışıyorum. Özellikle son yıllarda tamamen komut satırı uygulamalar kullanmam ile çok rahat ve sürdürülebilir bir sisteme sahip oldum. Muhtemelen bu, Linux üzerinde herhangi bir WM kullanan ve kendine göre özelleştirip [dotfiles](https://github.com/eorus/dotfiles) konfigürasyon dosyalarını yedekleyen herkes için aynıdır ama i5-2450M işlemciye sahip bir makine için günümüz internet siteleri ve geleneksel programlar oldukça yorucu olabiliyor.

[Thinkpad X220](https://en.wikipedia.org/wiki/ThinkPad_X_series#X220)'yi ilk çıktığında alıp yıllarca kullanmıştım. Sonra sattım. Ardından trackpointi olan daha üst seviye bir Thinkpad olması için önce T470s, sonra daha kompakt yapıda olması için X250'ye terfi ettim. Sanırım X220 yine beni çağırıyordu :) sonuçta aynı 12.5 ekran ve benzer ergonomi fakat eksik bir şeyler vardı (evet klavye ve mavi enter tuşu:). Zaten bir mini-pc ile ev sunucusu kurmuştum, gözümü kararttım ve yeniden X220 aramaya başladım. 2019 yılında yakşaık $60'a 8GB RAM ve 240GB SSD'si olan ikinci el bir model buldum. Pil ölüydü ve sadece adaptör ile fişe takılı çalışabiliyordu. Bir $60 daha harcayıp 9 hücreli yeni bir batarya alıp, ek 8Gb ram taktım ve diski eldeki 512GB ssd ile değiştirdim. Ve tabii ki bir de dock istasyonu.

Özetle bugün 16GB RAM, 512SSD diski olan, pili 4-5 saat giden, laptop olarak sağladığı imkanların yanısıra , evde dock ile 25-inch monitörde full hd kullanabildiğim bir X220'ye sahibim. X220 üzerinde kullandığım programlara kısaca değineyim. Buradan yola çıkarak sonrasında bir "Uses" sayfası ile bazı programın detayını aktarabilirim.

![Lenovo Thinkpad X220](/images/posts/thinkpad-x220-arch.webp)

## Bir Bakışta Kullandığım Programlar

* OS : Arch Linux
* WM : i3, BSPWM
* Terminal : St, Rxvt Unicode
* Dosya Yöneticisi : Ranger
* Note Alma : Nvim | Vimwiki Plugin | Syncthing | Markor App
* Müzik Çalar : MPD + Ncmpcpp
* Eposta : Neomutt, mbsync, msmtp, notmuch
* Şifre Yöneticisi: pass
* Web Tarayıcı : Brave, Librewolf, W3m
* Video : mpv ve terminalden Youtube için ytfzf ve yt-dlp
* Sosyal Medya : Newsboat ile Youtube, Reddit vs.. beslemeleri. Evet sadece Rss!
* Sistem Gözlemci: htop
* PDF Okuyucu : Zathura
* Resim Görüntüleme / Basit Düzenleme: Vimiv-Qt with imagemagick commands (aşırı kullanışlı)
* Gelişmiş Resim Düzenleme : Gimp
* Takvim ve Organizasyon - calcurse
* Tek tük almayı istediğim bildirimler için Dunst
* Basit hesap makinesi için bc ve rofi-calc
* Statusbar tercihi Polybar | i3status
* Programları çağırmak için Dmenu, Rofi
* Opaklığı etkinleştirmek için Picom
* Medya tuşlarının mpd ile çalışmasını sağlamak için mpc
* Ağ yönetimi için nmcli
* Ekran renk sıcaklığı yönetimi için Redshift
* Kafein için kafein-ng
* Ncdu - disk kullanım tarayıcısı (ncurses)
* fd, rg, fzf, sed, çeşitli vim eklentileri, xss-lock ve clipit

Lenovo ThinkPad X220'nin 2023 ve sonrasında kullanmak için hala harika bir dizüstü bilgisayar olduğunu düşünüyorum. Evet herkese göre değil ama X220, Linux ve [Cli programlar](https://github.com/agarrharr/awesome-cli-apps) ile uğraşmak, sanki garajda eski bir arabayı modifiye edip günümüzde işler hale getirmenin hissini veriyor. X220, diğer tüm klasik ThinkPad'ler gibi genişletilebilir, sağlam, güvenilir ve bir dizüstü bilgisayardan isteyebileceğim her şeyi sağlıyor. Tabi hepsinden önemlisi [Floss](https://www.gnu.org/philosophy/floss-and-foss.en.html) ile eskiyen donanımın zaman geçtikçe daha verimli kullanılabildiğini gözlemlemek.

Bir x220 kullanıyorsanız ve eklemek istedikleriniz varsa ya da sadece görüş belirtmek istiyorsanız lütfen bana mail atmaktan çekinmeyin. Okuduğunuz için teşekkürler.
