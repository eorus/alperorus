+++
draft = false
date = 2023-03-01T20:04:07+03:00
lastmod = 2023-03-01T20:04:07+03:00
title= "How to Add Last Modified Date to Articles with Hugo?"
slug = "hugo-lastmod-date"
author = ["Alper"]
topics = ["Open Source"]
tags = ["Hugo", "Website", "Jamstack", "Blog"]
# series = []
description = "How to add last modified, last updated or last edited date to Hugo posts, articles?"

[comments]
host = "fosstodon.org"
username = "eorus"
id = 109949459501850351

+++

The infrastructure of my site is Hugo, and from time to time I like to improve myself and update the theme structure with the simple but powerful variables that Hugo provides.

I can fetch *"Published Date"* and *"Last Modified Date"* for articles with Hugo. For this, the date information comes from the <code>date</code> and the last updated date <code>lastmod</code> parameters. Both can be defined in [front-matter](https://gohugo.io/content-management/front-matter/).

You can enter your front-matter dates manually and easily make it default with archetypes. Simply add something like this to the front-matter:

<pre><code>
date: "2023-02-28"
lastmod: "2023-03-01"
</code></pre>

Then in your layout template, for example <code>single.html</code> to access this data:

<pre><code>
{{ $date := .Date.Format "02.01.2006" }}
{{ $lastmod := .Lastmod.Format "02.01.2006" }}

Published: {{ $date }}
Last Updated: {{ $lastmod }}
</code></pre>

Hugo's predefined frontmatter variable **LastMod** provides important details. But there is an even better feature that Hugo offers for lastmod. Hugo's GIT integration is able to get the LastMod value from the file's [GIT history](https://gohugo.io/variables/git/#lastmod). First enable git info in <code>config.toml</code>.

<pre><code>
enableGitInfo: true
</code></pre>

As soon as you activate the above, Hugo will override all **lastmod** dates entered in the front-matter. This means by default ":git" comes before lastmod.

We need to add the following lines to the config file to change and overwrite this.

<pre><code>
[frontmatter]
date = ["date", "publishDate", "lastmod"]
lastmod = ["lastmod", ":git", "date", "publishDate"]
</code></pre>

Thus, if Hugo sees the <code>lastmod</code> parameter in the front-matter, will use it, but if there is no value related to lastmod, Hugo will consider the last git commit as the last modified date.
