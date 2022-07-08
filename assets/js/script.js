var inputDiv = document.querySelector(".input");
var textArea = document.querySelector(".text-area");
var outputDiv = document.querySelector(".output");

textArea.onkeydown = function (event) {
  var eventKeyCode = event.which;
  if (eventKeyCode === 13) {
    let textContent = textArea.value;
    stringSplit(textContent);
  }
}

function stringSplit(textContent) {
  const inputArr = textContent.split(",");
  // outputDiv.innerHTML = inputArr;

  inputArr.forEach(arrIterator)

  function arrIterator(item, index) {
    let span = document.createElement("span");
    span.innerText = item;
    outputDiv.appendChild(span);
    //console.log("item : " + item + "," + "index : " + index);
  }
}


















