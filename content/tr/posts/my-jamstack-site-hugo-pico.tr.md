---
draft: false
date: 2023-02-07T18:03:22+03:00
title: "Jamstack Sitemi Hugo, Cloudflare Pages ve Git ile Nasıl Oluşturdum?"
slug: my-jamstack-site-hugo-pico
author: Alper Orus

topics:
  - Open Source

tags:
  - Hugo
  - Pico
  - Jamstack
  - Kiss

# series:
  -

description: Bu yazıda, sitede bahsedeceğim konulardan ziyade Hugo, Cloudflare Pages ve Git ile bu siteyi nasıl oluşturduğum ve zamanla eklemek istediğim yeni işlevler için bir giriş yapacağım.

#Image: "/images/hugo-static-site-generator.jpg"
---

Uzun zamandır, biriktirdiğim notlarımı aktarmak ve tecrübelerimi paylaşmak için bir site oluşturmak istiyordum. Yıllardır ertelediğim bu işi, hem gelişmekte olan [Jamstack](https://jamstack.org) trendine uyum sağlamak, hem de bu vesileyle *semantic html* yapısına uyan, tamamen kendi üretimim bir tema yaratarak yapmak önemli iki noktaydı.

Böylelikle 2023 yılının başlarında altyapısı [Hugo](https://gohugo.io/) olan, tasarımı [Pico CSS](https://picocss.com/) üzerine inşa edilmiş ve dağıtımı bir [Github](https://github.com/) reposu üzerinden [Cloudflare Pages](https://pages.cloudflare.com) ile çalışan bu siteyi kurmuş oldum. Bu yazıda, sitede bahsedeceğim konulardan ziyade Hugo, Cloudflare Pages ve Git ile bu siteyi nasıl oluşturduğum ve zamanla eklemek istediğim yeni işlevler için bir giriş yapacağım.

Öncelikle kendi notlarım için oluşturduğum bu sitenin, oldukça hızlı ve okunabilirliğin ön planda olduğu bir tasarıma sahip olması birinci tercih sebebimdi. Maksimum performans için statik bir Jamstack sitesi istediğimi biliyordum. Ayrıca performansı hızlı ve kolay yayınlama için oluşturucunun statik olması gerekiyordu. Böylelikle **üretim, tasarım ve dağıtım** aşamasında kullandığım yapılar şu şekilde oluştu.

## Statik Site Geliştirici

Hugo'yu zaten son üç dört yıldır farklı amaçlar için kullanmıştım. Sağladığı rahat geliştirme ortamı ve tabii ki muazzam inşa hızından dolayı tercih ettim. Hugo bana basit bir şekilde çift dil desteğiyle yazılarımı oluşturmamı sağlıyor. Ayrıca basit bir <code>i18n</code> dosyası ile bu iki dil için tema bileşenlerini kontrol edebiliyorum. Her ne kadar önüme çıkan projelere göre ihtiyaçları göz önünde bulundurup, tercihlerimi ona göre yapsam da, muhtemelen farklı bir durum olmadıkça yeni işlerim için öncelikli tercihimi Hugo'dan yana kullanacağım.

## Tasarım

Tasarım açısından kullanacağım framework, tam özelleştirme için her şeyi sıfırdan yapabilmeme izin veren, esnek bir yapıda olmalıydı. Bunun için tüm yerel HTML öğeleri için zarif stiller içeren, semantic yapıda ve class kullanmayan, karanlık mod otomatik olarak etkinleştirilmiş **Pico CSS** kullanmaya karar verdim. [Tailwind CSS](https://tailwindcss.com) ve hatta biraz [Bootstrap](https://getbootstrap.com) gibi html kodlarında class bulunmadığından, ya da olanları zaten kendim atadığımdan ileride temasal değişiklik yapmaya oldukça müsait yapı oldu. Ama [Pico CSS](https://picocss.com/) o kadar güzel bir sadelik sunuyor ki, herhangi bir harici veya standart dışı yazı tipi kullanmadan Segoe UI'yi varsayılan kabul edip kullanmamı sağladı.

## Dağıtım

Açıkçası işin en kolay kısmı dağıtım oldu. Jamstack platformlarında o kadar güzel alternatifler var ki; [Netlify](https://www.netlify.com), [Vercel](https://www.vercel.com) ve Cloudflare Pages öne çıkanlardan bazıları. Netlify üzerinde çalışan birkaç sitem olmasına rağmen burada performans açısından Cloudflare Pages kullandım. Açıkçası bu tarz bir site için yeterli olduğunu düşünüyorum.

## Akış

Sitenin bütün kodları ve tema Github üzerinde bir depoda yaşıyor *[bkz](https://github.com/eorus/alperorus)*. Markdown ile yazımı yazdıktan sonra düzenlemem bitip, kontrollerimi tamamlayınca <code>git push</code> ile depoya gönderiyorum. Cloudflare Pages değişikliği algıladığı andan itibaren siteyi oluşturmaya başlıyor ve yaklaşık 30 saniyede <code>alperorus.pages.dev</code> adresinde canlı bir şekilde sunmaya başlıyor. Eş zamanlı olarak <code>alperor.us</code> etki alanında oluşan pages ortamına işaret eden bir CNAME kaydım var. Özetle <code>git push</code> komutundan yaklaşık bir dakika içerisinde site alan adı üzerinden canlı ortama geçmiş oluyor.

Tüm bunlar ssl kurulumu yapılmış, cache özelliği ile css, js minify desteği ve sınırlı analytics hizmetiyle **ücretsiz**. Hugo zaten site haritamı ve RSS beslemelerimi otomatik olarak oluşturup sunmuş oluyor.

## Performans

Tasarım kısmındaki amacımı genel olarak sadelik ve okunabilirlik felsefesiyle oluşturduğumu belirtmiştim. Performans için özellikle font ikonları kaldırdım ve svg ikonlarla yoluma devam ettim. Büyük ihtimalle güzel bir set bulup, bütünlüğü sağlamak için uygun bir zamanda genel bir ikon değişikliğine gideceğim. Başlangıç yazıları sonrasında sitenin lighthouse performans skoru %100 oldu. Aynı zamanda SEO tarafında yine %100 görebildim.

![Lighthouse Skor](/images/posts/lighthouse.png)

### 512K Klübü

Performans sorgulamasını yaparken araştırmalarım sırasında 512K Klübü'ne denk geldim. [512KB Club](https://512kb.club/), İnternet'teki performans odaklı web sayfalarından oluşan bir koleksiyon. Web sitenizin kalifiye olması için **Toplam SIKIŞTIRILMAMIŞ** web kaynaklarınızın 512 KB'yi geçmemesi gerekiyor. Amaç günümüzdeki şişmiş internete dikkat çekmek. Bunun için bir fark yaratmak isteyen platform, her web yöneticisinin biraz optimizasyonla buna katkıda bulunabileceğine inanıyor. Basit sorgulamalar arasında şunlar yer alıyor:

* Ekstra JavaScript parçasına gerçekten ihtiyacınız var mı?
* WordPress sitenizde, asla kullanmayacağınız pek çok işlevsellik ekleyen bir tema ne kadar gerekli?
* Büyük boyutlu özel yazı tiplerine gerçekten ihtiyaç var mı?
* Resimleriniz web için optimize edildi mi?

Açıkçası ben de sürdürülebilir internet için bunun gerekli olduğunu düşünüyorum. 512K Klübü bu ölçümü görebilmek için sitenin GTMetrix taramasında *waterfall* sekmesini görmek istiyor. Tasarımın ilk aşamalarında turuncu alanda yani 250K altı bölgeye ulaşabildim. Ancak son düzenlemelerim ve optimizasyonlarım sayesinde tüm site için **sıkıştırılmamış 87KB** gibi bir değere ulaştım. Hatta sıkıştırılmış boyutu 18KB :) oldukça sevindirici. Sitenin alt kısmındaki yeşil bölge rozeti [zor işleri başarmanın değeri](/posts/doing-hard-things) ve öğrettikleri açısından önemli.

![GTMetrix Skor](/images/posts/gtmetrix.png)

### Yapılacaklar Listesi

Yazının sonunda kendime hatırlatma olabilecek notlar düşmek istiyorum. Bu biraz daha bundan sonra siteye neler ekleyebilirim, ya da değiştirebilirim listesi olacak.

* Site geneli SVG ikon seti
* Taxonomy için yeni bir listeleme şablonu
* Alıntılar için Hugo veri cvs döngüsü
* Üst kısım boşlukları düzenle
* Hugo partial dosyları cached ile değiştir

Tema ile ilgili eksik veya yapılabileceklerle ilgili geri dönüşleriniz varsa [iletişim](/iletisim/) sayfasından yapabilirsiniz. Okuduğunuz için teşekkürler.
