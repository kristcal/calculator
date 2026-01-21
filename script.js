
let firstNumber = "";
let operator = "";
let secondNumber = "";
const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

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
    if (b === 0)
        return "Error"
    return a / b;
}

function operateCalc(firstNumber, operator, secondNumber) {


    if (operator === "+") {
        return add(Number(firstNumber), Number(secondNumber));
    } else if (operator === "-") {
        return subtract(Number(firstNumber), Number(secondNumber));
    } else if (operator === "*") {
        return multiply(Number(firstNumber), Number(secondNumber));
    } else if (operator === "/") {
        return divide(Number(firstNumber), Number(secondNumber));
    }
}

function updateDisplay(value) {
    if (value === "") {
        display.textContent = "0";
    } else {
        display.textContent = value;
    }
}

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (operator === "") {
            firstNumber += button.textContent;
            updateDisplay(firstNumber);
        } else {
            secondNumber += button.textContent;
            updateDisplay(secondNumber);
        }
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber === "")
            return;
        operator = button.textContent;
    })
})

equalsButton.addEventListener("click", () => {
    if (firstNumber === "" || operator === "" || secondNumber === "")
        return;
    const result = operateCalc(firstNumber, operator, secondNumber);

    updateDisplay(String(result));

    firstNumber = String(result);
    operate = "";
    secondNumber = "";
});

clearButton.addEventListener("click", () => {
    firstNumber = "";
    operate = "";
    secondNumber = "";
    updateDisplay("0");
})