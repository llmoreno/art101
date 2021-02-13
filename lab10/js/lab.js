/**
  *Lab 10: Javascript Events and Forms
  *Author: Lluvia Moreno
  *Created:2 13 2021
  *License: Public Domain
**/


//find the button element
buttonEl = document.getElementById("my-button");

//add event listener
buttonEl.addEventListener("click", function(){
  //identify target element
  nameEl = document.getElementById("user-name");
  //assign a variable
  var userName = nameEl.value;
  //modify the name
  userName = userName.toUpperCase().split('').sort().join('');
  //finding the output
  outputEl = document.getElementById("output");
  //change element
  outputEl.innerText = userName;
  //style outputEl
  outputEl.style.fontSize = "400%";
  outputEl.style.fontWeight = "bolder";
  outputEl.style.fontFamily = "Arial";
  outputEl.style.color = "#600080";
});
