// Select DOM Elements
let display = document.querySelector(".display")
let btns = document.querySelectorAll(".btn");
let ac = document.querySelector(".ac");
let percentage = document.querySelector(".percentage");
let plusMinus = document.querySelector(".plus-minus");
let operator = document.querySelector(".operator");
let equals = document.querySelector(".equals");


// Add Event Listeners
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        let btnPressed = event.target;
        let btnValue = btnPressed.textContent;

        display.textContent = "";

        if (btn.classList.contains("ac") || display === 0) {
            display.textContent = ""
        } else {
            display.textContent += btnValue;
        }
        
    })
});
