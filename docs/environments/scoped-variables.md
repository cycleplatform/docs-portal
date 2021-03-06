---
sidebar_label: Scoped Variables (BETA)
sidebar_position: 3
---


# Scoped Variables
Scoped variables are a way for users to dynamically allocate runtime specific environment variables across any number of containers in an environment.


## Create
To create a scoped variable, navigate to an environment and click the **Scoped Variables (Beta)** link from the horizontal navigation. Then click **Create Variable** - opening the create modal.

### General 
In the general section the form containers information about the identifier, which most resembles an environment variable key, the source type, and the source.  Something to note is the **URL** type will return the response body of a GET request to the url provided.  This url must be using http(s).  

* **Identifier** - the key to be used when accessing this scoped variable.
* **Source Type** - the type of value used, can be **Raw** or a **URL**.
* **Source** - the "raw" or "url" value to be associated with the identifier.


:::caution Error Returns
Currently errors made while attempting the HTTP GET request will not be reported.  Instead expect an empty string to be returned if there is either no response or the response encounters an error.  
:::


### Scope
Scoped variables can be applied to all containers in an environment or specifically to a mutable list of containers.  

The **Global** checkbox being checked signifies that every container in the environment should inherit the variable, while a user that wishes to only apply the variable to specific containers can use the **Containers** dropdown menu.


### Access
The Access section of the form defines where the scoped variable should be accessible from.  

If the **Environment Variable** checkbox is selected, the scoped variable will be accessible as a runtime environment variable, whereas the **Internal API** checkbox means the scoped variable will be available through the [Internal API endpoint](#).

Both checkboxes can be checked if a user wishes to have the scoped variable accessible as both an environment variable and from the internal API.

:::note Return Types
Due to the nature of the internal API, certain returns, such as JSON will not be parsed ahead of time.  Be prepared to parse a JSON encoded string if using the internal API alongside URL source types when JSON is the content type.  
:::


### Encryption Options
Each source can be encrypted.  The encryption options form fields supply the user with a full list of encryption options that can be modified once the **Encrypted** checkbox is enabled.


* **Hint** - the hint is a hint that is available to the user for the encryption key value.
* **Key** - a Key to use when encrypting the source.
* **Padding** - the type of padding to use, more info [here](https://en.wikipedia.org/wiki/Padding_(cryptography)).


### Encryption Details
After generating the encryption through the form an [initialization vector](#) and [key](#) will be returned.  Make sure to keep these values somewhere safe in your records.


To finish creating the scoped variable click **Create Variable**.


## Staging Changes
When making updates to existing scoped variables two things must happen:

1. A change must be staged.
2. The change must be applied (updated).

To stage a change a user can either make changes in-line to the identifier or source of an unencrypted scoped variable, or using the advanced options modal - which is accessible via the gear icon under the **Advanced** column.

Once a change has been staged, make sure the scoped variable checkbox is selected and submit **Update Selected** at the bottom of the page.  