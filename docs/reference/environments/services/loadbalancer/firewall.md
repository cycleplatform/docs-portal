---
sidebar_label: Firewall (WAF)
sidebar_position: 6
---


# V1 Load Balancer Firewall 

:::caution Alpha
This feature is currently in its alpha release. 
:::

The v1 load balancer supports web application firewall configurations.  Currently this allows for users to restrict or grant access by IP, but will soon also include geographic and url based restrictions as well as http method and header type controls. 

The controller must be set to `Enable Custom Config` for the firewall config to be applied.

After enabling the `Firewall Configuration`, the user sees  an example `Rule` entry.  


### Firewall Rule Fields
Each `Rule` is comprised of 4 fields

| Field       | Description                                                                                     |
|-------------|-------------------------------------------------------------------------------------------------|
| description | A text description of the rule, providing context or notes about what the rule is intended to do. |
| skip        | A boolean value indicating whether the rule should be skipped (`true`) or processed (`false`).   |
| type        | Specifies the action of the rule. Typical values might include `"deny"` or `"allow"`.           |
| conditions  | An array of conditions that must be met for the rule to apply. Each condition contains:          |
|             | - **type**: The type of match to perform (e.g., `"ip-match"`).                                   |
|             | - **operator**: The comparison operator to use (e.g., `"=="`).                                   |
|             | - **value**: The value to compare against (e.g., an IP address).                                 |

#### Supported Types
The currently supported types are:

* `ip-match`

#### Supported Operators 
The currently supported operators are:

* `==`
* `!=`


### Example Firewall Config

```javascript
[
  {
    "description": "This is a rule",
    "skip": false,
    "type": "deny",
    "conditions": [
      {
        "type": "ip-match",
        "operator": "==",
        "value": "50.234.222.10"
      },
      {
        "type": "ip-match",
        "operator": "==",
        "value": "2600:6b4a:223f:93cf:84a1:4afd:9221:8988"
      }
    ]
  }
]
```
