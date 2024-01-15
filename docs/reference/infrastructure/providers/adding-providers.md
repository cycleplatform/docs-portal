---
sidebar_label: Adding Providers
sidebar_position: 1
---

# Adding Providers

Adding a provider is a simple process and allows the user to fully manage their infrastructure through Cycle.

- Navigate to the infrastructure dashboard by selecting Infrastructure from the main left-hand navigation.
- Next select the Providers tab from the top nav.
- Select The Add Provider button at the top right of the screen.
- Pick the provider of your choice from the dropdown and add credentials.
- Click the Verify button to verify the credentials are correct.

## Currently Supported Providers

Cycle currently supports the following providers:

- [Vultr](/docs/infrastructure/providers/configure-vultr)
- [Equinix-Metal](/docs/infrastructure/providers/configure-equinix)
- [AWS](/docs/infrastructure/providers/configure-aws)
- [GCP](/docs/infrastructure/providers/configure-gcp)

## Auxillary Native Providers

To set up an Auxillary native provider, or, more simply, to add another account of the types natively supported, users can select the `Abstraction / Custom Integration` provider with the following special `base_url`.

The supported base url's are:

- `aws`
- `equinix-metal`
- `vultr`
- `gcp`

Alongside these base url's, the user will also need to provide the respective API key, secret, config, or whatever that provider requires.

![Aux Provider](https://static.cycle.io/portal-docs/infrastructure/custom-aux-provider.png)