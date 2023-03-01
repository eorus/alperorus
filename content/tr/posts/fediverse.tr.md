+++
draft = false
date = 2023-02-15T13:26:56+03:00
lastmod = 2023-02-15T13:26:56+03:00
title= "Fediverse ve Merkeziyetsiz Sosyal Medya Projelerine Bir Bakış"
slug = "fediverse"
author = ["Alper"]
tags = ["Fediverse", "Decentralization", "Web 3.0"]
topics = ["Open Source", "Thoughts"]
# series = []
description = "Fediverse dendiğinde tam olarak ne düşünmemiz gerekiyor? İnternet'in evrildiği noktada bugün tam olarak nasıl çalışmaktadır?"

[comments]
host = "fosstodon.org"
username = "eorus"
id = 109869413697208038


+++

**Fediverse**, sosyal medya, web yayıncılığı, dosya barındırma ve diğer modern web etkinlikleri için kullanılan, ancak bağımsız olarak barındırılırken birbirleriyle iletişim kurabilen birleştirilmiş sunucular topluluğudur. Bu sayede farklı sunucularda, kullanıcılar sözde kimlikler oluşturabilmektedir. İsim olarak "*federasyon*" ve "*evren*" sözcüklerinden türetilmiştir.

Peki Fediverse dendiğinde ne düşünmemiz gerekiyor? İnternet'in evrildiği noktada bugün tam olarak nasıl çalışmaktadır? Klasik Web 1.0, 2.0 ve 3.0 döngüsünde nerede konumlandırabiliriz. Ya da merkeziyetsiz internetin kendisi diyebilir miyiz?

## Fediverse Nedir?

Giriş kısmında Fediverse ile ilgili kendi tanımımı yapmaya çalıştım ama yine de [Wikipedia](https://en.wikipedia.org/wiki/Fediverse) üzerinden küçük bir alıntı ile bu tanımı genişletmiş olalım.

> Fediverse ("federasyon" ve "evren" kelimelerinin birleşimi), web yayınlama (yani sosyal ağ, mikroblog, blog oluşturma veya web siteleri) ve dosya barındırma için kullanılan, ancak bağımsız olarak barındırılır, birbirleriyle iletişim kurabilir. Farklı sunucularda, kullanıcılar sözde kimlikler oluşturabilir. Sunucularda çalışan yazılım, açık bir standardı izleyen bir veya daha fazla iletişim protokolünü desteklediğinden, bu kimlikler örneklerin sınırları üzerinden iletişim kurabilir. Fediverse'de bir kimlik olarak, kullanıcılar metin ve diğer medyaları yayınlayabilir veya diğer kimliklerin gönderilerini takip edebilir. Bazı durumlarda, kullanıcılar verileri (video, ses, metin ve diğer dosyalar) herkese açık olarak veya seçilen bir kimlik grubuna gösterebilir veya paylaşabilir ve diğer kimliklerin diğer kullanıcıların verilerini (takvim veya adres defteri gibi) düzenlemesine izin verebilir.

## Web 2.0, Sosyal Medya, Üretenin Ürünleşmesi

Oysa her şey ne kadar da güzel başlamıştı. [Netscape](https://en.wikipedia.org/wiki/Netscape) ve [Geocities](https://en.wikipedia.org/wiki/Yahoo!_GeoCities) dönemleri, Web 1.0 ve bilgi çağının ilk adımları. Henüz insanların içeriğe katkıda bulunmaya başlamadığı, sadece kullanıcı olduğu ve epostaların ilk alındığı dönem.

Kimileri için bu dönem karanlık çağ olarak adlandırılsa da, www'yi daha iyi bir yer haline getirmek için insanların tek derdi muhtemelen sadece IE6 ve yarattığı sorunlardı :) Sonrasında Web 2.0 olarak adlandırılan dönem 2005'li yıllarda başladı. O zamana kadar internette tüketici olan kullanıcıların artık bunun ötesine geçip katılımcı ve üretici olmaları Web 2.0 ile gerçekleşmeye başlamıştı. Bazı Web 2.0 örnekleri arasında, Wikipedia, Youtube, Flickr, Facebook, Twitter ve arkadaşlık siteleri gibi kullanıcıların etkileşime geçtiği platformları sayabiliriz.

Web 2.0 dönemi CSS ve XHTML ile mikroformatların kullanımı, XML ve RSS teknolojisi yanısıra blogları, vlogları ve sosyal medyayı hayata geçirmiş oldu. Yukarıdaki **fediverse** tanımına baktığımızda o dönem için buna en yakın projenin Wordpress olduğunu söyleyebiliriz. Bugün için tahtını yavaş yavaş farklı Jamstack platformlarına bırakıyor gibi gözükse de [Wordpress](https://wordpress.org/), ücretsiz bir blog oluşturma aracı veya bir web sitesi oluşturmak için kullanışlı bir CMS olarak web'in bu kadar etkin hale gelmesinin çok önemli bir parçasıdır. Aslında Fediverse tarafındaki uygulama ve projelerin neler yapabileceğinin de güzel bir örneğidir.

Web 2.0 ile beraber çok uzun süredir insanlar internette kullanıcı olmaktan öte bilgi girişi yapıyorlar, içerik üretiyorlar, paylaşımda bulunuyorlar. Bu sosyalleşme süreci boyunca insanların görüşleri, ifadeleri ve eleştirileri sayesinde büyüyen sosyal medya platformları devasa gelirlere ulaşmışlardır. Ancak yakın bir geçmişe kadar işler yolunda gibi gözükse de, **sosyal medya**, kullanıcı içeriklerinin ürünleştirilmesinin ötesinde **kullanıcıların bir ürün haline dönüşmesini** sağlamıştır. Bugün yaygın olarak kullanılan sosyal medya platformlarının hemen hepsi merkezi bir yapıda hizmet vermektedir. İnsanlar, bir avuç şirketin internet üzerinde elde ettiği gücün giderek daha fazla farkına varırken, merkezi olmayan alternatif platform arayışına yönelmeye başladılar. Fediverse tam bu noktada kişisel haklar, merkeziyetsizlik kavramlarıyla daha fazla ön plana çıkıyor. Henüz farkında olmasalar bile çoğu kişinin Fediverse ile etkileşime girme ihtimali her geçen gün artmaktadır.

## İnternetin Kendisi Merkezi Değildir

Evet biz yola böyle çıkmamıştık. Daha doğrusu internet için bilgisayar sistemlerini birbirine bağlayan elektronik iletişim ağı demiştik. Yani bilgisayarlar, web siteleri gibi verileri depolar ve diğer bilgisayarlar ya da telefonlar bu verilere erişim talep eder. Bu da basitçe makinelerin birbirini anlamasını sağlayan çeşitli açık protokoller ve standartlar aracılığıyla gerçekleşmektedir. Bu standartlar açık ve birlikte çalışabilir olduğundan, herhangi bir PC'den bir sunucuya bağlanabilir ve herhangi bir web tarayıcısından bir web sayfasını görüntüleyebilirsiniz.

Yukarıda Wordpress ve internete sağladığı katkılardan bahsettim. Merkezileşme için yine blog açmak üzerinden gidersek Web 2.0 için son dönemde *Medium* örneğini verebiliriz. Diyelim ki kendi kişisel fikirlerinizi yazmak ya da popüler konularda yazılar yazıp para kazanmak istiyorsunuz. Bunun için kendi web sayfanızı sunucu ve tasarım ile geliştirmek yerine **Medium** üzerinde bir hesap açtınız. İşlerin kolaylığı açısından bunun daha kolay bir süreç olduğunu söyleyebiliriz ama konuya merkezileşme açısından bakarsak, Medium hizmet şartlarına uyduğunuz sürece platformdaki içeriği dilediğiniz gibi kullanabilir ve içerikten para kazanabilirsiniz. Ama asla okumadığınız o hizmet şartları maalesef zamanla değişikliğe uğrayıp kısıtlayıcı hale gelmektedir.

Daha acımasız bir örnek Web 2.0 döneminde ortaya çıkmış internet fenomenleri için verilebilir. Düşünsenize bir fenomensiniz ve tüm içeriğiniz bir sosyal medya platformunda oluşturduğunuz hedef kitle ve orada yarattığınız sinerji üzerine kurulu. Ama sosyal medya hesabınız kilitlenirse işler bir anda tersine dönebilir. Hesabınızı kurtarmak veya o platformdaki varlığınızı sürdürmek için merkezi yapıdaki platformla iyi niyetli diyaloglar geliştirmek zorunda kalabilirsiniz.

Elon Musk'ın satın almasıyla Twitter'ın ne hale geldiğini izliyoruz. Bu örnekleri daha da geliştirebiliriz. Bugün gelinen durum internetin kurumsal varlıkların elinde nasıl merkezileştiğini basitçe göstermektedir. Peki Web 2.0 ile edinilen kazanımlar nasıl evrilecek. Daha doğrusu edindiğimiz içerik oluşturma tecrübesi daha merkeziyetsiz bir yapıda, bu şirketlerin sınırlamalarından kurtulabilecek mi? Bu noktada yeni bir pencere açıp Fediverse'e hoşgeldiniz diyebiliriz :)

## Merkeziyetsiz Web 3.0 mı yoksa Özgürleşen Web 2.0 mı?

Fediverse'in açık ve birlikte çalışabilir doğası içerisinde, merkeziyetsiz yapıda çalışabilen çeşitli projeler mevcuttur. Fediverse kavramı veya kelimesini duymamış olsanız bile, Twitter’a alternatif olarak çıkan Web 3.0 tabanlı [Mastodon](https://joinmastodon.org/), Fediverse felsefesine göre inşa edilmiş olan bir uygulamadır. Örneğin, Mastodon'da bir videoya yorum yapabilir ve bunun [PeerTube](https://joinpeertube.org/)'da (Youtube alternatifi) aynı videoya yorum olarak görünmesini sağlayabilirsiniz. Yani bir Fediverse projesini diğerine kolayca entegre edebilirsiniz. Ya da kişisel Mastodon sunucunuzdan birini yasaklayabilirsiniz, ancak birinin Mastodon'u kullanmasını engelleyemezsiniz.

Diyelim ki Mastodon kullanmaya başladınız. Üye olduğunuz sunucunun kuralları ve mevcut yapısından memnun değilsiniz. Hesabınızı tercih edeceğiniz başka bir sunucuya transfer edebilirsiniz. Ya da birisi sizi engelledi. Bu durumda arzu ederseniz kendi bulut sunucunuzu kurabilir veya farklı bir sunucuya katılarak hizmeti başka bir yerde kullanmaya devam edebilirsiniz. Bu özgürlüğe de her zaman sahip olursunuz.

Fediverse projeleri ücretsiz ve açık kaynaklıdır. Projeler [activitypub](https://activitypub.rocks/) protokolünü kullanarak haberleşir. Sosyalleşmek için Mastodon (Twitter alternatifi) ve [PixelFed](https://pixelfed.org/) (Instagram'a alternatifi) kullandığınızı varsayalım, verilerinizin sahibi siz olursunuz. Hatta projeleri siz barındırıyorsanız bu size daha fazla yönetim imkanı sağlar. Sadece gelinen bu nokta bile merkeziyetsiz kavramını ve Fediverse felsefesini güzel ifade etmektedir.

## Bugün Kullanabileceğiniz Fediverse Projeleri

Fediverse henüz çok yaygınlaşmış değil, ancak üye olabileceğiniz veya kendi başınıza host edebileceğiniz çeşitli projeler bulunmakadır.

* [Mastodon](https://joinmastodon.org/) (Twitter)
* [PeerTube](https://joinpeertube.org/) (YouTube)
* [PixelFed](https://pixelfed.org/) (Instagram)
* [Matrix](https://matrix.org/) (Slack, Discord)
* [Nextcloud](https://nextcloud.com/) (Dropbox, Google Docs vs.)
* [Diaspora](https://diasporafoundation.org/) (Facebook)
* [Write Freely](https://writefreely.org/) (Medium)
* [Wordpress](https://wordpress.org/)

Bu saydıklarım bilinen popüler platformların Fediverse ağındaki karşılıkları ama liste daha geniş. [the-federation.info](https://the-federation.info) veya [fediverse.party](https://fediverse.party) adresinde diğer projelerin bir listesini bulabilirsiniz.

## Değerlendirme

Aslında gördüğünüz üzere *Fediverse*, daha çok mikroblog olmak üzere birçok konuda içerik alışverişinde bulunan Web 2.0 sitelerinin federasyonu gibi duruyor. İşin güzel tarafı kurallarını, yapısını beğendiğiniz herhangi bir hizmet sağlayıcıdan bağlanabilir ve tüm dünya ile bir kısıtlama olmadan iletişime geçebilirsiniz.

Tam bu noktada Fediverse kavramı, sunduğu ölçeklenebilir merkeziyetsiz yapı ve sosyal medyayı kurumsal yapıdan kurtardığı için **Web 2.5** gibi de adlandırılabilir. Zira internet kullanıcılarının bilinçlenmesi, blokzincire dayalı yönetişim modelleri ve tabii ki [ChatGPT](https://openai.com/blog/chatgpt/) ile sınırlarını zorladığımız Semantik web, kanımca bizleri gerçek Web 3.0'a taşıyacak en önemli bileşenler olacaktır.
