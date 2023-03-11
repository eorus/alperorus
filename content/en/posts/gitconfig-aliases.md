+++
draft = false
date = 2023-02-10T14:55:49+03:00
lastmod = 2023-02-10T14:55:49+03:00
title= "Global Gitconfig File Setup and Aliases"
slug = "gitconfig-aliases"
author = ["Alper"]
tags = ["Git", "Linux"]
topics = ["Open Source"]
# series = []
description = "Global git config file setup and how to make shortcuts expressed as alias work in .gitconfig to avoid unnecessary tasks"

[comments]
host = "fosstodon.org"
username = "eorus"
id = 110003774655331636

+++

[Git](https://git-scm.com/) is a version control system designed and developed by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds), the creator of the Linux kernel. Git helps developers keep track of the status of their code and allows them to collaborate on a codebase. Thanks to Git, you can easily return to the copies you have made when you need, by making copies of the step-by-step versions of the projects.

In this article, we will briefly touch on the global git configuration file setup and look at how to run shortcuts expressed as *alias* in .gitconfig in order to make GIT more productive and avoid unnecessary tasks. This is where the global <code>.gitconfig</code> file comes into play.

Git does not automatically create the global **.gitconfig** file during installation. This file is not created until the first time it is written. If you haven't set any system variables, the file won't be on your system.

## Creating The Global gitconfig File

There are several ways to create your global <code>.gitconfig</code> file.

* Open a terminal and run <code>git config --global -e</code>. You can then update the file with your custom configurations.
* Running <code>git config --global --list</code> only shows where the global gitconfig file should be. If it doesn't exist yet create a text file with the name <code>.gitconfig</code> where shown and save it with your custom configuration.
* If the file already exists, the previous step will show you the contents of the generic .gitconfig file.

The general trend is usually entering credentials into this config file on a system with Git installed. The first thing you need to do when you install Git is to set up your username and email address.

<pre><code>
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
</code></pre>

Well, if you are reading this article right now and simply wondering where the <code>.gitconfig</code> file is, you can see both the global config file and where it looks if there is a git-related repo config file in the folder you are in, with the following command. For example, if we look at the directory of this site;
<pre><code>git config --list --show-origin</code></pre>

<pre><code>
file:/home/eorus/.gitconfig     user.email=alperor@gmail.com
file:/home/eorus/.gitconfig     user.name=Alper Orus
file:.git/config                remote.origin.url=git@github.com:eorus/alperorus.git
file:.git/config                remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
.....
</code></pre>

The main headers **User Details**, **Alias**, **Color**, **Credential helpers:**, **Core**, **Diff** can be used when configuring the .gitconfig file. We're going to look at the alias part used to shorten git commands and help you be more productive.

## Git Alias

Using alias makes your Git experience simpler and easier. If you don't want to type the entire text of each of the git commands, you can easily set an alias for each command using the gitconfig file. If we specify an alias section in the gitconfig file as follows:
<pre><code>
[alias]
    st = status
    ci = commit -s
    br = branch
    co = checkout
    vis = !gitk --all &
</code></pre>
We indicate that we can use these shortcuts with the git command as follows.
<pre><code>
$ git st # Runs "git status"
$ git ci # Runs "git commit -s"
$ git vis # runs "gitk --all &"
</code></pre>

Or you can effectively add an alias for git checkout to your global gitconfig by issuing <code>git config --global alias.co checkout></code> in the terminal. From now on, you can simply type <code>git co</code> to check out a branch (instead of git checkout). You can add a few aliases by directly updating the global gitconfig file. Below is a list of some common git aliases I use:

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

As you can imagine, with <code>git acp "commit message"</code> you can handle a simple git flow with a single command.

### Bonus for *Nix Users

You can make these shortcuts even shorter and independent from git by assigning alias to your bashrc file outside of gitconfig.

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
