---
sidebar_label: Volume Configuration
sidebar_position: 1
---

# Volume Configuration and Management

The Volumes settings page shows a list of all volumes configured on a given container as well as a volume config for each identified volume.

:::note Navigating to the Volume Configuration Page

- Click the **Environments** tab on the navigation menu to the left.
- Select the environment the container you want to modify is in.
- Click the **Containers** tab under the environment name.
- Select the container from the list.
- Click the **Volumes** tab under the container name.
  :::

### Volume Config

To see information about a given volume, select it from the list of configured volumes, identified by the path the volume.

**Max Size** - the maximum size this volume can grow to.

**Read Only** - If the read only checkbox is checked this volume cannot be written to.

:::info Storage Pool
If the server the instance is being deployed to has more than one disk and one or more of those disks are 2TB or larger, storage pool can be set to enabled to signify that the instance should create its volume from the space on larger disk.
:::

### Remote Access

If enabled, the remote access section allows the user to change information on the currently configured for volume remote access.

:::caution SFTP Server Settings
If the server your instance is deployed to does not have [SFTP connections enabled](https://docs.cycle.io/docs/infrastructure/settings), you'll need to enable it before you can connect using the SFTP tool.
:::

**Enable** - Remote access is enabled.

**Algorithm** - The type of algorithm used to hash the password

- **Raw** - Cycle will use the password exactly as you type it in. When accessing an instance volume, you will type the same password into your SFTP client that you have set in this box.

- **SHA512** - A hashed version of your password. Run your password through a SHA512 generator, and paste the hash into the field.

:::info Online Hash Generators  
It is not recommended using an online SHA512 hash generator, since the purpose of this type of password is that it is not sent insecurely or stored by Cycle. When authenticating with your SFTP client, you will use your original, unhashed password to log in.
:::

- **MD5** - Another type of hashed password, this one will not be as secure as SHA512, and is not recommended, but Cycle will support it.

**Password** - The hashed (or raw) password.

**Authorized Ips** - Allow any IP is the default setting but if a list of IP addresses is provided, SFTP connections will only be allowed if the origin of the request is an IP on the list.
