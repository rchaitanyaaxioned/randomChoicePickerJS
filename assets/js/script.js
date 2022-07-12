var inputDiv = document.querySelector(".input");
var textArea = document.querySelector(".text-area");
var outputDiv = document.querySelector(".output");

textArea.addEventListener('keypress', onKeyPress);

function onKeyPress() {
  let txtContent = textArea.value.trim();
  if (txtContent != "") {
    const splitArr = txtContent.split(",");
    stringSplit(splitArr);
  }
}

function stringSplit(arr) {
  outputDiv.innerHTML = "";
  arr.forEach(arrIterator);
  function arrIterator(item) {
    let span = document.createElement("span");
    span.innerText = item.trim();
    outputDiv.appendChild(span);
  }
}