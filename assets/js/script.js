var inputDiv = document.querySelector(".input");
var textArea = document.getElementsByTagName("textarea");

textArea.onkeydown = function (event) {
  alert("Fun Called!")
  var eventKey = event.key;
  console.log("eventKey : " + eventKey);
}


// function (event) {
//   var keycode = event.keyCode;

//   if (keycode === 38) {
//     moveUp();
//   }
// }



















