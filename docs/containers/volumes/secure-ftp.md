---
sidebar_label: SFTP
sidebar_position: 2
---

# SFTP

SFTP is file transfer over a shell session. When remote access to volumes is enabled, Cycle creates an endpoint on your server that allows you to manage files in your instance volumes, regardless of whether they are public, private, started or stopped.

It's important to note that Cycle does NOT install SFTP into your container, or modify it in any way. A secure socket connection is created between CycleOS on your servers, and the central Cycle platform. The central platform creates an SFTP endpoint that your client connects to, ensuring no unnecessary security vulnerabilities are created.

Each instance of your container will have its own credentials. You can find those credentials on the instance dashboard.

:::note Navigating to the SFTP Connection Modal
Shortcut to the instance panel by clicking the container tile available on the environment select screen and then selecting instances.

* Click the **Environments** tab on the navigation menu to the left.
* Select the environment the container instance you want to access is in.
* Click the **Containers** tab under the environment name.
* Select the container from the list.
* Click the **Instances** tab under the container name.
* Select the specific instance you want to view from the list.
* Scroll down below the instnace console connection to the **Volumes** section on the instance dashboard.
* If your volume has remote access enabled there will be a small blue file icon indicating the connection information modal is available.
:::

One thing you might notice in this image is the volume size. It says 925MB as the maximum. This is due to the need for an index on each volume that communicates with the underlying OS and says where things are. So in this case a 1GB volume becomes a 925MB volume to accommodate the index.

### Viewing Connection Information
If remote access is enabled, there will be an SFTP connection modal available to view with all the connection information necessary for your SFTP client.

In the bottom right of the modal, you'll see the button "Open in SFTP Application". Click this button to automatically launch an SFTP program installed on your computer (such as FileZilla). If your password type is set to "Raw", you will automatically be logged in! For other password types, your SFTP client will most likely ask you for a password. Be sure to enter your actual, non-hashed password.

If your computer is not set up with a default SFTP application, simply copy and paste the values from the modal into your FTP client.

:::info
If you copy and paste the values be sure that you're using the port 2022 instead of port 22
:::
