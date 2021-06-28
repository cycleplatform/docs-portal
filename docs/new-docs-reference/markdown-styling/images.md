---
sidebar_label: Images
sidebar_position: 2
---

# Using Images

## Where to Store Images

Images need to **always* go inside the static folder. To keep things organized
essentially mirror the structure of the `docs` folder as shown below.

```text
static
├── imgs
│   ├── <section-name-1>
│   │   ├── <doc-name-1>
│   │   │   ├── image1.png
│   │   │   ├── image2.png
│   │   │   └── image3.png
│   │   └── <doc-name-2>
│   │       ├── image1.png
│   │       └── image2.png
│   ├── <section-name-2>
│   │   ├── <doc-name-1>
│   │   │   ├── image1.png
│   │   │   ├── image2.png
│   │   │   └── <nested-section-name>
│   │   │       ├── image1.png
│   │   │       ├── image2.png
│   │   │       └── image3.png
```
