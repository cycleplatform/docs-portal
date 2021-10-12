---
sidebar_label: Backups 
sidebar_position: 20
---


# Container Backups
Stateful containers on Cycle can be set to automatically be backed up.  Currently this integration relies on [setting up Backblaze](/docs/guides/backblaze) as a hub level integration. 

After setting up container backups, using the aforementioned guide, a user can see all backups of a stateful container using the "Backups" option available in the container modal's main navigation.

## Viewing Backups
To view a backup, navigate to the container that has been backed up and select the "Backups" option from the container modal navigation.  

Here you will see all backups that have been created for the given container, as well as a log showing information about the command and other stats for the backup (coming soon!)


![image](https://static.cycle.io/docs/containers/backups.png)



## Restoring Backups
To restore a backup, simply click on the sync icon and select the instance you wish to restore this backup to.  When the backup restore attempt is made, Cycle will run the command you have set in config > integrations > backups > restore and if successful you will see your files have been restored.

:::note Checking Restore 
The current best way to check on your files would be to use the two-way console and check on the files, database tables, or whatever else you may have restored.
:::

