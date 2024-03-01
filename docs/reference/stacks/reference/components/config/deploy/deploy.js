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
  "graceful_timeout": "45s",
  "signals": ["SIGTERM", "SIGINT", "SIGHUP","SIGQUIT"]
}`;

export const StartupExample = `{
  "delay":  "10s"
}`;

export const RestartExample = `{
  "condition": "always",
  "delay": "10s",
  "max_attempts": 10
}`;

export const HealthCheckExample = `{
  "command": "healthcheck_script.sh",
  "retries": 10,
  "interval": "15s",
  "timeout": "30s",
  "restart": true,
  "delay": "120s"
}`;

export const UpdateExample = `{
  "stagger": "15s"
}`;

export const TelemetryExample = `{
  "retention": "36h",
  "interval": "30s",
  "webhook": "https://myurl.com/endpoint",
  "disable": false
}`;
