/**
  *Lab 13: Loops
  *Author: Lluvia Moreno
  *Created:2 24 2021
  *License: Public Domain
**/

//make the output div not print until a button is pressed
function fizzBuzzBoom (){
  //print all the numbers from 1-200
  for (var num=1; num<=200; num++) {
  	var str = "";
      //if multiple of 3, print "Fizz" instead of number
      if (num % 3 == 0){
          str = str + "Fizz";
          $('#output').append("<p>" + str + "</p>");
      }
      //if multiple of 5 print "Buzz" instead of number
      if (num % 5 == 0){
          str = str + "Buzz";
          $('#output').append("<p>" + str + "</p>");
      }
      //if multiple of 7 print "Boom" instead of number
      if (num % 7 == 0){
          str = str + "Boom";
          $('#output').append("<p>" + str + "</p>");
      }
      //if multiple of 13 print "Kazam" instead of number
      if (num % 13 == 0){
          str = str + "Kazam";
          $('#output').append("<p>" + str + "</p>");
      }
      //if it isn't a multiple of 3, 5, 7, or 13, print just the number
      if (str == "") {
          str = num;
          $('#output').append("<p>" + str + "</p>");
      }
  }
}

//Adding a button that triggers the function
$("#results").append("<button id ='my_button'>Click Here</button>");
$("#my_button").click(fizzBuzzBoom);
