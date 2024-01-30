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


:::success Coming Soon: Image Overrides
Image overrides are coming for certain pipeline steps that deal with creating and importing images.  When this update is released, overrides will have variable support.
:::

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


