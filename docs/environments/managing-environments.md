---
sidebar_label: Managing Environments
sidebar_position: 3
---
# Managing Environments
Environments are logical groupings of containers. All containers deployed inside an environment automatically have a private network built between them, enabling seamless communication. Users can easily create new environments, update the settings (including marking an environment a favorite), or quickly delete unneeded environments.


### Environment Create
To create and environment:
1. Click the Environments tab on the navigation menu to the left.
2. In the top right corner, find the Create Environment button and click it.
3. In the form, enter a name for this environment (usually the name of your application you are building) and an optional description.
4. Click Create Environment. You will be taken to the environment dashboard.


When creating a stack there is an option to create the environment with a stack.  Selecting this option will prompt the user to select both a stack, and, a stack build to use for the initial deployment of the stack to the environment upon environment creation.

#### Legacy Networking 
If legacy networking is selected during environment create, Cycle will give each container instance an IPv4 address alongside the default IPv6 address. These addresses have a maximum of 255 per container as the reserved space is a /24 on the 10.* IPv4 address space per container.

The discovery service in a legacy environment will still return IPv6 addresses for lookups if they are requested, so containers listening on IPv6 can still be reached. However, Cycle does not exclude them from the IPv4 allotment and as such the maximum of 255 instances is still in place.


### Environment Settings
When on the environment dashbaord, a user can click on the **Settings** tab via the horizontal navigation links to bring up the environment settings page.  This page has options to change the settings for the name, description, and add/remove the environment as a favorite.

**Name** - The name of the environment as shown on the Environment select screen and displayed in the breadcrumb at the top of the screen.

**Description** - A description of the containers or applications deployed to the environment.

**Favorite** - A checkbox where checked means the environment is set to favorite and will show up at the top of the Environments select screen.

A user can also choose to delete the environment on this page.  Deleting the environment requires the user to enter the name of the environment into the delete form and then hold down the **delete** button.  

:::danger Delete is Permanent
Deleting an environment will delete the environment and all associated containers within.  You can not reverse this action.
:::

