import React from "react";

// ❌  ✅

export const ConstraintsExample = `{
  "node": {
    "tags": {
      "any": ["anytag", "from", "this", "list", "will", "work"],
      "all": ["must_match_all"]
    }
  },
  "containers": ["frontend", "api"]
}`;

export const ShutdownExample = `{
  "graceful_timeout": 45,
  "signals": ["SIGTERM", "SIGINT", "SIGHUP","SIGQUIT"]
}`;

export const StartupExample = `{
  "delay":  10
}`;

export const RestartExample = `{
  "condition": "always",
  "delay": 10,
  "max_attempts": 10
}`;

export const HealthCheckExample = `{
  "command": "healthcheck_script"
  "retries": 10,
  "interval": 5,
  "timeout": 30,
  "restart": true
}`;

export const TelemetryExample = `{
  "retention": 35000,
  "interval": 30,
  "webhook": "https://myurl.com/endpoint",
  "disable": false
}`;
