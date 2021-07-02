---
sidebar_label: Services
sidebar_position: 1
---

# Services

Cycle is comprised of several different stand-alone services. These services provide all the functionality offered by the platform. Most services listed here are used under the hood by the platform, and users will mostly interact with the platform via the Portal or Public API services.

---

:::info
For live streaming updates of the status of the Cycle platform and it's services, please visit the official [Cycle Status Page](https://status.cycle.io/).
:::

## Cycle Services

| SERVICE NAME  | DESCRIPTION                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------- |
| Nexus         | Communication mesh for Cycle's core services.                                                |
| DNS           | Cycle's Domain Name Service. Provides routing for domains pointed to Cycle's nameservers.    |
| Console       | Cycle's console service. Provides SSH access to containers in a safe and centralized manner. |
| Public        | API Cycle's Public API enables both users and the portal to interact with the platform.      |
| Auth          | Cycle's authorization service.                                                               |
| Manager       | Job scheduling and delegator for Cycle services.                                             |
| Factory       | Cycle's factory service builds container images during stack imports.                        |
| Compute Proxy | The compute proxy service routes requests between the central platform and client servers.   |
| Portal        | The portal provides a user friendly interface for managing containers and infrastructure.    |
