---
sidebar_label: Two Way Console
sidebar_position: 3
---

# Two Way Console
The two way console makes it possible to access your running containers in a secure and isolated way . This can be a powerful way to debug a running container.

### How It Works
The two way console is a separate service run by Cycle, that gives you access to a running container via an interactive shell. This service does not install anything into your container, or expose it in any way. Instead, your SSH program is pointed to a generated endpoint (based on instance ID) at console.cycle.io. The SSH protocol is then translated into a format that the platform understands, giving you a secure, non-invasive way to interact with your containers.

### Navigating and Connecting to the Two Way Console
Shortcut to the instance panel by clicking the container tile available on the environment select screen and then selecting instances.


* Click the **Environments** tab on the navigation menu to the left.
* Select the environment the container instance you want to access is in.
* Click the **Containers** tab under the environment name.
* Select the container from the list.
* Click the **Instances** tab under the container name.
* Select the specific instance you want to view from the list.
* Find the  button in the top right of the modal which will show the credentials.
* Copy the SSH command and paste it in your terminal.
* Copy the password and paste it in your terminal.