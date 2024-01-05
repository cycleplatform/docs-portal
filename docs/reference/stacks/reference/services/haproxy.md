---
sidebar_label: HAProxy Details
sidebar_position: 4
---

# HAProxy Details

:::note Objects
For each object defined in a table, you can find information about the contents of that object in a section below that table. To make this simpler the navigation on the side of the page will show a cascading depth where possible.
:::

| Field     | Type                   | Required | Description                                                                                                      |
| --------- | ---------------------- | :------: | ---------------------------------------------------------------------------------------------------------------- |
| `default` | Object                 |    ✅    | Any port not defined to have specific settings in the ports object falls under default configuration.            |
| `ports`   | Record<String, Object> |    ❌    | A port as a key that points to a frontend and backend settings object that specifies the specific port settings. |

## Default

| Field      | Type   | Required | Description                      |
| ---------- | ------ | :------: | -------------------------------- |
| `frontend` | Object |    ❌    | Frontend load balancer settings. |
| `backend`  | Object |    ❌    | Backend load balancer settings.  |

## Frontend

| Field             | Type   | Required | Description                                                             |
| ----------------- | ------ | :------: | ----------------------------------------------------------------------- |
| `mode`            | String |    ✅    | Can be `tcp` or `http`, set for the desired load balancing mode.        |
| `max_connections` | Number |    ❌    | The maximum number of connections for the load balancer (per instance). |
| `timeout`         | Object |    ❌    | Timeout settings.                                                       |

### Timeout

| Field                | Type   | Required | Description                                                                                                                                                                                                                                                |
| -------------------- | ------ | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_secs`        | Number |    ❌    | The number of seconds the load balancer will wait for a response from a client before disconnecting.                                                                                                                                                       |
| `client_fin_ms`      | Number |    ❌    | The number of milliseconds the load balancer will wait for a client to send it data when one direction is already closed. This is particularly useful to avoid keeping connections in a waiting state for too long when clients do not disconnect cleanly. |
| `http_keep_alive_ms` | Number |    ❌    | The number of milliseconds the load balancer will wait for a new HTTP request to start coming after a response was set. See the HAProxy Docs for more information.                                                                                         |
| `http_request_ms`    | Number |    ❌    | The number of milliseconds the load balancer will wait for a complete HTTP request. See the HAProxy Docs for more information.                                                                                                                             |

## Backend

| Field     | Type   | Required | Description                                                              |
| --------- | ------ | :------: | ------------------------------------------------------------------------ |
| `balance` | String |    ✅    | Can be any of `roundrobin`, `static-rr`, `leastconn`, `first`, `source`. |
| `timeout` | Object |    ❌    | Timeout settings.                                                        |

- Balance - How connections are balanced across your container instances
  - Round Robin - Each container instance is used in turns.
  - Static Round Robin - Each container instance is used in turns, but is faster than Round Robin at the expense of being less dynamic.
  - Least Connection - Routes traffic to the instance with the least number of active connections.
  - First - Routes traffic to the first available instance.
  - Source - The same client IP always reaches the same container instance as long as no instance goes down or up.

### Timeout

| Field           | Type   | Required | Description                                                                                                                            |
| --------------- | ------ | :------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| `server_secs`   | Number |    ❌    | The number of milliseconds the load balancer will wait for the server to send data when one direction is already closed`.              |
| `server_fin_ms` | Number |    ❌    | The number of milliseconds the load balancer will wait for a successful connection to a container instance.                            |
| `connect_ms`    | Number |    ❌    | The number of milliseconds the load balancer will hold connections in a queue when the maximum number of connections has been reached. |
| `queue_ms`      | Number |    ❌    | The number of milliseconds the load balancer will allow for inactivity on a bidirectional tunnel.                                      |

## Ports

The ports record simply reuses the default object configuration `frontend` and `backend`

<details>
    <summary>Example of applying frontend and backend to a port record entry</summary>

```json
"ports": {
      "60194": {
        "frontend": {
          "mode": "tcp",
          "max_connections": 50,
          "timeouts": {
            "client_secs": 8,
            "client_fin_ms": null,
            "http_keep_alive_ms": null,
            "http_request_ms": null
          }
        },
        "backend": {
          "balance": "source",
          "timeouts": {
            "server_secs": 8,
            "server_fin_ms": null,
            "connect_ms": 500,
            "queue_ms": 500,
            "tunnel_secs": null
          }
        }
      }
    }
```

</details>
