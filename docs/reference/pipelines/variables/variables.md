---
sidebar_label: Variables
sidebar_position: 3
---


# Pipeline Variables

:::info Dynamic Mode
To use pipeline variables set the pipeline to Dynamic mode.  This can be set either during pipeline creation or on the settings page of a pipeline with the checkbox. 
:::


Certain field values in pipelines can use `pipeline variables`.  Similar in syntax to [stack variables](/), pipeline variables follow the variable name wrapped in double curly brackets.  




Example: `{{variable-name}}`

These variable names (keys) can be made up of: 

* a-z
* 0-9
* `-`


Available on:


* [Deployment Version](/reference/environments/deployments)
* [Deployment Tag](/reference/environments/deployments/tags)
* Fluid Identifiers

In the portal pipeline editor, users will notice the `</>` icon on steps that allow for variables to be used.

![variable support](https://static.cycle.io/portal-docs/pipelines/variable-support-icon.png)


### Magic Variables
There are currently 4 magic variables which automatically contrive their value on pipeline run:

1. Date - `{{date}}` - `2024-08-13`
2. Date-time - `{{date-time}}` - `2024-08-13 16:57:24`
3. Time - `{{time}}` - `16:57:24`
4. Time RFC - `{{time-rfc3339}}` - `2024-08-13T16:57:24Z`


### Fluid Identifiers
A fluid identifier on Cycle is one or more identifiers, in a text format, that allow the user to identify resources in as specific of terms as they see fit.  

Valid identifiers: 

```
cltr|env|cntr|img-src|stk|srv|pipe|cluster|environment|container|image-source|stack|server|pipeline
```

Example: 

I'd like to specify a container in an environment. 

```
cluster:cluster-identifier/environment:environment-identifier/container:container-identifier
```

or I can use shorthand 

```
cltr:cluster-identifier/env:environment-identifier/cntr:container-identifier
```


