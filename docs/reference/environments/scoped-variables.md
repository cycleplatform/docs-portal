---
sidebar_label: Scoped Variables
sidebar_position: 3
---

# Scoped Variables

Scoped variables are a way for users to dynamically allocate runtime specific environment variables across any number of containers in an environment.

## Create and Update

To create a scoped variable, navigate to an environment and click the **Scoped Variables** link from the horizontal navigation. Then click **Create Variable** - opening the create modal.

To update simply click the edit icon next to an existing scoped variable and use the button at the bottom of the modal to submit the update.

### General

In the general section the form containers information about the identifier, which most resembles an environment variable key, the source type, and the source. Something to note is the **URL** type will return the response body of a GET request to the url provided. This url must be using http(s).

- **Identifier** - the key to be used when accessing this scoped variable.
- **Source Type** - the type of value used, can be **Raw** or a **URL**.
- **Source** - the "raw" or "url" value to be associated with the identifier.

:::caution Error Returns
URL types that fail to return will show empty strings as their source
:::

#### Raw Source Options

There are 4 options next to the raw type's source value.

- **Blob** - indicates that the user wishes to input a blob of text where formatting will be maintained.
- **Secret** - will obfuscate the value on the scoped variable dashboard unless uncovered.
- **Encrypt** - allows for the entry of a `key` (password) and a hint, followed by encrypting the value.
- **Decrypt** - meant to decrypt the values encrypted through the encryption option.

### Scope

Scoped variables can be applied to all containers in an environment or specifically to a mutable list of containers.

The **Global** checkbox being checked signifies that every container in the environment should inherit the variable, while a user that wishes to only apply the variable to specific containers can use the **Containers** dropdown menu.

### Access

The Access section of the form defines where the scoped variable should be accessible from.

If the **Environment Variable** checkbox is selected, the scoped variable will be accessible as a runtime environment variable.

```bash
echo $VARIABLE_IDENTIFIER
```

If the **Internal API** checkbox is selected, the scoped variable will be available through the Internal API endpoint.

```bash
curl --unix-socket /var/run/cycle/api/api.sock \
  http://internal.cycle/v1/environment/scoped-variables \
  -H "x-cycle-token: $CYCLE_API_TOKEN"
```

This will be returned as a `data` object in JSON holding all environment variables set to internal API for the given container.

```JSON
{"data":{"INTERNAL_SCOPED_VAR":"VALUE"}}
```

If you set a `duration` value, the value will only be accessible for the first "duration" of the container instances runtime. Resets each stop/start cycle.

If the **File** checkbox is selected, the scoped variable will be available through a file at the following endpoint.

`/var/run/cycle/variables/<myVariable>`

This is facilitated by mounting a read only volume to `/var/run/cycle/variables` in the container instance. This volume is only updated upon restart of the container.

Any, all, or some of the checkboxes in the access section can be selected for a given scoped variable. If all boxes are selected, for example, a user can use any of the access methods to retrieve the value.

:::note Return Types
Due to the nature of the internal API, certain returns, such as JSON will not be parsed ahead of time. Be prepared to parse a JSON encoded string if using the internal API alongside URL source types when JSON is the content type.  
:::
