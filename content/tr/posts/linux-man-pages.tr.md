+++
draft = false
date = 2023-03-03T17:24:23+03:00
lastmod = 2023-03-03T17:24:23+03:00
title= "Linux Man Sayfalarını Kolay Okuma Yolları"
slug = "linux-man-pages"
author = ["Alper"]
topics = ["Open Source"]
tags = ["Linux", "Kiss", "Projects"]
# series = []
description = "Bu yazıda man sayfalarını kolay okumanızı sağlayacak iki farklı projeden bahsedeceğim tldr ve explainshell."
+++

Bir Linux kullanıcısı olarak öğrenebileceğiniz en önemli becerilerden biri, kılavuz sayfasının yani man sayfaları'nın nasıl kullanılacağıdır. Bir başka deyişle kılavuz sayfasında uzmanlaşmak, Linux sistemini kullanırken rahat ve verimli olmanızı sağlayan önemli bir anahtardır. Tabi bunu başarabilen çok azdır ve genelde kılavuz sayfaları yerine internet aramalarına yöneliriz.

Man sayfaları komutlar hakkında birçok bilgi sağlar. Diğer taraftan bu bilgileri edinebilmek için man sayfalarını da doğru ve kolay okumayı öğrenmek gerekir ama çoğu zaman, kılavuzda bulunan tüm bilgileri keşfetmekte başarısız oluruz. Genelde zaman problemi yaşadığımız için hızlı bir şekilde belirli bir komutun nasıl kullanılacağına ve seçeneklerine odaklanırız.

Bu yazıda man sayfalarını kolay okumanızı sağlayacak iki farklı projeden bahsedeceğim; **tldr ve explainshell**. Önce tldr'den başlayalım.

## [TLDR Pages](https://tldr.sh/)

Tldr sayfaları, sevilen man sayfalarını pratik örneklerle basitleştirmeye yönelik bir topluluk girişimi. Yani herhangi bir komutun man sayfasındaki bilgilerine ulaşmak istiyorsunuz, tldr bunu oldukça sadeleşmiş bir haliyle sunuyor ve zaman kaybetmeden sık kullanılan detaylara ulaşmanızı sağlıyor.

Bu arada isim gayet güzel seçilmiş :) TL;DR, "Çok Uzun; Okumadım" anlamına geliyor. Uzun bir metnin (veya bir kısmının) çok uzun olarak atlandığını belirtmek için kullanılan ve interne argosu olarak ortaya çıkmış bir terim.

Peki tldr sayfalarını nasıl kullanabilirsiniz. Ben Arch üzerinde community deposundan <code>pacman -S tldr</code> ile yükleyip terminal üzerinden istediğim komutun detaylarına ulaşabiliyorum. Örneğin grep yerine kullandığım [rg (ripgrep)](https://github.com/BurntSushi/ripgrep) ile neler yapabileceğime kısaca bakmak istiyorum ;

<pre><code>
$ tldr rg

  rg

  Ripgrep is a recursive line-oriented CLI search tool.
  Aims to be a faster alternative to `grep`.
  More information: https://github.com/BurntSushi/ripgrep.

  - Recursively search the current directory for a regular expression:
    rg regular_expression

  - Search for regular expressions recursively in the current directory, including hidden files and files listed in `.gitignore`:
    rg --no-ignore --hidden regular_expression

  - Search for a regular expression only in a subset of directories:
    rg regular_expression set_of_subdirs

  - Search for a regular expression in files matching a glob
(e.g. `README.*`):
    rg regular_expression --glob glob

  - Search for filenames that match a regular expression:
    rg --files | rg regular_expression

  - Only list matched files (useful when piping to other commands):
    rg --files-with-matches regular_expression

  - Show lines that do not match the given regular expression:
    rg --invert-match regular_expression

  - Search a literal string pattern:
    rg --fixed-strings -- string
</code></pre>

Eğer sık kullanmaya başlarsanız Linux kısayolu olarak tldr'ye bir alias atayabilirsiniz. Search anlamında <code>alias s='tldr'</code> ya da help için <code>alias h='tldr'</code> gibi.

Diğer kullanım alanları için isterseniz [canlı demo](https://tldr.inbrowser.app/pages/common/rg) üzerinden komut arayabilir, [PDF](https://tldr.sh/assets/tldr-book.pdf) versiyonunu açıp, indirip arama yapabilir veya benim yaptığım gibi kullandığınız platforma [yükleyip](https://tldr.sh/#installation) kullanabilirsiniz. Eğer katkıda bulunmak isterseniz eksik man sayfaları için [giriş yapabilir](https://github.com/tldr-pages/tldr) ya da kendi diliniz için sayfaların çevirisine katkıda bulunabilirsiniz.

## [Explainshell](https://explainshell.com/)

Explainshell web arayüzü üzerinden kılavuz sayfalarını ayrıştırabilen, seçenekleri çıkarabilen ve her argümanı kılavuz sayfasındaki ilgili yardım metniyle eşleştirerek verilen bir komutun detaylarını açıklayan bir araç.

Man sayfaları veritabanı olarak Ubuntu arşivini kullanan [explainshell](https://github.com/idank/explainshell), an itibariyle bölümlere göre ayrıştırılmış 29761 kılavuz sayfası içeriyor. Özellikle standart olmayan bir düzene sahip kılavuz sayfalarında her programın argümanlarını ayrı ayrı gösterebiliyor olmak tek kelimeyle mükemmel.

![explainshell](/images/posts/explainshell.webp)

<pre><code>
$ rsync -chavzP --stats user@remote.host:/path/to/copy /path/to/local/storage
</code></pre>

Örnek olarak rsync ile uzak bilgisayardan yereldekine yapılan bir eşleştirme için verilen komutun seçenek detaylarını görebiliyorsunuz. explainshell üzerinde görmek için [tıklayın](https://explainshell.com/explain?cmd=rsync+-chavzP+--stats+user%40remote.host%3A%2Fpath%2Fto%2Fcopy+%2Fpath%2Fto%2Flocal%2Fstorage#).

Bu iki kılavuz sayfası yardımcı programıyla **"man sayfası okuyamıyorum"** bahanemiz kalmamalı diye düşünüyorum. En azından benim için öyle oldu :) Umarım sizin için de faydalı olmuştur.
