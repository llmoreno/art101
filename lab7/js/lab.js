/**
  *Lab 7: Functions
  *Author: Lluvia Moreno
  *Created:2 3 2021
  *License: Public Domain
**/

// a function that accepts user name inputs and sorts the letters
//Returns: A new username.
function sortNameString(){
  var userName = window.prompt("Welcome! What's your full name?");
  console.log("userName = ", userName);
  //split string to array so we can sort
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);
  //sort the new array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort = ", nameArraySort);
  //convert array back into a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted = ", nameSorted);
  return nameSorted;
}
//output
document.writeln("Here's your new nickname: ",
    sortNameString(), "</br>");
