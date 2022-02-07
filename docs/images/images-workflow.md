---
sidebar_label: Images Workflow
sidebar_position: 1
---

# Images Workflow
Container images are atomic copies of a filesystem that are built from a file (ex: Dockerfile).  


On Cycle, users will [create an image source](/docs/images/sources/sources-overview#creating-sources) - describing where to find image assets - and then import images from that source.  Each imported image is a point in time atomic reference.


## Image Summary

After selecting an image source there will be a list of images that have been created from that source.  Selecting any one of these images will show a summary of image information.  

![Image Summary](https://static.cycle.io/docs/images/image-summary-markup.png)

1. Image scope is showing that this page relates to an individual image within the "mysql" image source.
2. Image info is pointing to the different sections of available information for this image.


### Image Settings
There is also an option to select image settings from the horizontal navigation.  From this page, a user can update the name of the image, see the ID, or delete the image.

