"use strict";

// Inputs
const dayIn = document.querySelector("#day");
const monthIn = document.querySelector("#month");
const yearIn = document.querySelector("#year");

// Outputs
const dayOut = document.querySelector("#dd");
const monthOut = document.querySelector("#mm");
const yearOut = document.querySelector("#yy");

// Submit button
const submit = document.getElementById("submit");

// This creates a date object with the current date and time as no argurment is specified
const date = new Date();
// This creates a day object with the current day as no argurment is specified
let day = date.getDate();
// This creates a month object with the current month, the getMonth method is 0 based so January = 0. ive added +1 so january now = 1
let month = 1 + date.getMonth();
// This creates a year object with the current year as no arguement is specifed, Date = 2023
let year = date.getFullYear();

// An array containing the amount of days in all of the months of the year
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31];

// This function checks that the provided input is valid.
function check() {
  // Inputs
  const inputs = document.querySelectorAll("input");
  // Setting the validator as true innitially
  let validator = true;
  // Selecting all inputs
  inputs.forEach((i) => {
    const parent = i.parentElement;
    // If no value is entered to the input, set the border color to red
    if (!i.value) {
      i.style.borderColor = "red";
      // selecting the span element then adding some inner text
      parent.querySelector("span").innerHTML = "This is a required field";
      parent.querySelector("h2").style.color = "#D33643";
      validator = false;
    }
    // If the value entered is greater than 12
    else if (monthIn.value > 12) {
      monthIn.style.borderColor = "red";
      monthIn.parentElement.querySelector("span").innerText =
        "Must be a valid month";
      validator = false;
    }
    // If the value entered is greater than 31
    else if (dayIn.value > 31) {
      dayIn.style.borderColor = "red";
      dayIn.parentElement.querySelector("span").innerText =
        "Must be a valid day";
      validator = false;
    }
    // if the value entered for the year is greater than the current year
    else if (yearIn.value > year) {
      yearIn.style.borderColor = "red";
      yearIn.parentElement.querySelector("span").innerText =
        "must be a valid year";
    } else {
      i.style.borderColor = "black";
      parent.querySelector("span").innerText = "";
      validator = true;
    }
  });
  return validator;
}

// A function for the submit button
function Submit(e) {
  // Prevents the form from automaticalluy being submitted when the window loads
  e.preventDefault();
  // If the Check function is true
  if (check()) {
    if (dayIn.value > day) {
      day = day + months[month - 1];
      console.log(day);
      month = month - 1;
    }
    if (monthIn.value > month) {
      month = month + 12;
      console.log(month);

      year = year - 1;
    }

    // Creating new variables to hold the calculated values.

    const d = day - dayIn.value;
    const m = month - monthIn.value;
    const y = year - yearIn.value;
    // outputting the new calulated values into the output feilds.
    dayOut.innerHTML = d;
    monthOut.innerHTML = m;
    yearOut.innerHTML = y;
  }
}

// Adding an event listener with executes both functions when the submit button is clicked.

submit.addEventListener("click", Submit);
