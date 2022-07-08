var inputDiv = document.querySelector(".input");
var textArea = document.querySelector(".text-area");
var outputDiv = document.querySelector(".output");
var newStr;

textArea.addEventListener('keypress', onKeyPress);

function onKeyPress() {
  var tAContent = textArea.value;
  // var newStr = "";
  // newStr = tAContent;
  // console.log(newStr);

  // var splitStr = tAContent.split(",");
  // console.log("splitStr : " + splitStr);

  var inputArr = tAContent.split(",");

  // console.log(inputArr);

  stringSplit(inputArr);

  // if (eventKeyCode === 13) {
  //   stringSplit(inputArr);
  // }
}

function stringSplit(arr) {

  arr.forEach(arrIterator);

  function arrIterator(item, index, array) {
    // console.log(item + "," + index);

    //let newItem = array[index];

    let span = document.createElement("span");
    span.innerText = item;
    outputDiv.appendChild(span);
  }
}


















