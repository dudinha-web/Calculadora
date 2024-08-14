function btnNumero(valor){
    let display = document.getElementById("display")
    display.value += valor
}

function limpar(){
    let display = document.getElementById("display")
    display.value = ""
}

function btnOperador(simbolo){
    let display = document.getElementById("display")
    display.value += simbolo
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
    if (b === 0) {
        throw "Divisão por zero";
    }
    return a / b;
}

function evaluateExpression(_expressao) {
    let operands = [];
    let operators = [];
    let number = '';

    for (let char of _expressao) {
        if (char >= '0' && char <= '9') {
            number += char;
        } else if (char === '+' || char === '-' || char === '*' || char === '/') {
            operands.push(parseInt(number));
            operators.push(char);
            number = '';
        }
    }

    if (number) {
        operands.push(parseInt(number));
    }

    while (operators.length > 0) {
        let operator = operators.shift();
        let a = operands.shift();
        let b = operands.shift();
        let tempResult;

        switch (operator) {
            case '+':
                tempResult = add(a, b);
                break;
            case '-':
                tempResult = subtract(a, b);
                break;
            case '*':
                tempResult = multiply(a, b);
                break;
            case '/':
                tempResult = divide(a, b);
                break;
        }

        operands.unshift(tempResult);
    }

    return operands[0];
}

function calcular() {         //função avalia o display
    let display = document.getElementById("display");
    let expression = display.value;
    let result;

    try {
        result = evaluateExpression(expression);
    } catch (e) {
        result = "Erro";
    }

    display.value = result;
}




