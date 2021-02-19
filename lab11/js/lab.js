/**
  *Lab 11: Libraries and jQuery
  *Author: Lluvia Moreno
  *Created:2 17 2021
  *License: Public Domain
**/

//This code was taken from Brock's section meeting
//Making our various div sections into variables
// var challengesEl = $('#challenges');
// var problemsEl = $('#problems');
// var resultsEl = $('#results');
//
// //Creating Button
// var myButton = "<button>Change Color</button>";
//
// //Appending buttons to each div section
// challengesEl.append(myButton);
// problemsEl.append(myButton);
// resultsEl.append(myButton);
//
// //Adding a click event to each button
// //We tried two methods, neither of them worked
//
// //Attempt 1 (from Brock's section):
// challengesEl.children('button').click(function(){
//   challengesEl.toggleClass('special');
// });

//Attempt 2 (from lecture slides)
// $("myButton").click(function(){
//   $("#challenges").toggleClass("special");
// });

$("#challenges").append("<button id ='cbutton'>Change color</button>");
$("#problems").append("<button id ='pbutton'>Change color</button>");
$("#results").append("<button id ='rbutton'>Change color</button>");

$("#cbutton").click(function(){
  // $("#challenges").toggleClass("special");
  //or
  $(this).parent().toggleClass("special");
});

$("#pbutton").click(function(){
  // $("#challenges").toggleClass("special");
  //or
  $(this).parent().toggleClass("special");
});

$("#rbutton").click(function(){
  // $("#challenges").toggleClass("special");
  //or
  $(this).parent().toggleClass("special");
});
