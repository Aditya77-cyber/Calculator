document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
  
    let displayValue = "0";
    let firstOperand = null;
    let secondOperand = false;
    let operator = null;
  
    function updateDisplay() {
      display.innerText = displayValue;
    }
  
    function clearDisplay