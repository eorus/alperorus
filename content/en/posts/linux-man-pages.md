+++
draft = false
date = 2023-03-03T17:24:23+03:00
lastmod = 2023-03-03T17:24:23+03:00
title= "Easy Ways to Read Linux Man Pages"
slug = "linux-man-pages"
author = ["Alper"]
topics = ["Open Source"]
tags = ["Linux", "Kiss", "Projects"]
# series = []
description = "In this article, I will talk about two different projects that will make you read the man pages easily, tldr and explainshell."

[comments]
host = "fosstodon.org"
username = "eorus"
id = 109959945103913415

+++

One of the most important skills you can learn as a Linux user is how to use the man pages. In other words, mastering the man page is an important key to being comfortable and efficient when using the Linux system. Of course, very few achieve this, and we often turn to internet searches rather than manual pages.

Man pages provide a lot of information about commands. On the other hand, getting this information requires learning to read the man pages correctly and easily, but we often fail to discover all the information contained in the manual. Because we often have time problems, we quickly focus on how to use a particular command and its options.

In this article, I will talk about two different projects that will allow you to read the man pages easily; **tldr and explainshell**. Let's start with tldr first.

## [TLDR Pages](https://tldr.sh/)

The tldr pages are a community initiative to simplify popular man pages with practical examples. In other words, you want to access the information on the man page of any command, tldr presents this in a very simplified form and allows you to access frequently used details without wasting time.

The name is well chosen :) TL;DR stands for "Too Long; Didn't Read". An internet slang term used to indicate that a long text (or part of it) is skipped as too lengthy.

So how can you use tldr pages? I can access the details of the command I want via the terminal by installing it with <code>pacman -S tldr</code> from the community repository on Arch. For example, I want to briefly look at what I can do with [rg (ripgrep)](https://github.com/BurntSushi/ripgrep), which I use instead of grep;

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

If you start using it often, you can assign an alias to tldr as a Linux shortcut. Like <code>alias s='tldr'</code> for Search or <code>alias h='tldr'</code> for help.

For other usage areas, you can search for commands via [live demo](https://tldr.inbrowser.app/pages/common/rg), You can download the [PDF](https://tldr.sh/assets/tldr-book.pdf) version and search, or [install](https://tldr.sh/#installation) on the platform you are using as I did. If you want you can contribute to the missing man pages [login](https://github.com/tldr-pages/tldr) or to the translation of the pages for your language.

## [Explainshell](https://explainshell.com/)

 Explainshell is a tool that can parse manual pages through the web interface, extract options, and explain the details of a given command by matching each argument with the corresponding description on the manual page.

[explainshell](https://github.com/idank/explainshell) which uses the Ubuntu archive as its manpages database, currently contains 29761 chapter-disaggregated man pages. Being able to show each program's arguments separately, especially on man pages with a non-standard layout, is simply excellent.

![explainshell](/images/posts/explainshell.webp)

<pre><code>
$ rsync -chavzP --stats user@remote.host:/path/to/copy /path/to/local/storage
</code></pre>

For example, you can see the option details of the command given for sync from a remote computer to a local one with rsync. [click](https://explainshell.com/explain?cmd=rsync+-chavzP+--stats+user%40remote.host%3A%2Fpath%2Fto%2Fcopy+%2Fpath%2Fto%2Flocal%2Fstorage#) to see it on explainshell.

With these two man page utilities I think we should have no excuse of **"can't read man page"**. At least that's how it was for me :) I hope it was useful for you too.
