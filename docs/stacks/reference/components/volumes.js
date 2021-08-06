import React from 'react'


export const VolumesExample = `{
  "read_only": false,
  "local": {
    "max_size": "200G",
    "storage_pool": true
  },
  "destination": "/var/lib/dir",
  "remote_access": {
    "enable": true,
    "ips": [
      "75.75.75.75", "75.75.85.85"
    ],
    "web_hook": "https://your.endpoint",
    "password": {
      "algorithm": "raw",
      "data": "somepassword"
    }
  }
}`