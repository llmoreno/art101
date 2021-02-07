/**
  *Lab 8: Anon Functions and Callbacks
  *Author: Lluvia Moreno
  *Created: 2 7 2021
  *License: Public Domain
**/

//Setting up our functions:
function firstThing (test){
  console.log(test + ": This is the thing 1 test result.")
}
function secondThing (test){
  console.log(test + ": This is the thing 2 test result.")
}
function thirdThing (test){
  console.log(test + ": This is the thing 3 test result.")
}

//Calling the functions to make sure they work (test 1):
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//Calling the functions in order (test 2):
setTimeout (function (){
  firstThing("TEST 2");
}, 0);
setTimeout (function (){
  secondThing("TEST 2");
}, 0);
setTimeout (function (){
  thirdThing("TEST 2");
}, 0);

//Calling the functions out of order (test 3):
setTimeout (function (){
  firstThing("TEST 3");
}, 3000);
setTimeout (function (){
  secondThing("TEST 3");
}, 1000);
setTimeout (function (){
  thirdThing("TEST 3");
}, 2000);
