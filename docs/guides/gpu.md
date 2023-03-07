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

:::danger Google Cloud Platform Quotas
For users looking to deploy GPU infrastructure from GCP, you will need to request an increase to the `GPUS_ALL_REGIONS` and `NVIDIA_A100_GPUS` settings placed on your account if you have not done so already. As of writing this, those amounts are defaulted to 0 and will prevent you from being able to deploy GPU powered infrastructure.
:::

## Containers Needing GPU Resources

When GPU powered images are uploaded to Cycle, the platform will look for special environment variables in the image and then post a badge thats says `NVIDIA GPU` next to the image that signifies the need a GPU server.

The environment variables that the platform looks for are:

- NVIDIA_GPU
- NVIDIA_REQUIRE_CUDA
- CUDA_VERSION

This information is also used by the platform when deciding what servers are qualified as a potential target for a given image. For example, an image with `NVIDIA GPU` tag will only be able to be deployed to a server with GPU resources and not to a server that only has CPU resources.

## Deploying A GPU Sample Container

After provisioning GPU powered infrastructure, users are ready to deploy GPU workloads as soon as the server comes online. To help with this process we've created a "Sample Container" that has the NVIDIA GPU samples repo pre-compiled and ready to be executed.

To use this container, create a new DockerHub image source type with the image name: `cycleplatform/gpu` and the tag `samples-cuda`.

Next, move to an environment (or create a new one) that has acess to a cluster with a GPU powered server. Use the deploy contianers form to deploy a stateless copy of this image, and start the container.

:::note First Starts
The first time this container is started can take up to a few minutes. This is due to the fact that the container image is quite large and must be copied to the server before it can be started.
:::

After the container is started, head over to the instances tab and use the two-way console to connect to the container. Once connected, there will be a directory called `release`. This directory has a compiled "copy" of every available sample from the NVIDIA repo, but not every sample is meant to work on every machine, due to their not being screen attached to the servers. The most interesting binary to run is `deviceQuery` which prints lots of information about the GPU being used. Play around with some of the others to see different outputs.

Its also possible to run the NVIDIA System Management Interface `nvidia-smi` command and all (most) subcommands associated with it. More information about nvidia-smi can be found [here](https://developer.nvidia.com/nvidia-system-management-interface).
