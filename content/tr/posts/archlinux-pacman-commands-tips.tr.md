+++
draft = false
date = 2023-03-14T19:25:39+03:00
lastmod = 2023-03-14T19:25:39+03:00
title= "Archlinux Pacman Komutları Rehberi"
slug = "archlinux-pacman-commands"
author = ["Alper"]
topics = ["Open Source"]
tags = ["Linux", "Arch Linux", "Pacman"]
# series = []
description = "Pacman'in çalışma şekline, sunduğu seçeneklere ve Arch Linux'ta paketleri yönetmek için nasıl kullanabileceğimize bir göz atalım."
+++

[Linux](https://tr.wikipedia.org/wiki/Linux) dağıtımlarını bir kişi gibi düşünürsek paket yöneticileri de bu kişilerin karakterlerini, yapılarını belirleyen en önemli unsurlardır. Paket yöneticileri ile masaüstünüzde en son yazılımı yükleyebilir ve keyfini çıkarabilirsiniz. **"Paket"** ve **"Yönetici"** kelimelerinin birleşiminden oluşan **Pacman**, Arch tabanlı sistemlerde kullanılan varsayılan paket yöneticisidir.

Pacman'i öğrenmek diğer Linux dağıtımlarının paketyöneticilerine kıyasla oldukça kolay olsa da, diğer dağıtım ailelerinden kullanıcılar, Pacman'ın kısa, tek karakterli argümanlarına uyum sağlamakta zorlanabiliyorlar. Ben de yıllardır [Arch Wiki](https://wiki.archlinux.org/) ve çeşitli kaynaklardan edindiğim notlarımı toparlamaya karar verdim. Pacman'in çalışma şekline, sunduğu seçeneklere ve [Arch Linux](https://archlinux.org/)'ta paketleri yönetmek için nasıl kullanabileceğimize bir göz atalım.

## Pacman Komutları Kılavuzu

Diğer Linux komutları gibi, Pacman da önceden tanımlanmış bazı bayraklar ve bağımsız değişkenlerle birlikte temel bir komut sözdizimini izler:

{{< highlight bash >}}
sudo pacman -options paket_adı
{{< /highlight >}}

Burada -options (seçenekler), farklı işlevleri çağırmak için kullandığınız bayraklardır ve <code>paket_adı</code>, üzerinde işlem yapmak istediğiniz paket(ler)in adıdır. Pacman'da seçenekler beş ana kategoride toplanır ve komut olarak baş harfleri kullanılarak yapılacak işlemin ana başlığı belirlenir.

{{< highlight bash >}}
-Q : (Query) pacman veritabanını sorgula
-R : (Remove) sistemden paket kaldır
-S : (Sync) paketleri senkronize et
-U : (Upgrade) Sistemdeki paketleri güncelle
-F : (File) sistemde kurulu dosyaların içinde sorgu çalıştır
{{< /highlight >}}

Buradan itibaren her seçenek kategorisinin alt komutlarını açıklamalarıyla aktarıyorum.

### Query (-Q) İşlemleri için Kullanılabilecek Anahtarlar

{{< highlight bash >}}
-i : Kurulu paket ile ilgili bilgileri göster. Örneğin <code>pacman -Qi firefox</code>
-k : Bir pakedin sahip olduğu dosyaları kontrol et. Ayrıntılı kontrol için -kk kullanılabilir.
-l : Bir paketin sisteme kurduğu dosyaları göster
-o : Bir dosyanın sahibi olan paketi ara
-s : Kurulu paketlerin arasında bir paket ismi ara
-e : explicit : sistemin kurduğu değil, kullanıcı tarafından kurulan programları listele.
-q : Quiet. sürüm no gibi ek bilgileri gösterme, sadece paket isimlerini listele.
-n : Sadece ana repolardan kurulan programları listele.
-m : AURdan kurulan programları listele.
-d : dependencies. Başka bir programın alt bağımlığı olarak kurulan programları listele.
-t : unrequired. gereksinim duyulmayan paketleri listele.
-dt: genelde ihtiyaç duyulmayan paketleri listelemek için ikisi beraber kullanılır.
{{< /highlight >}}

"Firefox" kurulu mu değil mi öğrenmek için:

<code>pacman -Qs firefox</code>

### Remove (-R) İşlemleri için Kullanılabilecek Anahtarlar

{{< highlight bash >}}
-s : recursive. bir paketi ve o paketle gelen tüm alt bağımlılıkları kaldırmak için
-u : unneeded. gereksiz paketleri de kaldır
-n : paketle beraber gelen sistem yapılandırma dosyalarını da sil
{{< /highlight >}}

Dolayısıyla "Firefox" ile gelen herşeyi kaldırmak için <code>pacman -Rnu firefox</code> gibi bir komut kullanılabilir.

### Sync (-S) İşlemleri için Kullanılabilecek Anahtarlar

{{< highlight bash >}}
-c : clean, yerel belleği temizle
-i : Kurulu olmayan paket ile ilgili bilgileri göster
-l : list
-q : quiet. Ekstra ayrıntılara (sürüm no, repo adı vs) girmeden sadece isimleri listele.
-s : search. depolarda arama yap.
{{< /highlight >}}

Depolarda chromium aramak için <code>pacman -Ss chromium</code>

{{< highlight bash >}}
-y : refresh. depolardan paket listesini tekrar indir (-Syy : liste yeniyse bile tekrar indir)
-u : upgrade. Tüm kurulu paketleri güncelle (-Suu: depodaki paket kurulu sürümden eskiyse bile güncelle)
-w : indir, ama kurma
{{< /highlight >}}

### File system (-F) İşlemleri için Kullanılabilecek Anahtarlar

{{< highlight bash >}}
-s : search. Diskte kurulu bir dosyayı hangi paket kurmuş
-yy : force update. Henüz yeni güncellenmiş olsa da yine de paket listesini güncelle.
pacman -Fy
pacman -Fs libmozgtk.so
pacman -Fos /usr/lib/firefox/libmozgtk.so
{{< /highlight >}}

Yukarıdaki ilk adımda pacman'in dosya/paket listesini güncellemesini, ikinci adımda libmozgtk.so dosyasının hangi paketlerde bulunabileceğini, üçüncü adımda ise tam yolu verilen dosyanın hangi paketlerde bulunabileceğini sorguluyoruz.

## Pacman Komutlarına Hızlı Bakış

{{< highlight bash >}}
pacman -Syy // yerel paket verisini sunucularla eşleştir (sync)
pacman -Syu // tüm paketleri güncelle
pacman -Ss firefox // depolarda adında firefox geçen paket ara
pacman -Ssq ^firefox$ // tam adı firefox olan paketi ara, ayrıntısız
pacman -S firefox // firefox depolardan kur
pacman -S extra/firefox // belli bir depodan kur
pacman -U /home/user/package // sistemdeki yerel dosyayı kur
pacman -U https://url.adresi/ // bir URL'den dosya kur
pacman -S gnome // gnome paket grubunu kur
pacman -R firefox // bir paket kaldır
pacman -Rs apache // bir paket ve tüm alt bağımlılıklarını kaldır
pacman -Rns $(pacman -Qtdq) // sistemdeki tüm kullanılmayan paketleri temizle/kaldır
pacman -Ru gnome // tüm gnome paket grubunu kaldır
pacman -Q | more // tüm kurulu paketleri listele
pacman -Ql apache // apache tarafından kurulan tüm dosyaları listele
pacman -Ss chromium // depolarda bir paket ara
pacman -Qs firefox // kurulu paketlerin içinde bir paket ara
pacman -Si chromium // kurulu olmayan bir paket hakkında bilgileri göster
pacman -Qi apache // kurulu bir paket ile ilgili bilgileri göster

pactree apache // bir paket ile ilgili bağımlılık ağacını göster
pacman -Qdt // artık gerekli olmayan paketleri listele
pacman -Sc  // cache verileri temizle
pacman -Scc // cache belleğe alınan paketleri sil
pacman -Qo netctl // netctl dosyasını hangi paket kurmuş göster

{{< /highlight >}}
