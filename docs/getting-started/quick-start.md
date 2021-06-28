---
sidebar_label: Quick Start
sidebar_position: 1
---

# Portal Quick Start Guide

Go from creating an account all the way through deploying your first container on Cycle in about 30 minutes with our Quick Start Guide.

---

### What is the Cycle Portal?

Cycle is a SaaS platform that makes running containerized applications on cloud infrastructure simple.

### Why is that important?

Simplicity is important as soon as you start to manage more than 1 of anything.

A single server is simple to manage, as the number of servers grows, that simplicity wanes. A single application can be simple to manage, but creating several copies of that application can become complex. A small network is maintainable, but troubleshooting sprawling dynamic networks can bring even the most adept teams to a halt. With modern development, things are becoming smaller and more distributed (more instances in more locations). More resilient, yet inherently more complex.

Not every team has the resources to hire a group of engineers to manage that growing complexity. Using Cycle keeps things simple for those teams.

---

## Main Concepts

Cycle is SaaS based, so that means you'll be signing into your account through a web portal. To gain access to the suite of tools available on Cycle, deploy a [hub](http://www.google.com). A hub is where users can add [infrastructure](http://www.google.com) (to power their applications) and [environments](http://www.google.com) (to network everything together). The rest of the tools on the platform either provide support to your running applications (ex: [two-way console](http://www.google.com)), or output that can be used to observe usage and status (ex: [container dashboard](http://www.google.com)). Of course there's much more here than meets the eye, and throughout this documentation we'll provide technical reference to these concepts in as straightforward a way as possible.

### Quick Start Shortcuts

- [Creating an Account](http://www.google.com)
- [Creating a Hub](http://www.google.com)
- [Deploying Infrastructure](http://www.google.com)
- [Create an Environment](http://www.google.com)
- [Deploying a Container to your Environment](http://www.google.com)

---

## Creating an Account

Use the [Cycle Account Wizard](http://www.google.com) to begin the sign-up process.

1. Enter your name, email address, and password.
2. You will receive an email with a verification code. Enter the code into the box and select "Verify Email".
3. You've successfully created an account, click the **Login** button to be automatically logged in.

---

## Creating a Hub

Use the intuitive [Create Hub Wizard](http://www.google.com) to get started.

If this is your first time creating a hub, simply log in to the portal and click **Create Hub** in the navigation menu. If you would like to add another hub, click the hub toggle in the nav menu on the left side and select **Add Hub**.

1. [Name your hub](http://www.google.com) which will usually be the name of your organization or an organization you manage
2. [Choose your provider](http://www.google.com) and enter the associated API key
3. [Select your hub tier](http://www.google.com)
4. [Enter billing information](http://www.google.com)
5. [Add collaborators and finalize](http://www.google.com)

### Step 1: Name Your Hub

Give your hub a name that will remind you what you plan to use the space for.

![Name your hub](/imgs/getting-started/hub-name.png)

---

### Step 2: Choose Your Provider

Enable the providers of your choice and enter your API keys in the box.

![Choose your provider](/imgs/getting-started/choose-your-provider.png)

<!-- todo - Need to add info warning. -->

#### Where do I get API Keys to connect providers?

- For Vultr: [Text](http://www.google.com) | [Video](https://www.youtube.com/watch?v=SNEp3rlTluQ)
- For Equinix: [Text](http://www.google.com) | [Video](https://www.youtube.com/watch?v=SNEp3rlTluQ)
- For AWS: [Text](http://www.google.com) | [Video](https://www.youtube.com/watch?v=Pr_7IjPagic)

---

### Step 3: Choose a Tier

#### Hub Tier

Hub tiers are how you define how much storage and RAM your hub will need. Each tier is tailored towards a hub size. If you choose a tier with too many resources Cycle will automatically scale your billing to a lower tier at the end of the month. [Click here](http://www.google.com) to find out more about tiers.

#### Support

Cycle offers a standard support plan that is included at no additional cost. This includes communication with our team via our portal live chat and access to the Cycle Slack channel. If your business need a Service Level Agreement, that can be selected as well.

---

### Step 4: Enter Billing Information

_Skipped if you selected free tier._

Enter the credit card information you want to use for this hub. Your card will be charged at the end of your billing cycle, every 28 days.

<!-- todo - Info panel -->

![Payment Method](/imgs/getting-started/payment-method.png)

---

### Step 5: Add Collaborators and Finalize

Congratulations, your hub has been created! You'll be able to start deploying containers in just a few minutes. The final step is to invite collaborators to your hub, and configure any advanced options.

#### Collaborators

Before you finalize your order you will have a chance to add collaborators to the hub. Cycle makes it easy to add collaborators and describe the type of access you want those users to have in one step. Type in the email address of the person you wish to add and then select their access level from the Role dropdown menu.

![members](/imgs/getting-started/members.png)

---

### Provider Check

If you opted to skip adding provider(s) during hub create, you'll need to add those now.

<!-- todo - dropdown component -->

---

## Infrastructure

After successfully creating a hub you'll need to add infrastructure. To add infrastructure to your hub:

1. Click **Infrastructure** in the nav menu on the left hand side.
2. In the top right corner, click **Add Servers**.
3. Select your provider from the provider dropdown, then choose the location of your server.
4. You can select the number and location of the servers and click **Add to Queue**. This will fill the order summary at the top right of the page.
5. To remove a server from your order, locate it in the "Order Summary" panel on the right, and click the _x_ next to the server you wish to remove.
6. You'll see the total increase in infrastructure spend that will be billed by your providers. Click **Deploy this Infrastructure** to begin provisioning.

<!-- todo - Infra Video that needs embeded -->

---

## Create an Environment

When creating an environment you must make one key decision. If you wish to use a stack with your environment, you must do so during environment creation.

To create an environment, follow these steps:

1. Click the **Environments** tab on the navigation menu to the left.
2. In the top right corner, find the **Create Environment** button and click it.
3. In the form, enter a name for this environment (usually the name of your application you are building) and an optional description.
4. Click **Create Environment**. You will be taken to the environment dashboard.

<!-- todo - Env add video embded -->

---

## Deploy a Container to Your Environment

Cycle provides a completely UI based form to deploy individual containers. It provides a quick and easy way to get a container online without much configuration. Once the container is created, you will be able to modify any part of it's configuration to a fine degree. We've created a great container to go along with this guide **cycleplatform/getting-started** that can be used during the image import step. To get started, follow these steps:

1. [Describe the container,](http://www.google.com) and provide initial information about the deployment.
2. [Select or import a new image.](http://www.google.com)
3. [Configure Public Access including hostname.](http://www.google.com)
4. [Verify everything is correct and deploy.](http://www.google.com)

### Step 1: Describe The Container And It's State Settings

#### Container Name

The name of a container is for user purposes only, and doesn't affect any other aspect of the container. However, on this form, Cycle will automatically prefill the hostname of the container with a formatted version of the name for convenience. You are free to change the hostname without affecting the name.

#### State

Choose **Stateful** or **Stateless** for your container. A Stateful container is a container that has a persistent volume, or the volume will hold state between restarts. A Stateless container can have a volume, but that volume will be cleared between starts.

A full description of Stateful and Stateless can be found [here](http://www.google.com).

![state](/imgs/getting-started/state.png)

#### Initial Instances

The instance slider tells Cycle exactly how many copies of the container you want to run when it starts. Based on the deployment strategy you set, Cycle will automatically balance the instances across your cloud.

![instances](/imgs/getting-started/instances.png)

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

![First Available](/imgs/getting-started/first-available.png)

---

#### Set Tags

If you want to be descriptive about which servers this container will be deployed to use tags.

**Any Tags**- Instances will deploy to any server with at least one of the tags listed.

**All Tags**- Instances will only be deployed to a server that has every tag listed here.

![set tags](/imgs/getting-started/set-tags.png)

---

### Step 2: Select an Image

In this step you'll choose to select an image that has already been imported to Cycle or choose to import a new image. Above, it was mentioned that we have prepared an special image for you to use with this guide:

- Image Name - `cycleplatform/getting-started`
- Tag - `latest`

1. Choose how you want to select your image, either an existing image, or import a new one. If you choose existing, skip to step 4.

![Select an Image](/imgs/getting-started/images-step2.png)

2. Using the tabs on the left, select the source you wish to import from. At this time, you can import from either Docker Hub, or a private Docker Registry.

<!-- todo - warning -->

#### Docker Hub

Typing in the "Image Name" box will automatically search [hub.docker.com](https://hub.docker.com/) as you type, returning images along with their description and rating. Select your image from the list (or enter a custom one), then set the tag in the tag field. By default Cycle will import the 'latest' tag. You may also provide custom authorization by selecting the "Use Auth" checkbox. Enter your username and password into the respective fields.

#### Docker Registry

<!-- todo - green info panel -->

If you choose to import from a Docker Registry, the process is the same, except in the URL field you will need to enter the custom url the registry is hosted on. For example, if your image name is `images.website.com/myimage:latest`, you would enter `images.example.com` into the URL field. It's recommended to host your own Docker Registry on Cycle for extra security instead of using the public Docker Hub option.

![Select Image Registry](/imgs/getting-started/images-step2.1.png)

3. Wait for the image to import. When complete, a dropdown menu will become clickable that says "Select Image".

4. Select your image from the list. If you just imported it, it will be selected for you automatically.

---

### Step 2.1: Configure Volumes

Some container images may specify volumes (persistent data storage). Cycle will automatically detect these and ask you to configure them.

<!-- todo - warning panel -->

Some container images may specify volumes (persistent data storage). Cycle will automatically detect these and ask you to configure them.

**Path** - The path is automatically determined by the image, and cannot be changed.

**Max Size** - Containers will grow to the max size set. Since this is a limit and not an allocation, it is possible that the volume won't have enough data to grow to the max size.

![volumes](/imgs/getting-started/volumes.png)

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

---

#### Start Your Containers and View Instance

Now it's time to start the container and your services.

<!-- todo - info panel -->

- Go back to the environment dashboard by clicking the name of the environment from the navigation link at the top of the page.
- From the Environment dash look to the top right of the screen. Click and hold down the "play" button as shown below.
- If you scroll to the bottom of the dashboard page you will see your live container with a state of "Running".
- Click the name of the container you wish to inspect.
- This takes you to the container dashboard where you can see information about your running container. If you selected enable on the public networking step you should see a domain available, copy and paste that domain into a browser tab to visit your running instance!
