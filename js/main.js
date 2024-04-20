let aNumber;
let bNumber;
let operator;
let displayValue = "0";
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const value = document.querySelector(".show-state");
value.textContent = displayValue;


function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 0;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function clear() {
    displayValue = "0";
    value.textContent = displayValue;
}

function equal() {
    const numsToOperate = displayValue.split(" ");
    const num1 = Number(numsToOperate[0]);
    const num2 = Number(numsToOperate[2]);
    const operator = numsToOperate[1];
    const result = operate(num1, num2, operator);
    displayValue = result;
    value.textContent = displayValue;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {button.addEventListener("click", doOperation => {
    if (nums.includes(button.textContent)) {
        if (value.textContent === "0") {
            displayValue = "";
            displayValue = button.textContent;
            value.textContent = displayValue;
        }
        else{
            displayValue += button.textContent;
            value.textContent = displayValue;
        }
        
    }
    else if (button.textContent === ".") {
        if (value.textContent.includes(".")) {
            return;
        }
        else{
            displayValue += button.textContent;
            value.textContent = displayValue;
        }
    }
    else if (button.textContent === "C") {
        clear();
        
    }
    else if (button.textContent === "=") {
        equal();
        
    }
    else{   
        displayValue += " " + button.textContent + " ";
        value.textContent = displayValue;
    }


})});
