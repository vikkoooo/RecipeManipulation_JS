// What is the name of the recipe?
const recipeName = document.querySelector("#recipe-name");
const recipeNameInnerText = recipeName.innerText;
console.log(recipeNameInnerText); // Answer: Frozen Cheescake

// What HTML tag is used to display the Recipe name?
const recipeNameTagName = recipeName.tagName;
console.log(recipeNameTagName); // Answer: H1

// What is the font size of the paragraph tag with the class "description".
const description = document.querySelector("p.description");
const descriptionFontSize = window.getComputedStyle(description).fontSize;
console.log(descriptionFontSize); // Answer: 16 px
description.style.fontSize = "1rem"; // to set 
console.log(description.style.fontSize); // to log after manually set

// What is the value of the alt atrribute on the image?
const image = document.querySelector(".image-container img");
const imageAlt = image.getAttribute("alt");
console.log(imageAlt);

// What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
//	{
//  	url: string
//  	height: number,
//  	width: number,
//	}



//How many ingredients has the paste?
//Which is the forth element in the list containing the ingredients for the paste?
//Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
//{
//  order: number;
//  text: instruction;
//}