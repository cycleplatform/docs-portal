---
sidebar_label: Backblaze
sidebar_position: 20
---

# Automated Backups

This guide will cover how to set up Backblaze as the provider for stateful container backups.

## Overview

There are 3 main steps to setting up Backblaze for automated backups on Cycle:

1. Backblaze asset creation.
2. Cycle Hub level integration.
3. Container level integration.

## Backblaze setup

If you haven't set up a Backblaze account you can do so as part of this step in just a few moments.
[Backblaze Signup Page](https://www.backblaze.com/b2/sign-up.html?referrer=compute&utm_source=Partner&utm_medium=cycle-announcement&utm_campaign=10-gb-free&utm_content=cta).

`Creating A Backblaze Bucket & Application Key`

1. Create the bucket:
   - Bucket option requirements:
     - “Files in bucket”, must be private.
     - “Object Lock”, must be disabled.
   - Other options are up to the user, when satisfied create the bucket.
2. Create the key:
   - Under “Account” click on “App Keys”.
   - Scroll down under the master key to add a new “Application Key”.
   - The key should be scoped to the bucket you just created.

## Cycle Setup

`Cycle Hub Level Integration`

1. Navigate to [Cycle](https://portal.cycle.io) and log into the desired hub.
2. Click settings on the left hand navigation - from there select “Integrations”.
3. Paste the “Application Key” key, key ID, and the bucket name into the form fields under Backblaze.
4. Save the changes using the “Update Integrations” button.

The container to be backed up must be a stateful container, if a container is not stateful the backup integration option in the container config will be disabled.

`Cycle Container Level Integration`

1. Navigate to the container that is to have automatic backups enabled.
2. Enter the container modal and click on Config > Integrations > Backups.
3. Enter the source name `backblaze-b2`.
4. The `backup` fields:
   - `command` - A command to run that results in the files being backed up.
   - `timeout` - A time string to allow the backup script and transfer to take place. This accepts a string with modifiers. Example for 3 days 15 hours 10 minutes 5 seconds `3d15h10m5s`
   - `cronstring` - A string using the cron format, that describes how often the backup wiill run.
5. The `restore` fields:
   - `command` - A command to run that will result in the files being restored to the appropriate place for the given container.
   - `timeout` - A time string to allow the restore transfer and command to run.
   - Use the "Save Config" button to save the integrations changes. This accepts a string with modifiers. Example for 3 days 15 hours 10 minutes 5 seconds `3d15h10m5s`

:::info Cron String
If you're new to cron and want to know how to format a cron string, [this page](https://crontab.guru/) has an interactive formatter.
:::

## Backup & Restore `Commands`

The `command` used to create the backups should write to `stdout`. For example: `tar cf - -C /dir/change directory/to/backup` uses the `-` flag to signify the intention to write to `stdout`. Another example is the popular command line tool `mysqldump` which is packaged with most SQL database official images. Given the command: `mysqldump --all-databases -uuser -ppassword`, mysqldump will write all the files to `stdout`.

Similar to creating backups, the `command` used to restore a backup should read from `stdin`. For example the counterpart to the mysqldump command would be: `mysql -uuser -ppassword < /dev/stdin`

This pattern allows for maximum flexibility when crafting backup commands. Users should look to provided tools for the software they are running re:`mysqldump`. This will provide the most reliable way to snapshot or restore files needed, while minimizing the chance of corruption as these tools were meant to be used to facilitate backups.

It is also perfectly valid to invoke a script via the command. The script needs to write to stdout &or read from stdin for the respective create & restore functions. If the script is not reachable by traversing the container's path make sure to include the absolute path to the script in the command.
