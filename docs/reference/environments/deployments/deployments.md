# Deployments
Deployments enable teams to maintain multiple independent versions of their applications within one single environment. Additionally, deployments make it easy to take new versions of your applications live with zero downtime.



<details>
<summary>Explore this concept with a video!</summary>

<iframe width="560" height="315" src="https://www.youtube.com/embed/KI0ml65D8Ws?si=aS8lw2lRnjsSQIR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



</details>

### Version Requirements
In most examples you'll see versions like `v1.1.1` that follow semantic versioning.  Cycle deployments are not strictly made to be semantically versioned, but it is encouraged. 

:::caution Start with `v`
If you start a deployment version with `v`, the platform will enforce semantic versioning.
:::

## Managing Deployments

Deployments can only be created during two events: 

1. Container create
2. Stack deploy

These events CAN happen in a pipeline.


A user cannot create an empty deployment, and deleting all containers from a deployment will cause that deployment (and all currently associated [tags](/reference/environments/deployments/tags)) to be deleted. 

:::danger DNS Implications
Deleting a deployment (and the corresponding tags) can cause a DNS record, linked to that tag, to become orphaned.  
:::

Once a deployment has been created containers can be added and removed as needed.  


## Create with Container
Deployments can be created during container create using the `deployments` section of the container create form. Add a new entry and click on "create" to create the new deployment. Then deploy the container and the deployment will automatically be created alongside.  

![Create Container Deployment](https://static.cycle.io/portal-docs/containers/deployment-create.png)

### Add Single Container 
To add a single container to an existing deployment, use the same workflow as creating a deployment, but instead of creating a new entry in the deployments list simply select the deployment you'd like to add the container to. 


## Create with Stack 
Stacks are associated with deployments during the stack deploy process.  When [deploying the stack](/reference/stacks/#deploy-a-stack) select `Deployment` and then enter the deployment version or create a new deployment. 


![Deploy Create](https://static.cycle.io/portal-docs/stacks/deployment-create.png)


If the deployment you've selected has no matches for the container identifiers present in the stack the options will show `New Containers`, otherwise you'll be prompted on reimageing and reconfigure  options. 


![Deploy Form Full](https://static.cycle.io/portal-docs/stacks/deploy-form-full.png)