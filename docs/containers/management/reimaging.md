---
sidebar_label: Reimaging
sidebar_position: 1
---

# Reimaging A Container
Reimaging is the process by which you can update the image of an already deployed container. Any time you have an update to your container, you'll reimport the image into Cycle, then reimage the container, which will update it across all of your infrastructure. To get to the reimaging form, follow these steps:

1. Click the Environments tab on the navigation menu to the left.
2. Select the environment the container you want to modify is deployed to.
3. Click the Containers tab under the environment name.
4. Select the container from the list.
5. Click the Settings tab under the container name.




### Understanding the Reimage Form
The reimage form will be populated with any compatible images for deployment. An image is considered "compatible" when the volume paths match. Select your recently imported image (it will appear at the top), and then click reimage.

When you press the **Reimage Container** button, a few things will be set in motion.

* Cycle will start to copy over the image from your image storage to the server.
* For every 50mb of image size Cycle will give the image a one second head start.
* After the head start clears, the platform will stop the currently running container and prepare to start the new image.
* Once the image finishes copying and the old image is stopped the new image will be started.

:::caution
Reimaging your container will shut it down during the reimaging process.
:::

There is no guarantee that your image will finish downloading before the container is stopped. As noted above the image is given a headstart to minimize the amount of "transition" time between when your old container stops and the new one starts. Should the image download not be completed, no additional steps are needed on the part of the user. Cycle will automatically start the containers after the image has been fully downloaded.

Reimaging replaces the container image - none of your config options will be changed.


### Advanced Options
Located directly below the reimage form is a toggle for **advanced options**.  Toggling this will show two additional options for reimageing:

1. **Allow Incompatible Images** - If checked this will allow a user to use any image currently available on their hub to reimage the container.
2. **Overwrite Runtime Config** - Generally when reimaging the containers runtime configuration will stay in tact.  If you wish to overwrite the currently implemented configuration with the configuration used in your selected container, this setting will need to be checked.

The ability to allow incompatible images was developed in order to facilitate image name changes, so that if you were to import an image with a different name but that was meant to replace your current image you'd still be able to use that image.

In the same vein, overwriting the runtime config is a way for a user to tell Cycle the incoming image has a brand new configuration that should replace all changes the user has made to the existing containers configuration.