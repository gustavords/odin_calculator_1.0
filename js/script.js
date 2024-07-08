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
    if (Array.from(display).includes(`.`)){
        decimalBtn.disabled = true;
    }
    else if(display == `` || !Array.from(display).includes(`.`)){
        decimalBtn.disabled = false;
    }
}

function display() {
    const buttons = document.querySelectorAll(`.btn`);
    const display = document.querySelector(`#display`);
    const displayHistory = document.querySelector(`#display-history`);
    const displayCalc = document.querySelector(`#display-calc`);
    const numNodes = document.querySelectorAll(`.num`)
    const operatorNodes = document.querySelectorAll(`.operator`);
    const equalsBtn = document.querySelector(`#equals`);
    const decimalBtn = document.querySelector(`#decimal`);


    buttons.forEach((btn) => {
        btn.addEventListener(`click`, (e) => {
            let displayH = displayHistory.textContent;
            let displayC = displayCalc.textContent;

            displayText = display.textContent;//<----- maybe should be elsewhere
            // console.log(`event end: ${displayText}`);

            if (e.target.classList.contains(`num`) || e.target.id == `decimal`) {
                // debugger;

                display.textContent += e.target.value;
                onlyOneDecimal(display.textContent);
            }
            if (e.target.value == `-/+`) {
                display.textContent = +display.textContent * (-1);
            }

            if (e.currentTarget.value == `clr`) {
                display.textContent = ``;
                num_a = ``;
                num_b = ``;
                operator = ``;
                onlyOneDecimal(display.textContent);

            }

            if (num_a == `` && e.target.classList.contains(`operator`) && e.target.id != `equals`) {
                num_a = displayText;
                operator = e.target.value;
                display.textContent = ``;
                onlyOneDecimal(display.textContent);
                
                // console.log(`num_a: ${num_a}`);
                // console.log(`num_b: ${num_b}`);
                // console.log(`operator: ${operator}`);
            }
            else if (num_a != `` && num_b == `` && e.target.classList.contains(`operator`) && e.target.id != `equals`) {
                num_b = displayText;
                num_a = operate(operator, +num_a, +num_b);
                num_b = ``;
                operator = e.target.value;
                display.textContent = ``;
                onlyOneDecimal(display.textContent);
                
                // console.log(`num_a: ${num_a}`);
                // console.log(`num_b: ${num_b}`);
                // operatorNodes.forEach((node) => disableBtn(node));
            }
            else if (num_a != `` && num_b == `` && e.target.id == `equals`) {
                num_b = displayText;
                num_a = operate(operator, +num_a, +num_b);
                display.textContent = num_a;
                num_a = ``;
                num_b = ``;
                operator = ``;
            }

            // console.log(`event end: ${displayText}`);

            // console.log(e.target.innerText);
            // console.log(e.target.value);
        });
    });
}

display();