---
path: "/embedding-svg-icons-with-twig-macro"
date: "2018-01-12T17:12:33.962Z"
title: "Embedding SVG icons with a twig macro"
tags: ['twig', 'drupal', 'SVG']
img: "../img/hero.jpg"
excerpt: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla."
---

## What are Twig Macros
Before we start diving into embedding SVG icons using Twig macros, let's discuss what a Twig macro is.  If you read Twig's documentation, Macros are defined as follows:
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The GOP controls every branch of govt. I repeat: They control the WH &amp; Congress. They&#39;ve lurched from crisis to crisis for months w/o funding disaster recovery, health centers or children&#39;s health care. All while Dreamers hang in the balance. This is no way to govern.</p>&mdash; Elizabeth Warren (@SenWarren) <a href="https://twitter.com/SenWarren/status/954434607813922816?ref_src=twsrc%5Etfw">January 19, 2018</a></blockquote>


_Macros are comparable with functions in regular programming languages. They are useful to put often used HTML idioms into reusable elements to not repeat yourself._

Here is a small example of a macro that renders a form element:
```twig
{% macro input(name, value, type, size) %}
    <input type="{{ type|default('text') }}" name="{{ name }}" value="{{ value|e }}" size="{{ size|default(20) }}" />
{% endmacro %}
```
Macros differ from native PHP functions in a few ways:

* Default argument values are defined by using the default filter in the macro body;
* Arguments of a macro are always optional.
* If extra positional arguments are passed to a macro, they end up in the special varargs variable as a list of values.

As you can see, macros allows us to simplify specific tasks and avoid repeating ourselves.  If you know Sass, I think of twig macros as Sass mixins.


## What are we building today
Today we will go over how to write a macro to embed SVG icons in our site.
Here's an example of of what we are building today.  We want to cycle through a list of links and be able to embed an icon to each link based on the link type (i.e. twitter, facebook, instagram, etc.).

![heroes](../static/hero-b8b4492380cc9e5ead438c68189e0b90-4e8db.jpg)

## Write the twig macro
```twig
{% macro get(name, iconClass) %}
  {% include '@demo_theme/icons/assets/' ~ name ~ '.svg.twig' with {
    'iconClass': iconClass,
    'name': name
  } only %}
{% endmacro %}
```

## Hosting the SVG code
We are going to create a twig file so we can embed the SVG code in it.  This may seem extrange but trust me, it works.

* Create a new file and name it `facebook.svg.twig`
* In it, paste the SVG code below and save the file.

```
<svg aria-hidden="true" role="img" class="{{ iconClass|default('') }}" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>facebook</title><path d="M58 0H6C2.7 0 0 2.7 0 6v52c0 3.3 2.7 6 6 6h26V36h-8v-8h8v-4c0-6.613 5.388-12 12-12h8v8h-8c-2.2 0-4 1.8-4 4v4h12l-2 8H40v28h18c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6z"/></svg>
```

## Let's generate data for the icons
We are taking the component based theming approach for the icons.  We are going to create a JSON object to pass to the twig template.

```json
{
  "items":[
    {
      "icon": "facebook",
      "url": "#"
    },
    {
      "icon": "twitter",
      "url": "#"
    },
    {
      "icon": "youtube",
      "url": "#"
    },
    {
      "icon": "github",
      "url": "#"
    },
    {
      "icon": "instagram",
      "url": "#"
    }
  ]
}
```
What we've done above is write a JSON object which holds an array of items.  Each item has two properties, icon and url.

## Let's put our macro to use
* Create a new file called `social-icons.twig`
* Paste the code snippet below into it

```twig
{% import "../icons/icons.twig" as icons %}

{% if items %}
  <ul class="social-icons">
  {% for item in items %}
    <li class="social-icons__item">
      <a href="{{ item.url }}">
        {{ icons.get(item.icon|lower, 'icon icon-' ~ item.icon|lower) }}
        <span class="social-icons__name">{{ item.icon }}</span>
      </a>
    </li>
  {% endfor %}
  </ul>
{% endif %}
```
**Let's go over the code above**

* We are wrapping our icons in an *Unordered List* (UL)
* Then we loop through the **items** array
* For each item we create a **List Item** (li) and assign a class of `social-icons--item`
* Next we print an anchor
* Then we call the .get() function passing it the icon name.
* (Optional) The second argument is any classes you would like to apply to the svg element.  We concatenate the icon name so the class is unique on each icon
* Finally, inside a `<span>` we print the icon name for accesibility purposes.

## Styling the icons
```sass
.social-icons {
  background: $color-alabaster;
  border: 1px solid $color-alto;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 20px;
  list-style: none;

  // SVG styles.
  .icon {
    fill: $color-tundora;
    transition: fill 0.3s ease-in-out;

    &:hover,
    &:focus {
      fill: $color-orange;
    }
  }
}

// Hides social networks names from view,
// however they are still available to screenreaders.
.social-icons__name {
  @include element-invisible;
}

.social-icons__item {
  margin: 0 20px;
}```
