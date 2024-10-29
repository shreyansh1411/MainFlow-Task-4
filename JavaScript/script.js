let display = document.getElementById("display");
let currentInput = "";
let operator = null;
let firstOperand = null;

function clearDisplay() {
  currentInput = "";
  operator = null;
  firstOperand = null;
  display.textContent = "0";
}

function appendNumber(number) {
  currentInput += number;
  display.textContent = currentInput;
}

function appendOperator(op) {
  if (operator && currentInput) {
    calculate();
  }
  firstOperand = parseFloat(currentInput);
  operator = op;
  currentInput = "";
}

function calculate() {
  let secondOperand = parseFloat(currentInput);
  if (firstOperand === null || isNaN(secondOperand)) return;

  let result;
  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    default:
      return;
  }
  display.textContent = result;
  firstOperand = result;
  currentInput = "";
  operator = null;
}
