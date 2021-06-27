# Teste - Games E-Commerce

## Getting started

It is important to notice that there are two versions of this project:

- 1 - No backend: This version uses only the provided JSON data
- 2 - With backend: This version is a plus, I made an simple CRUD application

using express and mysql

To use either one of another, all you need to do is toggle a setting in the .env file of

the client:

.env

`BACKEND=no`

Setting it to "YES" will automatically start using the backend you will setup in a moment.

## How to configure

First we need to download and install all the dependencies (i.e libraries);

To do so, head over to the project's folder and, inside both the `client` and the `server`

folder, open up a terminal or a Command Prompt window and type in the following:

`yarn` - This will download all the dependencies of the project

And hit `Enter`

After you've done that, we now need to start the application, to do that, you'll need to run

`yarn start` - For the `client` (React App) and;

`yarn dev` - For the `server` (Express + MySQL Backend).

## Setting up the backend

_This text will be italic_  
_This will also be italic_

**This text will be bold**  
**This will also be bold**

_You **can** combine them_

## Lists

### Unordered

- Item 1
- Item 2
- Item 2a
- Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3

1. Item 3a
1. Item 3b

## Images

![This is a alt text.](/image/sample.png "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
> > Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns | Right columns |
| ------------ | :-----------: |
| left foo     |   right foo   |
| left bar     |   right bar   |
| left baz     |   right baz   |

## Blocks of code

```
let message = 'Hello world';
alert(message);
```

## Inline code

This web site is using `markedjs/marked`.
