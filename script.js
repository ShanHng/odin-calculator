// Mathematical functions
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
    if (!b) {
        return 'ERROR';
    }
    return a / b;
}


let operand1;
let operand2;
let operator = '';

function operate(op1, op2, operator) {
    switch(operator) {
        case '+':
            return add(op1, op2);
            break;
        case '-':
            return subtract(op1, op2);
            break;
        case '*':
            return multiply(op1, op2);
            break;
        case '/':
            return divide(op1, op2);
            break;
    }
}

const instructionDisplay = document.querySelector(".instruction");
const resultDisplay = document.querySelector(".results");

let wholeInput = "";
let curNum = "";
const isFirstOperator = () => length(operator) === 0;

const numberButtons = document.querySelectorAll("button.number");
numberButtons.forEach(button => button.addEventListener('click', function (e) { // using e => doesnt work for some reason https://stackoverflow.com/questions/178325/how-do-i-check-if-an-element-is-hidden-in-jquery?rq=2
    // code for updating insturction display
    wholeInput += this.textContent;
    instructionDisplay.textContent = wholeInput;

    // code for updating current number user is typing
    curNum += this.textContent;
}));

const mathButtons = document.querySelectorAll("button.math");
mathButtons.forEach(button => button.addEventListener('click', function (e) { // using e => doesnt work for some reason https://stackoverflow.com/questions/178325/how-do-i-check-if-an-element-is-hidden-in-jquery?rq=2
    wholeInput += this.textContent;
    instructionDisplay.textContent = wholeInput;

    evaluate();
    operator = this.textContent;
}));

function evaluate() {
    if (!operator) { 
        operand1 = Number(curNum);  
    } else {
        operand2 = Number(curNum);
        operand1 = operate(operand1, operand2, operator);
    }
    curNum = '';  
}

function showResults() {
    wholeInput = '';
    resultDisplay.textContent = operand1;
}

const equalButton = document.querySelector(".equal");
equalButton.addEventListener('click', (e) => {
    evaluate();
    showResults();
    operator = "";
});

function clear() {
    wholeInput = "";
    instructionDisplay.textContent = wholeInput;
    resultDisplay.textContent = '';
}

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', clear);






