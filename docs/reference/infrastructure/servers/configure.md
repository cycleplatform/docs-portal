---
sidebar_label: Configure
sidebar_position: 2
---

# Server Configure

The server configuration page allows users to create file systems directly on the host that can be mounted into containers.

## Reconfigure Server

:::success No Restart Needed
The reconfigure server button will not restart the server and you should expect no service interruptions when enabling or disabling this feature.
:::

### Allow SFTP

By default SFTP connections will not be available on a newly deployed server. Simply stated, the fewer ports open on a host machine, the more secure that machine is.

To enable SFTP connections on your server, simply navigate to the server settings page, select the checkbox to enable, and click the Reconfigure Server button.


### Custom Base Volume Size

A base volume is how much space should be set aside for images on this server. If a user wishes to increase this amount they can using this form.

:::danger Increase Only
The custom base volume setting can only be increased, as a decrease could result in the corruption of the images stored in that volume.
:::


## Shared Mounts

The shared mounts option is meant for users that wish to mount a file system that is remote to the host it will be mounted on.

The first step in creating a shared mount is to enter an identifier and press the `+` button.

- **Type** - The filesystem type.
- **Options** - Filesystem mount options.
- **Source** - Where is the source of the data?

example for an NFS mount through EFS on AWS.

- type - `nfs4`
- options - `nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport,addr=ip address`
- source - `:/`

## Shared Directories

The shared directories option is a much simpler form. Shared directories only require an identifier and each entry represents a directory on the host that can be consumed by any container.
