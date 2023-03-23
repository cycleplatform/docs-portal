---
sidebar_label: Images And Volumes
sidebar_position: 2
---

# Images And Volumes

If an image does not have a volume defined, Cycle will not show an option to configure the volume or to "add" a volume during container create. To make the volume configuration an option add a `VOLUME` to the Dockerfile.

If you're using an official image and expect that you should find a volume on the image, yet Cycle doesn't show that one is defined, it is not defined on the image.

To add a volume to an official image simply create the following Dockerfile:

```Dockerfile
FROM official:image
VOLUME /path/you/desire
```

After creating the image, you can host it in a repo and use the `docker-file` image source type to pull it into Cycle, or you can build it locally and push to DockerHub or any supported Docker Registry before pulling it into Cycle.
