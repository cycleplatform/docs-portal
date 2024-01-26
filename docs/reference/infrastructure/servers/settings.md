---
sidebar_label: Settings
sidebar_position: 4
---

# Server Settings

Manage the settings of individual servers. Server settings control the type of instances that can be deployed to each server as well as resource allocation limits.

![server settings](https://static.cycle.io/portal-docs/server/settings.png)

1. The server settings tab, reachable when in the infrastructure section of the portal.
2. Server tags can be added and deleted using this form.
3. Currently, there are two ways a user can reconfigure a server. They are covered in more detail below.
    - [Reconfigure Server](/reference/infrastructure/servers/configure#reconfigure-server) - moved to configure page. 
4. Server delete form. Using force delete will tell Cycle to forcibly delete the server regardless of instances deployed.

:::caution Locked Containers
The container lock setting can cause force delete to fail. If a user tries to delete a server, on which a container has lock set to true
:::



## Update Server

### Tags

Server tags are a way to give your instances more information for deployment. Cycle will automatically generate a few relevant tags. Add more tags to increase the amount of options you have when deploying containers from the container deploy wizard, through stacks, or programmatically.

Click into the Tags field and start typing the tag you want to add. When ready, press enter. To remove a tag, click the [x] next to it. When you have your tags configured, click Update Server.

### Allow Pool

If this checkbox is selected, this server will accept instances that have no tags specified.

### Allow Services

When an environment is created, the service containers that come with that environment are automatically created and placed on your servers. If you have this box selected, the server will accept service containers. If it is unchecked, no service containers will be deployed to this server.

## Advanced Updates

### Allow Overcommit

Selecting the Allow Overcommit setting will treat the server as if it had twice the amount of available CPU shares. This will lead to a 2x overcommit ratio and the potential for your CPU load to go over its suggested threshold, slowing your processing substantially.

This setting is unsafe for servers in your production cluster.

## Deleting a Server

Click the Infrastructure tab on the left-hand nav. Select the server to be deleted, go to the settings tab and then enter the name of the server into the "Delete Server" form. Finally, hold the "Delete Server".

The "Force Delete Server" checkbox is to be used only when a normal delete action cannot be done and the user needs to remove the server forcibly from Cycle.
