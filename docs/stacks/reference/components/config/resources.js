import React from 'react'

export const ResourcesExample = `{
  "cpu": {
    "limit": 8,
    "reserve": 2
  },
  "ram": {
    "limit": "500M", 
    "reserve": "150K",
    "swapiness": 60,
    "kernel": "25M",
    "kernel_tcp": "2M"
  }
}`