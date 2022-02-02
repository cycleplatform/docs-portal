---
sidebar_label: Stacks Workflow
sidebar_position: 2
---


# Stacks Workflow

After creating a stack file, it can be used to create a stack on Cycle.  

A stack is a reusable asset that when triggered creates builds.  There are two ways to create a stack:

1. Pasting a raw stack into the Cycle portal
2. Importing from a git repo


## Importing A Raw Stack File
The raw stack file option is a convenience method of creating a stack.  It would be advised to use the git repo method listed next for production deployments.

* Click **Stacks** in the nav menu on the left hand side.
* In the top right corner, click the blue **Import Stack** button.
* Select the **Import from a File** tile on the right, then click **Next**.
* Paste the stack file into the editor and give the stack a name.

After submitting the raw stack file the stack will 

## Importing From A Git Repo (recommended)
Importing a stack from a git repo is very simple.  At the root of the repo, store the `cycle.json` file.

Open a browser window, and with the Cycle portal loaded:

* Click Stacks in the nav menu on the left hand side.
* In the top right corner, click the blue Import Stack button.
* Select the Import from a Git Repo tile on the left, then click Next.


#### Name & Branch
The stack name is for your reference, but it is recommended to name it after the application it builds.

A branch name can be entered if the target branch for the stack is not the master branch.  If this field is entered or set, make sure that if the hash or tag field is set it is correct for what is pushed to the associated branch.  A mismatch in branch & (tag or hash) will result in Cycle pulling the latest commit for that branch.

### Git Repo URL

Enter the git repo url associated with the repo to be used for the stack. 

:::note URL Trimming
If the url is pasted into the form field with `git@` or `https://` that part of the URL will be trimmed by the form validator.  
:::



### Repo Auth
For repo auth select either `SSH`, `HTTPS`, or `None`.

For `SSH` enter a private key associated with the repo.  For example, on github.com often times [deploy keys](https://docs.github.com/en/developers/overview/managing-deploy-keys) are used.

:::info SSH Keygen
The following command will create a pem encoded key pair.

```bash
ssh-keygen -t rsa -b 4096 -m pem -f my-key-pair.pem
```

:::

For `HTTPS`, just enter a username and password for the repo auth.

### Hash & Tag
A hash is a commit hash.  Enter a value for a hash if the intended target for the stack build is a specific commit and not the latest commit 

The tag is a git tag.  Enter a value for the tag field if the intended target for the stack build is a specific tag and not the latest commit.


:::success First Build
Click **Import** after filling out the form and then on the stack dashboard click **Build**.
:::





## Creating Stack Builds

Builds are atomic snapshots of a stack.

* Click **Stacks** in the nav menu on the left hand side.
* Select the stack you want to build from the list.
* Find and click the **Create Build** button on the right hand side near the bottom.

During a build the build status, stack used, and build ID are shown.


## Viewing the Build Log
After a build is completed, all images created during the build will be shown on the images tab of the given build. The build for each image is also available.  This log details every step for each image that was imported.

From the images tab click on the icon under the build log column to see the build log modal.

## Deleting Builds

To delete individual builds click on the checkbox next to the build to be deleted and then click on the red trash can icon.


In the top right corner of the stack dashboard there is a button which says **Prune Unused Builds**. Holding this button down will delete all builds that are not currently in use and are older than 30 minutes.


## Stack Settings
All functionality for updating or deleting stacks is found on the "Settings" tab of a specific stack. To get to that page, follow these steps:

* Click **Stacks** in the nav menu on the left hand side.
* Select the stack to be changed.
* Select the **Settings** tab located underneath the name of the stack.

:::note Stack ID
The stack's ID is also noted on the settings page.
:::


From the settings page a user can update the URL, branch, ref, auth, and name values.  The update stack button must be used to confirm the changes.

to delete a stack, enter the stack name in the delete form and click **Delete Stack**.

## Deploy A Stack (New Environment)
To deploy a stack build to a new environment, simply [create a new environment](/docs/environments/managing-environments) and select "From Stack" - then the stack and build to be used.

## Deploy A Stack (Existing Environment)
Once a stack build has been generated that stack can be deployed to an existing environment.  From the stack dashboard, select the stack to be deployed and then click on **Options**.

### The Options Modal
The options modal provides a form for deploying a specific stack build to an environment. 

If the container identifier used in a stack matches 0 times with existing container identifiers for a selected environment, the container will show up under the **New Containers** section.

If the container identifier used in a stack matches with an existing container identifier for a selected environment, the container will show up under the **Existing Containers** section along with reimage and reconfigure checkboxes.

* **reimage** - reimage the existing image with the image from the stack build.
* **reconfigure** - reconfigure the container's configuration settings with the settings from the stack build.

There is also an option to reimage or reconfigure all containers that have a match.