---
sidebar_label: Example Stack Files
sidebar_position: 2
---

# Example Stack Files

With a single file in git repo, you can orchestrate an entire application, from the containers to the infrastructure.

To create a stack, you'll first need to add a JSON file with the name `cycle.json` to the root of your git repository. When you import your stack into Cycle, it will read this file and generate a build, containing all images and configurations needed to deploy your application. By committing this file to your repo, it becomes version tracked, giving you a history of all changes.


:::info Hand Written Stacks
These stack examples are maintained by hand, where the stack spec and the rest of the stack documentation is auto generated off the spec. If you do find a discrepancy please let us know via [Slack](https://slack.cycle.io)!
:::

## Example Stack 
We've prepared this [repo](https://github.com/cycleplatform/stack-demo/tree/main) with a demonstration stack file.  

The repo has a README with some information on how to use the services.  

The stack defines two services: 

1. A node api that serves a few endpoints related to a todo application.
2. A Redis service that acts as the data store.

The application is meant to be run as a stateless set, so restarting the containers will reset the data on the Redis volume. 

```json
{
    "version": "1.0", 
    "about": {
        "description": "A demonstration stack with a simple CRUD API connected to redis.", 
        "version": "1.0.0"
    },
    "containers": {
        "api": {
            "name": "api",
            "stateful": false,
            "image": {
                "name": "api",
                "origin": {
                    "type": "docker-file",
                    "details": {
                        "build_file": "/Dockerfile",
                        "context_dir": "/"
                    }
                }
            },
            "config": {
                "network": {
                    "hostname": "api",
                    "ports": ["80:5000", "443:5000"],
                    "public": "enable"
                },
                "deploy": {
                    "instances": 1,
                    "strategy": "first-available",
                    "health_check": {
                        "command": "./health-check.sh",
                        "delay": "15s",
                        "interval": "15s",
                        "retries": 3,
                        "restart": true,
                        "timeout": "30s"
                    }
                }
            }
        },
        "redis": {
            "name": "redis",
            "stateful": false,
            "image": {
                "name": "redis",
                "origin": {
                    "type": "docker-hub", 
                    "details": {
                        "target": "redis:latest"
                    }
                }
            },
            "config": {
                "network": {
                    "hostname": "redis",
                    "ports": ["6379:6379"],
                    "public": "disable"
                },
                "deploy": {
                    "instances": 1
                }
            }
        }
    }
}
```

## Scoped Variables

<details>
<summary> Click to Open</summary>


```json
{
  "version": "1.0",
  "scoped_variables": [
    {
      "identifier": "encrypted",
      "scope": {
        "containers": {
          "global": true
        }
      },
      "access": {
        "env_variable": {
          "key": "ENCRYPTED"
        },
        "internal_api": {},
        "file": {}
      },
      "source": {
        "type": "raw",
        "details": {
          "value": "4a2e78b5403700d9cdfb5510f6361bc4ddb4a4af111e6fe3a5b70a9d9875ba33a82c5b890fe131465a1a3cb38b99b8eb",
          "secret": {
            "iv": "u4L2w6Qcm3On3duuA4U+gA==",
            "hint": "e8e56823f631edf06d98499e1fd8cb5eedf028344d38d7087550ae917bd79fb3"
          },
          "blob": false
        }
      }
    },
    {
      "identifier": "stackone",
      "scope": {
        "containers": {
          "global": true
        }
      },
      "access": {
        "env_variable": {
          "key": "STACKONE"
        },
        "internal_api": {},
        "file": {}
      },
      "source": {
        "type": "raw",
        "details": {
          "value": "STACKONEVALUE",
          "secret": null,
          "blob": false
        }
      }
    },
    {
      "identifier": "urltype",
      "scope": {
        "containers": {
          "global": true
        }
      },
      "access": {
        "internal_api": {
          "duration": "15m"
        },
        "file": {
          "path": "/somepath/urltype.json",
          "decode": false
        }
      },
      "source": {
        "type": "url",
        "details": {
          "url": "https://someurl.com/config",
          "headers": { "X-Custom-Test-Header": "SOMEVALUE" },
          "auth_token_url": "https://someurl.com/auth"
        }
      }
    }
  ],
  "containers": {
    "demo": {
      "name": "demo",
      "image": {
        "name": "simplews",
        "origin": {
          "type": "docker-file",
          "details": {
            "context_dir": "/",
            "build_file": "/Dockerfile"
          }
        }
      },
      "config": {
        "network": {
          "public": "enable",
          "hostname": "simplews",
          "ports": ["80:80"]
        },
        "deploy": {
          "instances": 1
        }
      }
    },
    "remote": {
      "name": "remote",
      "image": {
        "name": "simplews-external",
        "origin": {
          "type": "docker-file",
          "details": {
            "repo": {
              "url": "https://github.com/username/repo.git"
            },
            "context_dir": "/",
            "build_file": "/Dockerfile"
          }
        }
      },
      "config": {
        "network": {
          "public": "enable",
          "hostname": "simplews",
          "ports": ["80:80"]
        },
        "deploy": {
          "instances": 1
        }
      }
    }
  }
}
```
</details>


## Example Services Struct with V1 LB

<details>
<summary>Click to Open</summary>


```json
{
  "version": "1.0",
  "services": {
    "vpn": {
      "auth": {
        "cycle_accounts": true,
        "vpn_accounts": true
      },
      "allow_internet": true
    },
    "discovery": {
      "hosts": {
        "host.to.resolve": {
          "ipv4": ["1.2.3.4", "2.3.4.5", "5.6.7.8"]
          "ipv6": ["d624:285d:27c5:5dd9:f500:de62:d858:a23d", "f608:49da:8282:4f7c:ca18:8107:12d1:72d6",  "83a7:e8f2:60f8:f0eb:a2ff:4001:4856:479"]
        }
      }
    },
    "loadbalancer": {
      "type": "v1",
      "ipv4": true,
      "ipv6": true,
      "details": {
        "controllers": {
          "1194": {
            "identifier": "default-1194",
            "transport": {
              "mode": "tcp",
              "config": {
                "performance": false,
                "ingress": {
                  "port": 1194,
                  "tls": null
                },
                "timeouts": {
                  "idle": "15m"
                }
              },
              "routers": [
                {
                  "match": {
                    "domains": null,
                    "internal_port": null
                  },
                  "mode": "round-robin",
                  "config": {
                    "sticky_sessions": true,
                    "destination_retries": 3,
                    "timeouts": {
                      "destination_connection": "3s"
                    }
                  }
                }
              ]
            }
          },
          "443": {
            "identifier": "default-443",
            "transport": {
              "mode": "http",
              "config": {
                "performance": false,
                "ingress": {
                  "port": 443,
                  "tls": {
                    "enable": true,
                    "server_name": null,
                    "allow_insecure": null,
                    "client_auth": null
                  }
                },
                "timeouts": {
                  "idle": "60s"
                },
                "extension": {
                  "type": "http",
                  "details": {
                    "connections": {
                      "max_idle_conns_per_connection": 5
                    }
                  }
                }
              },
              "routers": [
                {
                  "match": {
                    "domains": null,
                    "internal_port": null
                  },
                  "mode": "round-robin",
                  "config": {
                    "sticky_sessions": true,
                    "destination_retries": 3,
                    "timeouts": {
                      "destination_connection": "3s"
                    },
                    "extension": {
                      "type": "http",
                      "details": {
                        "redirect": null,
                        "forward": {
                          "scheme": "http"
                        }
                      }
                    }
                  }
                },
                {
                  "match": {
                    "domains": null,
                    "internal_port": [443, 8443]
                  },
                  "mode": "round-robin",
                  "config": {
                    "sticky_sessions": true,
                    "destination_retries": 3,
                    "timeouts": {
                      "destination_connection": "3s"
                    },
                    "extension": {
                      "type": "http",
                      "details": {
                        "redirect": null,
                        "forward": {
                          "scheme": "https"
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "80": {
            "identifier": "default-80",
            "transport": {
              "mode": "http",
              "config": {
                "performance": false,
                "ingress": {
                  "port": 80,
                  "tls": null
                },
                "timeouts": {
                  "idle": "60s"
                },
                "extension": {
                  "type": "http",
                  "details": {
                    "connections": {
                      "max_idle_conns_per_connection": 5
                    }
                  }
                }
              },
              "routers": [
                {
                  "match": {
                    "domains": null,
                    "internal_port": [80]
                  },
                  "mode": "round-robin",
                  "config": {
                    "sticky_sessions": true,
                    "destination_retries": 3,
                    "timeouts": {
                      "destination_connection": "3s"
                    },
                    "extension": {
                      "type": "http",
                      "details": {
                        "redirect": {
                          "auto_https_redirect": true,
                          "port": null,
                          "scheme": null,
                          "url": null
                        },
                        "forward": {
                          "scheme": "http"
                        }
                      }
                    }
                  }
                },
                {
                  "match": {
                    "domains": null,
                    "internal_port": [443, 8443]
                  },
                  "mode": "round-robin",
                  "config": {
                    "sticky_sessions": true,
                    "destination_retries": 3,
                    "timeouts": {
                      "destination_connection": "3s"
                    },
                    "extension": {
                      "type": "http",
                      "details": {
                        "redirect": null,
                        "forward": {
                          "scheme": "https"
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "8812": {
            "identifier": "default-8812",
            "transport": {
              "mode": "tcp",
              "config": {
                "performance": false,
                "ingress": {
                  "port": 8812,
                  "tls": null
                },
                "timeouts": {
                  "idle": "20s"
                }
              },
              "routers": [
                {
                  "match": {
                    "domains": null,
                    "internal_port": null
                  },
                  "mode": "round-robin",
                  "config": {
                    "sticky_sessions": false,
                    "destination_retries": 3,
                    "timeouts": {
                      "destination_connection": "3s"
                    }
                  }
                }
              ]
            }
          }
        }
      }
    }
  },
  "containers": {}
}
```
</details>