---
sidebar_label: Using GPU Powered Infrastructure
sidebar_position: 20
---

# GPU Infrastructure On Cycle

As developers continue to build more complex and power-hungry applications on Cycle, it was obvious that we needed to enable these organizations to utilize GPUs -- especially for machine learning (ML) workloads. While this sounds
easy, it’s quite an undertaking … especially to do it correctly. For GPUs to meet the quality standards everyone expects from Cycle, we knew our implementation needed to be both super-simple to integrate with and flexible enough
to work with different hardware configurations.

Whether you’re looking to utilize virtual machines or bare metal, Cycle has fully abstracted away the underlying infrastructure to create one standardized path to deployment. Even more so, this integration supports applications
compiled with both gcc (Ubuntu, CentOS, etc) and musl (Alpine), giving developers the flexibility to continue building with the technologies they’ve come to love.

:::success Business Tier and Above
GPU powered infrastrucutre is available to hubs on the business tier and above. For more information about the different tiers head over to [our pricing page](https://cycle.io/pricing) or reach out to a team member on our [Slack Channel](https://slack.cycle.io)
:::

## Deploying GPU Enabled Infrastructure.

Deployment of GPU enabled infrastructure is the exact same process as with any other infrastructure type.

- Head to the Infrastrucutre tab on the main navigation
- Click Add Servers
- Select A Provider & Location (currently AWS and Vultr carry GPU boxes)
- Select the Server from the list and deploy that server.

## Containers Needing GPU Resources

When GPU powered images are uploaded to Cycle, the platform will look for special environment variables in the image and then post a badge thats says `NVIDIA GPU` next to the image that signifies the need a GPU server.

The environment variables that the platform looks for are:

- NVIDIA_GPU
- NVIDIA_REQUIRE_CUDA
- CUDA_VERSION

This information is also used by the platform when deciding what servers are qualified as a potential target for a given image. For example, an image with `NVIDIA GPU` tag will only be able to be deployed to a server with GPU resources and not to a server that only has CPU resources.

## GPU Driver Access

For containers that are marked NVIDIA GPU, the driver(s) needed to support usage of the servers GPU resources will be mounted at `/dev` have access to use the GPU.
