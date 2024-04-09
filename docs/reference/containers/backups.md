---
sidebar_label: Backups
sidebar_position: 20
---

# Container Backups

Stateful containers on Cycle can be set to automatically be backed up. Currently, this integration relies on [setting up Backblaze](/guides/tutorials/backblaze) as a hub level integration.

After setting up container backups, using the aforementioned guide, a user can see all backups of a stateful container using the "Backups" option available in the container modal's main navigation.

## Backup & Restore Commands

:::success Environment Variables
Container environment variables are available to use in backup commands.  If you're using environment variables, wrap the command in `""` so that the substitution happens properly.
:::

The `command` used to create the backups should write to `stdout`. For example: `tar cf - -C /dir/change directory/to/backup` uses the `-` flag to signify the intention to write to `stdout`. Another example is the popular command line tool `mysqldump` which is packaged with most SQL database official images. Given the command: `mysqldump --all-databases -uuser -ppassword`, mysqldump will write all the files to `stdout`.

Similar to creating backups, the `command` used to restore a backup should read from `stdin`. For example the counterpart to the mysqldump command would be: `mysql -uuser -ppassword < /dev/stdin`

This pattern allows for maximum flexibility when crafting backup commands. Users should look to provided tools for the software they are running re:`mysqldump`. This will provide the most reliable way to snapshot or restore files needed, while minimizing the chance of corruption as these tools were meant to be used to facilitate backups.

It is also perfectly valid to invoke a script via the command. The script needs to write to stdout or read from stdin for the respective create & restore functions. If the script is not reachable by traversing the container's path make sure to include the absolute path to the script in the command.


:::note Double Quotes and Variables
Double quotes allow the usage of environment variables when the script   executes). See below for examples.
:::

### MySQL Example



| Operation | Command                                              |
|-----------|------------------------------------------------------|
| Backup    | `"mysqldump --all-databases -u root -p$MYSQL_ROOT_PASSWORD"` |
| Restore   | `"mysql -u root -p $MYSQL_ROOT_PASSWORD < /dev/stdin"`       |


### PostgreSQL Example

| Operation | Command                                               |
|-----------|-------------------------------------------------------|
| Backup    | `"PGPASSWORD=$POSTGRES_PASSWORD pg_dump  -U $POSTGRES_USER --clean -Ft $POSTGRES_DB"` |
| Restore   | `"PASSWORD=$POSTGRES_PASSWORD pg_restore  -U $POSTGRES_USER -Ft  -d $POSTGRES_DB"`      |


### MongoDB Example

| Operation | Command                                         |
|-----------|-------------------------------------------------|
| Backup    | `"mongodump --archive -u $USERNAME -p $PASSWORD"` |
| Restore   | `"mongorestore --archive -u $USERNAME -p $PASSWORD"` |


### Tar Example

| Operation | Command                               |
|-----------|---------------------------------------|
| Backup    | `"tar czf /dev/stdout -C /var/lib/test backup"` |
| Restore   | `"tar xzf /dev/stdin -C /var/lib/test"`         |



## Viewing Backups

To view a backup, navigate to the container that has been backed up and select the "Backups" option from the container modal navigation.

Here you will see all backups that have been created for the given container, basic information about the backup, and data log with output from `stderr`.

:::note STDOUT & STDERR
Some programs print error messages to `stdout` instead of `stderr`, to hedge against missing errors in the backup log Cycle will look for backup exit codes of `not 0` and scan the last 1kb of `stdout` if `stderr` is empty.
:::

![image](https://static.cycle.io/portal-docs/containers/backups.png)

## Managing Backups

### Restore From Backup

To restore from a backup, simply click on the sync icon and select the instance you wish to restore this backup to. When the backup restore attempt is made, Cycle will run the command you have set in config > integrations > backups > restore and if successful you will see your files have been restored.

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
Like infrastructure, backups should always be managed through the Cycle portal or API. Trying to manage backups from the Backblaze portal means that Cycle will have no record of a file change and the state of the edited or removed backups will be broken on the Cycle side resulting in a degraded user experience.
:::
