/**
  *Lab 15: Ajax
  *Author: Lluvia Moreno
  *Created: 3 3 2021
  *License: Public Domain
**/

//Printing a Kayne Quote Upon Button Press
APIENDPOINT = "https://api.kanye.rest";

$("#activate").click(doAPIStuff);

function putTextOnPage(text){
  $("#output").html(text);
}

function doAPIStuff() {
  $.ajax({
    // The URL for the request
    url: APIENDPOINT,
    // The data to send (will be converted to a query string)
    data: { }, //this is where the key goes if needed
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json"
  })
  // If the request succeeds
  .done(function( data ) {
    textData = JSON.stringify(data);
    console.log("Success:", textData);
    putTextOnPage(textData);
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
    console.log("Failure.");
    putTextOnPage(errorThrown + " Status:" + status);
    //console.log(errorThrown + " Status:" + status );
  })
}
