# Shopping List

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

- View the optimal layout for the app depending on their device's screen size
- Add items with set quantity and cost amount
- Delete items from list
- Click checkbox for found items
- Sort list by input order, description, found status, and cost from low or high
- See the status of the list and predicted total cost in the footer

### Screenshot

![](./screen.jpg)

### Links

- Live Site URL: [View](https://shoppinglist25.netlify.app/)

## My process

- This comprises a simple React application for managing a shopping list.
- It includes components for adding items, displaying the list, and providing statistics.
- The `App` component serves as the main container, managing state for the list of items and passing down relevant functions to child components.
- The `Form` component handles user input for adding new items, while the `ShoppingList` component renders the list itself, allowing users to toggle item status and clear the list.
- Additionally, the `Stats` component calculates and displays statistics based on the found status of items, providing users with feedback on their progress.
- To enhance the app's usability, the application utilizes local storage to persist data even when the browser is refreshed or closed. This is done through a custom hook `useLocalStorageState`.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [Sass](https://sass-lang.com/) - Preprocessor scripting language
- Flexbox
- CSS Grid
- Mobile-Responsive Design
- JavaScript - Scripting language
- [React](https://reactjs.org/) - JS library

### What I learned

This is a project testing all I know on react

### Continued development

Maybe used for reference.

## Author

- Website - [Cameron Howze](https://camkol.github.io/)
- Frontend Mentor - [@camkol](https://www.frontendmentor.io/profile/camkol)
- GitHub- [@camkol](https://github.com/camkol)
- LinkedIn - [@cameron-howze](https://www.linkedin.com/in/cameron-howze-28a646109/)
- E-Mail - [cameronhowze4@outlook.com](mailto:cameronhowze4@outlook.com)
