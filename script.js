// Select DOM Elements
let displayBottom = document.querySelector(".display-bottom span");
let displayTop = document.querySelector(".display-top span");
let btns = document.querySelectorAll(".btn");
let ac = document.querySelector(".ac");
let percent = document.querySelector(".percent");
let plusMinus = document.querySelector(".plus-minus");
let equals = document.querySelector(".equals");

let result = 0;
let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let displayValue = "0";
let displayValueTop = "";

// Operator function
function calculate(firstNumber, secondNumber, operator) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    switch (operator) {
        case "÷": return secondNumber !== 0 ? firstNumber / secondNumber : "Error";
        case "X": return firstNumber * secondNumber;
        case "-": return firstNumber - secondNumber;
        case "+": return firstNumber + secondNumber;
        default: return secondNumber;
    }
}

// Event Listeners
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        let btnValue = event.target.textContent;

        if (!isNaN(btnValue) || btnValue === ".") {
            displayValue = displayValue === "0" ? btnValue : displayValue + btnValue;
            displayBottom.textContent = displayValue;
        } else if (btn.classList.contains("operator")) {
            if (firstNumber === "") {
                firstNumber = displayValue;
            } else if (currentOperator) {
                secondNumber = displayValue;
                firstNumber = calculate(firstNumber, secondNumber, currentOperator);
            }

            currentOperator = btnValue;
            displayValueTop = firstNumber + " " + currentOperator;
            displayTop.textContent = displayValueTop;
            displayValue = "";
            displayBottom.textContent = displayValue;
        } else if (btn.classList.contains("percent")) {
            if (displayValue !== "") {
                displayValue = (Number(displayValue) / 100).toString();
                displayBottom.textContent = displayValue;
            }
        } else if (btn.classList.contains("plus-minus")) {
            if (displayValue !== "") {
                displayValue = (Number(displayValue) * -1).toString();
                displayBottom.textContent = displayValue;
            }
        } else if (btn.classList.contains("equals")) {
            if (firstNumber !== "" && currentOperator && displayValue !== "") {
                secondNumber = displayValue;
                displayValue = calculate(firstNumber, secondNumber, currentOperator);
                displayBottom.textContent = displayValue;
                displayTop.textContent = displayValueTop + " " + secondNumber + " =";

                firstNumber = displayValue;
                secondNumber = "";
                currentOperator = null;
            }
        } else if (btn.classList.contains("ac")) {
            firstNumber = "";
            secondNumber = "";
            currentOperator = null;
            displayValue = "0";
            displayValueTop = "";
            displayBottom.textContent = displayValue;
            displayTop.textContent = displayValueTop;
        }
    });
});
