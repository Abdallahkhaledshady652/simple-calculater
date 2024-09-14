function add() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum + secondnum;
  document.getElementById("result").innerHTML = result;
}
function subtract() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum - secondnum;
  document.getElementById("result").innerHTML = result;
}
function divided() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum / secondnum;
  document.getElementById("result").innerHTML = result;
}
function multiply() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum * secondnum;
  document.getElementById("result").innerHTML = result;
}
function squareRoot() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let result = Math.sqrt(firstnum);
  document.getElementById("result").innerHTML = result;
}
function power() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = Math.pow(firstnum, secondnum);
  document.getElementById("result").innerHTML = result;
}
