+++
draft = false
date = 2023-03-14T19:25:39+03:00
lastmod = 2023-03-14T19:25:39+03:00
title= "Archlinux Pacman Commands Guide"
slug = "archlinux-pacman-commands"
author = ["Alper"]
topics = ["Open Source"]
tags = ["Linux", "Arch Linux", "Pacman"]
# series = []
description = "Let's take a look at how Pacman works, the options it offers, and how we can use it to manage packages in Arch Linux"


[comments]
host = "fosstodon.org"
username = "eorus"
id = 110023283846066017

+++

If we think of [Linux](https://en.wikipedia.org/wiki/Linux) distributions as a person, package managers are the most important factors that determine the characters and structures of these people. With package managers you can install and enjoy the latest software on your desktop. **Pacman**, which is a combination of the words **"Package"** and **"Manager"**, is the default package manager used on Arch-based systems.

While Pacman is fairly easy to learn compared to the package managers of other Linux distributions, users from other distros may have trouble adjusting to Pacman's short, single-character arguments. So I decided to collect my notes that I've gotten over the years from [Arch Wiki](https://wiki.archlinux.org/) and various sources. Let's take a look at how Pacman works, the options it offers, and how we can use it to manage packages in [Arch Linux](https://archlinux.org/).

## Pacman Commands Guide

Like other Linux commands, Pacman follows a basic command syntax with some predefined flags and arguments:

{{< highlight bash >}}
sudo pacman -options package_name
{{< /highlight>}}

Here -options are the flags you use to call different functions and <code>package_name</code> is the name of the package(s) you want to act on. In Pacman, the options are collected in five main categories and the main title of the action is determined by using the initials as the command.

{{< highlight bash >}}
-Q : (Query) query the pacman database
-R : (Remove) remove package from system
-S : (Sync) sync packages
-U : (Upgrade) Update packages in the system
-F : (File) run a query inside the files installed on the system
{{< /highlight>}}

From here on, I quote the subcommands of each option category with their explanations.

### Keys that can be used for Query (-Q) Operations

{{< highlight bash >}}
-i : Show information about the installed package. For example <code>pacman -Qi firefox</code>
-k : Check files owned by a package. -kk can be used for detailed control.
-l : Show files that a package has installed on the system.
-o : Search for the package that owns a file.
-s : Search for a package name among installed packages.
-e : explicit : list user-installed programs, not system-installed.
-q : quiet. Don't show additional information like version number, just list package names.
-n : List only programs installed from main repos.
-m : List the programs installed from the AUR.
-d : dependencies. List programs installed as sub-dependencies of another program.
-t : unrequired. List the packages that are not needed.
-dt: usually used together to list packages that are not needed.
{{< /highlight>}}

To find out if "Firefox" is installed:

<code>pacman -Qs firefox</code>

### Keys that can be used for Remove (-R) Operations

{{< highlight bash >}}
-s : recursive. to remove a package and all sub-dependencies that come with that package.
-u : unneeded. also remove unnecessary packages.
-n : also delete the system configuration files that came with the package.
{{< /highlight>}}

So a command like <code>pacman -Rnu firefox</code> can be used to remove everything that comes with "Firefox".

### Keys that can be used for Sync (-S) Operations

{{< highlight bash >}}
-c : clean, clear local memory
-i : Show information about uninstalled package
-l : list
-q : quiet. Just list the names without going into extra details (version number, repo name, etc.).
-s : search. Search the repositories.
{{< /highlight>}}

<code>pacman -Ss chromium</code> to search for chromium in the repositories.

{{< highlight bash >}}
-y : refresh. redownload the package list from the repositories (-Syy : download again even if the list is new)
-u : upgrade. Update all installed packages (-Suu: update even if the package in the repository is older than the installed version)
-w : download, but don't install
{{< /highlight>}}

### Keys that can be used for File system (-F) Operations

{{< highlight bash >}}
-s : search. Which package installed a file installed on disk?
-yy : force update. Update the package list anyway, even if it's just recently updated.
pacman -Fy
pacman -Fs libmozgtk.so
pacman -Fos /usr/lib/firefox/libmozgtk.so
{{< /highlight>}}

In the first step above, we are questioning whether pacman updates the file/package list, in the second step, in which packages the libmozgtk.so file can be found, and in the third step, in which packages the file with the full path can be found.

## Quick Look at Most Used Pacman Commands

{{< highlight bash >}}
pacman -Syy // match local packet data to servers (sync)
pacman -Syu // update all packages
pacman -Ss firefox // Search the repositories for packages with firefox in the name
pacman -Ssq ^firefox$ // search for package with full name firefox, no details
pacman -S firefox // install firefox from repositories
pacman -S extra/firefox // install from a specific repository
pacman -U /home/user/package // install local file on system
pacman -U https://url.address/ // install file from a URL
pacman -S gnome // install gnome package group
pacman -R firefox // remove a package
pacman -Rs apache // remove a package and all its sub-dependencies
pacman -Rns $(pacman -Qtdq) // clean/remove all unused packages from the system
pacman -Ru gnome // remove whole gnome package group
pacman -Q | more // list all installed packages
pacman -Ql apache // list all files installed by apache
pacman -Ss chromium // search the repositories for a package
pacman -Qs firefox // search for a package inside installed packages
pacman -Si chromium // show information about an uninstalled package
pacman -Qi apache // show information about an installed package

pactree apache // show dependency tree for a package
pacman -Qdt // list packages that are no longer needed
pacman -Sc // clear cache data
pacman -Scc // delete cached packets
pacman -Qo netctl // Show which package installed the netctl file

{{< /highlight>}}
