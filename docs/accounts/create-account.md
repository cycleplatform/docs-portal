---
sidebar_label: Create Account
sidebar_position: 2
---

# Creating An Account

Your Cycle account is your gateway to the platform. With it, you can create or join hubs, deploy infrastructure, and manage your containers.

---

Use the [Account Wizard](https://portal.cycle.io/signup) to begin the signup process.

1. Enter your name, email address, and password.
2. You will receive an email with a verification code. Enter the code into the box and select **Verify Email**.
3. You've successfully created an account, click the **Login** button to be automatically logged in.

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
            "dir": "/",
            "path": "/Dockerfile"
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
            "url": "https://github.com/demouser/demofile.git",
            "dir": "/",
            "path": "/Dockerfile"
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
