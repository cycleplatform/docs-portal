---
sidebar_label: Stacks FAQ
sidebar_position: 300
---

# Stacks FAQ

Additional frequently asked image and stacks questions not covered directly by the main documentation.



<details>
    <summary><strong> What are the different ways to import a stack?</strong></summary>

There are two ways to import a stack on Cycle. Paste a raw stack file into the stack file importer. The other way is to use an http(s) or SSH address to pull the stack file from a repository.
</details>
<br /> 
<details>
    <summary><strong> If a stack is created from a git repo, what does REBUILD STACK do?</strong></summary>

The "Rebuild Stack" button will look at the cycle.json or cycle.yml file that is in the repository you used to create the stack. If you change the file in your repo the changes will be reflected in your new build. There is no need to make a new stack, simply press the button and review your build once it is done.
</details>

<br />
<details>
    <summary><strong> Where is there more information about my stack build?</strong></summary>

Each time a stack is built a new build ID is created and information about that build becomes available through the portal. By clicking the stack, and then the builds tab Cycle will show all of the builds of the given stack. Clicking on a specific build reveals the build spec, build ID, build date, and build log.
</details>
<br />
<details>
    <summary><strong> Is it safe to delete a build that is no longer being used?</strong></summary>

Yes, a stack build that is no longer being used can be deleted without effecting the rest of the stack.
</details>