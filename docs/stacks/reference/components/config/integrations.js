import React from 'react'


// ❌  ✅

export const IntegrationsExample = `{
  "lets_encrypt": {
    "enable": true,
    "certificate_path": "/var/run/cycle/tls/current.cert",
    "key_path": "/var/run/cycle/tls/current.key",
    "chain_path": "/var/run/cycle/tls/current.chain",
    "bundle_path": "/var/run/cycle/tls/current.bundle"
  }, 
  "webhooks": {
    "events": {
      "deploy": "https://deploy.endpoint",
      "start": "https://start.endpoint",
      "stop": "https://stop.endpoint"
    }
  },
  files: [
    {
      "source": "/directory/file.json", "destination": "/path/to/destination/file.json"
    }
  ]
}`