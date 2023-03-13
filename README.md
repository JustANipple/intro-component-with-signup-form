# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](desktop-screenshot.png)
![](mobile-screenshot.png)

### Links

- HTML solution: [HTML](https://github.com/JustANipple/intro-component-with-signup-form/blob/master/index.html)
- CSS solution: [CSS](https://github.com/JustANipple/intro-component-with-signup-form/blob/master/style.css)
- JS solution: [JS](https://github.com/JustANipple/intro-component-with-signup-form/blob/master/script.js)
- Live Site URL: [LIVE](https://justanipple.github.io/intro-component-with-signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Josh's Custom CSS Reset
- JavaScript

### What I learned

I learned that i can validate inputs with different regular expressions

To see how you can add code snippets, see below:

```js
const namePat = new RegExp("[a-zA-Z0-9]+");
const emailPat = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-z]+$");
const passPat = new RegExp("[a-zA-Z0-9]+$");
```

### Continued development

Writing the validation part for just four inputs made me write long lines of code that looked almost the same at the end, but i couldn't find a way to iterate through the regex with a loop
Making the JS code more clear and clean will be my focus for the next challenges

## Author

- Frontend Mentor - [@JustANipple](https://www.frontendmentor.io/profile/JustANipple)