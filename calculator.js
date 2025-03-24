/*
let a = null;
let b = null;
let operator = null;

const operate = function(a, b, operator) {
    if (operator === "+") {
        return (a + b).toFixed(3);
    }
    if (operator === "-") {
        return (a - b).toFixed(3);
    }
    if (operator === "*") {
        return (a * b).toFixed(3);
    }
    if (operator === "/") {
        return b === 0 ? "No can do Pepe Le Pieu!" : (a/b).toFixed(3);
    }
}

if (typeof result === "number") {
    let a = result;}
*/
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const numbuttons = document.querySelectorAll('.number-button');
        numbuttons.forEach(numbutton => {
          numbutton.addEventListener('click', function() {
            display.textContent += this.textContent;
          });
        });
    

    const operators = document.querySelectorAll('.operator');
    console.log(operators);
    console.log('Operators found:', operators);
    const allButtons = document.querySelectorAll('button');
    console.log('All buttons:', allButtons);
    operators.forEach(operator => {
                operator.addEventListener('click', function() {
                    display.textContent = '';
                console.log('Operator button clicked!');
                });
            });
        });
