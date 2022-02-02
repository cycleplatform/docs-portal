---
sidebar_label: Containers Overview
sidebar_position: 1
---

# Containers Overview
Containers are a way to package together your application along with it's dependencies, and run in a resource isolated process. They provide consistency across different hosts, efficiency over traditional hosting methods, and facilitate a micro-service based approach, where each logical piece of your application is split into multiple, easily testable parts (such as API, Backend, Frontend, etc).

## The Containers & Container Dashboard
The containers dashboard shows all containers for an environment and information about the state they are in.

![containers dashboard](https://static.cycle.io/docs/containers/containers-dashboard-markup.png)
1. The containers tab is available once a user has entered any environment, by means of the horizontal navigation.
2. Most information on this page is obvious, but these icons represent the state setting for the container row.  The gears represent stateless, while the server represents stateful.


By clicking on the name of any given container a moday will open showing a new full menu for the given container.  We call this initial page you'll land on, the container dashboard.

![container dashboard](https://static.cycle.io/docs/containers/container-dashboard-markup.png)

1. Container network information shows all the information about the current network settings for a container, except for ports (which can be found by clicking on config > networks).
2. The image source info gives the user a quick reference on the image / image source that was used for this container.
3. The container modal comes with a complete navigation menu scoped to the container.  

Visit this [guide](/docs/environments/deployments/deploy-single-container) for more information on deploying a container.

:::info Converting to Containers?
If you have questions on converting to containers, or would like some help getting an application containerized, reach out to our support team on [Slack](https://slack.cycle.io). We're happy to help!
:::








