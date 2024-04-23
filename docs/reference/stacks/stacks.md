# Stacks

Stacks offer a powerful way to declaratively manage multiple containers, and their deployments to the Cycle platform. Using stacks, you are able to configure every aspect of your applications ahead of time, save it to your version controlled repo, and have Cycle automate the deployment any time you make a push.


:::success Editor Spec Linter
The JSON schema spec has been uploaded to the [JSON Schema Store](https://www.schemastore.org/).  This means anyone using the JSON Schema Store Catalog extension can get autofill behavior in browser. 

Users can also point their editor settings to the url https://raw.githubusercontent.com/cycleplatform/api-spec/main/stackspec/stackspec.json if they prefer a more manual linting implementation.

Example for `.vscode/settings.json`

```json 
{
    "json.schemas": [
        {
            "fileMatch": [
                "cycle.json",
                "cycle.yml",
                "cycle.yaml",
            ],
            "url": "https://raw.githubusercontent.com/cycleplatform/api-spec/main/stackspec/stackspec.json"
        }
    ]
}
```

:::


## Stack Builds

A stack build is a deployable snapshot of a stack. It contains all built images and their configurations, and can be directly deployed to an environment. The philosophy is the same as with an individual container image -- they are atomic, and hold everything they need to be deployed.

When you first import a stack, it will also create an initial build. Every build generates a "build log", containing all the output generated when Cycle built the images.


## Stacks Workflow

After creating a stack file, it can be used to create a stack on Cycle.

A stack is a reusable asset that when triggered creates builds. There are two ways to create a stack:

1. Pasting a raw stack into the Cycle portal
2. Importing from a git repo

### Importing A Raw Stack File

The raw stack file option is a convenience method of creating a stack. It would be advised to use the git repo method listed next for production deployments.

- Click **Stacks** in the nav menu on the left hand side.
- In the top right corner, click the blue **Import Stack** button.
- Select the **Import from a File** tile on the right, then click **Next**.
- Paste the stack file into the editor and give the stack a name.

After submitting the raw stack file the stack will

## Importing From A Git Repo (recommended)

Importing a stack from a git repo is very simple. At the root of the repo, store the `cycle.json` file.

Open a browser window, and with the Cycle portal loaded:

- Click Stacks in the nav menu on the left hand side.
- In the top right corner, click the blue Import Stack button.
- Select the Import from a Git Repo tile on the left, then click Next.

### General

- **Stack Name** - this is just what you want to name the stack, no impact on the stack itself. 

The stack name is for your reference, but it is recommended to name it after the application it builds.



### Git

- **Git Repo URL** - the URL of the repo where the stack file `cycle.json` that you'd like to use for building this stack can be found.
- **Git Repo Branch** - when cloning the repo, Cycle will use this branch. 
- **Ref** - reference information for targeting specific `hash` or `tag` in the branch.  Providing a branch here will override the `Git Repo Branch`. 


A hash is a commit hash. Enter a value for a hash if the intended target for the stack build is a specific commit and not the latest commit

The tag is a git tag. Enter a value for the tag field if the intended target for the stack build is a specific tag and not the latest commit.



### Repo Auth

For repo auth select either `SSH`, `HTTPS`, or `None`.

For `SSH` enter a private key associated with the repo. For example, on github.com often times [deploy keys](https://docs.github.com/en/developers/overview/managing-deploy-keys) are used.

:::info SSH Keygen
The following command will create a pem encoded key pair.

```bash
ssh-keygen -P ‘yourpassword’ -t ecdsa -b 256 -m PEM -f your-filename.pem
```

:::

For `HTTPS`, just enter a username and password/token for the repo auth.




## Creating Stack Builds

Builds are atomic snapshots of a stack.

- Click **Stacks** in the nav menu on the left hand side.
- Select the stack you want to build from the list.
- Find and click the **Create Build** button on the right hand side near the bottom.

During a build the build status, stack used, and build ID are shown.

## Viewing the Build Log

After a build is completed, all images created during the build will be shown on the images tab of the given build. The build for each image is also available. This log details every step for each image that was imported.

From the images tab click on the icon under the build log column to see the build log modal.

## Deleting Builds

To delete individual builds click on the checkbox next to the build to be deleted and then click on the red trash can icon.

In the top right corner of the stack dashboard there is a button which says **Prune Unused Builds**. Holding this button down will delete all builds that are not currently in use and are older than 30 minutes.

## Stack Settings

All functionality for updating or deleting stacks is found on the "Settings" tab of a specific stack. To get to that page, follow these steps:

- Click **Stacks** in the nav menu on the left hand side.
- Select the stack to be changed.
- Select the **Settings** tab located underneath the name of the stack.

:::note Stack ID
The stack's ID is also noted on the settings page.
:::

From the settings page a user can update the URL, branch, ref, auth, and name values. The update stack button must be used to confirm the changes.

to delete a stack, enter the stack name in the delete form and click **Delete Stack**.



## Deploy A Stack

Once a stack build has been generated that stack can be deployed to an existing environment. From the stack dashboard, select the stack to be deployed and then click on **Deploy**.

The deploy modal provides a form for deploying a specific stack build to an environment. There are two main ways to deploy a stack. 

1. As part of a deployment.
2. Outside of a deployment.

Either way you deploy the stack the same process will happen when evaluating whether the containers being deployed are "new" or "redeployments".  

If the container identifier used in a stack matches 0 times with existing container identifiers for a selected environment, the container will show up under the **New Containers** section.

If the container identifier used in a stack matches with an existing container identifier for a selected environment, the container will show up under the **Existing Containers** section along with reimage and reconfigure checkboxes.

- **reimage** - reimage the existing image with the image from the stack build.
- **reconfigure** - reconfigure the container's configuration settings with the settings from the stack build.

There is also an option to reimage or reconfigure all containers that have a match.

### Scoped Variables 
As stacks now support scoped variables there will be an option during stack deploy for if the scoped variables being created will be new or will be replacing existing variables. 
