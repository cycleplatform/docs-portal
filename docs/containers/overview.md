---
sidebar_label: Containers Overview
sidebar_position: 1
---

# Containers Overview

Containers are a way to package together your application along with it's dependencies, and run in a resource isolated process. They provide consistency across different hosts, efficiency over traditional hosting methods, and facilitate a micro-service based approach, where each logical piece of your application is split into multiple, easily testable parts (such as API, Backend, Frontend, etc).

## The Containers & Container Dashboard

The containers dashboard shows all containers for an environment and information about the state they are in.

![containers dashboard](https://static.cycle.io/portal-docs/containers/container-dashboard.png)

1. The containers tab is available once a user has entered any environment, by means of the horizontal navigation.
2. Most information on this page is obvious, but these icons represent the state setting for the container row. The gears represent stateless, while the server represents stateful.
3. Filter the containers shown by their state.

By clicking on the name of any given container a modal will open showing a new full menu for the given container. We call this initial page you'll land on, the container dashboard.

Other menus available in this modal are:

- Instances - with instance level information.
- Config - where a user can change the configuration settings for the container.
- Volumes - for containers with volumes attached, where settings can be updated and applied.
- Backups - for stateful containers with backups enabled, where backups can be viewed and restored.
- Settings - where containers settings can be updated and applied.

Visit this [guide](/docs/environments/deployments/deploy-single-container) for more information on deploying a container.

:::info Converting to Containers?
If you have questions on converting to containers, or would like some help getting an application containerized, reach out to our support team on [Slack](https://slack.cycle.io). We're happy to help!
:::
