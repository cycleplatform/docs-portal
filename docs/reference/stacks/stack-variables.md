---
sidebar_label: Stack Variables
sidebar_position: 4
---


# Stack Variables
All fields in stacks can be replaced by stack variables. 

To define a stack variable wrap the variable name in curly braces. Ex: `{{variable-name}}`

These variable names (keys) can be made up of: 

* a-z
* 0-9
* `-`


The following example show's both a normal use case (`frontend-source-id`) and a more exaggerated use case (`config-1`).
```json
{
    "version": "1.0",
    "containers": {
      "frontend": {
        "name": "frontend",
        "image": {
          "name": "frontend",
          "origin": {
            "type": "docker-file",
            "details": {
              "existing": {
                  "source_id": "{{frontend-source-id}}"
              }
            }
          }
        },
        "config": {{config-1}}
      }    
  }
}
```

What you'll notice is that the `{{variable}}` will be injected into the stack file exactly how its defined in the stack. So for the `frontend-source-id`, it needed to be wrapped in a string (as its a string value), whereas the config is just json and thus does not need anything. 

On the portal variable defaults lives under the `variables` tab. 

![Stack Variables](https://static.cycle.io/portal-docs/stacks/variables.png)

You can add new variables by using the `Add` button and then saving with the `Update Variable Defaults`

## Overriding Default Variables
The variable definitions live as part of the stack.  Unlike pipelines, stack variables can be defined once and reused across all builds.

**BUT**

If you'd like to override a default value without changing it you can use `Variable Overrides`.  In the portal, this menu is accessible by clicking the `V` arrow next to the `Create Build` button. 

![Variable Override](https://static.cycle.io/portal-docs/stacks/variable-override.png )

After updating the variables you wish to override, create the build and that build will use those variables in place of the default. 