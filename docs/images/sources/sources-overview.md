---
sidebar_label: Sources Overview
sidebar_position: 1
---

# Image Sources Overview
By creating a source and giving Cycle access to a specific image, developers can easily reimage containers without constantly managing credentials.

### Creating Sources
There are currently 3 types of image sources supported.

1. **Docker Hub** - create an image source from an existing image repo on Docker Hub.
2. **Docker Registry** - create an image source from an exisitng image repo on a private Docker registry, with support for other registry types coming very soon!
3. **Docker File** - create an image source from a repositiory hosted on any git solution (private or public) by adding a Dockerfile to your repo and telling Cycle where its located.


### Managing Sources
Easily manage sources by clicking on the **Images** tab in the main navigation and then clicking on any individual source. Then choose the **settings** tab from the horizontal navigation.


From settings a user can make updates to the name, description, and repo data - including the repo url and auth type.

:::warning
Choosing to delete a source is irreversible.
:::

