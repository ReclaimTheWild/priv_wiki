---
layout: default
title: Syntax & Templates
permalink: /syntax_templates
nav_exclude: true
---

# Syntax & Templates
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## Syntax

### The basics

This mirror wiki uses [kramdown](https://kramdown.gettalong.org/) as its Markdown parser, with GFM. As such, it allows you to use some cool things in addition to the usual Markdown. Here are some resources that you can use to look at Markdown's Syntax :
* [The official GitHub Markdown Cheat Sheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
* The kramdown [quick reference](https://kramdown.gettalong.org/quickref.html) and [full syntax](https://kramdown.gettalong.org/syntax.html)

To do a quick run of what "simple" Markdown looks like, think about how you would style your text on Discord : It uses the same syntax. Discord uses a simplified version of the Markdown specification. Everything you do there can be done here.  
One of the things that can be a bit weird first time are the newlines. In original Markdown, doing a newline *won't* do what you wish for it to do. You'd need to do *2* new lines (With an empty line between your two paragraphs) to effectively create a new paragraph. However, ou parser, kramdown, does integrate a way to create line breaks in a single block, by adding 2 empty spaces at the end of your line!

In any case, if you're in doubt and/or need anything, feel free to contact Meï, who'll try to answer your questions as quickly as possible.

More basic Markdown examples are available hidden on the following page : [Markdown Demo]({{ "/demo/markdown" | absolute_url }})

In addition, we also got some of our own extensions, such as...

### Labels

<div class="code-example" markdown=1>
Default label
{: .label }

Blue label
{: .label .label-blue }

Stable
{: .label .label-green }

New release
{: .label .label-purple }

Coming soon
{: .label .label-yellow }

Deprecated
{: .label .label-red }
</div>

```md
Default label
{: .label }

Blue label
{: .label .label-blue }

Stable
{: .label .label-green }

New release
{: .label .label-purple }

Coming soon
{: .label .label-yellow }

Deprecated
{: .label .label-red }
```

### Definition Lists

Those are a bit special as you need to use HTML in order to make them work, but they're still quite easy to use, and render neatly :

<div class="code-example">

<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Born</dt>
  <dd>1952</dd>
  <dt>Birthplace</dt>
  <dd>Japan</dd>
  <dt>Color</dt>
  <dd>Green</dd>
</dl>

</div>

```html
<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Born</dt>
  <dd>1952</dd>
  <dt>Birthplace</dt>
  <dd>Japan</dd>
  <dt>Color</dt>
  <dd>Green</dd>
</dl>
```

### Colors

That one is a bit longer than the others, so it's been rightfully collapsed !

<details markdown="block">
  <summary>
  UNWRAP ME !
  </summary>

#### Light Greys
{: .no_toc }

| Color value    | Font color utility   | Background color utility |
|:---------------|:---------------------|:-------------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-grey-lt-000"></span> `grey-lt-000` | `.text-grey-lt-000` | `.bg-grey-lt-000` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-grey-lt-100"></span> `grey-lt-100` | `.text-grey-lt-100` | `.bg-grey-lt-100` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-grey-lt-200"></span> `grey-lt-200` | `.text-grey-lt-200` | `.bg-grey-lt-200` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-grey-lt-300"></span> `grey-lt-300` | `.text-grey-lt-300` | `.bg-grey-lt-300` |

#### Dark Greys
{: .no_toc }

| Color value    | Font color utility   | Background color utility |
|:---------------|:---------------------|:-------------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-grey-dk-000"></span> `grey-dk-000` | `.text-grey-dk-000` | `.bg-grey-dk-000` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-grey-dk-100"></span> `grey-dk-100` | `.text-grey-dk-100` | `.bg-grey-dk-100` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-grey-dk-200"></span> `grey-dk-200` | `.text-grey-dk-200` | `.bg-grey-dk-200` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-grey-dk-250"></span> `grey-dk-250` | `.text-grey-dk-250` | `.bg-grey-dk-250` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-grey-dk-300"></span> `grey-dk-300` | `.text-grey-dk-300` | `.bg-grey-dk-300` |

#### Purples
{: .no_toc }

| Color value    | Font color utility   | Background color utility |
|:---------------|:---------------------|:-------------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-purple-000"></span> `purple-000` | `.text-purple-000` | `.bg-purple-000` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-purple-100"></span> `purple-100` | `.text-purple-100` | `.bg-purple-100` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-purple-200"></span> `purple-200` | `.text-purple-200` | `.bg-purple-200` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-purple-300"></span> `purple-300` | `.text-purple-300` | `.bg-purple-300` |

#### Blues
{: .no_toc }

| Color value    | Font color utility   | Background color utility |
|:---------------|:---------------------|:-------------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-blue-000"></span> `blue-000` | `.text-blue-000` | `.bg-blue-000` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-blue-100"></span> `blue-100` | `.text-blue-100` | `.bg-blue-100` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-blue-200"></span> `blue-200` | `.text-blue-200` | `.bg-blue-200` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-blue-300"></span> `blue-300` | `.text-blue-300` | `.bg-blue-300` |

#### Greens
{: .no_toc }

| Color value    | Font color utility   | Background color utility |
|:---------------|:---------------------|:-------------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-green-000"></span> `green-000` | `.text-green-000` | `.bg-green-000` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-green-100"></span> `green-100` | `.text-green-100` | `.bg-green-100` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-green-200"></span> `green-200` | `.text-green-200` | `.bg-green-200` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-green-300"></span> `green-300` | `.text-green-300` | `.bg-green-300` |

#### Yellows
{: .no_toc }

| Color value    | Font color utility   | Background color utility |
|:---------------|:---------------------|:-------------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-yellow-000"></span> `yellow-000` | `.text-yellow-000` | `.bg-yellow-000` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-yellow-100"></span> `yellow-100` | `.text-yellow-100` | `.bg-yellow-100` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-yellow-200"></span> `yellow-200` | `.text-yellow-200` | `.bg-yellow-200` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-yellow-300"></span> `yellow-300` | `.text-yellow-300` | `.bg-yellow-300` |

#### Reds
{: .no_toc }

| Color value    | Font color utility   | Background color utility |
|:---------------|:---------------------|:-------------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-red-000"></span> `red-000` | `.text-red-000` | `.bg-red-000` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-red-100"></span> `red-100` | `.text-red-100` | `.bg-red-100` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-red-200"></span> `red-200` | `.text-red-200` | `.bg-red-200` |
| <span class="d-inline-block p-2 mr-1 v-align-middle bg-red-300"></span> `red-300` | `.text-red-300` | `.bg-red-300` |

</details>

For example, this is what you need to do to render a red text on a green background. (Don't do this, it's ugly)

<div class="code-example" markdown=1>
I'm an ugly text.
{: .bg-green-000 .text-red-000}
</div>

```md
I'm an ugly text.
{: .bg-green-000 .text-red-000}
```

### Spacing

The same applies to this spacing section. This usually won't be useful to the normal user.

<details markdown="block">
  <summary>
  UNWRAP ME !
  </summary>

These spacers are available to use for margins and padding with responsive utility classes. Combine these prefixes with a screen size and spacing scale to use them responsively.

| Classname prefix | What it does                  |
|:-----------------|:------------------------------|
| `.m-`            | `margin`                      |
| `.mx-`           | `margin-left`, `margin-right` |
| `.my-`           | `margin top`, `margin bottom` |
| `.mt-`           | `margin-top`                  |
| `.mr-`           | `margin-right`                |
| `.mb-`           | `margin-bottom`               |
| `.ml-`           | `margin-left`                 |

| Classname prefix | What it does                    |
|:-----------------|:--------------------------------|
| `.p-`            | `padding`                       |
| `.px-`           | `padding-left`, `padding-right` |
| `.py-`           | `padding top`, `padding bottom` |
| `.pt-`           | `padding-top`                   |
| `.pr-`           | `padding-right`                 |
| `.pb-`           | `padding-bottom`                |
| `.pl-`           | `padding-left`                  |

Spacing values are based on a `1rem = 16px` spacing scale, broken down into these units:

| Spacer/suffix  | Size in rems  | Rem converted to px |
|:---------------|:--------------|:--------------------|
| `1`            | 0.25rem       | 4px                 |
| `2`            | 0.5rem        | 8px                 |
| `3`            | 0.75rem       | 12px                |
| `4`            | 1rem          | 16px                |
| `5`            | 1.5rem        | 24px                |
| `6`            | 2rem          | 32px                |
| `7`            | 2.5rem        | 40px                |
| `8`            | 3rem          | 48px                |
| `auto`         | auto          | auto                |

Use `mx-auto` to horizontally center elements.

#### Responsive modifiers
{: .no_toc }

If you want to have different display between different screen sizes, you can put this size modifiers inbetween prefix & suffix/spacer classes.

| Modifier  | Screen size                          |
|:----------|:-------------------------------------|
| (none)    | All screens until the next modifier  |
| `xs`      | 320px (20rem) and up                 |
| `sm`      | 500px (31.25rem) and up              |
| `md`      | 740px (46.25rem) and up              |
| `lg`      | 1120px (70rem) and up                |
| `xl`      | 1400px (87.5rem) and up              |

##### Examples
{: .no_toc }

In Markdown, use the `{: }` wrapper to apply custom classes:

```markdown
This paragraph will have a margin bottom of 1rem/16px at large screens.
{: .mb-lg-4 }

This paragraph will have 2rem/32px of padding on the right and left at all screen sizes.
{: .px-6 }
```

#### Horizontal Alignment
{: .no_toc }

| Classname               | What it does                     |
|:------------------------|:---------------------------------|
| `.float-left`           | `float: left`                    |
| `.float-right`          | `float: right`                   |
| `.flex-justify-start`   | `justify-content: flex-start`    |
| `.flex-justify-end`     | `justify-content: flex-end`      |
| `.flex-justify-between` | `justify-content: space-between` |
| `.flex-justify-around`  | `justify-content: space-around`  |

_Note: any of the `flex-` classes must be used on a parent element that has `d-flex` applied to it._

#### Vertical Alignment
{: .no_toc }

| Classname              | What it does                    |
|:-----------------------|:--------------------------------|
| `.v-align-baseline`    | `vertical-align: baseline`      |
| `.v-align-bottom`      | `vertical-align: bottom`        |
| `.v-align-middle`      | `vertical-align: middle`        |
| `.v-align-text-bottom` | `vertical-align: text-bottom`   |
| `.v-align-text-top`    | `vertical-align: text-top`      |
| `.v-align-top`         | `vertical-align: top`           |

#### Display
{: .no_toc }

Display classes aid in adapting the layout of the elements on a page:

| Class             |                         |
|:------------------|:------------------------|
| `.d-block`        | `display: block`        |
| `.d-flex`         | `display: flex`         |
| `.d-inline`       | `display: inline`       |
| `.d-inline-block` | `display: inline-block` |
| `.d-none`         | `display: none`         |

Use these classes in conjunction with the responsive modifiers.

##### Examples
{: .no_toc }

In Markdown, use the `{: }` wrapper to apply custom classes:

```markdown
These headings will be `inline-block`:

### heading 3
{: .d-inline-block }

### heading 3
{: .d-inline-block }
```
</details>

### Typography Utilities

You're used to it by now...

<details markdown="block">
  <summary>
  UNWRAP ME !
  </summary>

#### Font size
{: .no_toc }

Use the `.fs-1` - `.fs-10` to set an explicit font-size.

| Class   | Small screen size `font-size`  | Large screen size `font-size` |
|:--------|:-------------------------------|:------------------------------|
| `.fs-1` | 9px                            | 10px                          |
| `.fs-2` | 11px                           | 12px                          |
| `.fs-3` | 12px                           | 14px                          |
| `.fs-4` | 14px                           | 16px                          |
| `.fs-5` | 16px                           | 18px                          |
| `.fs-6` | 18px                           | 24px                          |
| `.fs-7` | 24px                           | 32px                          |
| `.fs-8` | 32px                           | 38px                          |
| `.fs-9` | 38px                           | 42px                          |
| `.fs-10`| 42px                           | 48px                          |

<div class="code-example" markdown="1">
Font size 1
{: .fs-1 }
Font size 2
{: .fs-2 }
Font size 3
{: .fs-3 }
Font size 4
{: .fs-4 }
Font size 5
{: .fs-5 }
Font size 6
{: .fs-6 }
Font size 7
{: .fs-7 }
Font size 8
{: .fs-8 }
Font size 9
{: .fs-9 }
Font size 10
{: .fs-10 }
</div>
```markdown
In Markdown, use the `{: }` wrapper to apply custom classes:

Font size 1
{: .fs-1 }
Font size 2
{: .fs-2 }
Font size 3
{: .fs-3 }
Font size 4
{: .fs-4 }
Font size 5
{: .fs-5 }
Font size 6
{: .fs-6 }
Font size 7
{: .fs-7 }
Font size 8
{: .fs-8 }
Font size 9
{: .fs-9 }
Font size 10
{: .fs-10 }
```

#### Font weight
{: .no_toc }

Use the `.fw-300` - `.fw-700` to set an explicit font-size.

<div class="code-example" markdown="1">
Font weight 300
{: .fw-300 }
Font weight 400
{: .fw-400 }
Font weight 500
{: .fw-500 }
Font weight 700
{: .fw-700 }
</div>
```markdown
In Markdown, use the `{: }` wrapper to apply custom classes:

Font weight 300
{: .fw-300 }
Font weight 400
{: .fw-400 }
Font weight 500
{: .fw-500 }
Font weight 700
{: .fw-700 }
```

#### Line height
{: .no_toc }

Use the `lh-` classes to explicitly apply line height to text.

| Class         | `line-height` value  | Notes                         |
|:--------------|:---------------------|:------------------------------|
| `.lh-0`       | 0                    |                               |
| `.lh-tight`   | 1.1                  | Default for headings          |
| `.lh-default` | 1.4                  | Default for body (paragraphs) |

<div class="code-example" markdown="1">
No Line height
No Line height
{: .lh-0 }

Tight line height
Tight line height
{: .lh-tight }

Default line height
Default line height
{: .fh-default }
</div>

```markdown
In Markdown, use the `{: }` wrapper to apply custom classes:

No Line height
No Line height
{: .lh-0 }

Tight line height
Tight line height
{: .lh-tight }

Default line height
Default line height
{: .fh-default }
```

#### Text justification
{: .no_toc }

By default text is justified left. Use these `text-` classes to override settings:

| Class          | What it does         |
|:---------------|:---------------------|
| `.text-left`   | `text-align: left`   |
| `.text-right`  | `text-align: right`  |
| `.text-center` | `text-align: center` |

</details>

## Page information and parameters

On top of it, your page can have several parameters. Here's an example with the Silvered Enchantment :

```
---
layout: default
title: Silvered
summary: As seen in the Master Sword, this Enchantment is truly Evil's Bane. 
permalink: /enchantments/silvered
parent: Enchantments
tags:
  - enchantment
  - weapons
contributors:
  - mei
  - elementalknight
---
```

* The "layout" property should always use the default parameter.
{: lh-tight}
* The "title" is the title of your page, it will be used in the navigation, and in the user's browser (The tab will be called `title - RtW's Wiki`).
{: lh-tight}
* The "summary" property is used by the parent of your page. The parent will automatically generate a table of content of its children, using the title property. If the summary property is mentionned, the entry will be written as `title - summary`. If it's not, it will only be written as `title`.
{: lh-tight}
* The "permalink" property allows you to customize the URL of your page. It is, in fact, automatically generated, but you can tinker it further through this property. This can be useful to remove the ".html" at the end of the url, for example. If it is not mentionned, the permalink will be the path of the file, with the same name as your file at the end, but ended by .html instead of .md. You should try, whenever possible, to include this property.
{: lh-tight}
* The "parent" property is used to indicate the title of the parent of the page. It can be omitted for orphan pages, but most of your content should be the children of one of the category pages. The current parents available are :
    - Enchantments
    - Enemies
    - Feats
    - Items
    - Misc
    - Races
    - Rules
    - Songs
    - Spells
{: lh-tight}
* You can add a cool "last_modified_date" property if you want to display the last date this file was modified (Which you should !). The format is the following: `last_modified_date: 2020-04-27T17:54:08+0000` where the second half is a ISO 8601 formatted UNIX Timestamp. You can easily generate one from [this website](https://timestampgenerator.com/).
{: lh-tight}
* You can add tags to your page ! Tags are defined on the [tags page]({{ /tag/ | absolute_url }}), and new ones can be added when necessary.
{: lh-tight}
* The same can be done with contributors. Contributors can be seen on the [contributors page]({{ /contributor | absolute_url }}), but they're not set exactly the same : Contributors are set through an id, also called a slug. On a general basis, the id is a lowercase-version of the user's name, without whitespaces and special characters. For example, "Meï" becomes `mei` and "Elemental Knight" becomes `elementalknight`. In doubt, you can always refer to [contributors.yml](https://github.com/ReclaimTheWild/priv_wiki/blob/master/_data/contributors.yml) file from the wiki's GitHub repository.
{: lh-tight}
* If you need it for any reason, you can include a `nav_exclude: true` property to make your page *NOT* appear in the navigation menu.

## Templates

### Article page

<details markdown="block">
  <summary>
  EXPAND !
  </summary>

Not yet done
</details>

### User Profile page

<details markdown="block">
  <summary>
  EXPAND !
  </summary>

Not yet done
</details>

*[GFM]: GitHub-Flavored Markdown