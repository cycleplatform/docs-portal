---
id: scoped-variables
displayed_sidebar: gettingStartedSidebar
sidebar_position: 16
title: Scoped Variables
---

# [Scoped Variables](/reference/environments/scoped-variables)
Scoped variables are a powerful way to define environment variables, data, and files that can be assigned to one or more [containers](/getting-started/concepts/containers) in a given [environment](/getting-started/concepts/environments).

Instead of using [runtime environment variables](/reference/containers/configuration/runtime#environment-variables), users can opt to define scoped variables in several different formats including unique ways like: 

* URL's 
* Files
* Internal API returns

Each scoped variable will either define a list of containers that will implement it, or, will be marked `global` giving all containers in the given environment access to the variable.