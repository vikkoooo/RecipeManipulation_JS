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
const ingredientsContainer = document.querySelector(".ingredients-container");
console.log(ingredientsContainer);
ingredientsContainer.style.backgroundColor = "#f9f9f9";

// The ingredients are divided in to two parts, one for the bottom and one for the paste.
// In the list of the ingredients to the bottom, there is a text instead of two list items.
// Remove the text and add those two list items.
const ingredientBottom = document.querySelector(".ingredients-list-bottom");
ingredientBottom.innerHTML = ""; // clear

// Can also be solved by a loop of many elements to be manipulated
const firstItem = document.createElement("li"); // create li element
ingredientBottom.appendChild(firstItem); // add after the last element (position 1 in this case since its empty)
firstItem.innerText = "15st digistivetex"; // set text

const secondItem = document.createElement("li"); // create li element
ingredientBottom.appendChild(secondItem); // add after last item (will be last in the list)
secondItem.innerText = "Lite smör"; // set text

// The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.
const ingredientsList = document.querySelector(".ingredients-list-paste");
ingredientsList.children[2].innerText = "3tsk vaniljsocker";

// There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.
const missingIngredient = document.createElement("li");
missingIngredient.innerText = "400g naturell philadelphiaost";
ingredientsList.appendChild(missingIngredient);

// The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.
const instructionsHeader = document.querySelector(".instructions-container h3");
instructionsHeader.classList.remove("shadow"); // remove class shadow

// Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.

// Make object with the text, from and to
const texts = {
	"Separera ägggulor och äggvitor. Kasta äggvitorna på din partner och drick upp äggulorna som om du vore Rocky Balboa": "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.",
	"Gå in till din granne och släng det över deras vardagsrumsgolv!": "Ställ in i frysen över natten."
}

const instructions = document.querySelectorAll("ol.instructions-list li"); // nodelist of instructions to loop through
// loop through the instructions nodelist
for (let i = 0; i < instructions.length; i++) {
	let currentNodeText = instructions[i].innerText; // get the current text
	// check if current text exists in the object texts
	if (currentNodeText in texts) {
		let newText = texts[currentNodeText]; // extract the corresponding partner text
		console.log(`"${currentNodeText}" changes to "${newText}"`);
		instructions[i].innerText = newText; // set the inner text
	}
}
