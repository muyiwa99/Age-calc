# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

Mobile and Desktop screen shot included in screens folder

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- Downloaded course content and viewed all images
- Started breaking down projects into steps: Desktop page, Mobile page, DOM manipulation
- Researched similar projects to see how they were impleemented and things i could improve on
- Started building project by first implemnting the desktop page.
- Once happy with destop design i moved on to implenting the JS, I conducted research on date objects as i was going to be doing a lot of work with dates. Also resaerched into adding vaarious validators and functions.
- After JS part implemented and tested, i moved on to add the responsiveness.
- Upload to GIT and deploy on Netlify then upload solution to Codewell platform

### Built with

- Semantic HTML5 markup
- SCSS - Design
- Flexbox- Layout
- Position- layout
- Mobile-first
- Javascript- DOM manipulation

### What I learned

I used this project to learn and get a more clear understanding on how date objects work, i now know how to retrieve various date objects (minutes, hour, day, month, year) using JS. I have a more improved understing of adding diffrent types of validators using IF/Else statements and also improving on when to declare a variable using Const and when to use Let.

i was proud of these lines of code as i was able to reserch understand and implemnt them in my project:

```js
const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();
```

### Continued development

- Validators: i wasnt able to implement a validator that checks if the dates invalid (e.g 31/04/1991- there are only 30 days in april)
- Date objects: To develop a further understaing of its uses.
- Min clamp and max- To imporve my Mobile layouts

### Useful resources

- [MDN site ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) - This helped me to understand date Methods and how to use them on my project.
- [Validators] (https://linuxhint.com/validate-date-javascript/)- This helped me gain a better undertanding on implementing validators on my code.

## Author

- LinkedIN - [Muyiwa Areola](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/muyiwa99)
- Github - [@muyiwa99](https://github.com/muyiwa99)

## Acknowledgments

Thank you to myself for peservering and completing this challenge.
