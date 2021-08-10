---
sidebar_label: Generating API Keys
sidebar_position: 1
---
# Managing API Keys

## Creating An API Key
First, navigate to hub settings, and click API keys from the top nav. Then click Create API key.

When creating an API key on Cycle, capabilities of that key, similar to capabilities of a user, must be set. See a full list of capabilities and their description here. To create the API key enter a name and select the capabilities, then press Create API key.

With the addition of Environment Access Control Lists, you'll need to select which environments this API key can make reads from and which environments it can make changes to.

The first main choice when adding environment access to an API key is if you'd like to give the key access to individual environments or all environments. If you'd like to give access to all environments in the hub, simply click the Allow all environments checkbox and move on. If you'd like to add individual environments to the key, select each environment you'd like to add from the Select Environments dropdown and then choose Read Only or Manage for each environment.

As a reminder, the manage checkbox gives the key access to the capabilities list you'll choose from below this option. Manage represents an access level where you expect to make changes to the environment. Not manage (empty-checkbox), also referred to as read-only access, means that the key will only have access to the read level functionality exposed by the key for the given environments.

After creating the API key, the key itself will be shown one time. Be sure to copy the full key by using the copy utility next to where the key is displayed. Below the key, there will be a full list of the capabilities and a reminder of the capabilities that have been enabled on this key. If changes need to be made, simply click the boxes that need to be added or removed and click Update API key.

## Deleting API Keys
To delete a key simple enter the name in the form on the right hand side of the screen and press the Delete API key button.