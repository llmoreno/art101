/**
  *Lab 16:
  *Author: Lluvia Moreno
  *Created: 3 8 2021
  *License: Public Domain
**/

//Use Ajax to retrieve data and store this object in a variable comic0bj
//global variable
var currentComic0bj = {};

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/614/info.0.json",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(comicObj) {
        // do stuff
        currentComicObj = comicObj;
        $('#output-image').html("<h3>"+comicObj.title+ " - " + comicObj.month + "/" + comicObj.day + "/" + comicObj.year +
        "</h3> <img src=\"" +comicObj.img + "\" alt=\"" + comicObj.transcript + "\" title=\"" + comicObj.title +"\">");
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
});
