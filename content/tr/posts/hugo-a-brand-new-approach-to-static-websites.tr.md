---
title: "Hugo : Statik Web Sitelerine Yepyeni Bir Yaklaşım"
author: Alper Orus
date:  2020-12-05T18:18:06+03:00
draft: false
categories:
  - Linux

tags:
  - Hugo

Image: "/images/hugo-static-site-generator.jpg"

description: Bu kılavuzda, statik site oluşturucusu Hugo'nun sağladığı çeşitli iş akışları için faydaları hakkında bilgiler vermeye çalışacağım.
---

Son zamanlarda **statik siteler** birçok nedenden dolayı popüler olmaya ve gelişmeye devam ediyor. Bunun başlıca sebebini hantallaşmaya başlamış internetin neredeyse ilk zamanlarındaki sadeliği özlemesi olarak yorumlayabiliriz.

Statik siteler sayesinde veritabanı, programlama dili versiyonu, gerekli kütüphaneler gibi konularla uğraşmak ve bunları güncel tutmak zorunda kalmazsınız. Düşünsenize *PHP, MySQL / MSSQL, .NET, Python, Ruby* yok. Aşırı çözümlerden kaçınmak ve bir projeyi veritabanları, çok fazla bağımlılık veya belirli sunucu tarafı yapılandırmaları olmadan basit tutmak,  sayısız olası güvenlik açığına karşı dağıtımı ve sağlam olmayı çok kolaylaştırmaktadır.

Bu kılavuzda, statik site oluşturucusu Hugo'nun sağladığı çeşitli iş akışları için faydaları hakkında bilgiler vermeye çalışacağım.

Web’in ilk zamanlarında, tamamen statik olarak çalışan websiteleri, sonrasında özelleştirmeler ve dinamik ihtiyaçlar doğrultusunda şekillendi. Bugüne gelindiğinde ise statik websitesi oluşturucuları, kullanıcı tarafında sundukları konfigürasyonlar ve yazılan içerikleri, tamamen statik bir **html/css/js** yığınına dönüştürebilmektedirler.

### Hugo Nedir ?

**Hugo**, Go dili ile yazılmış bir statik site oluşturucusudur. Go dili ile yazıldığı için göreceli olarak diğer sistemlere göre hızlı bir çözüm sunmaktadır. HTML ve CSS desteği ile hiç *Go dili* bilmeden sitenizi değiştirerek oluşturabilir veya birçok tema seçeneğinden biriyle sitenizi yayına alabilirsiniz. **Markdown** gibi basit ve düz bir metin biçimi sayesinde, yazılarınızı normal yazıyormuş gibi hızlı bir şekilde oluşturabilirsiniz.

İçerik tabanlı web siteleri oluşturduğumuzda, tüm yapılarda bazı ortak genellemeler olduğunu varsayabiliriz ve Hugo tam da bunun için bir altyapı sunuyor. Özellikle gönderiler yani blog yazıları, kategoriler yani kategori, etiket, seri, incelemeler veya ürünler gibi içerik türlerini alıp verileri düzenleyebiliyoruz. Ardından, şablonlar ve stil sayfaları aracılığıyla her birine farklı bir görünüm verebiliyoruz. Tabi hepsinden önemlisi tüm bunları derlemek milisaniyelerde gerçekleşirken yine saniyeler içinde binlerce sayfa yapabiliyoruz. Ayrıca Hugo, statik web sitesi iş akışına (dağıtım ve geçiş araçları dahil) gerekli araçları sağlayarak, geliştiricilerin ve tasarımcıların yaratıcılıklarını kullanma ve web sitesinin yapımında söz konusu yaratıcılığı uygulama gibi eğlenceli kısımlara odaklanmalarına olanak tanır. Evet yerel geliştirme ortamında canlı önizlemenin ne kadar verimli olduğundan bahsediyorum.

Giriş kısmında bahsettiğim programlama dilleri olmasa bile bu, **Hugo** ile oluşturduğunuz statik site altyapısında Javascript kullanılamayacağı anlamına gelmiyor. İhtiyacınız olursa statik sayfanızda üçüncü taraf hizmetleri kullanmanızı engelleyen hiçbir şey yoktur. jQuery sorunsuz çalışır. Bu nedenle, diğer kitaplıkları veya uygulamaları statik sitelerinize entegre edemeyeceğinizi düşünerek kendinizi sınırlamayın. Yani mevcut JavaScript kitaplıklarından herhangi birini kullanabilirsiniz.

### Hugo Hangi Alanlarda, Nasıl Kullanılabilir ?

Hugo'nun yapamayacağı şey **dinamik içeriktir**, örneğin veri tabanına dayalı formlar, arama veya kullanıcı sistemlerini bunların içerisinde sayabiliriz. Eğer ihtiyacınız bunlardan birisiyse, o zaman kesinlikle aradığınız şey Hugo değil. Örneğin, tam bir e-ticaret çözümü gerektirmeyen birkaç ürün veya hizmete sahip küçük bir mağaza veya işletmeyi ele alalım. Sadece kurumsal sayfalar, ürün bilgileri ve bir "iletişim" sayfası olacak. Hugo ile böyle bir siteyi (tabi şablon konusunda mutabık kalındıysa) bir günde hayata geçirebilirsiniz. Hatta sunucu bile önemli değildir, çünkü sadece temel HTML sayfaları sunacağınız için ücretsiz servisler sayesinde sadece alan adına bağlı dns değişkenleriyle firma ismiyle yayına alınabilmektedir.

Özetle firmalar, ajanslar, restoranlar gibi her türlü işletmeler, kişiler, portfolyolar performanslı, güvenlikli ve ücretsiz bir şekilde yaşayacak statik sayfalar oluşturabilirler ve hatta oluşturmalıdırlar. Bugün bu ihtiyaçlara sahip işletmeler için direkt PHP, MySQL altyapısı, bir sürü eklentiyle ve sürekli güncelleme derdiyle Wordpress kurulmaktadır.

Diyelim blog veya haber bölümü olan kapsamlı bir site ihtiyacınız var. Hugo ile her türlü HTML/CSS varyasyonunu kullanarak hazırladığınız şablonları, uygulayacağınız javascript kodlar ile geliştirebilir, disqus benzeri bir sistem kullanarak yorum bölümü ekleyebilir, zaten artık standart haline gelmiş Google Analytics altyapısını kullanarak ise ziyaretçi takip ve raporlama işlerinizi halledebilirsiniz.

Bununla birlikte, artık ana sayfa, hakkında, portfolyo veya ürün listesi ve iletişim sayfaları ihtiyacından oluşan tüm [projeleri](/tr/projects) Hugo ile gerçekleştiriyorum. Bunun dışında yukarıda bahsettiğim gibi dinamik gereksinimleri için zaten Wordpress var. Ama bu sebeplerden dolayı da sunucu, veritabanı, php yapısı, eklentiler ve güncel olma detaylarına bulaşmanında artık gereksiz olduğunu ve webi hantallaştırdığını düşünüyorum.

### Bir Bakışta Hugo

* Hugo hızlıdır. [Buradan](https://gohugo.io/showcase/) Hugo kullanan siteleri inceleyebilirsiniz.
* Hugo'nun çeşitli temalarını [buradan](https://themes.gohugo.io/) inceleyebilirsiniz.
* Hugo'yu macOS, Windows, Linux, OpenBSD, FreeBSD ve Go derleyici araç zincirinin çalışabileceği herhangi bir makineye yükleyin.
* [Hugo Releases](https://github.com/gohugoio/hugo/releases) üzerinden istediğiniz platform için uygun sürümü indirebilir ve herhangi bir yerden bağımlılık olmadan çalıştırabilirsiniz.
* Sunucusuz çözümler için [alternatif dağıtım](https://gohugo.io/hosting-and-deployment/) imkanları sunar.
* Tek bir konfigürasyon dosyası ile tüm site ayarlarını yapabilirsiniz.
* Mevcut LiveReload desteği ile yapılan değişiklikleri tarayıcı üzerinde otomatik sayfa yenileme ile anında görmeniz mümkündür. Bu basit gibi gözüken detay sass derlemelerinden, en küçük düzenlemeye kadar her şeyi anında görebilmenizi sağlar.
* Hugo'nun sağladığı terminal paketi ile geliştirme ve gerçek oram ayrımlarını yapabilirsiniz. Örneğin LiveReload aracını development aşamasında açık ve production aşamasında kapalı hale getirebilirsiniz.
