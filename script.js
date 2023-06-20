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
