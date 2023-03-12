+++
draft = false
date = 2023-03-12T21:49:01+03:00
lastmod = 2023-03-12T21:49:01+03:00
title= "Adding Mastodon Comments and Reply with Email to Hugo"
slug = "hugo-mastodon-email-comments"
author = ["Alper"]
topics = ["Open Source"]
tags = ["Hugo", "Blog", "Website"]
# series = []
description = "Today I'm going to talk about how I added reply by email and mastodon comments to my Hugo site."
+++

If you ask what is one of the biggest disadvantages of static site builders, the first answer will probably be to add a comment section and form. There are various third-party solutions to fix this problem. For example, you can add an engine like Disqus for Hugo where you can manage comments, but this has the downside of including a tool with extra js and a bad privacy record on your website.

Since I want to follow both the zero js policy and the interaction in the comment section only via e-mail, I thought of making an addition where simple solutions will come to the fore. So I thought it would suffice to reply by e-mail, as well as placing the url of the article in the tooot link on the mastodon server I am involved in.

I think a better solution is to take advantage of Mastodon and the [Fediverse](/en/posts/fediverse) platform and continue the possible discussion of the article there. Mastodon is a decentralized social network and allows people to communicate with each other without being on the same server.

Today I'm going to talk about how I added **"reply by email"** and **"mastodon comments"** to my Hugo site.

Chances are, if you scroll to the end of the post, you'll see a "reply by email" section and a "toot" link to comment on the mastodon.

## Adding Mastodon Comments

To keep things simple, I've kept the mastodon comments section separate from the email response section. In order for the article you wrote for Mastodon comments to go to the relevant toot id, we need to add the mastodon server information, username and the resulting toot id of the article into the front matter. Example:

{{< highlight toml >}}
+++
[comments]
host = "fosstodon.org"
username = "eorus"
id = 109949459501850351
+++
{{< / highlight >}}

If you do not want to make this addition in every article and you create your articles as <code>hugo new /posts/blabla.md</code>, you can add them permanently in the default archetypes. Or if you want some of your articles to not have Mastodon interaction, you can remove the above code snippet and make sure that Mastodon Toot link is not created only at the end of that article. I haven't changed it permanently to keep it optional, so I just add this to the articles I'm active and can share on <code>fosstodon.org</code> that I think is relevant. If I haven't added the Mastodon comments then it just shows up as an email reply. Naturally, there won't be a toot id yet at the time of writing your blog post. So you need to publish the article first and then toot about it on Mastodon. Then, it is necessary to add the toot id that appears in the comment section in the front-matter, along with other information, and republish the article. In other words, if it has already been shared on Mastodon and has the ID, it can be added to the front matter to be viewed at the end of the article.

Frankly, since I do not have a problem with displaying/loading Mastodon comments embedded in the site, I can say that it is sufficient for people who read the article to comment on the related toot on the Mastodon instance. For this, we create the <code>layouts/partials/comments.html</code> file in the templates of the theme with the following code snippet.

{{< highlight html >}}
{{ with .Params.comments }}
<div class="article-content">
<h3>{{ i18n "Comments" . }}</h3>
<p>{{ i18n "comment_message" . | safeHTML }}</p>
</div>
{{ end }}
{{< / highlight >}}

If you have noticed here, the <code>with .Params.comments</code> at the beginning brings the information only when it sees the <code>#comments</code> details as the TOML parameter in the front matter. Since I write my articles in both Turkish and English, it reads the <code>comment_message</code> content for i18n/tr as follows.

{{< highlight toml >}}
[comment_message]
  other = 'You can use your Mastodon or Fediverse account to <strong>reply</strong> to this <strong><a class="link" href="https://{{ .host }}/@{{ .username }}/{{ .id }}">toot!</a></strong>.'
{{< / highlight >}}

Finally, we add the theme's default templates (or whichever you use for **posts**) to bring partials/comments.html into <code>layouts/_default/single.html</code>.

{{< highlight go >}}
 {{ partial "comments.html" . }}
{{< / highlight >}}

## Reply via Email

For reply via e-mail, it will be sufficient to add the following just below the Mastodon comments in single.html.

{{< highlight html >}}

<strong><a href="mailto:mail@example.com?cc=mail@example.com&subject={{ .Title }}">Reply by Email ✉️ </a></strong>

{{< / highlight >}}

That is all! If you want it to be more comprehensive, see [here](https://amnesiak.org/post/2021/01/30/hugo-blog-with-mastodon-comments-extended/#wrapping-things-up).
