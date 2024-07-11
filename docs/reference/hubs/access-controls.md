---
sidebar_label: Access Controls
sidebar_position: 6
---

# Access Controls
Cycle has a granular access control system (also referred to as ACL's) that compliments the [role based membership](/reference/hubs/members-roles-and-permissions) component that controls capabilities.  

:::info ACL
ACL stands for access control list.
:::


## Capabilities vs Access Controls
[Capabilities](/reference/hubs/members-roles-and-permissions/default-permissions), or permissions, describe what a user or API key can "do". 

Access controls define if the user or API key has access to the resource they're trying to change or view.  

## Managing Access 
Access controls can be applied the the following resource types:

1. [Environments](/reference/environments/)
2. [Image Sources](/reference/images/sources/)
3. [Stacks](/reference/stacks/)
4. [Pipelines](/reference/pipelines/)
5. [Clusters](/reference/infrastructure/clusters)
6. [DNS Zone](/reference/DNS/zones/)
7. [Networks](/reference/networks/)

Each resource can have either `no ACLs` or some ACLs.  

If the resource has an ACL, each role added to the ACL will have 3 options:

1. **View** - the role can view the resource.
2. **Modify** - the role can change the resource itself but cannot delete the resource or update the ACL for the resource.
3. **Manage** - the role can delete the resource and the role can update the ACL for the given resource. 


:::caution 
If you give manage to a role that does not have the capability `roles-view` they will not be able to render the roles that have access to the resource and will therefore not be able to change the ACLs for that resource.  
:::

## Conflicts
The combination of roles and access controls offers users an extreme amount of granularity, this also requires the user to be careful with conflicting patterns.  

For example:
A role that has container capabilities looks to modify a container in an environment with no ACL's listed.  The user finds that even with their container capabilities being correct to update the container they are unable to make changes to the container itself.  

The reason the user is unable to make changes is due to the fact that they only have the `view` access control on the cluster the environment holding that container is in.  

Without specifically defining environment level ACL's, Cycle checks back to the cluster level ACL when verifying what that role has access to.  Because this role had `view` and not `modify`, the platform prevents the role from modifying resources it does not explicitly have access to.

| Resource    | View | Modify | Manage | Description                                                                                                     |
|-------------|------|--------|--------|-----------------------------------------------------------------------------------------------------------------|
| Environment | x    | -      | -      | Can view environment + containers + instances, but make no changes to anything                                  |
| Environment | x    | x      | -      | Can view/make changes to environment + containers + instances but cannot delete environment or modify ACL       |
| Environment | x    | x      | x      | Can do all of the above + delete env + modify ACL                                                               |
| Environment | -    | -      | -      | Checks cluster and makes decision based on cluster                                                              |
| Cluster     | x    | -      | -      | Can view cluster + any environments (and their children resources) that have NO ACLs                            |
| Cluster     | x    | x      | -      | Can view/make change to cluster + any environments (and their children resources) that have NO ACLs (but not modify ACLs) |
| Cluster     | x    | x      | x      | Can view/make change to cluster + any environments (and their children resources) that have NO ACLs (but can modify ACLs for non-ACL envs) |
| Cluster     | x    | -      | x      | Can view/make changes cluster + any environments (and their children resources) that have NO ACLs + add new ACLs |
| Cluster     | -    | -      | -      | Can view cluster + any envs in cluster (that don't have their own ACLs) + can delete cluster + can manage ACL for cluster but cannot edit environments/containers/instances UNLESS the environment itself has an ACL which the user does have modify on |

