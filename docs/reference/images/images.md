# Images 

Container images are atomic copies of a filesystem that are built from a file (ex: Dockerfile).


## Images Workflow
Adding and using an image on Cycle comes down to a few simple steps:


1. **[Create an Image Source](/reference/images/sources/#creating-sources)** - describing where to find image assets.
2. **Importing An Image** - From the image sources menu, select the image source and then import a copy of that image by clicking on the button `Import Image`.  For image overrides, click the `V` arrow next to the button first to open the dropdown. 

## Image Summary

![Image Dashboard](https://static.cycle.io/portal-docs/images/image-dash.png)

Every image, imported from a given source, will be listed when select the given image source. Clicking into any one of the listed images will then open a modal showing information about the image such as:

- A place to update the image name.
- The defined entrypoint, command, ports, and working directory.
- All defined environment variables.
- Whether that image is being used by any containers.
- Information about the source.

### Build Log

There is also a navigation option for `Build Log`. This will take you to the build log of the image you've selected and show you the factory services output during the building of the image.
