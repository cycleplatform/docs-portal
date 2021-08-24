---
sidebar_label: Stacks Overview
sidebar_position: 0
---

# Stacks Overview

Stacks offer a powerful way to declarative manage multiple containers, and their deployments to the Cycle platform. Using stacks, you are able to configure every aspect of your applications ahead of time, save it to your version controlled repo, and have Cycle automate the deployment any time you make a push.


## Stack Builds

A stack build is a deployable snapshot of a stack. It contains all built images and their configurations, and can be directly deployed to an environment. The philosophy is the same as with an individual container image -- they are atomic, and hold everything they need to be deployed.

When you first [import a stack](/docs/stacks/stacks-workflow/), it will also create an initial build. Every build generates a "build log", containing all the output generated when Cycle built the images.
