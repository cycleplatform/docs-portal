---
sidebar_label: Deploy Single Container
sidebar_position: 2
---

# Deploy A Single Container
Cycle provides a completely UI based form to deploy individual containers. It provides a quick and easy way to get a container online without much configuration. Once the container is created, you will be able to modify any part of it's configuration to a fine degree. We've created a great container to go along with this guide **cycleplatform/getting-started** that can be used during the image import step. To get started, follow these steps:

1. [Describe the container,](#step-1-describe-the-container-and-its-state-settings) and provide initial information about the deployment.
2. [Select or import a new image.](#step-2-select-an-image)
3. [Configure Public Access including hostname.](#step-3-configure-the-network)
4. [Verify everything is correct and deploy.](#step-4-finalize)

### Step 1: Describe The Container And It's State Settings

### Container Name

The name of a container is for user purposes only, and doesn't affect any other aspect of the container. However, on this form, Cycle will automatically prefill the hostname of the container with a formatted version of the name for convenience. You are free to change the hostname without affecting the name.

### State

Choose **Stateful** or **Stateless** for your container. A Stateful container is a container that has a persistent volume, or the volume will hold state between restarts. A Stateless container can have a volume, but that volume will be cleared between starts.





### Initial Instances

The instance slider tells Cycle exactly how many copies of the container you want to run when it starts. Based on the deployment strategy you set, Cycle will automatically balance the instances across your cloud.



### Deployment Strategy

Depending on the tier you've chosen you may have access to different advanced deployment strategies. Choose a deployment strategy for the container. Each time an instance of the image is created Cycle will follow the deployment strategy when choosing a server to start the container on.

#### Platform Default

The platform default is currently Resource Density, but by choosing Platform Default you are saying that you would like Cycle to decide what the deployment strategy will be going forward.

#### Resource Density

The Resource Density deployment strategy looks at the servers and deploys instances based on the resource usage of servers that match tag constraints.

#### High Availability

The High Availability deployment strategy will spread out the instances as much as possible across the infrastructure.

#### Manual

The manual deployment strategy give you full control over where your instances are deployed an unlocks the ability for a user to delete individual instances.

#### First Available

The First Available deployment strategy will deploy the instances to the server that is available first.


### Set Tags

If you want to be descriptive about which servers this container will be deployed to use tags.

**Any Tags**- Instances will deploy to any server with at least one of the tags listed.

**All Tags**- Instances will only be deployed to a server that has every tag listed here.



## Step 2: Select an Image

In this step you'll choose to select an image that has already been imported to Cycle or choose to import a new image. Above, it was mentioned that we have prepared an special image for you to use with this guide:

- Image Name - `cycleplatform/getting-started`
- Tag - `latest`

1. Choose how you want to select your image, either an existing image, or import a new one. If you choose existing, skip to step 4.



2. Using the tabs on the left, select the source you wish to import from. At this time, you can import from either Docker Hub, or a private Docker Registry.

<!-- todo - warning -->

#### Docker Hub

Typing in the "Image Name" box will automatically search [hub.docker.com](https://hub.docker.com/) as you type, returning images along with their description and rating. Select your image from the list (or enter a custom one), then set the tag in the tag field. By default Cycle will import the 'latest' tag. You may also provide custom authorization by selecting the "Use Auth" checkbox. Enter your username and password into the respective fields.

#### Docker Registry

<!-- todo - green info panel -->

If you choose to import from a Docker Registry, the process is the same, except in the URL field you will need to enter the custom url the registry is hosted on. For example, if your image name is `images.website.com/myimage:latest`, you would enter `images.example.com` into the URL field. It's recommended to host your own Docker Registry on Cycle for extra security instead of using the public Docker Hub option.

![Select Image Registry](/imgs/getting-started/quick-start/images-step2.1.png)

3. Wait for the image to import. When complete, a dropdown menu will become clickable that says "Select Image".

4. Select your image from the list. If you just imported it, it will be selected for you automatically.

---

### Step 2.1: Configure Volumes

Some container images may specify volumes (persistent data storage). Cycle will automatically detect these and ask you to configure them.

<!-- todo - warning panel -->

Some container images may specify volumes (persistent data storage). Cycle will automatically detect these and ask you to configure them.

**Path** - The path is automatically determined by the image, and cannot be changed.

**Max Size** - Containers will grow to the max size set. Since this is a limit and not an allocation, it is possible that the volume won't have enough data to grow to the max size.

![volumes](/imgs/getting-started/quick-start/volumes.png)

---

### Step 3: Configure the Network

#### Hostname

The hostname is the string that all other containers within the same environment can refer to it by. It must be lowercase, and only contain letters, numbers, and hyphens.

#### Public Network

There are three types of network privilege a container can have:

- **Disabled** - Public internet access is completely disabled for this container. It may only communicate with other containers within the same environment. This is ideal for sensitive things, such as databases.
- **Egress Only** - The container may initiate connections over the internet, but all incoming connections will be blocked. This is ideal for things that require fetching data from the web, but do not need to respond to inbound requests, such as web scrapers.
- **Enabled** - The container is able to both start and accept connections over the internet. This is a must for websites, APIs, and other services where clients may not be known ahead of time.

---

### Step 4: Finalize

Verify everything is correct in the deployment summary box on the right, then click the "Create Container" button, located on the bottom right side of the form. All of these options will be fully configurable after creation as well, so if you make a mistake you can easily correct it before starting the container.
