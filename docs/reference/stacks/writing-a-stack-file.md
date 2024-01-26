---
sidebar_label: Writing a Stack File
sidebar_position: 1
---

# Writing a Stack File

With a single file in git repo, you can orchestrate an entire application, from the containers to the infrastructure.

To create a stack, you'll first need to add a JSON file with the name `cycle.json` to the root of your git repository. When you import your stack into Cycle, it will read this file and generate a build, containing all images and configurations needed to deploy your application. By committing this file to your repo, it becomes version tracked, giving you a history of all changes.

Check out our full documentation on stack files [here](/reference/stacks/reference/).

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

## Finalize

As mentioned at the top of this article, you will need to save your stack to a `cycle.json` file and commit it up to the root of a git repo. If you wish to test your stack first, you can paste in your raw JSON file into the portal.

:::warning

The following example is meant for type and entry checking and will not work if you copy directly into a repo.

:::

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
