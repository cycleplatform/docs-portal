---
sidebar_label: Stacks Workflow
sidebar_position: 2
---

# Stacks Workflow

You've written your stack file, now it's time import and manage that stack on Cycle.

---

It is recommended to commit your `cycle.json` file to the root of your git repo, and import directly from there. You can also, for speed or to test your stack file, import it by pasting it in directly. We'll cover both options.

- Import From a Git Repo.
- Import a Raw cycle.json file.

---

## Importing From A Git Repo

Once you've pushed up the cycle.json to a repo, navigate to the stack import form in the portal:

1. Click Stacks in the nav menu on the left hand side.
2. In the top right corner, click the blue Import Stack button.
3. Select the Import from a Git Repo tile on the left, then click Next.

![Import From Git](/imgs/stacks/stacks-workflow/import-from-git.png)

### Stack Name

The stack name is for your reference, but it is recommended to name it after the application it builds.

### Git Repo URL

Enter the URL to the git repo containing your stack file. If it starts with ssh://, you will need to enter the private SSH key associated with your repo.

:::caution
The SSH Key should be an RSA PEM-encoded key
:::

The process for associating your repo with an SSH key is different for each service. So whether you're using a service like GitHub, GitLab, or Bitbucket you'll want to reference your services documentation on the best practice. Generating the key itself is straightforward. This command will create an RSA PEM encoded key pair.

`ssh-keygen -t rsa -b 4096 -m pem -f my-key-pair.pem`

---

## Importing A Raw Stack File

For convenience and testing purposes, you can paste your `cycle.json` file directly into the portal to test your build.

1. Click **Stacks** in the nav menu on the left hand side.
2. In the top right corner, click the blue **Import Stack** button.
3. Select the **Import from a File** tile on the right, then click **Next**.

### Stack Name

The stack name is for your reference, but it is recommended to name it after the application it builds.

### Raw Cycle JSON File

This is where you paste your file. When you're ready, click Import. If there are any issues with your stack, the field will turn red and the error listed below.

![Import from File](/imgs/stacks/stacks-workflow/import-from-file.png)

---

## Start the Import and Create the First Build

Once your information is filled out, click **Import**. After importing the stack you can start creating builds. Click **Create Build** with the default settings to create the first build of the stack.

![Import Stack](/imgs/stacks/stacks-workflow/import-stack.png)

---

## Creating Stack Builds

Builds are atomic snapshots of your stack. Learn how to create new ones, view their output, and delete unused ones.

Whenever a change is made to a container in your stack, you'll need to do a build. A build, much like an individual container, is atomic and contains everything it needs to be deployed (config, images, etc.). To create a build using the portal, follow these steps:

1. Click **Stacks** in the nav menu on the left hand side.
2. Select the stack you want to build from the list.
3. Find and click the **Create Build** button on the right hand side near the bottom.

You will be taken to a page detailing the progress of the build. You can navigate away and the build will continue in the background.

### Advanced Builds

There are two different modifications you can make to your builds using the portal.

1. **Git Information** - Supply non-default git information such as tags, branches, or commits and Cycle will apply this to your next build.
2. **About** - Quickly customize the version and description of the build and Cycle will overwrite your default settings for the next build.

---

## Viewing the Build Log

Once a build is complete, you may wish to see the generated output of your builds. The build log details every step for each image that was imported.

To view the log for a specific build:

1. From the stack view, click the Builds tab under the stack name at the top.
2. On the table, click the Build Log button of the build you wish to view. This will pop up a modal with all the output of the build.

![Build Log](/imgs/stacks/stacks-workflow/build-log.png)

---

## Deleting Builds

### Individual Builds

If you no longer need a build and wish to delete it, you must first make sure no containers are using images from the build. To check, go to the "Builds" tab of a stack, find the build you wish to delete, and make sure under usage it says "0 Containers".

Once you have verified the build is unused (or updated the containers to use a more recent build by redeploying), check the box next to the builds you wish to delete. At the bottom of the table, you'll see a dropdown. From the dropdown, click **Delete Selected**, then click **Delete**.

:::danger
This action cannot be undone.
:::

![Delete Stack](/imgs/stacks/stacks-workflow/delete-build.png)

### Prune Unused Builds

In the top right corner of the stack dashboard there is a button which says **Prune Unused Builds**. Holding this button down will delete all builds that are not currently in use and are older than 30 minutes.

---

All functionality for updating or deleting stacks is found on the "Settings" tab of a specific stack. To get to that page, follow these steps:

1. Click **Stacks** in the nav menu on the left hand side.
2. Select the stack you want to build from the list.
3. Select the **Settings** tab located underneath the name of the stack.

---

## Updating a Stack

You can only change the name of a stack once it has been created. This is done to keep the stack builds atomic. If you need to change the source, please delete the stack and import a new one.

From the settings tab, locate the "Update Stack" form on the left hand side. Change the name to whatever you'd like, then click **Update Stack**.

![Update Stack](/imgs/stacks/stacks-workflow/update-stack.png)

---

## Deleting a Stack

If you've decided you no longer need a stack and wish to delete it, you will first need to delete the environments that the stack is deployed to. This is done to prevent accidental removal of running containers.

Once the environments the stack is deployed to have been removed, go back to the Settings tab of the stack you wish to delete, locate the delete form on the right-hand side. Enter the name of the stack into the box, and click **Delete Stack**.

:::danger
Deleting a stack will also delete all builds and build logs ever generated for that stack. This cannot be undone.
:::

![Delete Stack](/imgs/stacks/stacks-workflow/delete-stack.png)
