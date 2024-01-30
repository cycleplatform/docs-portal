---
sidebar_label: Pipelines & Deployments
sidebar_position: 1
---

# Settings Up Pipelines with Cycle Deployments

- **Difficulty** - intermediate
- **Time To Complete** - 20-30 minutes
- **Free Tier Compatible** - no


[Deployments](/reference/environments/deployments/) are a powerful way to manage multiple independent versions of an application.  When paired with [pipelines](/reference/pipelines/) users can fully automate deployments and trigger them remotely. 

This tutorial will run through a simple website deployment using deployments and pipelines to create a zero downtime deployment. 

#### Resources

To complete this tutorial you'll need the following resources available at the time of getting started:

* [Server](/reference/infrastructure/servers/#add-server)
* [Environment](/reference/environments/managing-environments#environment-create)
* [Hosted DNS Zone](/reference/DNS/zones/hosted-zones)
* Image - included below

This [repo](https://github.com/cycleplatform/blog-zero-2-actions) was originally for the [blog post on Github Actions](https://cycle.io/blog/2022/08/github-actions-on-cycle/), but will do perfectly for this tutorial.

You'll need to create an [Image Source](/reference/images/sources/) from either this repo using the Dockerfile image source type, or, create an image source of your own that you'd like to use to follow along with this tutorial.  

If you're providing your own image source, please make sure the image is meant to be some type of publicly accessible service that serves on bind-all IPv6 and you know which port the server is bound to (internally). 



## Creating the Deployment 

:::info Checkpoint
At this point you should have the following resources created:

* Server
* Environment
* DNS Zone ([verified](/reference/DNS/zones/hosted-zones#step-2-create-and-verify-the-zone))
* Image Source 
    * And Image

:::


The first thing to do is create a new deployment and then assign that deployment the appropriate [tags](/reference/environments/deployments/tags) so we can [associate the tags to a linked record](/reference/DNS/records/linked-record-tags).


For this tutorial, we'll use the deploy container form to create our container and deployment in one step. Head the the environment you'd like to use (or new one you've created) and click the `Deploy Container` button to open the wizard.  

After giving the container a name, you can leave everything else as the default settings until you get to `Image`.  In the image section choose `Recent Images` and then your newly created image from the dropdown. 

In the `Network` section change `Public Network` to enable and add the port mappings.  We want to take advantage of [TLS termination at the load balancer](/reference/environments/services/loadbalancer#ssl-termination), so if your service listens on 80 you'd add the following port mappings `80:80` & `443:80`. 

At the bottom of the page, enable the deployment using the toggle and enter a version for this deployment.  

:::note Semantic Versions
Only versions starting with the character `v` will be held to semantic versioning standards.
:::

![Container Deploy Form](https://static.cycle.io/guides/deployment-pipeline/deployment-form.png)

Once you've filled out the form fields, click `Deploy Container`.  

## Tags & Linked Records
For this tutorial, we'll want to create at least 2 [tags](/reference/environments/deployments/tags).  I'll be creating a `test` tag and a `current` tag.  

Adding a tag is simple, use the `+` button to open the form and then add the tag(s) you'd like to use.  The image below shows the process of adding a tag called `demotag`.


| Create Tag              | New Tag Showing on Dashboard                           |
| ----------------------------------- | ----------------------------------- |
| ![add a tag](https://static.cycle.io/portal-docs/deployments/demo-tag.png) |  ![tag created](https://static.cycle.io/portal-docs/deployments/tag-created.png) |


Once you have the tag's in place you can associate a [linked record](/reference/DNS/records/adding-records#type-linked) with the tag so that the linked record will always point to the container this tag is present on.  


In the image below, I'm creating a record pointing to my website container that follows the tag current.  

![Linked Record Tag](https://static.cycle.io/guides/deployment-pipeline/linked-record-tag.png)

:::caution Start Environment
Before visiting the linked record URL's, start the environment using the `Start All` button.
:::

Make sure you point another linked record to the secondary tag you've created as well. After thats all configured, visit the URL's to verify that they resolve and all is working as expected. 

## Adding the Pipeline
This [pipeline](/reference/pipelines/) will have 3 stages: 

1. Image Create
2. Deployment
3. Cleanup

These stages aren't strict and 3 stages are not a requirement in any way for this workflow.  It's just slightly easier to read and reason about for the tutorial.  Feel free to create as many or as few stages as you'd like.  

As for the steps, we will create enough steps to accomplish our task of creating a new deployment and switching traffic to it.  If you'd like to add additional steps you can but you'll want to add at least the steps defined in the tutorial.  

### Create
Head over to pipelines in the portal and click the `Create` button at the top of the page.  Feel free to name the pipeline whatever you'd like. We'll use the `Dynamic` 


