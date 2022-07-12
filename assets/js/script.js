var inputDiv = document.querySelector(".input");
var textArea = document.querySelector(".text-area");
var outputDiv = document.querySelector(".output");
var newStr;

textArea.addEventListener('keypress', onKeyPress);

function onKeyPress() {
  let txtContent = textArea.value.trim();

  const splitArr = txtContent.split(",");

  stringSplit(splitArr);
}

function stringSplit(arr) {

  outputDiv.innerHTML = "";

  arr.forEach(arrIterator);

  function arrIterator(item, index, array) {
    let span = document.createElement("span");
    span.innerText = item.trim();
    outputDiv.appendChild(span);
  }
}



















