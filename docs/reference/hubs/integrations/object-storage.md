---
sidebar_label: Object Storage
sidebar_position: 3
---


# Object Storage Integration
Cycle currently offers an object storage integration through Backblaze. This integration is used in conjunction with [automated container backups](/reference/containers/backups).


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
2. Click Hubs on the left hand navigation - from there select “Integrations”.
3. Click on the Backblaze integration and then `Add Integration` button.
3. Paste the “Application Key” key, key ID, and the bucket name into the form fields under Backblaze.
4. Save the changes using the “Add” button.