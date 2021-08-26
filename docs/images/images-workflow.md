---
sidebar_label: Images Workflow
sidebar_position: 1
---

# Images Workflow
Working with Images on Cycle is incredibly simple.  After creating an [image source](https://docs.cycle.io/docs/images/sources/sources-overview) image source.

To creat a new image from an image source, select the source from the list and then click **Import Image**.

Images can be used during container create and reimaging. 

## Image Summary

After selecting an image source there will be a list of images that have been created from that source.  Selecting any one of these images will show a summary of image information.  

![Image Summary](https://static.cycle.io/docs/images/image-summary.png)

<details>
<summary>Image Summary Bullets</summary>


Currently, these values are grouped into the following sections:

* Image Summary
    * Entrypoint
    * Command
    * Ports
    * Workdir
    * Signal Stop
    
* Image Source
    * source
    * target
    * size
    
* Container Usage
    * Name
    * Environment
    * State
    
* Environment Variables

* Volumes


</details>



:::note Image Source
Image source will show information relevant to the specific image source type.
:::



### Image Settings
There is also an option to select image settings from the horizontal navigation.  From this page, a user can update the name of the image, see the ID, or delete the image.

