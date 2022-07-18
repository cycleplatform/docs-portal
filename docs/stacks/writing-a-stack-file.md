---
sidebar_label: Writing a Stack File
sidebar_position: 1
---

# Writing a Stack File

With a single file in git repo, you can orchestrate an entire application, from the containers to the infrastructure.

To create a stack, you'll first need to add a JSON file with the name `cycle.json` to the root of your git repository. When you import your stack into Cycle, it will read this file and generate a build, containing all images and configurations needed to deploy your application. By committing this file to your repo, it becomes version tracked, giving you a history of all changes.

Check out our full documentation on stack files [here](/docs/stacks/reference/ref).

An Example Stack

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
