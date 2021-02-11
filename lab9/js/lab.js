/**
  *Lab 9: Javascript for the Web
  *Author: Lluvia Moreno
  *Created:2 9 2021
  *License: Public Domain
**/

//Finding output and assigning it to a variable.
var outputEl = document.getElementById("output");

//Creating a new paragraph element called new1El.
var new1El = document.createElement("p");

//Now the element is gonna say something!
new1El.innerText = "Here is our first new element!";

//Creating a second new paragraph element called new2El.
var new2El = document.createElement("p");

//Giving our second new element something to say.
new2El.innerText = "Here is our second new element!";

//Appending both of our elements to outputEl
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//Changing the CSS attributes of our new elements:
new1El.style.color = "Red";
new1El.style.fontSize = "150%";
new2El.style.color = "Red";
new2El.style.fontSize = "150%";

//Attempting to add an element to the top of output using the same steps as above
//Creating a third new element.
var new3El = document.createElement("p");
//Giving that new element something to say:
new3El.innerText = "I'm at the top!";
//Adding the new element before an existing element.
//https://www.w3schools.com/jsref/met_node_insertbefore.asp
outputEl.insertBefore(new3El,new1El);
