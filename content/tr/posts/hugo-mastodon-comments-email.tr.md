+++
draft = false
date = 2023-03-12T21:49:01+03:00
lastmod = 2023-03-12T21:49:01+03:00
title= "Hugo'ya Mastodon Yorumları ve E-posta ile Yanıtla Ekleme"
slug = "hugo-mastodon-email-comments"
author = ["Alper"]
topics = ["Open Source"]
tags = ["Hugo", "Blog", "Website"]
# series = []
description = "Bugün Hugo siteme e-posta ile cevapla ve mastodon yorumları nasıl eklediğimden bahsedeceğim."
+++

Statik site oluşturucuların en büyük dezavantajlarından biri ne diye sorsanız muhtemelen ilk cevap yorum bölümü ve form eklemek olacaktır. Bu sorunu çözmek için çeşitli üçüncü taraf çözümler var. Örneğin Hugo için Disqus gibi yorumları yönetebileceğiniz bir yapı ekleyebilirsiniz, ancak bunun web sitenize extra js ve kötü bir gizlilik kaydı olan bir aracı dahil etme dezavantajı vardır.

Bu konuda hem sıfır js politikası hem de yorum kısmındaki etkileşimi sadece eposta üzerinden takip etmek istediğim için basit çözümlerin daha ön plana çıkacağı bir ekleme yapmayı düşündüm. Bu yüzden eposta ile yanıtlamaya ek olarak yazının benim dahil olduğum mastodon sunucusunda yazının **toot** linkine giden url'sini yerleştirmenin yeterli olacağı kanısına vardım.

Bence Mastodon ve Fediverse platformundan yararlanmak ve yazı ile ilgili olası bir tartışmayı orada devam ettirmek daha iyi bir çözüm. Mastodon, merkezi olmayan bir sosyal ağdır ve insanların aynı sunucuda olmadan birbirleriyle iletişim kurmasını sağlar.

Bugün Hugo siteme **"e-posta ile cevapla"** ve **"mastodon yorumları"** nasıl eklediğimden bahsedeceğim. Muhtemelen, yazının sonuna doğru kaydırırsanız bir "e-posta ile yanıtla" bölümü ve mastodon üzerinde yorumlayabilmek için "toot" linkini görebileceksiniz.

## Mastodon Yorumları Ekleme

İşleri basitleştirmek için mastodon yorumları bölümünü e-posta ile yanıt bölümünden ayrı tuttum. Mastodon yorumları için yazdığınız yazının ilgili toot kimliğine gidebilmesi için front matter içerisine mastodon sunucu bilgisi, kullanıcı adı ve yazının oluşan toot id'sini eklememiz gerekiyor. Örn:

{{< highlight toml >}}
+++
[comments]
host = "fosstodon.org"
username = "eorus"
id = 109949459501850351
+++
{{< / highlight >}}

Eğer her yazıda bu eklemeyi yapmak istemiyorsanız ve yazılarınızı <code>hugo new /posts/blabla.md</code> şeklinde oluşturuyorsanız default archetypes içerisinde kalıcı olarak ekleyebilirsiniz. Ya da eğer bazı yazılarınızda Mastodon etkileşiminin olmamasını istiyorsanız, yukarıdaki kod parçacığını kaldırabilir ve sadece o yazının sonunda Mastodon Toot linkinin oluşmamasını sağlayabilirsiniz. Ben isteğe bağlı kalması için kalıcı olarak değiştirmedim, yani sadece aktif olduğum ve yazının ilgili olduğunu düşündüğüm <code>fosstodon.org</code> üzerinde paylaşabileceğim yazılara bu eklemeyi yapıyorum. Eğer Mastodon yorumlarını eklemediysem o zaman sadece email ile yanıtla gözükmüş oluyor. Parametreleri açıklamak gerekirse basitçe;

* host: <kullanılan mastodon instance>
* username: <o sunucudaki kullancı adı>
* id: <paylaştığınız toot için oluşan ID>

Doğal olarak, blog yazınızı yazarken henüz bir toot id olmayacaktır. Bu yüzden önce makaleyi yayınlamak ve ardından bunun hakkında mastodon'da bir toot atmanız gerekiyor. Ardından front matter içerisindeki yorum bölümüne gelip oluşan toot id'yi diğer bilgilerle ekleyip yazıyı yeniden yayınlamak gerekiyor. Bu da zaten yukarıda bahsettiğim gibi Mastodon'da paylaşılmış ve ID'si oluşmuş bir Toot haline dönüşmüşse yazının sonunda gösterilmesi için front matter'a eklenebilir demek oluyor.

Açıkçası benim site içerisinde gömülü olarak Mastodon yorumlarını göster/yükle gibi bir derdim olmadığından, yazıyı okuyan kişilerin basitçe Mastodon sunucusunda ilgili toot üzerinden yorum yapabileceklerini söyleyebilmem yeterli. Bunun için temanın şablonlarında <code>layouts/partials/comments.html</code> dosyasını aşağıdaki kod parçacığı ile oluşturuyoruz.

{{< highlight html >}}
{{ with .Params.comments }}
<div class="article-content">
<h3>{{ i18n "Comments" . }}</h3>
<p>{{ i18n "comment_message" . | safeHTML }}</p>
</div>
{{ end }}
{{< / highlight >}}

Burada dikkat ettiyseniz baştaki <code>with .Params.comments</code> ile sadece front matter içerisinde TOML parametresi olarak <code>#comments</code> detaylarını gördüğünde bilgileri getiriyor. Yazılarımı hem Türkçe hem de İngilizce yazdığım için i18n/tr için <code>comment_message</code> içeriğini aşağıdaki gibi okuyor.

{{< highlight toml >}}
[comment_message]
  other = 'Mastodon veya Fediverse hesabınızı kullanarak bu <strong><a class="link" href="https://{{ .host }}/@{{ .username }}/{{ .id }}">toot!</a></strong> için <strong>cevap</strong> bırakabilirsiniz.'
{{< / highlight >}}

Son olarak temanın default şablonlarında (ya da **posts** için hangisini kullanıyorsanız) <code>layouts/_default/single.html</code> içine partials/comments.html getirecek şekilde eklemeyi yapıyoruz.

{{< highlight go >}}
 {{ partial "comments.html" . }}
{{< / highlight >}}

## Email ile Yanıtlama

Email ile yanıtla için ise yine single.html içerisinde Mastodon yorumlarının hemen altına şu eklemeyi yapmak yeterli olacaktır.

{{< highlight html >}}

<strong><a href="mailto:mail@example.com?cc=mail@example.com&subject={{ .Title }}">Email ✉️ ile yanıtlayın</a></strong>

{{< / highlight >}}

Hepsi bu kadar! Daha kapsamlı olması isteniyorsa [buraya](https://amnesiak.org/post/2021/01/30/hugo-blog-with-mastodon-comments-extended/#wrapping-things-up) bakılabilir.
