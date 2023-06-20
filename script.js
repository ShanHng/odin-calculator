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
let operator;

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

let input = "";
const inputButtons = document.querySelectorAll("button.number, button.math");
const instructionDisplay = document.querySelector(".instruction");
inputButtons.forEach(button => button.addEventListener('click', function (e) { // using e => doesnt work for some reason https://stackoverflow.com/questions/178325/how-do-i-check-if-an-element-is-hidden-in-jquery?rq=2
    input += this.textContent;
    instructionDisplay.textContent = input;
}));


function clear() {
    input = "";
    instructionDisplay.textContent = input;
}

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', clear);


