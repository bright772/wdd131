// select the DOM elements for output
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// use the date object
const today = new Date();

// set the innerHTML of the year element to the current year
year.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last modified on: ${document.lastModified}`;
