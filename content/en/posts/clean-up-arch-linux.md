+++
draft = false
date = 2023-02-08T17:20:56+03:00
title= "How to Clean Arch Linux?"
slug = "clean-up-arch-linux"
author = ["Alper"]
topics = ["Open Source"]
tags = ["Linux", "Arch Linux", "Pacman"]
# series = []
description = "In this article, I will provide information on how to clean the Arch Linux system."
+++

Regularly caring for the things you care about keeps them healthier and more sustainable. In this article, I will provide information on how to clean the [Arch Linux](https://archlinux.org) system.

Although **Arch Linux** takes up very little disk space immediately after installation, it grows quite large as time goes on. So, if you have no free space left on your computer or just want to keep your Arch Linux system clean, clearing the cache in the pacman store is one of them.

## Cleaning Arch Linux Cache

Pacman, Arch Linux's package manager, stores all the packages you install in the <code>/var/cache/pacman/pkg/</code> directory and does not automatically remove old or uninstalled versions. It's a good thing Arch doesn't do this automatically, as this allows a package to be downgraded without having to import the previous version via the Arch Linux archive. For example, you can easily install a package from this directory using the following command.

<pre><code>sudo pacman -U /var/cache/pacman/pkg/packagename</code></pre>

Or, let's say you uninstalled a program, you can easily reinstall it without having to download it for a fresh install. This can be useful if you have a slow internet connection. However, this causes the <code>/var/cache/pacman/pkg/</code> folder to grow over time. This means that you need to clean from time to time. You can apply both manual and automatic methods.

### Manually Clear the Cache

You can manually clear the cache. Since Arch Linux is a rolling system, packages are constantly updated. So if an application on the system has come of age for your Arch system, the previous two or three versions no longer make sense. One option, especially if you want to free up storage space, is to remove any cached packages that are not currently installed:

<pre><code>
$ sudo pacman -Sc

Packages to keep:
  All locally installed packages

Cache directory: /var/cache/pacman/pkg/
:: Do you want to remove all other packages from cache? [Y/n]
removing old packages from cache...

Database directory: /var/lib/pacman/
:: Do you want to remove unused repositories? [Y/n]
removing unused sync repositories...
</code></pre>

The other option is to remove the entire package from the cache, including the installed ones:

<pre><code>
$ sudo pacman -Scc

Cache directory: /var/cache/pacman/pkg/
:: Do you want to remove ALL files from cache? [y/N] y
removing all files from cache...

Database directory: /var/lib/pacman/
:: Do you want to remove unused repositories? [Y/n] n
</code>
</pre>

If you need some of these packages after removing them, you can go to [Arch Package Archive](https://archive.archlinux.org/) and download them manually.

### Automatically Clean the Cache

Another way to regularly clean the <code>/var/cache/pacman/pkg/</code> directory is to use a script that automatically deletes all cached versions of installed and uninstalled packages, except for the latest 3 versions. You can access this script named <code>paccache</code> by installing the <code>pacman-contrib</code> package.

<pre><code>sudo pacman -S pacman-contrib</code></pre>

Let's say you want to do an automatic cleaning once a month using this script. You can use [systemd timer](https://wiki.archlinux.org/index.php/Systemd/Timers#Timer_units). For this you will need to create a system-wide paccache.timer file in /etc/systemd/system/ that will be triggered automatically.

To create the paccache.timer file with an editor, you open it:

<pre>sudo nano /etc/systemd/system/paccache.timer</pre>

Then you can use this script to run monthly by pasting content like:

<pre><code>[Unit]
Description=Clean old Arch pacman pkgs

[Timer]
OnCalendar=monthly
Persistent=true

[Install]
WantedBy=multi-user.target</code></pre>

After that enable and start the systemd service you created so that it starts at every system boot:

<pre><code>sudo systemctl paccache.timer'ı enable
sudo systemctl paccache.timer'ı start</code></pre>

## Removing Unused Orphaned Packages

In fact, this is the command that is always at hand on the Arch systems I use. When you install and remove packages in Arch Linux, some unused orphan packages may remain on your system. To find them, you can run the command:

<pre><code>$ sudo pacman -Qtdq
gn
gperf
jre-openjdk-headless
libvisual
lld
ninja
sdx
ucl
upx</code>
</pre>

As you can see, when you run the above command, you can find out which packages are orphaned, that is, no longer associated with an installed package on the system. To remove them, you can continue by adding the command:

<pre><code>sudo pacman -Rns $(pacman -Qtdq)</code></pre>

## Clear Home Directory Cache

Finally, let's take a look at the cleaning that can be done in the home directory. Especially if you are installing packages by compiling via <code>aur</code> on your Arch Linux system, they are usually stored in your <code>/home/user/.cache</code> folder. In fact, if you use <code>yay</code>, regularly created installation packages with PKGCONFIG files for each program are included here.

As you use our system, the cache will fill up and take up a lot of space. You can check the cache folder ".cache" size with the command:

<pre><code>
$ sudo du -sh ~/.cache/
22G     /home/eorus/.cache/
</code>
</pre>

If you haven't cleaned for a long time like me, you can remove all the files with a command like the one below.

<pre><code>rm -rf ~/.cache/*</code></pre>

That is all!
