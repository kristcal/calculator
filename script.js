
let firstNumber = "";
let operator = "";
let secondNumber = "";
const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
let justEvaluated = false;
const decimalButton = document.querySelector(".decimal");

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
    updateDecimalButtonsState();
}
updateDisplay("0");

digitButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (justEvaluated && operator === "") {
            firstNumber = "";
            operator = "";
            secondNumber = "";
            justEvaluated = false;
        }

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
        const newOP = button.textContent;

        if (firstNumber === "")
            return;
        if (operator !== "" && secondNumber === "") {
            operator = newOP;
            return;
        }

        if (operator !== "" && secondNumber !== "") {
            let result = operateCalc(firstNumber, operator, secondNumber);
            result = formatResult(result);

            firstNumber = String(result);
            secondNumber = "";
            updateDisplay(firstNumber);
        }
        operator = newOP;
        justEvaluated = false;
    })
})

equalsButton.addEventListener("click", () => {
    if (firstNumber === "" || operator === "" || secondNumber === "")
        return;
    let result = operateCalc(firstNumber, operator, secondNumber);
    result = formatResult(result);
    updateDisplay(String(result));

    firstNumber = String(result);
    operate = "";
    secondNumber = "";
    justEvaluated = true;
});

clearButton.addEventListener("click", () => {
    firstNumber = "";
    operate = "";
    secondNumber = "";
    justEvaluated = false;
    updateDisplay("0");
})

function formatResult(value) {
    if (typeof value === "string")
        return value;
    if (!Number.isFinite(value))
        return "Error";
    return Math.round(value * 100000000) / 100000000;
}

function updateDecimalButtonsState(){
    const current = operator === "" ? firstNumber : secondNumber;
    decimalButton.disabled = current.includes(".");
}

function appendDeciman() {
    if (justEvaluated) {
        firstNumber = "";
        operate = "";
        secondNumber = "";
        justEvaluated = false;
    }

    if(operator === ""){
        if(firstNumber.includes("."))
            return;
        firstNumber = firstNumber === "" ? "0." : firstNumber+".";
        updateDisplay(firstNumber);
    }else{
        if(secondNumber.includes("."))
            return
        secondNumber = secondNumber === "" ? "0." : secondNumber + ".";
        updateDisplay(secondNumber);
    }
    updateDecimalButtonsState();

}

decimalButton.addEventListener("click", appendDeciman);
