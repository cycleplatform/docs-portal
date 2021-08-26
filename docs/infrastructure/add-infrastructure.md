---
sidebar_label: Add Infrastructure
sidebar_position: 2
---

# Add Infrastructure

Deploying a new server on Cycle is simple.  

* First, click **Infrastructure** from the main navigation.
* From there, select **Add Servers**.

## Infrastructure Deploy Modal 
The infrastructure deploy modal will pop up after clicking on the add servers button. If the provider desired for this deployment is not selectable, that means that credentials have not yet been added to the [providers](/docs/infrastructure/providers/adding-providers) page.  

After selecting a provider select a location to provision from and click **Next**.

### Available Servers
The next page shows all available servers for the datacenter chosen.  Added servers will show in the **Order Summary** panel - on the right-hand side of the page. 


### Cluster
Select an existing cluster from the dropdown or create a new cluster by typing a cluster name into the box.  For more information on clusters - go [here](/docs/infrastructure/clusters)



The final step is to click the **Deploy This Infrastructure** button.  Once that's complete, the infrastructure will be deployed by Cycle on the users behalf through the associated credentials used when adding the provider to Cycle.  The provisioning process generally takes anywhere from 3-10 minutes depending on the server. 

<!-- TODO this needs a footer -->


