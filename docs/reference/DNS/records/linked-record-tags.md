---
sidebar_label: Associating Tags
sidebar_position: 2
---

# Associating Tags with Linked Records
For users that wish to take advantage of zero downtime deployments for public facing services, a [linked record](/reference/DNS/records/adding-records#type-linked) type can be associated with a [deployment tag](/reference/environments/deployments/tags).

Before this association can take place a few things need to be created:

1. A deployment must exist.
2. A tag must exist on that deployment for the record to associate with.

<details>
<summary> Create Tag Quick Guide </summary>



In this example image, two different deployments with two different tags are shown.  There are also already linked records associated with them under the domain column. 

![example deployment](https://static.cycle.io/portal-docs/deployments/deployments-dash.png)



Starting from scratch, using a single container for the demonstration this next image shows the [new deployment](/reference/environments/deployments/#create-with-container) `v1.1.1-demo`, but the tag is not yet created. 



![deployment new](https://static.cycle.io/portal-docs/deployments/deploy-stage-2.png)

To add the tag to the deployment, open tag create using the `+` button.  Enter a tag and submit. 



| Create Tag              | New Tag Showing on Dashboard                           |
| ----------------------------------- | ----------------------------------- |
| ![add a tag](https://static.cycle.io/portal-docs/deployments/demo-tag.png) |  ![tag created](https://static.cycle.io/portal-docs/deployments/tag-created.png) |


</details>


## Creating the Record
To create the record, you'll create a [linked record](/reference/DNS/records/adding-records#type-linked) and when filling in the create form select `Link To Deployment`, then select the tag you'd like to associate the record with.  

The record will now follow that tag as long as you move the tag to a deployment that has a container with the existing container name you entered in the form.  Without the container name being the same, Cycle would not know which container in the deployment to point the record to. 

![Associate Linked Record](https://static.cycle.io/portal-docs/deployments/associate-linked-record.png)