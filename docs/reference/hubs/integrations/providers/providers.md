---
sidebar_label: Providers
sidebar_position: 1
---

# Providers
A provider on Cycle represents either an IaaS provider or an on-prem / colo type integration.  


## Adding Providers

Adding a provider is a simple process and allows the user to fully manage their infrastructure through Cycle.

- Select `Hubs` from the main left-hand navigation.
- Click `Integrations` in the menu.
- Select the provider to integrate with and use the `Add Integration` button to bring up the modal.
- Add the appropriate credentials (guides linked below).


## Currently Supported Providers

Cycle currently supports the following providers:


- [AWS](/reference/hubs/integrations/providers/configure-aws)
- [GCP](/reference/hubs/integrations/providers/configure-gcp)
- [Equinix-Metal](/reference/hubs/integrations/providers/configure-equinix)
- [Vultr](/reference/hubs/integrations/providers/configure-vultr)

## Auxillary Native Providers

To set up an Auxillary native provider, or, more simply, to add another account of the types natively supported, users can select the `Abstraction / Custom Integration` provider with the following special `base_url`.

The supported base url's are:

- `aws`
- `gcp`
- `equinix-metal`
- `vultr`


Alongside these base url's, the user will also need to provide the respective API key, secret, config, or whatever that provider requires.




## Provider Names and Identifiers
The provider configuration forms support both name (optional) and identifier (required).  While the native providers will have the identifier filled in with a default value, this value can be changed to the user preference.  

Valid identifiers support alphanumeric chars and `-`'s.
