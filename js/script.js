let num_a = ``;
let num_b = ``;
let operator = ``;
let displayText = ``;

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
    let calc;
    switch (operator) {
        case `+`:
            calc = add(a, b);
            break;
        case `-`:
            calc = subtract(a, b);
            break;
        case `*`:
            calc = multiply(a, b);
            break;
        case `/`:
            if (b === 0) { return "ERROR" }
            calc = divide(a, b);
            break;
    }
    return parseFloat(calc.toFixed(3));
}

// const disableBtn = (btnNode) => {
//     btnNode.disabled == false ? btnNode.disabled = true : btnNode.disabled = false;
// }

const onlyOneDecimal = (display) => {
    const decimalBtn = document.querySelector(`#decimal`);
    if (Array.from(display).includes(`.`)) {
        decimalBtn.disabled = true;
    }
    else if (display == `` || !Array.from(display).includes(`.`)) {
        decimalBtn.disabled = false;
    }
}

function display() {
    const buttons = document.querySelectorAll(`.btn`);
    const displayHistory = document.querySelector(`#display-history`);
    const displayCalc = document.querySelector(`#display-calc`);


    buttons.forEach((btn) => {
        btn.addEventListener(`click`, (e) => {

            // displayText = display.textContent;//<----- maybe should be elsewhere
            displayText =  displayCalc.textContent;

            if (e.target.classList.contains(`num`) || e.target.id == `decimal`) {
                displayCalc.textContent += e.target.value;
                onlyOneDecimal(displayCalc.textContent);
            }
            if (e.target.value == `-/+`) {
                displayCalc.textContent = +displayCalc.textContent * (-1);
            }

            if (e.currentTarget.value == `clr`) {
                displayCalc.textContent = ``;
                displayHistory.textContent = ``;
                num_a = ``;
                num_b = ``;
                operator = ``;
                onlyOneDecimal(displayCalc.textContent);
            }

            if (num_a == `` && e.target.classList.contains(`operator`) && e.target.id != `equals`) {
                num_a = displayText;
                operator = e.target.value;
                displayCalc.textContent = ``;
                displayHistory.textContent = `${num_a} ${operator}`;
                onlyOneDecimal(displayCalc.textContent);
            }
            else if (num_a != `` && num_b == `` && e.target.classList.contains(`operator`) && e.target.id != `equals`) {
                num_b = displayText;
                // displayHistory.textContent = `${num_a} ${operator} ${num_b}`;
                num_a = operate(operator, +num_a, +num_b);
                console.log(num_a);
                num_b = ``;
                operator = e.target.value;
                displayCalc.textContent = ``;
                displayHistory.textContent = `${num_a} ${operator}`;

                onlyOneDecimal(displayCalc.textContent);
            }
            else if (num_a != `` && num_b == `` && e.target.id == `equals` && displayCalc.textContent != ``)  {
                // debugger;
                displayHistory.textContent = ``;
                num_b = displayText;
                num_a = operate(operator, +num_a, +num_b);
                console.log(num_a);
                displayHistory.textContent = `${num_a}`;
                displayCalc.textContent = ``;
                num_a = ``;
                num_b = ``;
                operator = ``;
            }

        });
    });
}

display();