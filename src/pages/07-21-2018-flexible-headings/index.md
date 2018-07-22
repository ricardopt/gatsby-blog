---
path: "/blog/flexible-headings-with-twig"
date: "2018-07-21T17:12:33.962Z"
title: "Flexible Headings with Twig"
tags: ['components', 'twig']
draft: false
featured: true
featuredImage: "./flexible-headings-hero.jpg"
excerpt: "Headings are normally used for page or section titles and are a big part of making your website SEO friendly.  As simple as this may sound, headings need to be carefully planned."
---

Building websites using the component based approach presents all kinds of advantages over the traditional page building approach. Today I’m going to show how to create what would normally be an Atom if we use the atomic design approach for building components. We are going to take this simple component to a whole new level by providing a way to dynamically controlling how it is rendered.

## The heading component
Headings are normally used for page or section titles and are a big part of making your website SEO friendly.  As simple as this may sound, headings need to be carefully planned.  A typical heading would look like this:

```html
<h1>This is a Heading 1</h1>
```

The idea of components is that they are reusable, but how can we possibly turn what already looks like a bare bones component into one that provides options for choosing the heading level at rendering time?  If we were to reuse the heading component as it is we would always end up with an H1 heading.  There will be times when we may want an H2, H3, etc.

### Enter Twig and JSON
Twig offers many advantages over plain HTML and today we will use some logic to transform the static heading component into a more dynamic one.

Let’s start by creating a simple JSON object which we will use as data for Twig to consume.  We will build some logic around this data to make the heading component more dynamic.  This is typically how I build components on projects I work on.

* In your project, typically within the components/patterns directory create a new folder called **heading**
* Inside the heading folder create a new file called **heading.json**
* Inside the new file paste the code snippet below

```json
{
  "title": "This is an awesome heading component",
  "heading_level": "",
  "classes": ""
}
```

So we created a simple JSON object with 3 keys: title, heading_level and classes.  We will use these variables to transform the heading element and add logic.

* Inside the heading folder create a new file called **heading.twig**
* Inside the new file paste the code snippet below

```twig
{% set heading_level = heading_level | default(2) %}
<h{{ heading_level }} class="heading {{ classes|default('') }}">
    {{ title }}
</h{{ heading_level }}>
```

So let’s go over what’s happening here.  We will break things down to better understand:

```twig
{% set heading_level = heading_level | default(2) %}
```
We created a new variable for the heading level so we can pass it to the heading component to decide what heading we want to render (h1-h6).  If no value is passed the heading level will be 2 (H2), by default.


```twig
<h{{ heading_level }} class="{{ classes|default('') }}">
```
Next, we make use of the heading_level variable we just created by passing it to compose the heading tag (i.e. <h3>).  In addition, we are using the classes key so we can pass a unique css class to the heading when it’s time to include it in our templates.  More on this later.

```twig
{{ title }}
```
Next we pass the value of the title key so the text for the heading can be rendered. This may seem like an overkill because we could simply type the title of the heading directly in the twig template, however, this is a better approach for separation of concern between data and markup.


```twig
</h{{ heading_level }}>
```
Finally we close the heading tab by again appending the heading_level variable.


#### Now what?
Well, our heading component is ready but unfortunately the component on its own does not do any good.  The best way to take advantage of our super smart component is to start using it within other components.


## Putting the heading component to use
As previously indicated, the idea of components is so they can be reusable which eliminates duplication and reduces amount of work and effort.  Now that we have the heading component ready, we can reuse it in other templates by taking advantage of twig’s include statement.  That will look like this:

```twig
<article class="media-card">
  {%
    include '@components/heading/heading.twig' with {
      "title": title,
      "heading_level": 3,
      "classes": 'media-card__heading'
    }
  %}
</article>
```

The example above shows how we can reuse the heading component in the media-card component by using Twig’s include statement.  By including the heading component we can individual pass each of the keys we originally created in the JSON object and change the value of those keys based on our needs.
NOTE:  For this to work, the same keys need to exist in the media-card’s JSON object.

From the code above we can see that we are asking for the heading to be a H3 and we are passing the css class of `media-card__heading` so we can pass specific styles when the heading is used in the media-card component.

You noticed the part `@components`? this is only an example of a namespace.  If you are not familiar with the **components library** drupal module, it allows for creating namespace for your theme which you can use on your theme and modules. Read more about the [component libraries module](https://www.drupal.org/project/components).


## In closing

There is a lot more you can do with this approach but in the interest of time and length of this post I’ve focused on the most basic functionality.  The main goal of this post is to bring light on how important it is to build components that are not restricted and can be used throughout the site in a way that does not feel like you are repeating yourself.


#### Additional Resources:
[Managing heading levels in design systems](https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3).
