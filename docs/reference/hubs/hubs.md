# Hubs 
Hubs are a wonderful way to unify compute resources from different cloud providers. This allows you to manage all of your multi cloud environments. Your account can be a member of multiple hubs at the same time, and you can switch between them seamlessly using the portal. There are various roles and granular permissions an account can have within a hub.

## Activity and Audit Log
All actions on Cycle now have a corresponding activity event. These events help show what all is happening on your hub and whether that event was initiated by a fellow hub member or the platform itself. This activity is documented in two different places:


1. The Dashboard
2. The Audit Log

The audit log can be found by clicking settings from the left-hand navigation, and then selecting the tab for  Audit Log.  The audit log shows both activity and events.

### Events
The `Events` tab on the audit log page shows a full list of hub events. 

This is a list of what those events can be:

- api.security_violation
- console.ssh.login
- console.ssh.login.failed
- container.instance.backup.completed
- container.instance.backup.failed
- container.instance.delete.failed
- container.instance.error
- container.instance.failure.max_restarts
- container.instance.function.max_runtime
- container.instance.healthcheck.failed
- container.instance.healthcheck.recovered
- container.instance.healthcheck.restarted
- container.instance.migrate.failed
- container.instance.migration.completed
- container.instance.migration.failed
- container.instance.restart.failed
- container.instance.start.failed
- container.instance.start.privileged
- container.instance.stop.failed
- container.instances.autoscale.down
- container.instances.autoscale.up
- container.reconfigured
- container.service.auto_update
- infrastructure.cluster.resources.ram.full
- infrastructure.server.compute.volumes.base.reconfigured
- infrastructure.server.compute.full_restart
- infrastructure.server.compute.sharedfs.mounts.mount.failed
- infrastructure.server.compute.soft_restart
- infrastructure.server.image.download.failed
- infrastructure.server.internal_api.throttled
- infrastructure.server.manifest.sync.failed
- infrastructure.server.neighbor.reachable
- infrastructure.server.neighbor.rebuild
- infrastructure.server.neighbor.unreachable
- infrastructure.server.neighbor.upgrade
- infrastructure.server.resources.load.high
- infrastructure.server.resources.ram.full
- infrastructure.server.resources.storage.volumes.base.full
- infrastructure.server.resources.storage.cycle_pool.full
- infrastructure.server.sftp.lockdown
- infrastructure.server.sftp.login
- infrastructure.server.sftp.login.failed
- services.vpn.login.failed


## Switching Hubs
Switching between hubs on Cycle is seamless. Once you have created a hub, you'll find it as an option in the navigation menu on the left.

Selecting the toggle will adjust the navigation menu so it lists all available hubs for your account. You'll also see the option to create new hubs here as well. In hub select mode, the main content section will darken. Clicking anywhere in the darkened area will cancel the hub selection.