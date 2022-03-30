---
sidebar_label: Two-Way Console Tips
sidebar_position: 100
---

# Two-Way Console Tips
One of the fastest ways to becoming a Cycle power user is embracing the two-way console.

This guide will cover a couple quick tips that will help you on your journey with this tool. All sections are written in the context of someone who is already logged into a two-way console (twc) session.


## Force Terminate All Sessions for An Instance
Although it is simple enough to expire the connection credentials, if it's necessary to expire all active sessions immediately for a given container instance it is possible to do so by changing the state of the container to stopped and then starting it again. This will force any given connection through the twc to end. 


## Egress Networking For Package Installs
When a container has [`Public Network`](/docs/containers/configuration/networking#public-network) set to `disable`, any attempt at installing packages through a package manager will fail.  changing the network settings to `egress-only` will allow egress connection to package manager repositories, allowing the user to install packages to the running container.  These packages will not be saved between restarts of the container as container filesystems are stateless outside of stateful container volumes.


## CLI's
Some software, SQL databases for example, often come prepackaged with CLI tooling.  Using CLI tools sparingly to interact with a running container can be a great way to get quick answers about an instance's configuration settings and to make quick administrative changes, such as creating a database table or deleting a database user.

### `scenario`
After starting a web service, you notice that calls to the database are failing.  To see if there is any error information being provided by the container, the best thing to check fist is the containers instance console.  

The console reveals that a connection to that database has been denied for `user`@`ip address`.  Using the twc combined with the already installed DB CLI tooling, you're able to connect and make an administrative change to user remote connection privileges.  After making the change, the web service is able to run correctly!



