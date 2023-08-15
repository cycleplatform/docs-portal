---
sidebar_label: Welcome

sidebar_position: 1
---

import NoteGlobalVsSingleStart from "../src/pages/admonitions/global-vs-single-start.mdx";
import ContainerName from "../src/pages/environments/deploy-container-wizard/container-name.mdx";
import ContainerState from "../src/pages/environments/deploy-container-wizard/state.mdx";
import InitialInstances from "../src/pages/environments/deploy-container-wizard/initial-instances.mdx";
import DeploymentStrategy from "../src/pages/environments/deploy-container-wizard/deployment-strategy.mdx";
import Tags from "../src/pages/environments/deploy-container-wizard/tags.mdx";
import ImageSelect from "../src/pages/environments/deploy-container-wizard/image-select.mdx";
import ImageSourceTypes from "../src/pages/images/image-source-types.mdx";
import NetworkFields from "../src/pages/environments/deploy-container-wizard/network.mdx";
import HubName from "../src/pages/hub/hub-create/hub-name.mdx";
import HubTier from "../src/pages/hub/hub-create/hub-tier.mdx";
import SelectProvider from "../src/pages/hub/hub-create/select-provider.mdx";
import AddApiKeys from "../src/pages/hub/hub-create/add-api-keys.mdx";
import BillingInfo from "../src/pages/hub/hub-create/billing-information.mdx";
import Deploy from "../src/pages/hub/hub-create/deploy.mdx";
import EnvironmentCreate from "../src/pages/environments/\_create-environment.mdx";

# Welcome to Cycle

The leading LowOps platform that simplifies hybrid infrastructure management and container orchestration. Empower your team with seamless deployments, enhanced visibility, and effortless control, all while reducing complexity and technical debt.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_cvoT69DZRQ" title="YouTube video player"
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

---

## Getting Started

:::info Getting An Account
To become an account holder for the Cycle platform, you'll need to see a [demo](https://cycle.io/demo). If you haven't seen a demo, head on over to sign up. If you have and you lost your code to make your account reach out to us through the chat window available in the bottom right of the demo scheduling page.
:::
Use this guide to get up and running on Cycle:

1. [Make An Account](#creating-an-account)
2. [Create A Hub](#hub-create)
3. [Import An Image](#create-an-image-source)
4. [Create An Environment](#create-environment)
5. [Deploy A Container](#deploy-a-container)

## Creating an Account

Use the [Account Wizard](https://signup.cycle.io) to begin the sign up process.

For those new to the Cycle platform, sign up now requires seeing a [demo](https://cycle.io/demo). If you've been invited to a hub, you'll find the necessary information to create your account in an email.

If you're having any issues signing up, or, if you have an invite and are unable to complete your sign up, please reach out to us at info@cycle.io or message us on our public [Slack](https://slack.cycle.io).

## Hub Create

Hub create is now part of signing up, but here is some information on how you can set up your hub.

### Hub Name

<HubName />

### Hub Tier

<HubTier />

### Select Provider

<SelectProvider />

### Add API Keys

<AddApiKeys />

### Billing Information

<BillingInfo />

### Deploy

<Deploy />

:::note Whats A Cluster?
Wondering what the "Cluster" setting is for? After finishing this guide, checkout our page on [**Clusters**](/docs/infrastructure/clusters) to learn more.
:::

## Create An Image Source

Now that the hub has been created and a server is online (give it a few minutes if its not online already) - the next step is to create an image source.

Navigate to the images dashboard by clicking on _Images_ in the left hand navigation, then select "Add Image Source" in the top right of the screen.

For this quick start, the image to use will be the [DockerHub](/docs/images/sources/dockerhub-source) type. Name the image whatever you'd like and in the **Image Name** field enter `cycleplatform/getting-started`. The tag can stay as latest, as that is the desired tag for this image.

Click **Create Source** to continue and on the next screen press the **Import Image** button. The getting started image will import from DockerHub and show in the list of images created from this image source.

## Create Environment

An environment is a private network for your containers, that includes 3 pre-configured services:

1. A Loadbalancer
2. A Discovery service
3. A VPN

<EnvironmentCreate />

## Deploy A Container

The final step is to deploy a container to your environment. Cycle's intuitive container deploy wizard makes this a simple task.

From the dashboard of the environment that was just created click on the **Deploy Container** button in the top right of the screen.

### Container Name

<ContainerName />

### State

<ContainerState />

### Initial Instances

<InitialInstances />

### Deployment Strategy

<DeploymentStrategy />

### Tags

<Tags />

### Image Select

<ImageSelect />

In a previous step, the getting-started image was created and imported. Click the **Recent Imports** box and select that image from the dropdown.

### Network Settings

<NetworkFields />

For the getting started image change the **Public Network** field to **Enabled**. The hostname and port mappings will be automatically filled in.

Click **Create Container** to continue.

## Starting The Environment

Press the `esc` key to exit the container modal from the getting started container that was just created. This lands on the environment's dashboard. In the top right corner of the screen find the start button (looks like pressing play) and hold that down to start all containers in the environment

To visit the running container, click **Containers** from the horizontal navigation and then the name of the container to open the container modal. On the container modal dashboard there is a value called **domain**. Copy that url and paste it into a browser to view the getting started with Cycle page.

<NoteGlobalVsSingleStart />

---

## What's Next?

### [Set Up DNS](/docs/dns/overview)

### [Learn About Stacks](/docs/stacks/overview)

### [Infrastructure Clusters](/docs/infrastructure/clusters)

### [Visit the API Docs](https://api-docs.cycle.io)

<!-- - **First Time Using Cycle?**

  - [Add a Provider](/docs/infrastructure/providers/adding-providers)
  - [Add a Server](/docs/infrastructure/add-infrastructure)
  - [Create an Environment](/docs/environments/managing-environments#environment-create)
  - [Deploy a Container](/docs/environments/deployments/deploy-single-container)

- **Looking To Explore the Platform?**
  - [Set up DNS](/docs/DNS/zones/zone-management#create-the-zone)
  - [Creating A New Image Source](/docs/images/sources/sources-overview#creating-sources)
  - [Importing Stacks](/docs/stacks/stacks-workflow#importing-from-a-git-repo)
  - [Create an API Key](/docs/hubs/API-access/api-key-generate) -->
