---
sidebar_label: Containers Overview
sidebar_position: 1
---

# Containers Overview
Containers are a way to package together your application along with it's dependencies, and run in a resource isolated process. They provide consistency across different hosts, efficiency over traditional hosting methods, and facilitate a micro-service based approach, where each logical piece of your application is split into multiple, easily testable parts (such as API, Backend, Frontend, etc).

Want to go a bit deeper? Check out this [introductory article](https://cycle.io/blog/2019/11/a-brief-introduction-to-containers/) from our publication.

### Containers Workflow
Containers are created from [images](https://docs.cycle.io/docs/images/overview).  Creating a container on your local machine and creating a container on Cycle are relatively similar.  The main difference is that the Cycle portal allows you to select your configuration and deployment options, as well as maintain and debug through the portal - where your local experience will likely be a command line tool such as (Docker)[https://docker.io].

An example of creating a container locally:
* Create a (Dockerfile)[https://docs.docker.com/engine/reference/builder/].
* Build the image running a command from the Docker CLI:
```bash
docker build -t username/image .
```
* Push the image to Dockerhub:
```bash
docker push username/image
```

From here you can use your image on any computer that can pull from DockerHub or on Cycle using the [DockerHub image source](https://docs.cycle.io/docs/images/sources/dockerhub).

Using Cycle to handle your builds:
* Create a [git](https://git-scm.com) source control management repository, accessible via url.
* Create a [Dockerfile](https://docs.cycle.io/docs/images/sources/dockerfile) image source.
* Use the [portal](https://docs.cycle.io/docs/images/images-workflow) to create and import the image from your dockerfile image source.
* (BONUS) Use the [deploy container](https://docs.cycle.io/docs/environments/deploy-a-single-container) form to create and deploy your container.


:::info Converting to Containers?
If you have questions on converting to containers, or would like some help getting your application containerized, reach out to our support team on [Slack](https://slack.cycle.io). We're happy to help!
:::



### Cycles Container Orchestrator
Cycle is built on top of runC (the root container runtime used in Docker), and supports the OCI spec. Our orchestrator has been in production use for several years, and supports any container that follows the [OCI](https://opencontainers.org/).

### Using The Portal
Cycle simplifies the management of containers through an intuitive UI, without taking away your power to manage your containers how you wish. Basic information and logs are available from the dashboard, while more specific configuration options are available under the "Config" and "Settings" tabs.

:::success Config vs Settings
On Cycle, settings that affect how the container is run are called "Config", while settings specific to Cycle, like the name of the container, and reimaging settings are just called "Settings". This separation is done to keep with the spirit of containers being host-agnostic.
:::

### The Container Dashbaord
The container dashboard has lots of information about the container and also an activity log. You can reach this dashboard several ways, such as clicking directly on the container name while viewing the list of environments or selecting your container from the containers list inside the environment itself.

TODO ADD IMAGE

**Network** - At the top, we have basic network information, private and public IPs, the assigned domain, and hostname are all listed here.

**Instance Counts** - The circle graph on the left (Instances) shows the total number of copies of the container, and the state they are in. Hover over a specific color to see the number of instances in that state.

**Instances Chart** - To the right of that we have the Instances chart, offering supplemental information about this containers history.

**Image** - Image inforamtion for this container including the name and source are available here.

**Activity** - The recent container events.





