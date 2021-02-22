/**
  *Lab 12: Conditionals
  *Author: Lluvia Moreno
  *Created:2 21 2021
  *License: Public Domain
**/


//given a number, return a hogwarts house
//get the remainder divided by 4 of the length
function sortingHat(str){
  len = str.length;
  mod = len % 4;
  //create an if else to show house
  if (mod == 0) {
      return "Gryffindor";
  } else if (mod == 1){
      return "Ravenclaw";
  } else if (mod == 2){
      return "Hufflepuff";
  } else if (mod == 3){
      return "Slytherin";
  }
}

//Create an event listener attached to button that gets the value of input
//and assigns it to a variable called name. After running it, it stores the value in the variable house.
var myButton = document.getElementById("button");
myButton.addEventListener("click", function () {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
});
