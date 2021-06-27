---
sidebar_label: Folder and File Basics
sidebar_position: 1
---
# Welcome to the new docs
It *should* be a bit nicer to work in. 83.71% guarantee...

---

## Setting Up A Section

### Folder Structure
The sidebar will automatically be generated if the folder structure is set up correctly.

```text
docs
├── <section-name>
│   └── _category_.yml
│   └── section-doc-name.md
│   └── section-doc-name.md
│   └── <sub-section-name>
│       └── _category_.yml
│       └── section-doc-name.md
│       └── section-doc-name.md
```

:::danger

Although Docusaurus allows for naming schema to use `01-name` to auto position in sidebar we do not want to do this.
It will result in a need to change the name of every other folder/document anytime we need add/replace a folder/document.
This has a much higher potential for merge conflicts and future issues.

**DO NOT CHANGE THE NAMING CONVENTION TO USE NUMBERS**

:::

### section-name
This needs to be the name of the main section on the sidebar.
This naming schema should be a max of 2 words if necessary.
The name of the folder does not correctly directly to the name of
the sidebar item itself. Display names will be set inside `_category_.yml`.


### \_category_.yml
This is the file which dictates the name and position of the folder in the sidebar.

:::note

The decision to use `yaml` over `json` was very purposeful. Yaml syntax
matches what is used inside markdown sidebar for labeling, positioning, etc
much closer than json does.

:::
An example `_category_.yml` file will look as so.

```yaml title="docs/boat-shoes/category_.yml"
label: Lifestyle Boat Shoes
position: 1
```

You can see in the code snippet above that the folder name for the section is `boat-shoes`
and the label set for it is `Lifestyle Boat Shoes`. The label will be used in the sidebar
for the display name of the folder.

An optional attribute is `collapsed: boolean`. This will make the dropdown
open by default when the parent section is open.

:::caution

Please use the `collapsed` attribute sparingly. It can be considered
a bad UX pattern if not used correctly. When in doubt just leave it out, for now.

:::

### section-doc-name.md

Now we get to the fun part 😛.
