---
path: "/blog/styling-forms-elements"
date: "2019-08-05"
title: "Styling Forms Elements"
tags: ['css', 'forms',]
draft: true
featured: false
featuredImage: "./scaffold.jpg"
excerpt: "Styling web forms is not the most exciting thing when working on a project but they are essensial to most websites and is important to give them the attention they deserve."
---
Whether you are a veteran or just getting started with web development, working with web forms is not the sexiest thing but there is no avoiding them.  Forms on a website are critical to the website's mission and the visitors using them.  In this post I am going to show you how to properly style webforms and form elements so you can ensure they are consistent with your brand and provide a pleasant user experience.

## Where to start
One thing about forms you can count on is that they are not consistent.  In today's API era forms can be generated from any source and you don't always have control of their HTML.  I personally work with [Drupal](https://drupal.org) a lot and even within it forms can originate from Views, Blocks, Nodes, Paragraphs, Modules, and more.  I imagine this is the case with most Content Management Systems.  So how do you address something where you can't always predict source or markup of forms?

### If you can't beat them, join them
Whether is Drupal or other system, it is best to let that system dictate the markup of forms.  Try to bend a system to your needs can prove challenging and not worth the trouble.  This is the approach I take and so far this has worked very well for me.

## Attributes are your friends
As a Front-End developer for many years, I love a good css class.  They make my job a lot easier than not having a class.  When it comes to form elements however, it is best to ignore classes and rely solely in attributes.  What attributes you may be asking yourself?  Let's take a look

### From element types
The **type** attribute in form elements make it easy to style them in a global manner.  Rather than styling form elements based on their css class or ID, the type attribute is the best approach.  Each form field has a type attribute which makes it possible for browsers to render the element as expected.  The type attribute can also play a factor in Javascript and form handling, but for now we are going to focus on styling.

* **Input fields**:  Input fields such as text fields, are probably the most common form elements in a form.  But don't let its simplicity fool you because text fields come in many types; the most common being `text`.  this is the type for a typical text box where you can type just about any kind of information.  This sometimes leads to developers using it for anything including for data that should be in a different form type.  Let's take a look at the various types a text field can be:

  * **text**:  Used for most text fields and accept any data
  * **email**: Used to capture email address.  Using this type is recommended for email addresses as it provides _regular expressions_ to validate the data entered in the field meets the patterns of an email addresses.  In addition, using this type of field makes it possible for your mobile devices to show a custom keyboard where the "@" sign is available without having to toggle your keyborad characters to find it.
  * **password**: As you can imagine, this makes it possible to hide passwords from view as you type them.
  * **search**:  Elements of type search are text fields designed for the user to enter search queries into. These are functionally identical to text inputs, but may be styled differently by the user agent.
  * **tel**:  Similarly to the email address, using this type allows for the keyboard on mobile devices to display numbers by default rather than alpha characters.

As you can see from the examples above, text fields may seem simple but they come in all flavors.  In most cases, the goal of form elements is to be styled the same across an entire site.  So it is
recommended you style these elements globally so no matter where they are used they automatically inherit the intended styles.  So how do you style them globally?  Let's take a look:

Here are a couple of examples of differnt input fields which we will style to ensure they all look similarly everywhere.
```
<input type="text" name="firstname">
```

```
<input type="password" name="password">
```

```
<input type="email" name="email">
```

### Styling
```
  input[type='text'],
  input[type='password'],
  input[type='email'],
  input[type='tel'],
  input[type='search'],
  textarea {
    background-color: #ffffff;
    border: 1px solid #000000;
    height: 40px;
    padding: 10px;
    width: 100%;
  }

  textarea {
    height: initial;
  }
```
By using the element's type attribute we can collectively style them with a single set of rules.  As you may have noticed I included `textarea` as on of the elements because I want textareas boxes to inherit all of the styles from text boxes with the exception of the height property; thus we override the height property while keeping all other styles the same as text boxes.

## Radio buttons and Check boxes
Probably the hardest elements to style due to their dynamic nature, they have a hard time fitting in with the rest of HTML elements. Rather than link you to another blog post where you can copy and paste the necessary CSS to style these elements, I am walk you through the process of styling them.

### Markup
The typical markup for a checkbox or radio button looks like this:
```
<div class="form-item__wrapper>
  <input type="checkbox" id="checkbox1" name="checkboxname" value="Please check me">
  <label for="checkbox1">Please check me</label>
</div>
```
```
<div class="form-item__wrapper>
  <input type="radio" id="radio1" name="radioname" value="Please select me">
  <label for="radio1">Please select me</label>
</div>
```

### Styles
Out of the box, you can not style the native checkbox nor radio button elements.  To be able to apply custom styles we need to do it in a hacky way.
```
input[type='checkbox'],
input[type='radio'] {
  position: absolute;
  opacity: 0;
}
```
By setting absolute position and opacity to zero, we are hiding the native radio and checkbox elements from view.  We need the elements to still function as expected so using `visibility-hidden` or `display: none` are not liable options.

```
& + label {
  cursor: pointer;
  padding: 0;
  position: relative;
}
```
