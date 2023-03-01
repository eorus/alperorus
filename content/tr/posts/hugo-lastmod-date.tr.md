+++
draft = false
date = 2023-03-01T20:04:07+03:00
lastmod = 2023-03-01T20:04:07+03:00
title= "Hugo ile Makalelere Son Değiştirilmiş Tarih Nasıl Eklenir?"
slug = "hugo-lastmod-date"
author = ["Alper"]
topics = ["Open Source"]
tags = ["Hugo", "Website", "Jamstack", "Blog"]
# series = []
description = "Hugo gönderilerine, makalelere son değiştirilmiş, son güncellenmiş veya son düzenlenmiş tarih nasıl eklenir ?"
+++

Sitemin altyapısı Hugo ve ara ara hem kendimi geliştirmek hem de tema yapısını Hugo'nun sağladığı basit ama güçlü değişkenlerle güncellemek hoşuma gidiyor.

Hugo ile yayınladığım makaleler için *"Yayınlanma Tarihi"* ve *"Son Değiştirilmiş Tarih"* bilgilerini getirebiliyorum. Bunun için tarih bilgileri <code>date</code> ve son güncel tarih <code>lastmod</code> parametrelerinden geliyor. Her ikisi de [front-matter](https://gohugo.io/content-management/front-matter/) içerisinden tanımlanabiliyor.

Front-matter tarihlerinizi manuel olarak girebilir ve archetype ile bunu varsayılan hale kolaylıkla getirebiliyorsunuz. Basitçe front-matter içerisine şöyle bir ekleme yapılabilir:

<pre><code>
date: "2023-02-28"
lastmod: "2023-03-01"
</code></pre>

Ardından, layout şablonunuzda, örneğin <code>single.html</code> bu veriye erişmek için :

<pre><code>
{{ $date := .Date.Format "02.01.2006" }}
{{ $lastmod := .Lastmod.Format "02.01.2006" }}

Yayınlandı: {{ $date }}
Düzenlendi: {{ $lastmod }}
</code></pre>

Hugo'nun önceden tanımlanmış bir frontmatter değişkeni olan **LastMod** önemli detaylar sunuyor. Ama Hugo'nun lastmod için sunduğu daha da iyi bir özellik var. Hugo’nun GIT entegrasyonu, LastMod değerini dosyanın [GIT geçmişinden](https://gohugo.io/variables/git/#lastmod) elde edebiliyor. Önce <code>config.toml</code> dosyasında git bilgisini etkinleştirin.

<pre><code>
enableGitInfo: true
</code></pre>

Yukarıdaki etkinleştirmeyi yaptığınız anda Hugo, front-matter içerisinde girilmiş tüm son değişiklik tarihlerini **(lastmod)** geçersiz kılar. Yani varsayılan olarak ":git", lastmod'dan önce gelir.

Bunu istediğiniz şekilde değiştirmek ve üzerine yazmak için aşağıdaki satırları config dosyasına eklememiz gerekiyor.

<pre><code>
[frontmatter]
date = ["date", "publishDate", "lastmod"]
lastmod = ["lastmod", ":git", "date", "publishDate"]
</code></pre>

Böylelikle Hugo, eğer front-matter içerisinde <code>lastmod</code> parametresi görüyorsa onu kullanacak ama eğer lastmod ile ilgili bir değer görmüyorsa güncel tarih olarak son git commit'i dikkate alacak.
