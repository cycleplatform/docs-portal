---
sidebar_label: Image Builder
sidebar_position: 1
---

# Image Builder Integration 
The image builder integration allows users to connect to external container image building solutions.  

Currently, the platform supports an integration with the [Depot](https://depot.dev) product. 

## Creating Assets from Depot 
Creating assets for the Depot integration is straightforward:

1. Create a Depot account.
2. Create an organization.
3. Create a project.
    - The name, region, and cache settings are all up to what you desire. There is not "preferred" or "required" setting from the Cycle side for this integration. 
4. Click `Settings` and create a `Project Token`. 
5. Copy the token to your clip board and head back to the Cycle portal. 

## Integrating in Your Hub
This integration is a single field that takes a token (the one you just copied). 

Go to your hub and click on `Hubs` from the main navigation, then `Integrations`.  Select the `Depot` integration under `Image Builder` and then click `Add Integration`.  

In the form put in the token and click `Add` when you're done.  

:::success Identifiers
Some hubs will use multiple depot integrations.  To differentiate between then give the integrations a unique name and also a unique identifier.  The identifier is used in places like stacks to refer to the integration.
:::