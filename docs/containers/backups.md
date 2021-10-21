---
sidebar_label: Backups 
sidebar_position: 20
---


# Container Backups
Stateful containers on Cycle can be set to automatically be backed up.  Currently, this integration relies on [setting up Backblaze](/docs/guides/backblaze) as a hub level integration. 

After setting up container backups, using the aforementioned guide, a user can see all backups of a stateful container using the "Backups" option available in the container modal's main navigation.

## Viewing Backups
To view a backup, navigate to the container that has been backed up and select the "Backups" option from the container modal navigation.  

Here you will see all backups that have been created for the given container, basic information about the backup, and data log with output from `stderr`.

:::note STDOUT & STDERR
Some programs print error messages to `stdout` instead of `stderr`, to hedge against missing errors in the backup log Cycle will look for backup exit codes of `not 0` and scan the last 1kb of `stdout` if `stderr` is empty.
:::


![image](https://static.cycle.io/docs/containers/backups.png)



## Managing Backups
### Restore From Backup
To restore from a backup, simply click on the sync icon and select the instance you wish to restore this backup to.  When the backup restore attempt is made, Cycle will run the command you have set in config > integrations > backups > restore and if successful you will see your files have been restored.

:::note Checking Restore 
The current best way to check on your files would be to use the two-way console and check on the files, database tables, or whatever else you may have restored.
:::

### Deleting Backups
If a container is deleted all backups created for the container will be automatically removed as well.

To remove individual backup(s) from the list of backups for a given container:

1. Navigate to the **Backups** page.
2. Mark the checkbox on the backup(s) to be removed.
3. Press the **Delete Backup** button.

:::caution Deleting Backups Properly
Like infrastructure, backups should always be managed through the Cycle portal or API.  Trying to manage backups from the Backblaze portal means that Cycle will have no record of a file change and the state of the edited or removed backups will be broken on the Cycle side resulting in a degraded user experience. 
:::
