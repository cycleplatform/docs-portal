---
sidebar_label: Example Stack Files
sidebar_position: 1
---

# Example Stack Files

With a single file in git repo, you can orchestrate an entire application, from the containers to the infrastructure.

To create a stack, you'll first need to add a JSON file with the name `cycle.json` to the root of your git repository. When you import your stack into Cycle, it will read this file and generate a build, containing all images and configurations needed to deploy your application. By committing this file to your repo, it becomes version tracked, giving you a history of all changes.

Check out our full reference documentation on stack files [here](/reference/stacks/reference/).

An Example Stack (more complete example at very bottom of this page)

```json
{
  "version": "1.0",
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
    "reach": {
      "name": "reach",
      "image": {
        "name": "simplews-external",
        "origin": {
          "type": "docker-file",
          "details": {
            "url": "https://github.com/demouser/demofile.git"
          },
          "context_dir": "/",
          "build_file": "/Dockerfile"
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

## Scoped Variables

<details>
<summary> Click to Open</summary>


```json
{
  "version": "1.0",
  "scoped_variables": [
    {
      "identifier": "CRYPT",
      "scope": {
        "containers": {
          "global": true
        }
      },
      "access": {
        "env_variable": true,
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
        "env_variable": true,
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
        "env_variable": true,
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

## Full Container Config Example

<details>
<summary>Click to Open</summary>

```json
{
  "version": "1.0",
  "about": {
    "version": "1.0",
    "description": "About this stack"
  },
  "containers": {
    "someservice": {
      "name": "someservice",
      "image": {
        "name": "someservice",
        "origin": {
          "type": "docker-hub",
          "details": {
            "target": "alpine:latest",
            "username": "example",
            "password": "password"
          }
        },
        "build": {
          "args": {
            "BUILDTIMEARG": "VALUE",
            "BUILDARG2": "value2"
          }
        }
      },
      "annotations": {
        "Meta": "info about the container",
        "Not": "Used by anything, just annotations"
      },
      "stateful": false,
      "config": {
        "network": {
          "public": "egress-only",
          "hostname": "someservice",
          "ports": ["80:30001"]
        },
        "deploy": {
          "instances": 2,
          "strategy": "first-available",
          "constraints": {
            "node": {
              "tags": {
                "any": ["any", "match", "qualifies", "server"],
                "all": ["must", "match", "every", "tag"]
              }
            }
          },
          "shutdown": {
            "graceful_timeout": "15s",
            "signals": ["SIGKILL"]
          },
          "restart": {
            "condition": "always",
            "delay": "30s",
            "max_attempts": 5
          },
          "health_check": {
            "command": "script.sh",
            "retries": 3,
            "interval": "15s",
            "timeout": "30s",
            "restart": true
          },
          "telemetry": {
            "retention": "36h",
            "interval": "15s",
            "disable": false
          }
        },
        "runtime": {
          "workdir": "/some/dir",
          "command": {
            "path": "node",
            "args": "server"
          },
          "environment_vars": {
            "SOME_ENV_VAR": "VALUE",
            "ANOTHER_ONE": "Example"
          },
          "namespaces": ["ipc", "pid", "uts", "network", "mount", "cgroup"],
          "rlimits": {
            "RLIMIT_NOFILE": {
              "hard": 200000,
              "soft": 180000
            }
          },
          "seccomp": {
            "disable": false
          },
          "privileged": false,
          "capabilities": [
            "CAP_CHOWN",
            "CAP_FSETID",
            "CAP_DAC_OVERRIDE",
            "CAP_FOWNER",
            "CAP_SETFCAP",
            "CAP_SETGID",
            "CAP_SETUID",
            "CAP_KILL",
            "CAP_MKNOD",
            "CAP_NET_BIND_SERVICE",
            "CAP_NET_RAW",
            "CAP_AUDIT_WRITE",
            "CAP_SYS_CHROOT",
            "CAP_SETPCAP",
            "CAP_DAC_READ_SEARCH",
            "CAP_NET_ADMIN",
            "CAP_NET_BROADCAST",
            "CAP_SYS_ADMIN",
            "CAP_SYS_MODULE",
            "CAP_SYS_NICE",
            "CAP_SYS_PACCT",
            "CAP_SYS_PTRACE",
            "CAP_SYS_RAWIO",
            "CAP_SYS_RESOURCE",
            "CAP_SYS_BOOT",
            "CAP_SYS_TIME",
            "CAP_SYS_TTY_CONFIG",
            "CAP_SYSLOG",
            "CAP_AUDIT_CONTROL",
            "CAP_AUDIT_READ",
            "CAP_IPC_LOCK",
            "CAP_IPC_OWNER",
            "CAP_LINUX_IMMUTABLE",
            "CAP_MAC_ADMIN",
            "CAP_MAC_OVERRIDE",
            "CAP_BLOCK_SUSPEND",
            "CAP_LEASE",
            "CAP_WAKE_ALARM"
          ],
          "rootfs": {
            "readonly": false
          }
        },
        "resources": {
          "cpu": {
            "shares": {
              "limit": 5,
              "reserve": 3
            }
          },
          "ram": {
            "limit": "4G",
            "reserve": "1G"
          }
        },
        "integrations": {
          "webhooks": {
            "events": {
              "deploy": "http://post.data.here",
              "start": "http://post.data.here",
              "stop": "http://post.data.here"
            },
            "config": "http://pull.data.from"
          },
          "lets_encrypt": {
            "enable": true,
            "certificate_path": "/var/run/cycle/tls/current.cert",
            "chain_path": "/var/run/cycle/tls/current.chain",
            "key_path": "/var/run/cycle/tls/current.key",
            "bundle_path": "/var/run/cycle/tls/current.bundle",
            "additional_certs_path": "/just/another/path"
          },
          "files": [
            {
              "source": "http://fileserver.com",
              "destination": "/where/files/should/go"
            },
            {
              "source": "http://fileserver2.com",
              "destination": "/where/files/should/go"
            }
          ]
        }
      },
      "mysqlcustom": {
        "name": "mysqlcustom",
        "image": {
          "name": "mysqlcustom",
          "origin": {
            "type": "docker-file",
            "details": {
              "repo": {
                "url": "https://remote-repo.url",
                "branch": "development",
                "auth": {
                  "type": "http",
                  "credentials": {
                    "username": "username",
                    "password": "password"
                  }
                },
                "ref": {
                  "type": "tag",
                  "value": "v1.0.23"
                }
              },
              "context_dir": "/",
              "build_file": "/Dockerfile"
            }
          },
          "stateful": true,
          "config": {
            "network": {
              "public": "disable",
              "hostname": "mysqlcustom",
              "ports": ["3333:3333"]
            },
            "deploy": {
              "instances": 1,
              "stateful": {
                "options": {
                  "use_base_hostname": true
                }
              }
            },
            "integrations": {
              "backups": {
                "destination": "backblaze-b2",
                "backup": {
                  "command": "mysqldump -uusername -ppassword database",
                  "timeout": "900s",
                  "cron_string": "@daily"
                },
                "restore": {
                  "command": "mysqlimport -uusername -ppassword database < /dev/stdin",
                  "timeout": "900s"
                },
                "retention": "3y"
              }
            }
          },
          "volumes": [
            {
              "local": {
                "max_size": "50G",
                "storage_pool": false
              },
              "destination": "/var/lib/mysql",
              "read_only": false,
              "remote_access": {
                "enable": true,
                "password": {
                  "algorithm": "raw",
                  "data": "password"
                }
              }
            }
          ]
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