

import Mermaid from '@theme/Mermaid';

# Image Sources

By creating a source and giving Cycle access to a specific image, developers can easily reimage containers without constantly managing credentials.

### Creating Sources

There are currently 4 types of image sources supported.

1. **[Docker Hub](/reference/images/sources/dockerhub-source)** - create an image source from an existing image repo on Docker Hub.
2. **[Docker Registry](/reference/images/sources/docker-registry-source)** - create an image source from an exisitng image repo on a private Docker registry, with support for other registry types coming very soon!
3. **[Docker File](/reference/images/sources/dockerfile-source)** - create an image source from a repositiory hosted on any git solution (private or public) by adding a Dockerfile to your repo and telling Cycle where its located.
4. **[OCI Registry](/reference/images/sources/oci-registry)** - create an image source from an existing OCI registry.  With additional ECR flavor specific support built in for advanced auth mechanics.

Additionally, users can set [access controls](/reference/hubs/access-controls) for the image source during create.


### Managing Sources

Easily manage sources by clicking on the **Images** tab in the main navigation and then clicking on any individual source. Then choose the **settings** tab from the horizontal navigation.

From settings a user can make updates to the name, description, and image data (based on the type).

Under the `Access Controls` section the user can set image source [access controls](/reference/hubs/access-controls). 

:::warning
Choosing to delete a source is irreversible.
:::

## Image Source Graph

<Mermaid chart={`graph TD
      A[New Image Source]
      A --> B{Source Type}
      B --> C[DockerHub]
      B --> D[Docker Registry]
      B --> E[OCI Registry]
      B --> F{Dockerfile Type}
      F --> H[Git Repo]
      F --> I[Tar_gz]
  `} />
