---
sidebar_label: Environment Metadata File
sidebar_position: 2
---


# Environment Metadata File

Each container has a file mounted to `/var/run/cycle/metadata/environment.json` that has information about the environment the container is in.  Here you can find information about the environment, deployments, networking, and services.  

This file is available at runtime, so if you have a container that needs to consume any of this information as part of an ENTRYPOINT script, you'd have access to it.  

```json
{
    "id": "65b93b8dee5a5e8d87b2bd13",
    "deployments": {
        "tags": {
            "current": "v2.0.2",
            "demo": "v2.0.0",
            "live": "v8.9.10",
            "test": "v8.9.10"
        }
    },
    "private_network": {
        "vxlan_tag": 361,
        "subnet": "d600",
        "ipv6": {
            "ip": "fd00::d600:0:0:0",
            "cidr": "fd00::d600:0:0:0/80"
        },
        "legacy": null
    },
    "services": {
        "discovery": {
            "enable": true,
            "container_id": "65b93b8df9aadae178915a2e",
            "high_availability": false,
            "auto_update": false,
            "config": null
        },
        "vpn": {
            "enable": true,
            "container_id": "65b93b8df9aadae178915a32",
            "high_availability": false,
            "auto_update": false,
            "config": null
        },
        "loadbalancer": {
            "enable": true,
            "container_id": "65b93b8df9aadae178915a37",
            "high_availability": false,
            "auto_update": true,
            "config": null
        },
        "scheduler": {
            "enable": true,
            "container_id": "65b93b8df9aadae178915a39",
            "high_availability": false,
            "auto_update": false,
            "config": null
        }
    }
}
```