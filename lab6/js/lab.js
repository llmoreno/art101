
/**
  *lab 6 Arrays and Objects
  *Author:
  *Created:
  *License: Public Domain
**/

//Define Variables
var myTransport = [" bus", " car", " bike", " walking"];

var myMainRide = {
    make: "Honda",
    model: "CR-V",
    year: 2015,
    age: function() {
      return 2021 - age;
    }
}

//output
document.writeln("My Transportation Methods: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify (myMainRide, null, '\t'), "</pre>");
