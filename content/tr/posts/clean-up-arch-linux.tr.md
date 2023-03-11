+++
draft = false
date = 2023-02-08T17:20:56+03:00
lastmod = 2023-02-08T17:20:56+03:00
title= "Arch Linux Temizliği Nasıl Yapılır? "
slug = "clean-up-arch-linux"
author = ["Alper"]
topics = ["Open Source"]
tags = ["Linux", "Arch Linux", "Pacman"]
# series = []
description = "Bu yazıda Arch Linux sistemini nasıl temizleyeceğiniz hakkında bilgiler vereceğim."

[comments]
host = "fosstodon.org"
username = "eorus"
id = 110003728482954741

+++

İlgilendiğiniz şeylere düzenli olarak bakım uygulamanız onların daha sağlıklı ve sürdürülebilir olmasını sağlar. Bu yazıda [Arch Linux](https://archlinux.org) sistemini nasıl temizleyeceğiniz hakkında bilgiler vereceğim.

**Arch Linux**, kurulumdan hemen sonra çok az disk alanı kaplamasına rağmen, zaman geçtikçe oldukça fazla büyür. Bu nedenle, bilgisayarınızda hiç boş alanınız kalmadıysa veya yalnızca Arch Linux sisteminizi temiz tutmak istiyorsanız, pacman deposundaki cache alanını temizlemek bunların başında gelmektedir.

## Arch Linux Önbellek Temizliği

Arch Linux'un paket yöneticisi olan Pacman, sisteme kurduğunuz tüm paketleri <code>/var/cache/pacman/pkg/</code> dizininde saklar ve eski veya kaldırılmış sürümleri otomatik olarak kaldırmaz. Arch'ın bunu otomatik olarak yapmaması iyi bir şeydir, zira bu durum, Arch Linux arşivi yoluyla önceki sürümü almaya gerek kalmadan bir paketin alt sürüme geçirilmesine izin verir. Örneğin, aşağıdaki komutu kullanarak bu dizinden bir paketi kolayca kurabilirsiniz.

<pre><code>sudo pacman -U /var/cache/pacman/pkg/packagename</code></pre>

Ya da bir programı kaldırdığınızı varsayalım, yeni bir yükleme için karşıdan indirmenize gerek kalmadan kolayca yeniden yükleyebilirsiniz. Yavaş bir internet bağlantınız varsa, bu yararlı olabilir. Ancak, bu durum <code>/var/cache/pacman/pkg/</code> klasörünün zamanla büyümesini sağlar. Bu demek oluyor ki zaman zaman temizlik yapmanız gerekir. Manuel ve otomatik iki yöntemi de uygulayabilirsiniz.

### Önbellek için Manuel Temizlik

Önbelleği manuel olarak temizleyebilirsiniz. Arch Linux rolling system olduğundan paketler devamlı güncellenmektedir. Yani eğer sistemdeki bir uygulama Arch sisteminiz için rüştünü ispatlamışsa önceki iki veya üç sürümün artık bir anlamı kalmamıştır. Özellikle depolama alanında yer açmak istiyorsanız seçeneklerden biri, şu anda kurulu olmayan önbelleğe alınmış paketleri kaldırmaktır:

<pre><code>
$ sudo pacman -Sc

Packages to keep:
  All locally installed packages

Cache directory: /var/cache/pacman/pkg/
:: Do you want to remove all other packages from cache? [Y/n]
removing old packages from cache...

Database directory: /var/lib/pacman/
:: Do you want to remove unused repositories? [Y/n]
removing unused sync repositories...
</code></pre>

Diğer seçenek, yüklü olanlar da dahil olmak üzere tüm paketi önbellekten kaldırmaktır:

<pre><code>
$ sudo pacman -Scc

Cache directory: /var/cache/pacman/pkg/
:: Do you want to remove ALL files from cache? [y/N] y
removing all files from cache...

Database directory: /var/lib/pacman/
:: Do you want to remove unused repositories? [Y/n] n
</code>
</pre>

Eğer bu paketlerden bazılarına kaldırdıktan sonra ihtiyacınız olursa, [Arch Paket Arşivi](https://archive.archlinux.org/)'ne gidip manuel olarak indirebilirsiniz.

### Önbellek için Otomatik Temizlik

Düzenli olarak <code>/var/cache/pacman/pkg/</code> dizinini temizlemenin bir başka yolu da, en son 3 sürüm hariç, kurulu ve kaldırılmış paketlerin önbelleğe alınmış tüm sürümlerini otomatik olarak silen bir komut dosyası kullanmaktan geçiyor. <code>paccache</code> isimli bu komut dosyasına <code>pacman-contrib</code> paketini kurarak ulaşabilirsiniz.

<pre><code>sudo pacman -S pacman-contrib</code></pre>

Diyelim bu komut dosyasını kullanarak ayda bir otomatik temizlik yapmak istiyorsunuz. Bunun için [systemd zamanlayıcıyı](https://wiki.archlinux.org/index.php/Systemd/Timers#Timer_units) kullanabilirsiniz. Bunun için otomatik olarak tetiklencek şekilde /etc/systemd/system/ içinde yani sistem genelinde bir paccache.timer dosyası oluşturmanız gerekecek.

Bir editor ile paccache.timer dosyasını oluşturmak için açarsınız:

<pre>sudo nano /etc/systemd/system/paccache.timer</pre>

Ardından, bu betiği aylık olarak çalıştırmak için aşağıdaki gibi bir içeriği yapıştırarak kullanabilirsiniz:

<pre><code>[Unit]
Description=Clean old Arch pacman pkgs

[Timer]
OnCalendar=monthly
Persistent=true

[Install]
WantedBy=multi-user.target</code></pre>

Bundan sonra oluşturduğunuz systemd servisini her sistem açılışında başlaması için etkinleştirin ve başlatın:

<pre><code>sudo systemctl paccache.timer'ı enable
sudo systemctl paccache.timer'ı start</code></pre>

## Kullanılmayan Artık Paketlerin Kaldırılması

Aslında kullandığım Arch sistemlerinde devamlı elimin altında olan komut genelde bu oluyor. Arch Linux'ta paketleri kurup kaldırdığınızda, kullanılmayan bazı yetim paketler sisteminizde kalabilir. Onları bulmak için şu komutu çalıştırabilirsiniz:

<pre><code>$ sudo pacman -Qtdq
gn
gperf
jre-openjdk-headless
libvisual
lld
ninja
sdx
ucl
upx</code>
</pre>

Gördüğünüz gibi yukarıdaki komutu çalıştırdığınızda hangi paketlerin yetim yani sistemde artık yüklü bir paketle ilişkisi kalmadığını öğrenebiliyorsunuz. Bunları kaldırmak için şu komutu ekleyerek devam edebilirsiniz:

<pre><code>sudo pacman -Rns $(pacman -Qtdq)</code></pre>

## Home Dizininde Oluşan Önbelleği Temizleyin

Son olarak home dizininde yapılabilecek temizliğe göz atalım. Özellikle Arch Linux sisteminizde <code>aur</code> üzerinden derleyerek paketler yüklüyorsanız bunlar genelde <code>/home/user/.cache</code> klasörünüzde saklanmaktadır. Hatta <code>yay</code> kullanıyorsanız her programın PKGCONFIG dosyalarıyla düzenli olarak oluşturulmuş yükleme paketleri burada yer almaktadır.

Sistemimizi kullandıkça önbellek dolacak ve çok yer kaplayacaktır. Önbellek klasörü ".cache" boyutunu kontrol etmeyi şu komutla yapabilirsiniz:

<pre><code>
$ sudo du -sh ~/.cache/
22G     /home/eorus/.cache/
</code>
</pre>

Benim gibi uzun zamandır temizlemiyorsanız aşağıdaki gibi bir komutla tüm dosyaları kaldırabilirsiniz.

<pre><code>rm -rf ~/.cache/*</code></pre>

Hepsi bu kadar!
