console.log(`I'm here!`);

let num_a, num_b, operator;

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
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case `+`:
            add(a, b);
            break;
        case `-`:
            subtract(a, b);
            break;
        case `*`:
            multiply(a, b);
            break;
        case `/`:
            if (b === 0) { return "ERROR" }
            divide(a, b);
            break;
    }
}

function display() {
    const buttons = document.querySelectorAll(`.btn`);
    const display = document.querySelector(`#display`);
    buttons.forEach((btn)=>{
        btn.addEventListener(`click`, (e) =>{
            display.textContent += e.target.value;
            console.log(e.target.innerText);
            console.log(e.target.value);
        });
    });
}

display();