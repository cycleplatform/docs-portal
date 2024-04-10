# Pipelines

From simple tasks like importing an image, to complex sequences that affect entire clusters, Deployment Pipelines make it easy to automate nearly any task within Cycle.

## Parts of a Pipeline
Each pipeline consists of stages and steps. 

* **Pipeline** - A sequence of tasks on the platform that can be arranged and executed repeatedly.

* **Stage** - A group of steps identified with a name. Stages can be individually skipped and deleted.

* **Step** - A single action that can be added to a stage. Steps can be individually skipped and deleted. Steps can also be given a reference and subsequent steps (even those in other stages) can use the resources produced by the step using a reference identifier.

## Managing Pipelines

### Create

To create a new pipeline:
* Click the **Pipelines** tab in the main navigation 
* Use the Create Pipeline button. 
* Name the pipeline and then click the Create Pipeline button on that page. 
* Choose standard or dynamic pipeline type (can be updated later).
    * **Standard** - Statically defined pipeline (no variables).
    * **Dynamic** - Pipeline can use dynamic [variable support](/reference/pipelines/variables/)

### Update & Delete
While a pipeline is selected, the horizontal navigation will show a settings tab.  This tab can be used to update the name of the pipeline, see the pipeline ID, and delete the pipeline.

### Editing
Also, while a pipeline is selected, the **Editor** tab allows the user to interact with stages and steps.

See the [Stages And Steps](/reference/pipelines/stages-and-steps) page for a full list of steps.


## Triggering A Pipeline
Starting a pipeline is referred to as **triggering**.  The pipeline will attempt to complete all stages and steps that are not **"paused"** or **"skipped"**.  

Triggering can take place through the portal using the **Trigger Pipeline** button, via a trigger key, and via the [API](https://api.docs.cycle.io/tag/Pipelines#operation/createPipelineJob)


## Trigger Keys
Create a trigger key by selecting Trigger Keys from the 
horizontal nav and then Create Trigger Key.

The create form will ask for a name and a list of IP's (optional) that are approved for this call. Leaving IP's blank just means the trigger key can be used from any ip.

After creating the trigger key, the secret will be available only once, so please copy the secret into a secure place before navigating away from the page.

Also, on the page, will be an example HTTP call showing how to use the trigger key. 

### Trigger Keys with Variables
If you're using [pipeline variables](/reference/pipelines/variables/), you'll see that there is extra data needed for each use of the key.  Make sure you're submitting the trigger with the additional variable data you've outlined in your pipeline!

### Managing Trigger Keys
When looking at the available trigger keys, a user can click on a specific key to see the current key settings.  

The settings page will allow a user to update the name, IP restrictions, and delete a given trigger key.  

:::caution Secret
The trigger key secret will only be shown once, subsequent visits to the trigger key page will show an obfuscated version of the key.
:::



