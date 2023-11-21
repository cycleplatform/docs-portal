---
sidebar_label: OCI Registry
sidebar_position: 4
---

# OCI Registry

The OCI Registry type is very much like the docker registry type, except it will be built out with specific implementations in mind.

For example:

Users that want to integrate with ECR can use the `provider` type to programmatically interact with AWS and rotate the credentials for pulling their images.

## Target

- **Image Name** - The name for the image, in the format `organization/imagename:tag` or `imagename:tag`.
- **Registry URL** - The URL for the remote registry to pull from.

## Auth

### User

This is simply a username and password for the remote registry.

### Provider

- **Provider** - Right now the only value for this is AWS ECR.
- **API Key** - An API key to be used for authenticating against the Registry.
- **Secret** - The secret to be used for authenticating against the Registry.
- **Region** - The region the registry is set up in.

### Webhook

The webhook wil do a GET request to the specified URL, and expects back a base-64 encoded string that when decoded is in the format username:token
