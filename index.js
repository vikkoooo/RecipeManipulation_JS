// What is the name of the recipe?
const recipeName = document.querySelector("#recipe-name");
export const recipeNameInnerText = recipeName.innerText; // Answer: Frozen Cheescake
console.log(recipeNameInnerText);

// What HTML tag is used to display the Recipe name?
export const recipeNameTagName = recipeName.tagName; // Answer: H1
console.log(recipeNameTagName);

// What is the font size of the paragraph tag with the class "description".
const description = document.querySelector("p.description");
export const descriptionFontSize = window.getComputedStyle(description).fontSize; // Answer: 16 px
console.log(descriptionFontSize);
description.style.fontSize = "1rem"; // to set 
console.log(description.style.fontSize); // to log after manually set

// What is the value of the alt atrribute on the image?
const image = document.querySelector(".image-container img");
export const imageAlt = image.getAttribute("alt"); // Answer: Slice of Frozen Cheescake
console.log(imageAlt);

// What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
//	{
//  	url: string
//  	height: number,
//  	width: number,
//	}
export const imageObject = {
	url: image.src,			// Answer: url "http://127.0.0.1:5500/assets/frozen-cheesecake-slice.jpg"
	height: image.height,	// Answer: height: 675
	width: image.width		// Answer: width: 811
}
console.log(imageObject);

// How many ingredients has the paste?
const ingredients = document.querySelector("ul.ingredients-list-paste");
export const ingredientsLength = ingredients.children.length; // Answer: 5
console.log(ingredientsLength);

// Which is the forth element in the list containing the ingredients for the paste?
export const ingredientsForth = ingredients.children[3].innerText; // Answer: 3dl vispgrädde
console.log(ingredientsForth);

// Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
// 	{
//  	order: number;
//  	text: instruction;
//	}
const instructions = document.querySelectorAll("ol.instructions-list li"); // get each li item (returns NodeList)
console.log(instructions); // before

export const instructionsArray = [];

for (let i = 0; i < instructions.length; i++) {
	const outputObject = {
		order: i + 1,
		text: instructions[i].innerText
	};
	instructionsArray.push(outputObject);
}

console.log(instructionsArray); // after
/* Answers:
{order: 1, text: 'Smula sönder 10 stycken digistivetex och blanda se… ska bli som en tjockt täcke på botten av formen.'}
{order: 2, text: 'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.'}
{order: 3, text: 'Vispa äggvitorna hårt med en elvisp. De är tillräc…n vända uppochner på bunken utan att det rör sig.'}
{order: 4, text: 'Häll upp grädden i en mellanstor bunke. Vispa de relativ hårt. En aning hårdare en vanligt.'}
{order: 5, text: 'Blanda i philadelphiaosten och vaniljsockret med äggulorna och vispa ihop.'}
{order: 6, text: 'Häll nu över innehållet i bunken med äggulor över grädden. Vispa ihop på lägsta hastigheten.'}
{order: 7, text: 'Häll sedan över det innehållet till bunken med ägg…ed en gaffel tills det blir en slät fluffig smet.'}
{order: 8, text: 'Häll smeten i formen, smula över de resterande digistivetexen om du vill.'}
{order: 9, text: 'Ställ in i frysen över natten.'}
{order: 10, text: 'Servera och toppa med det du känner för.'}
*/