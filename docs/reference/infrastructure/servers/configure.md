---
sidebar_label: Configure
sidebar_position: 2
---

# Server Configure

The server configuration page allows users to create file systems directly on the host that can be mounted into containers.

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
