---
sidebar_label: Integrations
sidebar_position: 5
---

# Integrations

![container integrations](https://static.cycle.io/portal-docs/containers/integrations.png)

Container integration configuration exposes multiple integration options to users.

To navigate to a container integration settings go to any container and select the `Config` navigation option. From there select `Integrations` from the sub menu.

There are four options when setting up container integrations:

## Files

The files integration has a `Source` and `Destination` setting for each entry. The source entry is an endpoint serving the files and the destination is where the file should be written to in the container.

## Shared Directories

Shared directories allow for a shared directory between containers running on the same host.

These directories are defined as identifiers in the [server configuration](/docs/infrastructure/servers/configure).

This integration has three parts:

1. Identifier - think of this as a key that can be used to identify which directory you'd like the given container to have access to.
2. Writable - a boolean where true means the given container can write to the directory.
3. Mount Point - where in the container to mount the shared directory.

:::success Mount Points
The mount point can be a directory that does not yet exist on the container. For example `/app/shared` can be used and if that directory does not exist on the host it will be added.
:::

## Let's Encrypt

Allows the user to control where TLS certificates are installed for a container. Using this option on a container means that you'll be reserving a specific inbound port as the loadbalancer will have no information other than port to route the traffic if the connection is still encrypted.

To create a TLS certificate, you'll need to set up a [DNS Zone](https://docs.cycle.io/docs/dns/zones/overview). This doesn't mean that the container needs to have public networks enabled.

Choosing the checkbox under enable will install all four options to the default location `/var/run/cycle/tls/*` where `*` represents the specific asset path. If you wish to change which files are copied to your container, and the path they are copied to - simply click the **customize** checkbox next to the files you want and fill in the path you wish to install the certs to or leave the default path in place.

## Webhooks

The integration webhooks represent the 4 different types of events that can be hooked into for this container.

**start** - An endpoint to hit when the container starts.
**stop** - An endpoint to hit when the container stops.
**deploy** - An endpoint to his when a deploy event happens (tied to stack deployments).
**config** - An endpoint that hosts a container config object to be used for granular configuration changes at runtime.

## Backups

Stateful containers on Cycle can be set to automatically be backed up. Currently, this integration relies on [setting up Backblaze](/docs/guides/backblaze) as a hub level integration.

After setting up container backups, using the aforementioned guide, a user can see all backups of a stateful container using the "Backups" option available in the container modal's main navigation.

## Viewing Backups

To view a backup, navigate to the container that has been backed up and select the "Backups" option from the container modal navigation.

Here you will see all backups that have been created for the given container, basic information about the backup, and data log with output from `stderr`.

:::note STDOUT & STDERR
Some programs print error messages to `stdout` instead of `stderr`, to hedge against missing errors in the backup log Cycle will look for backup exit codes of `not 0` and scan the last 1kb of `stdout` if `stderr` is empty.
:::

![backups dashboard](https://static.cycle.io/portal-docs/containers/backups.png)

## Managing Backups

### Restore From Backup

To restore from a backup, simply click on the sync icon and select the instance you wish to restore this backup to. When the backup restore attempt is made, Cycle will run the command you have set in config > integrations > backups > restore and if successful you will see your files have been restored.

:::note Checking Restore
The current best way to check on your files would be to use the two-way console and check on the files, database tables, or whatever else you may have restored.
:::

### Deleting Backups

If a container is deleted all backups created for the container will be automatically removed as well.

To remove individual backup(s) from the list of backups for a given container:

1. Navigate to the **Backups** page.
2. Mark the checkbox on the backup(s) to be removed.
3. Press the **Delete Backup** button.

:::caution Deleting Backups Properly
Like infrastructure, backups should always be managed through the Cycle portal or API. Trying to manage backups from the Backblaze portal means that Cycle will have no record of a file change and the state of the edited or removed backups will be broken on the Cycle side resulting in a degraded user experience.
:::
