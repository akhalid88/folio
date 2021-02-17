# Folio 3

![Site](readme/main.jpg)

-----------------------
## Table of Contents
1. [Description](#description)
2. [Deployed Link](#deployed-link)
3. [Code Snippet](#code-snippet)
4. [Prerequisites](#prerequisites)
5. [Built with](#built-with)
6. [Licenses](#licenses)
7. [Author](#author)
8. [Acknowledgements](#acknowledgements)

-----------------------
## Description
A new responsive portfolio utilizing Express JS for path redirection.

-----------------------
## Deployed Link
https://mak-folio.herokuapp.com/

![Portfolio](readme/portfolio.png)

-----------------------
## Code Snippet

Having played with both Bootstrap and Bulma CSS Frameworks, I decided it was time to try something a bit more complex with Foundation CSS.

Bulma CSS, while an amazing CSS Framework, lacks any Javascript. This is a double-edged sword. On the one hand it means that Bulma is light-weight, on the other hand as a developer you have to write all the Javascript yourself. So for simple things like a responsive hamburger need to be manually coded. I coded a simple on-click function that triggers on clicking hte hamburger menu. I then check to see if the navbar-burger has the class of ".is-active", if it doesn't add the class which makes the nav menu visible on smaller screens. If it does have it then remove the class. While it's active, if the user selects any nav item, i have a second click function that will hide the menu effectively reseting the menu. 

```javascript

```

In recent years, bundling anchor tags with buttons has gone out of fashion in the web development community. It is not seen as good practice. I learned of this when submitting my original html to an html validator. To get around this issue, I removed the button element and simply gave the anchor tag the same styling as the original button as well as the role of "button", as seen below. 

```html

```
![Download](assets/readme/download.png)

-----------------------
## Prerequisites
A computer with an active internet connection and a web browser

-----------------------
## Built with
- Express JS
- Heroku
- Foundation CSS
- jQuery
- Javascript
- HTML
- CSS
- Git
- Github

-----------------------
## Licenses
This Project is licensed under MIT license

-----------------------
## Author
Muhammad A Khalid

[LinkedIn](https://www.linkedin.com/in/abdullahkhalid/)
<br>
[GitHub](https://github.com/akhalid88)

-----------------------
## Acknowledgements
- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp