// elements for dom manipulation
const instructionDisplay = document.querySelector(".instruction");
const resultDisplay = document.querySelector(".results");
const numberButtons = document.querySelectorAll("button.number");
const mathButtons = document.querySelectorAll("button.math");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

// variables used in logic
let operand1;
let operand2;
let operator = '';

let instructionCache = "";
let numberCache = "";
let resultCache = 0;

numberButtons.forEach(button => button.addEventListener('click', function (e) { // using e => doesnt work for some reason https://stackoverflow.com/questions/178325/how-do-i-check-if-an-element-is-hidden-in-jquery?rq=2
    // code for updating insturction display
    updateInstructionCache(this.textContent);
    updateInstructionDisplay(instructionCache);

    // code for updating current number user is typing
    updateNumberCache(this.textContent);
}));

mathButtons.forEach(button => button.addEventListener('click', function (e) { // using e => doesnt work for some reason https://stackoverflow.com/questions/178325/how-do-i-check-if-an-element-is-hidden-in-jquery?rq=2
    updateInstructionCache(this.textContent);
    updateInstructionDisplay(instructionCache);
    evaluate();
    clearNumberCache();
    updateCurrentOperator(this.textContent);
}));

equalButton.addEventListener('click', (e) => {
    if (!instructionCache) {
        showResults();    
        return; 
    }
    const result = evaluate();
    updateResultCache(result);
    showResults();
    updateCurrentOperator("");
    clearNumberCache();
    clearInstructionCache();
});

clearButton.addEventListener('click', clear);

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

// Helper functions 
function operate(op1, op2, operator) {
    if (op1 === 'ERROR') return 'ERROR';
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

function evaluate() {
    if (!operator) { 
        operand1 = Number(numberCache);  
        return operand1;
    } else {
        operand2 = Number(numberCache);
        operand1 = operate(operand1, operand2, operator);
        return operand1;
    } 
}

function clear() {
    clearInstructionCache();
    updateInstructionDisplay();
    clearNumberCache();
    updateResultsDisplay('');
    clearResultCache();
}

function showResults() {
    // only rounds when necessary. code reuse from https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
    // @author A Kunin
    resultDisplay.textContent = +resultCache.toFixed(8); 
}

function clearInstructionCache() {
    instructionCache = '';
}

function updateInstructionCache(string) {
    instructionCache += string;
}

function updateInstructionDisplay() {
    instructionDisplay.textContent = instructionCache;
}

function updateResultsDisplay(string) {
    resultDisplay.textContent = string;
}

function updateCurrentOperator(string) {
    operator = string;
}

function clearNumberCache() {
    numberCache = '';
}

function updateNumberCache(string) {
    numberCache += string;
}

function updateResultCache(string) {
    resultCache = string;
}

function clearResultCache() {
    resultCache = 0;
}


