---
sidebar_label: Backblaze
sidebar_position: 20
---


# Backblaze for Automated Backups
This guide will cover how to set up Backblaze as the provider for stateful container backups.

## Overview
There are 3 main steps to setting up Backblaze for automated backups on Cycle:
1. Backblaze asset creation.
2. Cycle Hub level integration.
3. Container level integration.


## Backblaze setup
If you haven't set up a Backblaze account you can do so as part of this step in just a few moments.
[Backblaze Website Link](https://backblaze.com)

`Creating A Backblaze Bucket & Application Key`


1. Create the bucket:
   * Bucket option requirements:
        * “Files in bucket”, must be private.
        * “Object Lock”, must be disabled.
   * Other options are up to the user, when satisfied create the bucket.
2. Create the key:
   * Under “Account” click on “App Keys”.
   * Scroll down under the master key to add a new “Application Key”.
   * The key should be scoped to the bucket you just created.
 

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
   * `command` - A command to run that results in the files being backed up.
   * `timeout` - A time in seconds to allow the backup script and transfer to take place.
   * `cronstring` - A string using the cron format, that describes how often the backup wiill run.
5. The `restore` fields:
   * `command` - A command to run that will result in the files being restored to the appropriate place for the given container.
   * `timeout` - A time in seconds to allow the restore transfer and command to run. 
   * Use the "Save Config" button to save the integrations changes. 


