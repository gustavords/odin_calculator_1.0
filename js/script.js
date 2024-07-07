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
    const decimalBtn = document.querySelector(`.options:last-child`); 
    if(!Number.isInteger(num)){
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

            displayText = display.textContent;

            if (e.target.classList.contains(`num`)) {
                display.textContent += e.target.value;
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
            else if(num_a != `` && num_b == `` && e.target.id == `equals`){
                debugger
                num_b = displayText;
                num_a = operate(operator, +num_a, +num_b);
                display.textContent = num_a;
                num_a = ``;
                num_b = ``;
                operator = ``;
            }






            // console.log(`event start: ${displayText}`);

            // if (displayText == `` && btn.classList.contains(`operator`)) {
            //     // console.log(`display is empty and you pressed operator`);
            // }

            // if (!isNaN(e.target.value) && operator != ``) {
            //     operatorNodes.forEach((node) => disableBtn(node));

            // }

            // else if (isNaN(e.target.value) && btn.classList.contains(`operator`) && displayText != ``) {
            //     console.log(`!!!>${e.target.value}<!!! is an operator`);
            //     displayText = display.textContent;

            //     if (num_a == `` && operator == ``) {
            //         console.log(`---num_a: ${num_a}`);
            //         num_a = displayText;
            //         operator = e.target.value;
            //         display.textContent = ``;
            //         console.log(`num_a: ${num_a}`);
            //         console.log(`num_b: ${num_b}`);
            //         console.log(`operator: ${operator}`);
            //         // operatorNodes.forEach((node) => disableBtn(node));
            //     }
            //     else if (num_a != `` && num_b == ``) {
            //         num_b = displayText;
            //         num_a = operate(operator, +num_a, +num_b);
            //         num_b = ``;
            //         operator = e.target.value;
            //         display.textContent = ``;
            //         console.log(`num_a: ${num_a}`);
            //         console.log(`num_b: ${num_b}`);
            //         // operatorNodes.forEach((node) => disableBtn(node));
            //     }
            //     // else if (num_a != `` && num_b != ``) {
            //     //     num_a = operate(e.target.value, +num_a, +num_b);
            //     //     num_b = ``;
            //     //     display.textContent = ``;
            //     //     console.log(`num_a: ${num_a}`);
            //     //     console.log(`num_b: ${num_b}`);
            //     // }


            //     // console.log(`num_a: ${num_a}`);
            //     // console.log(`num_b: ${num_b}`);

            // }

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