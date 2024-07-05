import * as index from './index.js';

// The logo text of the site has the wrong color. Change it to the correct one.
const logoText = document.querySelector("p.logo-text");
logoText.style.color = "#384241";

// The alignment of the elements inside the header element are wrong.
// Change it to the correct one. Hint, check the flex properties for the correct alignment.
// Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const header = document.querySelector("header");
header.style.justifyContent = "normal";

// The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
header.style.borderBottomColor = "lightgrey";

// The recipe name is wrong, change it to the correct one.
const recipeName = document.querySelector("#recipe-name");
recipeName.innerText = index.recipeNameInnerText; // unsuccessful somehow?
recipeName.innerText = "Frozen Cheescake";

// The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
const timerSpan = document.querySelector(".time-container span");
timerSpan.classList.add("material-icons");

// The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
const timerTime = document.querySelector(".time-container .time");
timerTime.innerText = "60+ min";

// The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.
const image = document.querySelector(".image-container img");
image.src = "assets/frozen-cheesecake-slice.jpg";

// The background color of the ingredients list container is wrong. Fix it.
const ingredients = document.querySelector(".ingredients-container");
console.log(ingredients);
ingredients.style.backgroundColor = "#f9f9f9";

// The ingredients are divided in to two parts, one for the bottom and one for the paste.
// In the list of the ingredients to the bottom, there is a text instead of two list items.
// Remove the text and add those two list items.




// The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.
// There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.
// The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.
// Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.