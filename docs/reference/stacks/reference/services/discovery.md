---
sidebar_label: Discovery
sidebar_position: 10
---


# Discovery


| Field     | Type    | Required | Description                                                                                               |
| --------- | ------- | :------: | --------------------------------------------------------------------------------------------------------- |
| `hosts`    | Record  |    ✅    | A record of hosts and the IP's they should resolve to.                                           |



## Host Entries
These record entries follow the format:

```json
"discovery": {
      "hosts": {
        "host.to.resolve": {
          "ipv4": ["1.2.3.4", "2.3.4.5", "5.6.7.8"]
          "ipv6": ["d624:285d:27c5:5dd9:f500:de62:d858:a23d", "f608:49da:8282:4f7c:ca18:8107:12d1:72d6",  "83a7:e8f2:60f8:f0eb:a2ff:4001:4856:479"]
        }
      }
    }
```


`host`

| Field     | Type    | Required | Description                                                                                               |
| --------- | ------- | :------: | --------------------------------------------------------------------------------------------------------- |
| `ipv4`    | Array |   ❌  | An array of IPv4 addresses this hostname can resolve to.                                |
| `ipv6`    | Array |   ❌  | An array of IPv6 addresses this hostname can resolve to.                                |
