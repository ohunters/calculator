// Select DOM Elements
let display = document.querySelector(".display")
let btns = document.querySelectorAll(".btn");
let ac = document.querySelector(".ac");
let percentage = document.querySelector(".percentage");
let plusMinus = document.querySelector(".plus-minus");
let operator = document.querySelector(".operator");
let equals = document.querySelector(".equals");

// Event Listeners
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        let btnPressed = event.target;
        let btnValue = btnPressed.textContent;
        let displayValue = display.textContent;

        if (btn.classList.contains("ac")) {
            display.textContent = ""
        } else if (displayValue === "0") {
            display.textContent = btnValue;
        } else {
            display.textContent += btnValue;
        }
        
    })
});
