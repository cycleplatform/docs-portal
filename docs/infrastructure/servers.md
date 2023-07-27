---
sidebar_label: Servers
sidebar_position: 3
---

# Servers

The Infrastructure > Servers page shows all provisioned servers split by cluster. Selecting any given server will show the `Server Dashboard` which includes things like:

- CPU Telemetry Info & Load
- RAM Usage
- Storage Usage
- Compute & Agent Versions
- Uptime

Clicking the `Instances` tab from the horizontal navigation will show all instances currently deployed to this server and their state.

## Server Settings

Manage the settings of individual servers. Server settings control the type of instances that can be deployed to each server as well as resource allocation limits.

![server settings](https://static.cycle.io/docs/infrastructure/server-settings-markup.png)

1. The server settings tab, reachable when in the infrastructure section of the portal.
2. Server tags can be added and deleted using this form.
3. Currently, there are two ways a user can reconfigure a server. They are covered in more detail below.
4. Force delete a server can be used to forcefully remove a server from the hub.

## Reconfigure Server

:::success No Restart Needed
The reconfigure server button will not restart the server and you should expect no service interruptions when enabling or disabling this feature.
:::

### Allow SFTP

By default SFTP connections will not be available on a newly deployed server. Simply stated, the fewer ports open on a host machine, the more secure that machine is.

To enable SFTP connections on your server, simply navigate to the server settings page, select the checkbox to enable, and click the Reconfigure Server button.

### Custom Base Volume Size

A base volume is how much space should be set aside for images on this server. If a user wishes to increase this amount they can using this form.

:::danger Increase Only
The custom base volume setting can only be increased, as a decrease could result in the corruption of the images stored in that volume.
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
