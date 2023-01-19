---
title: "Hugo : A Brand New Approach to Static Websites"
author: Alper Orus
date:  2020-12-05T18:18:06+03:00
draft: false
categories:
  - Linux

tags:
  - Hugo

Image: "/images/hugo-static-site-generator.jpg"

description: In this guide, I will try to explain the benefits of static site builder Hugo for the various workflows it provides.
---

**Static sites** have been getting popular and improving lately for many reasons. The main reason for this is that the internet, which has started to become cumbersome, misses the simplicity of the early days.

Thanks to static sites, you do not have to deal with issues such as database, programming language version, required libraries and keep them updated. Think about it there is no *PHP, MySQL / MSSQL, .NET, Python, Ruby*. Avoiding extreme solutions and keeping a project simple without databases, too many dependencies or specific server-side configurations makes it very easy to deploy and be robust against a myriad of potential vulnerabilities.

In this guide, I will try to explain the benefits of static site builder Hugo for the various workflows it provides.

Websites that worked completely statically in the early days of the web were later shaped in line with customizations and dynamic needs. As of today, static website generators are able to transform the configurations and content written by the user into a completely static html / css / js stack.

### What is Hugo?

**Hugo** is a static site generator written in the Go language. Since it is written in Go, it offers a relatively fast solution compared to other systems. With HTML and CSS, you can create your site by editing without knowing any *Go language* or publish your site with one of many theme options. Thanks to a simple and plain text format like Markdown, you can quickly create your posts as if you were writing prose.

When we create content-based websites, we can assume that there are some common generalizations in all structures, and Hugo offers exactly the infrastructure for that. In particular, we can take blog posts, categories, ie content types such as categories, tags, series, reviews or products, and organize data. Then we can give each a different look through templates and stylesheets. Of course, most of all, while compiling all these takes place in milliseconds, we can make thousands of pages in seconds.

In addition, Hugo provides the necessary tools to the static website workflow (including deployment and migration tools), allowing developers and designers to focus on the fun parts of using their creativity and applying that creativity in the construction of the website. Yes, I'm talking about how efficient live preview is in the local development environment.

Even if the programming languages I mentioned in the introduction are not available, this does not mean that Javascript cannot be used in the static site infrastructure you created with Hugo. There is nothing preventing you from using third party services on your static page if you need to. jQuery works fine. So do not limit yourself to the inability to integrate other libraries or applications into your static sites. So you can use any of the existing JavaScript libraries.

### In Which Areas Can Hugo Be Used?

What Hugo *cannot do* is **dynamic content**, such as database-driven forms, search or user systems. If your need is one of those, then Hugo is definitely not what you're looking for. Take, for example, a small store or business with a few products or services that don't require a complete e-commerce solution. There will only be corporate pages, product information and a "contact" page. With Hugo, you can launch such a site (if no search for template) in a day. Even the server is not important, since you will only serve basic HTML pages, thanks to free services, it can only be published with the company name with dns change depending on the domain name.

In summary, all kinds of businesses, individuals, portfolios such as companies, agencies, restaurants, should create static pages that will live with performance, security and free of charge. Today, Wordpress is installed for businesses with these needs, with direct PHP, MySQL infrastructure, a lot of plugins and constant updating.

Let's say you need a blog or a comprehensive site with a news section. With Hugo, you can develop templates using all kinds of HTML / CSS variations with javascript codes you will apply, add a comment section using a disqus-like system, and take care of visitor tracking and reporting using Google Analytics, which has already become standard.

However, now I am building all the [projects](/projects) consisting of home page, about, portfolio or product list and contact pages with Hugo. Apart from that, as I mentioned above, there is already Wordpress for its dynamic requirements. But for these reasons, I think that getting involved in server, database, php structure, plugins and being up-to-date is unnecessary and makes the web cumbersome.

### Hugo at a Glance

* Hugo is fast. [Here](https://gohugo.io/showcase/) you can view the sites using Hugo.
* You can view various themes implemented on Hugo [here](https://themes.gohugo.io/).
* Install Hugo on any machine on which macOS, Windows, Linux, OpenBSD, FreeBSD and the Go compiler toolchain can run.
* You can download the appropriate version for the platform you want via [Hugo Releases](https://github.com/gohugoio/hugo/releases) and run it from anywhere without dependency.
* Offers [alternative depoloys](https://gohugo.io/hosting-and-deployment/) for serverless solutions.
* You can make all site settings with a single configuration file.
* With the existing LiveReload support, you can instantly see the changes made on the browser with automatic page refresh. This seemingly simple detail allows you to instantly see everything from sass compilations to small edits.
* With the terminal package provided by Hugo, you can make seperate development and production environment. For example, you can make the LiveReload tool open during development and closed during production.
