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
    switch (operator) {
        case `+`:
            return add(a, b);
        case `-`:
            return subtract(a, b);
        case `*`:
            return multiply(a, b);
        case `/`:
            if (b === 0) { return "ERROR" }
            return divide(a, b);
    }
}

const disableBtn = (btnNode) => {
    btnNode.disabled == false ? btnNode.disabled = true : btnNode.disabled = false;
}

const onlyOneDecimal = (num) => {
    const decimalBtn = document.querySelector(`#decimal`);
    if (!Number.isInteger(num)) {
        disableBtn(decimalBtn);
    }
}

function display() {
    const buttons = document.querySelectorAll(`.btn`);
    const display = document.querySelector(`#display`);
    const numNodes = document.querySelectorAll(`.num`)
    const operatorNodes = document.querySelectorAll(`.operator`);
    const equalsBtn = document.querySelector(`#equals`);


    buttons.forEach((btn) => {
        btn.addEventListener(`click`, (e) => {

            displayText = display.textContent;//<----- maybe should be elsewhere

            if (e.target.classList.contains(`num`) || e.target.id == `decimal`) {
                // debugger;

                display.textContent += e.target.value;
            }
            if (e.target.value == `-/+`) {
                display.textContent = +display.textContent * (-1);
            }

            if (e.target.value == `clear`) {
                display.textContent = ``;
                num_a = ``;
                num_b = ``;
                operator = ``;
            }

            if (num_a == `` && e.target.classList.contains(`operator`) && e.target.id != `equals`) {
                num_a = displayText;
                operator = e.target.value;
                display.textContent = ``;
                console.log(`num_a: ${num_a}`);
                console.log(`num_b: ${num_b}`);
                console.log(`operator: ${operator}`);
            }
            else if (num_a != `` && num_b == `` && e.target.classList.contains(`operator`) && e.target.id != `equals`) {
                num_b = displayText;
                num_a = operate(operator, +num_a, +num_b);
                num_b = ``;
                operator = e.target.value;
                display.textContent = ``;
                console.log(`num_a: ${num_a}`);
                console.log(`num_b: ${num_b}`);
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


            // if (!isNaN(e.target.value) || e.target.value == `.` || e.target.value == `-/+`) {
            //     if (e.target.value == `-/+`) {
            //         // display.textContent = +display.textContent * -1;
            //     }
            //     else {
            //         // console.log(`<<<${e.target.value}>>> is number, maybe`)
            //         display.textContent += e.target.value;
            //         displayText = display.textContent;
            //         // console.log(`event end: ${displayText}`);
            //         // console.log(`isNaN(displayText): ${isNaN(displayText)}`);
            //     }
            // }


            // console.log(`event end: ${displayText}`);

            // console.log(e.target.innerText);
            // console.log(e.target.value);
        });
    });
}

display();