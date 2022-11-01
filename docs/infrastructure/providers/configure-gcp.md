---
sidebar_label: Configure GCP
sidebar_position: 5
---

# Configuring GCP

Use this guide to configure the assets you'll need to use AWS as a provider on Cycle.

:::info
This guide assumes the user has already signed up for a [GCP](https://cloud.google.com/) account.
:::

## Initial Project Setup & Compute Engine Activization

Connecting GCP to Cycle is done through a configuration file which can be downloaded after creating the appropriate project and user.

1. Log into the GCP account and create a new project by clicking on the projects dropdown at the top of the page and selecting the "New Project" button in the modal.
2. After the new project is created, enable the "Compute Engine API" by using the search bar to navigate to the compute engine.

### Create Credentials

After compute engine has been enabled, head over to credentials by typing credentials in the search bar and selecting "Credentials: APIs & Services".

From this screen, make sure you have the "Enabled APIs & Services" tab selected and then click on "Compute Engine API".

Next, click on "Create Credentials" and then under the section that reads `What data will you be accessing` select "Application data".

:::note
If you're asked whether you'll be using any other services with this credential, select "No" unless you have a strict usecase you've talked with someone on the Cycle team about adding them.
:::

Give the service account a name and click "Done". This is the service account that will be used in conjunction with Cycle to grant access to the GCP Compute Engine API and will also be used when adding permissions to the service account in the next step.

### IAM Roles

Use the search bar to go to the IAM section of GCP. Click on the "Grant Access" button at the top of the screen. For the name of the "principal" add the name of the service account you just created (if you start typing the name the autofill option should show up).

There are two roles needed:

1. Compute Admin
2. Storage Admin

:::danger Compute Storage Admin
Compute Storage Admin is not the same as Storage Admin. Even if you type Storage Admin in the roles search box, you may have to scroll quite a ways to get to it.  
:::

### Generate Keys

Navigate to the service account you've just created and click on the "Keys" tab located on the horizontal navigation.

Click "Add Key" and then select `JSON` and finish the process. This will generate a download to your computer holding the files necessary to connect GCP to Cycle.

## Hooking Up The Cycle Side

Head back to your Cycle hub:

1. Click on "Infrastructure" in the main navigation.
2. Select "Add Provider" & then "GCP" from the dropdown.
3. Paste the entire contents of the JSON file you downloaded into the box and submit.

Congratulations, you're now ready to use GCP as an infrastructure provider on Cycle!
