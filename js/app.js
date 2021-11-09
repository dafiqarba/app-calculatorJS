"use strict";

let inputA;
let inputB;
let operator;

console.log(inputA);
console.log(inputB);

function calculate() {
  inputA = parseInt(document.getElementById("calculator-inputA").value);
  inputB = parseInt(document.getElementById("calculator-inputB").value);
  let result;

  if (operator == "add") {
    result = parseInt(inputA + inputB);
  } else if (operator == "sub") {
    result = parseInt(inputA - inputB);
  } else if (operator == "mul") {
    result = parseInt(inputA * inputB);
  } else {
    result = parseInt(inputA / inputB);
  }

  var output = document.getElementById("result");
  output.value = result;

  alert(result);
  console.log(result);
}

function setValue() {
  operator = document.getElementById("calculator-operator").value;
}

function init() {
  let button = document.getElementById("button");
  button.onclick = calculate;
}

window.onload = init;
