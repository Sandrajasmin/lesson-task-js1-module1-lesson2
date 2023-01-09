//Question 1
//Select the h3 element and change its value to Hello instead of Welcome.

const heading = document.querySelector("h3");
heading.innerText = "Welcome";

console.log(heading);

//Question 2
//Select all the h4 elements on the page and change their margin-bottom style to -20px.

const allHeadings = document.querySelectorAll("h4");
for (let i = 0; i < allHeadings.length; i++) {
    allHeadings[i].style.marginBottom = "-20px";
}

console.log(allHeadings);

//Question 3
//Set the background colour of the second h4 element to red.

const sectionTwo = document.querySelector(".two");
console.log(sectionTwo);

sectionTwo.style.backgroundColor = "red";

//Question 4
//Set the font size of the first paragraph element on the page to 24px and its color to blue.

const firstParagraph = document.querySelector(".section.one");
console.log(firstParagraph);

firstParagraph.style.backgroundColor = "blue";
firstParagraph.style.fontSize = "24px";

//Question 5
//Add span tags around the content of the third paragraph element on the page.

const addingDiv = document.querySelector(".section.three");

addingDiv.innerHTML = '<p><b>Three:</b> Nunc a quam tincidnt</p>';

//Question 6
//Add a new paragraph to the div with a class of content. Add the paragraph after the others.



//Question 7
//Add a new class called content-item to each paragraph in the div with a class of content.

//Question 8
//Select the ul element on the page by its id and add a new list item to the beginning of the list.

//Question 9
//Programmatically remove the class from the ul element.

//Question 10
//Hide the element with the id of hide.