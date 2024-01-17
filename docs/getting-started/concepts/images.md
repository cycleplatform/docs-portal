---
id: images
displayed_sidebar: gettingStartedSidebar
sidebar_position: 15
title: Images
---

# [Images](/reference/images/)
Images refer to container images and are split into two distinct resource types: 

1. [Image Sources](/reference/images/sources/)
2. [Images](/reference/images/)

An image source is a way to define a resource that can be reused to create new images.  

For example, if you were to use the DockerHub image source type, you could set the target to `alpine:3` and each time you created an image resource from that image source, it would pull a point in time reference to whatever was being served from that DockerHub repo at the time.  

Images, on the other hand, are built into an OCI compliant format and used to create [container](/getting-started/concepts/containers) resources. That means that before you can create a container you'll need to create and image source and import an image (or [stack](/getting-started/concepts/stacks)).



