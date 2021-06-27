---
sidebar_label: Basics
sidebar_position: 1
---

# Basics

---

## Headings

Headings must follow proper format. This means
* Only one H1, `#`, within a single markdown document
* Headings **must** be sequential.

---

## Lists

Lists are very simple to create since they standard markdown syntax.

### Numbered

```markdown
1. In-N-Out
2. McDonald's 
3. Taco Bell
```
Will create the following list

1. In-N-Out
2. McDonald's
3. Taco Bell

### Bullets
```markdown
* Double Double
* Big Mac
* Taco Party Pack
```
* Double Double
* Big Mac
* Taco Party Pack


### Nested

```markdown
1. In-N-Out
    * Double Double
        1. Grilled Onions
        2. No lettuce
        3. Extra Special Sauce
    * Fries x 3
    * Soda x 2 
2. McDonald's
    * Big Mac
        1. Triple Pickles
        2. No Bun
        3. Blended Style
    * Fries x 3
    * Soda x 2
3. Taco Bell
    * Taco Party Pack
        1. Extra Hot Sauce
   * Fries x 3
   * Soda x 2
```
1. In-N-Out
    * Double Double
        1. Grilled Onions
        2. No lettuce
        3. Extra Special Sauce
    * Fries x 3
    * Soda x 2
2. McDonald's
    * Big Mac
        1. Triple Pickles
        2. No Bun
        3. Blended Style
    * Fries x 3
    * Soda x 2
3. Taco Bell
    * Taco Party Pack
        1. Extra Hot Sauce
    * Fries x 3
    * Soda x 2

:::note

Double nested bullet point lists is typically a UX anti-pattern due to readability issues.
Refrain from double nested bullet lists when possible. It is better to do a numbered list
then use bullets for underlying points within the list

* nest level one
    * nest level two

:::

---

## Admonitions — Info Panel
All admonitions can be given an optional title. Below is an example.

#### Default — No Title
```markdown
:::note

Some Content

:::
```

:::note

Some Content

:::

#### Custom — Title Added
```markdown
:::note Title Added 

Some Content

:::
```

:::note Title Added

Some Content

:::

### Note
```markdown
:::note

I am a **Note** Admonition

:::
```

:::note

I am a **Note** Admonition

:::

### Info
```markdown
:::info

I am a **Info** Admonition

:::
```

:::info

I am a **Info** Admonition

:::

### Caution — Warning

```markdown
:::caution

I am a **Caution** Admonition

:::
```

:::caution

I am a **Caution** Admonition

:::

### Danger

```markdown
:::danger

I am a **Danger** Admonition

:::
```

:::danger

I am a **Danger** Admonition

:::
