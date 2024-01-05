---
sidebar_label: Images And Volumes
sidebar_position: 2
---

# Images And Volumes

If an image does not have a volume defined, Cycle will not show an option to configure the volume or to "add" a volume during container create.

## Adding A Volume

To make the volume configuration an option add a `VOLUME` to the Dockerfile.

If you're using an official image and expect that you should find a volume on the image, yet Cycle doesn't show that one is defined, it is not defined on the image.

```Dockerfile
FROM official:image
VOLUME /path/you/desire
```
