---
sidebar_label: Deploy Stack
sidebar_position: 3
---

# Deploying A Stack
Stacks are a powerful, declarative way to manage groups of containers. Learn how to deploy specific stack builds to an environment. Each stack is made up of builds, and each build is made up of the container images snapshotted to when the build was created.

:::info When Can Stacks Be Deployed
Stacks can be deployed upon environment create (covered on this page) as well as from a [stack dashboard](https://docs.cycle.io/docs/stacks/overview).
:::

The simplest way to deploy a stack is during [environment create](https://docs.cycle.io/docs/environments/managing-environments#environment-create).  To do this:
1. Select Use Stack on the environment create page to get started.
2. Use the first dropdown to select the stack you wish to deploy.
3. Use the second dropdown to choose which build you wish to use in this deployment.
4. Click the build you wish to deploy, and then Create Environment on the bottom right of the form. 

Since the configuration is already handled in the cycle.json file, and the images already imported in the build, there's nothing left to do. You'll immediately be taken to the "Dashboard" tab of your environment, and all you'll need to do is start the containers!