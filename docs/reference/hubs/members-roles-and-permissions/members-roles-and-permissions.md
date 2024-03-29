# Members And Permissions

Cycle offers a simple to understand, granular role based architecture for hub memberships. This comes with several [predefined roles](/reference/hubs/members-roles-and-permissions/default-permissions) that are included upon hub create and are ready to add members to.  

If you find that the default roles don't have exactly what you want there are two paths you can go down: 

1. [Modify An Existing Role](/reference/hubs/members-roles-and-permissions/roles-management#modify-an-existing-role)
2. [Create A Custom Role](/reference/hubs/members-roles-and-permissions/roles-management#creating-a-new-role)

## The Parts of a Role
There are 4 parts to a role: `name`, `identifier`, `rank`, and `capabilities`.

The `name` is just what you, as the user, want to name the role.  It has no real bearing on any part of the implementation past this.  The `identifier` however, is a resource identifier and could be used in things like programmatic integrations or future versions of tooling we release. 

### Rank
The rank, a number from 0-9, is how you can define where in the organization a specific role fits in.  If you look at the [default roles](/reference/hubs/members-roles-and-permissions/default-permissions), you'll notice that the 6 default roles each have a different rank:

* Owner / Root - 10 (this is a special super user role so its above the standard 0-9 rank)
* Admin - 7
* DevOps Engineer - 5
* Developer - 4
* Consultant - 2
* Analyst - 1

These numbers do not define anything about what capabilities can be assigned to the role, they are strictly meant to be a differentiator for when new members are invited.  

For example: a DevOps Engineer cannot invite someone as an Admin because their rank is lower than an Admin rank.  An Admin cannot invite another Admin because you cannot create new memberships at the same Rank that you're currently at.  

:::danger Roles Manage
The capability `Manage Roles` should be given with the consideration that any role bearing this capability can change their given access to capabilities at will.  By default this role is given only to the `Owner` role. 
:::



### Capabilities 
Capabilities are attached to a member and they defines what that member can view or interact with.  To see a full list check out the default [Owner Role](/reference/hubs/members-roles-and-permissions/default-permissions)

For example: a member that has the `Analyst` role should expect to be incredibly limited on the hub and when they go to check on something like the hubs billing or usage they'll see the following. 

![Billing Denied](https://static.cycle.io/portal-docs/hub/billing-denied.png)

From the image above you may notice that each pane on this page is blocked by a different capability (or capabilities).  Views that show information from multiple resources may require multiple capabilities to view.  







