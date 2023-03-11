+++
draft = false
date = 2023-02-10T14:55:49+03:00
lastmod = 2023-02-10T14:55:49+03:00
title= "Global Gitconfig Dosyası Kurulum ve Kısayollar"
slug = "gitconfig-aliases"
author = ["Alper"]
tags = ["Git", "Linux"]
topics = ["Open Source"]
# series = []
description = "Gereksiz görevlerden kaçınmak için global git yapılandırma dosya kurulumu ve alias olarak ifade edilen takma adların .gitconfig'te çalışması nasıl sağlanır"

[comments]
host = "fosstodon.org"
username = "eorus"
id = 110003774655331636

+++

[Git](https://git-scm.com/), Linux çekirdeğinin yaratıcısı [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) tarafından tasarlanan ve geliştirilen sürüm kontrol sistemidir (Version Control System). Git, geliştiricilerin kodlarının durumunu takip etmelerine yardımcı olur ve bir kod tabanı üzerinde işbirlikleri yapmalarına olanak tanır. Git sayesinde yapacağınız projelerin adım adım versiyonlarının kopyalarını alarak daha sonra ihtiyaç duyduğunuzda aldığınız kopyalara yani versiyonlara kolayca dönebilirsiniz.

Bu yazıda GIT'i daha üretken hale getirebilmek ve gereksiz görevlerden kaçınmak için global git yapılandırma dosya kurulumuna kısaca değinip, *alias* olarak ifade edilen kısayolları .gitconfig'te nasıl çalıştıracağımıza bakacağız. Global <code>.gitconfig</code> dosyasının devreye girdiği yer burasıdır.

Git, yükleme sırasında global **.gitconfig** dosyasını otomatik olarak oluşturmaz. Bu dosya, ilk kez yazılana kadar oluşturulmaz. Hiç bir sistem değişkeni ayarlamadıysanız, dosya sisteminizde olmayacaktır.

## Global gitconfig Dosyasını Oluşturma

Global <code>.gitconfig</code> dosyanızı oluşturmanın birkaç yolu vardır.

* Bir terminal açın <code>git config --global -e</code> komutunu çalıştırı. Daha sonra dosyayı özel yapılandırmalarınızla güncelleyebilirsiniz.
* <code>git config --global --list</code> komutunu çalıştırmak. Global gitconfig dosyasının yalnızca henüz mevcut olmadığında nerede olması gerektiğini gösterir. Gösterilen yerde <code>.gitconfig</code> adıyla bir metin dosyası oluşturun ve onu özel yapılandırmanızla kaydedin.
* Eğer dosya zaten varsa, önceki adım size genel .gitconfig dosyasının içeriğini gösterecektir.

Genel eğilim Git kurulu bir sistemde bu config dosyasına kimlik bilgilerinin girilmesiyle oluşturulur. Git'i kurduğunuzda yapmanız gereken ilk şey, kullanıcı adınızı ve e-posta adresinizi ayarlamaktır.

<pre><code>
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
</code></pre>

Peki şu an bu yazıyı okuyorsanız ve basitçe <code>.gitconfig</code> dosyasının nerede olduğunu merak ediyorsanız aşağıdaki komutla hem global config dosyasını hem de içinde bulunduğunuz klasörde git ile ilişkili bir repo config dosyası varsa nereye baktığını görebilirsiniz. Örn bu sitenin dizininden bakarsak ;

<pre><code>git config --list --show-origin</code></pre>

<pre><code>
file:/home/eorus/.gitconfig     user.email=alperor@gmail.com
file:/home/eorus/.gitconfig     user.name=Alper Orus
file:.git/config                remote.origin.url=git@github.com:eorus/alperorus.git
file:.git/config                remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
.....
</code></pre>

Ortak genel gitconfig yapılandırmaları arasında **User Details**, **Alias**, **Color**, **Credential helpers:**, **Core**, **Diff** ana başlıkları bulunmaktadır. Biz git komutlarını kısaltmak ve daha üretken olmanıza yardımcı olmak için kullanılan takma ad (alias) kısmına bakacağız.

## Git Alias

Alias (takma ad) kullanmak, Git deneyiminizi daha basit ve daha kolay bir hale getirir. Git komutlarının her birinin tüm metnini yazmak istemiyorsanız, gitconfig dosyasını kullanarak her komut için kolayca bir takma ad ayarlayabilirsiniz. Gitconfig dosyası içerisinde aşağıdaki şekilde bir alias bölümü belirlediğimizde :
<pre><code>
[alias]
    st = status
    ci = commit -s
    br = branch
    co = checkout
    vis = !gitk --all &
</code></pre>
Bu kısayolları git komutu ile şu şekilde kullanabileceğimizi belirtmiş oluruz.
<pre><code>
$ git st # Runs "git status"
$ git ci # Runs "git commit -s"
$ git vis # runs "gitk --all &"
</code></pre>

Ya da terminalde <code>git config --global alias.co checkout></code> komutunu vererek, global gitconfig dosyanıza etkin bir şekilde git checkout için bir takma ad ekleyebilirsiniz. Bundan böyle, bir branch'ı kontrol etmek için (git checkout yerine) basitçe <code>git co</code> yazabilirsiniz. Global gitconfig dosyasını doğrudan güncelleyerek birkaç takma ad ekleyebilirsiniz. Benim kullandığım bazı ortak git takma adlarının bir listesini aşağıda bulabilirsiniz :

<pre><code>
[alias]
# status short & branch
  s = status -s -b
# add, commit
  ac = !git add -A && git commit -m
# add, commit, push
	acp = "!f() { git add -A && git commit -m \"$@\" && git push; }; f"
# get all new content
	get = !git pull --rebase && git submodule update --init --recursive
# what changed (detailed log)
	w = whatchanged
# log
	l = log
# log simpler
	lol = "log --graph --decorate --oneline"
# log simple
	logd = "log --date-order --all --graph --format='%C(green)%h%Creset %C(yellow)%an%Creset %C(blue bold)%ar%Creset %C(red bold)%d%Creset%s'"
# log fancy
	logf = "log --date-order --all --graph --name-status --format='%C(green)%H%Creset %C(yellow)%an%Creset %C(blue bold)%ar%Creset %C(red bold)%d%Creset%s'"
# what have i changed since yesterday
  logg = !git log --since yesterday --pretty=short --author `git config user.email`
# Git last commit
  last = "log -1 HEAD --stat"
# Git search commit
  se = "!git rev-list --all | xargs git grep -F"
</code></pre>

Tahmin edeceğiniz üzere <code>git acp "commit message"</code> ile basit bir git akışını tek komutla halledebiliyorsunuz.

### *Nix Kullanıcıları için Bonus

Gitconfig dışında bashrc dosyanıza alias atayarak bu kısayolları daha da kısa ve git'ten bağımsız hale getirebilirsiniz.

<pre><code>
alias g=’git’
alias gb=’git branch’
alias gba=’git branch -a’
alias gc=’git commit -v’
alias gca=’git commit -v -a’
alias gd=’git diff | mate’
alias gl=’git pull’
alias gp=’git push’
</code></pre>

Kaynaklar :
- [1.6 Getting Started - First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
- [2.7 Git Basics - Git Aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases)
- [Arch Wiki](https://wiki.archlinux.org/title/Git)
