---
title: 'Building a Next.js App'
author: 'Ibrahima Balde'
date: '2021-12-22'
tags: ['next.js','blog', 'dionysusera']
description: examples of Markdown options.
tag: next
---

___

- **Toolset for Dev**
- **Toolset for Prod**
- **Steps to Create App**
- **Configuration**
- **Front End**
- **Back End**

___
___

## Static Generatio;n and Server Side Rendering in Next App

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
___
