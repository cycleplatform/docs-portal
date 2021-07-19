---
sidebar_label: Server Settings
sidebar_position: 3
---
# Server Settings
Manage the settings of individual servers. Server settings control the type of instances that can be deployed to each server as well as resource allocation limits.

:::note Navigating to the Server Settings Page
All functionality for updating or deleting a server is found on the Settings tab of a specific server. To get to that page, follow these steps:

* Click Infrastructure in the nav menu on the left hand side.
* Select the name of the server you want to build from the list.
* Select the Settings tab located underneath the name of the server.
:::

### Allow SFTP
By default SFTP connections will not be available on a newly deployed server. Simply stated, the fewer ports open on a host machine, the more secure that machine is.

To enable SFTP connections on your server, simply navigate to the server settings page, select the checkbox to enable, and click the Reconfigure Server button.

:::success No Restart Needed
The reconfigure server button will not restart the server and you should expect no service interruptions when enabling or disabling this feature.
:::

### Controlling Instances
The settings Allow Pool and Allow Services can be turned on and off to control which instances can be deployed to individual servers.

### Allow Pool
If this checkbox is selected, this server will accept instances that have no tags specified.

### Allow Services
When an environment is created, the service containers that come with that environment are automatically created and placed on your servers. If you have this box selected, the server will accept service containers. If it is unchecked, no service containers will be deployed to this server.

### Allow Overcommit
Selecting the Allow Overcommit setting will treat the server as if it had twice the amount of available CPU shares. This will lead to a 2x overcommit ratio and the potential for your CPU load to go over its suggested threshold, slowing your processing substantially.

This setting is unsafe for servers in your production cluster.


### Updating a Server
Server tags are a way to give your instances more information for deployment. Cycle will automatically generate a few relevant tags. Add more tags to increase the amount of options you have when deploying containers from the container deploy wizard, through stacks, or programmatically.

Click into the Tags field and start typing the tag you want to add. When ready, press enter. To remove a tag, click the [x] next to it. When you have your tags configured, click Update Server.


### Deleting a Server
If you've decided you no longer need a server and wish to delete it, click the Infrastructure tab on the left-hand nav. Select the server you wish to delete, go to the settings tab and then enter the name of the server into the Delete Server form and hold down the Delete Server button.

:::caution Remove All Instances
All container instances need to be removed from the server before Cycle will allow it to be deleted.
:::