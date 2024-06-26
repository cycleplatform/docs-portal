---
sidebar_label: Deploy Stack Build Step
sidebar_position: 20
---

# Deploying Stack Builds

There are a few important concepts to understand when using the `Deploy Stack Build` step.


## Stack Build Location Target: From 
If you're using a `Stack Build Location Target: From` it should always be from a reference to the `Generate` step and never to the `Create` step. 


:::danger Deployment Version Variable Typo's
If you're using a variable for the `Deployment Version` you should be sure that it is wrapped in `{{double curly}}`.  Because this is a `String` type where `{[square-bracket-typo}}` is valid, you'll encounter issues if not careful.
:::


## Containers 
There is a section for container's that has a list of fields you can use to name identifiers.  These identifiers are used to match with existing containers deployed to the environment.  If the match is made, the container is either `Reimaged`, `Reconfigured`, or both.  


- **reimage** - replace the container's existing image with the new image from the stack build.
- **reconfigure** - reconfigure the container's configuration settings with the settings from the stack build.

Generally, if you're deploying using the `Deployments` feature, you'll be creating new containers within the scope of a new deployment and this section is blank.  The main thing to watch out for here is, if you try and deploy using a deployment that already exists and the containers section is empty, nothing will happen when the deployment takes place and it will run successfully.  

So, if you are going to deploy using the deployments pattern, be sure to be aware that duplicate deployments to the same version will likely result in a non-deployment of the new containers.

### Scoped Variables 
Each stack deployment defines how it will handle adding or updating scoped variables.  The two options for doing this are:

1. Add New - where any scoped variable's not found in the target environment, that are defined on the stack, will be added. 
2. Replace Existing - where any scoped variable defined in the stack that match a scoped variable defined in the environment will be updated to how that scoped variable is defined in the stack.  

The "matching" occurs based on the scoped variable `identifier`.  

:::info
Replace existing for scoped variables via stack deployment will not replace a variable if the scoped variable's value is an empty string.
:::