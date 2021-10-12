---
sidebar_label: Instance Console
sidebar_position: 2
---

# Instance Console
It's important to know what's happening inside your container, especially when it comes to debugging. The portal has a built in console that shows you the output of your instance (stdout & stderr). The instance console has a 40KB buffer, so that even if the process dies, you'll be able to have a history of what happened.

:::info Navigate to the Instance Console
1. Go to the environment the container instance resides in.
2. Click on containers from the horizontal navigation and then click the container name.
3. Choose `Instances` from the main modal navigation.
4. Select the instance if there are more than one.
:::

This is the instance dashboard, the console does not connect automatically but will after a few seconds.  To manually connect, and circumvent the connect timer, press the `Connect` button.


This console will show all output from the main process running in the container instance.