---
sidebar_label: Deployment Health Check
sidebar_position: 1
---

# Using Deployment Health Check For Rainbow Deployment

- **Difficulty** - intermediate
- **Time To Complete** - 20-30 minutes
- **Free Tier Compatible** - no


#### Resources

To complete this tutorial you'll need the following resources available at the time of getting started:

* [Server](/reference/infrastructure/servers/#add-server)
* [Environment](/reference/environments/managing-environments#environment-create)
* [Hosted DNS Zone](/reference/DNS/zones/hosted-zones)
* Stack - included below

This [repo](https://github.com/cycleplatform/display-deployment-version-demo) was created to demonstrate both deployments version and running health checks as part of a deployment pipeline. You'll need to create a [Stack](/reference/stacks/) from this repo, or, create a stack of your own that defines and implements health checks.

If you're providing your own stack, please make sure the image is meant to be some type of publicly accessible service that serves on bind-all IPv6 and you know which port the server is bound to (internally) as this is what we will be covering in this tutorial.

## Creating the Deployment

:::info Checkpoint
At this point you should have the following resources created:

* Server
* Environment
* DNS Zone ([verified](/reference/DNS/zones/hosted-zones#step-2-create-and-verify-the-zone))
* Stack
    * And Stack Build

:::

The first thing to do is create a new deployment from the existing stack build.  This will give us a solid foundation and allow us to create the appropriate [tags](/reference/environments/deployments/tags) so we can [associate the tags to a linked record](/reference/DNS/records/linked-record-tags).

Navigate to your stack and click the `Deploy` button next to the build you've created following along.  

![Health Check Stack Deploy](https://static.cycle.io/guides/healthcheck/stack-deploy.png)

Using the stack deploy modal, select `Deployment` type. Select the environment you've created to follow along with this guide, then enter a pre 1.0 version (I've used 0.1.0).  The rest of the form can be left with default selections.  When the form is completed, click the `Deploy` button.

Once the stack is deployed click on `Continue To Environment` and start the environment containers.  One of the best parts of using a stack is all of the container configuration is contained in the stack itself so theres no need to updated any of the config itself.   Once the container is online and running, we're ready to create the tags for the deployment. 

Click on the `Deployments` tab in the environment and then click on the `+` button next to our new deployment.  Using the popup, add a tag.  For this tutorial I'll be using the tag `current`.  


## Setting Up Records
Now that the [tag](/reference/environments/deployments/tags) is set up, we can associate a linked record with the tag and use that to create an association between a domain and a container in a deployment.  This is great because our deployment pipeline will use this mechanism to facilitate the rainbow deployment.  Later, when the tag is updated to the new deployment, the traffic is automatically cut over... but more on that in a moment. 

Head over to the DNS zone you'll be using for this tutorial and then use the `Add Record` button in the top right of the zone dashboard to open the record create wizard.  Create a [linked record](/reference/DNS/records/adding-records#type-linked).  After selecting the environment you'll get an option for `Link to Container` or `Link to Deployment` click on `Link to Deployment` and then add the container on the left hand side of the form and the tag on the right hand side. 

:::info Tag Mechanics
The way this works is - each time the stack is created and deployed the container name remains the same.  So the container association is based on the name of the container that you'd like the URL to point to.  The tag will allow for the record to point to the container in a specific deployment, so you can update the tag from deployment 1 to deployment 2 and the traffic will automatically swap over to the new deployment.
::: 

Click the box that says `TLS Enabled` so that the platform will automatically generate a TLS cert for this domain. Once thats completed and the cert is generated, head to the domain and you'll see a very simple hello world. 

## Adding the Pipeline

The next step is to create the [pipeline](/reference/pipelines/) itself.  Head over to `Pipelines` and then use the `Create` button to create a new pipeline, for this guide we'll use a `dynamic` pipeline because we want to set certain fields as variables.  Select the `Editor` tab to add the stage and steps.

I'll call my stage `deployment` because that describes what we're doing in this stage.  

:::caution Stages 
You might be thinking, "Why wouldn't we add multiple stages for this pipeline?", and the answer is:  in the future we plan to allow stages to run in parallel.  So a pipeline with multiple stages could have each stage running in parallel during a pipeline run.  If we built synchronous stages that depend on each other, we'd have to refactor them later to allow for this patter, so right now we suggest doing all the work of a single set of tasks as a single stage.
:::

### Create Steps
The first two steps in this pipeline create and generate the assets (stack build) we'll use.  Click on the `Add New Step` button and then select `Create Stack Build` from the dropdown. Before interacting with the `Stack` portion of the form, add a step reference to this step.  I'm going to use the reference `create`. After that, we'll enter the resource ID by using the lookup functionality to grab our stack from `Stack Build Search`. See image below for more details on where to find this on the modal. 

![Stack Build Search](https://static.cycle.io/guides/healthcheck/create-stack-build.png)


The rest of the form can stay as is since we'll be using the main branch / latest commit.  

For the next step, select `Generate Stack Build`, make sure to add a step reference for this step as well as we'll use it when we deploy the stack build.  In the `Stack` portion of the form, select `From` under the `Target` section and then select the `(Stage 1) -> create (Step 1)` from the dropdown next to it.  This is saying to use the stack build we "created" in the first step and generate a full build of all the images in it so that it can be deployed. 


### Deploy Steps
Now that the stack "create" steps have been issued, we can move into the deployment.  The next piece we'll need is to deploy the stack and assign it as part of a [deployment](/reference/environments/deployments).  Click on `Create New Step` and then `Deploy Stack Build`.  


On this form we can select the appropriate environment using the resource ID dropdown and environment search. The stack build location target is `From` and it targets the `(Stage 1) -> generate (Step 2)` step reference. Check the deployment box and use `{{deployment-version}}` for the pipeline variable in version. 

Next we'll add a `Start Environment Deployment` step.  The only fields we need here are the environment, which we can find through the search dropdown and the version variable.  Make sure to select `Version` instead of `Tag` and use the same `{{deployment-version}}` variable you used in the last step here. 

:::info Tag 
The tag option exists here in case a user wishes to start the environment deployment using a tag identifier instead of a version identifier. For this tutorial we're using version.
:::

Once the deployment is started, we'll focus on setting up a step that will wait for that deployments health check to pass before moving on to update the deployment tags to our new deployment. Add a new step and select `Wait for Environment Deployment Health Check`.  Add the environment, version (using the variable), and optionally you can add a duration (the default is 5m and is fine for this tutorials pipeline). 

:::success Health Check
If you inspect the stack in the companion repo for this tutorial, you'll notice a script called `health_check.sh` that is configured in the `cycle.json` file to run as the health check for the container.  The important thing to notice here is we need to send Cycle a `0` code on success and a non-0 code for failure.
:::


Now that the health check step is in place we can be sure that the deployment is healthy, if this step is passed the next thing we want to do is update the tag so that it points to the new deployment version.  

Add a new step `Update Deployment Tag Version`.  The Environment is the same one we've been using throughout this tutorial, but the deployment section now asks for both a `Tag` and a `Version`.  In previous steps there were times where it was one or the other but here we provide both. Why? Because here we are creating a new association for the tag and moving it from one version to a new version. 

For the `Tag` field, if you followed my earlier example, we'll be entering `current` as the tag. The version field should be the familiar `{{deployment-versi\on}}`.  Create the step and we're almost done!

### Optional Sleep
You can add an optional `Sleep` step here for 5-10 seconds (`5s` `10s` etc). DNS can take a few milliseconds to update at times and certain users prefer to keep the previous deployment around for a few seconds before pruning it (the next step).  So if you'd like add a sleep here, or if not move to the next step. 

## Cleanup Step 
The final step is `Prune Environment Deployments`.  This step will take an environment (the same one we've been working with ) and when its run, all deployments in that environment that **do not have a tag** will be deleted.


## Next Steps
Now that the pipeline is created, you can run it using the `Trigger Pipeline` button on the top of the screen.  Because we used a [pipeline variable](/reference/pipelines/variables) you'll need to select the `V` button next to the words `Trigger Pipeline` to open the variable entry modal. 

One thing you could do to clean this pipeline up a bit would be, move the environment resource in all of the steps that require it from the ID type to the Resource type and use a variable to define it.  The pattern that variable expects is a [fluid identifier](/reference/pipelines/variables/#fluid-identifiers).

One other, more advanced way to run the pipeline is using a [trigger key](/reference/pipelines/#trigger-keys).  Create a trigger key and remotely trigger this pipeline from your local machine or as part of a CI/CD pipeline. 