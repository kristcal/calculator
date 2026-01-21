
let firstNumber = "";
let operator = "";
let secondNumber = "";

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b===0)
        return "Error"
    return a/b;
}

function operate(firstNumber, operator, secondNumber){


    if(operator === "+"){
        return add(Number(firstNumber), Number(secondNumber));
    }else if( operator === "-"){
        return subtract(Number(firstNumber), Number(secondNumber));
    }else if(operator === "*"){
        return multiply(Number(firstNumber), Number(secondNumber));
    }else if(operator === "/"){
        return divide(Number(firstNumber), Number(secondNumber));
    }
}
