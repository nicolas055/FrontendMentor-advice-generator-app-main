# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Screenshot] (/screenshots/screenshot.png)

### Links

- Solution URL: [Go to Solution]([https://your-solution-url.com](https://www.frontendmentor.io/solutions/responsive-advice-generator-ToI4CcTrxj))
- Live Site URL: [Go to Live Site]([https://your-live-site-url.com](https://frontend-mentor-advice-generator-app-main-pi.vercel.app/))

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Advice Slip API

### What I learned

I've sharpend my skills using promises

```js
async function generateAdvice() {
    loadAnimationEl.style.display = 'block';
    adviceTextEl.innerText = '';

    let response = await fetch('https://api.adviceslip.com/advice');
    let json = await response.json();
    adviceIDEl.innerHTML = json.slip.id;
    adviceTextEl.innerText = `"${json.slip.advice}"`;
    loadAnimationEl.style.display = 'none';
}
```


### Continued development

I want to improve my skills using APIs

## Author

- Github - [@nicolas055](https://github.com/nicolas055)
- Frontend Mentor - [@nicolas055](https://www.frontendmentor.io/profile/nicolas055)
- Instagram - [@nicolas_leite2](https://www.instagram.com/nicolas_leite2/)
