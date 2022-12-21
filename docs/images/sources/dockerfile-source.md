---
sidebar_label: Dockerfile Source
sidebar_position: 4
---

# Dockerfile Image Sources

Dockerfile image sources are different from DockerHub and Docker registry image sources in the sense that they point to a dockerfile as opposed to an image.

With Cycle, users aren't forced to build their images, push to a registry, and then distribute them to the appropriate servers. Instead, the Cycle user can either:

1. Create a **Git Repo**, containing the Dockerfile and any necessary files needed during the build.

2. Serve an url endpoint which returns a **tar.gz** package containing the Dockerfile and any necessary files needed during the build.

### Types of Authentication

There are 2 main types of authentication available for Dockerfile image sources.

1. **Protocol Type (Repo Only)** - Both HTTPS (username / password) and SSH are available to authenticate against a git repository.

2. **Registry Credentials** - A url, username, and token that can be used to authenticate the use of restricted or private images consumed during the creation of your image(s).

:::info Registry Credentials
This type of auth object can be added several times if being used. This is used often for simpler multi-stage build authentication when several FROM commands reference different private images, each with their own auth needs.
:::

Using HTTPS for repository authentication will require the entry of a username and password that has, at a minimum, read access. SSH will require you to enter a private, pem-encoded key as well as a username, the passphrase is optional and only needed if your key requires a passphrase to use.

:::note Example Keygen Command

```bash
ssh-keygen -P yourpassword -t ecdsa -b 256 -m PEM -f your-filename.pem
```

This command will produce two files, the public and private key. Depending on your repository service you'll need to add the public key at the account or repository level and then add the private key to your Cycle image source.

For example: Github has both account level keys and "Deploy Keys" - each scoped to account and repositories respectively.  
:::

### Context Directories And Build Files

Regardless of the Dockerfile location (repo or hosted tar.gz), a context directory and build file will need to be provided.

The **build file** is the full path to and including the name of the Dockerfile to be used for the build. Leaving this field empty when using the portal will submit the default value of `/Dockerfile`. In the picture below **app-one's** build file would be `/app-one/Dockerfile`.

A **context directory** is the full path from the root of a resource to the directory to use as the **_context_** when fulfilling commands like `COPY`.

The following image shows two projects. The project in the top window has two applications sharing a single root context and separated into two directories with each one holding an individual Dockerfile responsible for creating that services image. The bottom window shows a single application with the Dockerfile in the root context.

![image](https://static.cycle.io/docs/images/context-directory.png)

### Branches, Tags And Hashes

For git repositories, users are also asked to supply the branch to be used when pulling files. This branch information can be enriched by the optional values supplied to **tag** or **hash**.

**Tag** - A git tag, to be used to target a specific tag created by the user to denote a version or moment in their commit history pertaining to some relevant state.

**Hash** - A commit hash, specifically, that points to the desired commit to be used when referencing the repository files.

:::warning Hashes and Branches
The hash must be correctly aligned with the branch. If you enter a hash for your development branch, but the branch you supply is not specifically development Cycle will use the most recent commit for the branch provided.
:::
