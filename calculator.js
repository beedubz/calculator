let a = null;
let b = null;
let currentOperation = false;
let storedOperator = null;
let display;


const operate = function(valA, valB, operator) { //performs calculator function
    const numA = parseFloat(valA);
    const numB = parseFloat(valB);

    if (isNaN(numA) || isNaN(numB)) {
        return "Error: Invalid Number"; // Return an error string
    }
    
    if (operator === "+") {
        return numA + numB;
    }
    if (operator === "-") {
        return numA - numB;
    }
    if (operator === "*") {
        return numA * numB;
    }
    if (operator === "/") {
        return numB === 0 ? "No can do Pepe Le Pieu!" : numA/numB;
    }
    console.error(`Unknown operator received: ${operator}`); // Log the bad operator
    return "Error: Invalid Operator"; // Return an error string
}


function operatorClick() {
    const currentDisplayValue = display.textContent;    
    
    if (storedOperator !== null && a !== null) {
        b = currentDisplayValue;
        const result = operate(a, b, storedOperator);
     
    
        if (result === "No can do Pepe Le Pieu!") {
            display.textContent = result;
            a = null;
            b = null;
            storedOperator = null;
            currentOperation = false;
            return;
        }

        if (typeof result !== 'number' || isNaN(result)) {
            // Display the error message returned by operate, or a generic one
            display.textContent = typeof result === 'string' ? result : "Error";
            // Reset state...
            a = null;
            b = null;
            storedOperator = null;
            currentOperation = false;
            return; // <-- **MUST HAVE RETURN HERE** to stop before .toFixed
        }

        display.textContent = parseFloat(result.toFixed(3));
        a = result;
        b = null;
    }
    
    else if (a === null) {
        a = currentDisplayValue;
    }

    storedOperator = this.id;
    currentOperation = true;
}
    


document.addEventListener('DOMContentLoaded', function() {
        display = document.getElementById('display');
        display.textContent = '0';
            const numbuttons = document.querySelectorAll('.number-button');
                numbuttons.forEach(numbutton => {
                  numbutton.addEventListener('click', function() {
                    if (currentOperation) { //if there's an ongoing operation clear the display for the second number 
                        display.textContent = '';
                        currentOperation = false; //allows multiple numbers appearing
                    }
                    if (this.textContent === '.' && display.textContent.includes('.')) {
                        return;
                    }
                    if (display.textContent === '0' && this.textContent !== '.') {
                        display.textContent = ''; // Clear the '0'
                    }
                    display.textContent += this.textContent;
                });
            });

            const operators = document.querySelectorAll('.operator');
            operators.forEach(operator => {
                operator.addEventListener('click', operatorClick); //runs operator function on click
    });
    
    const clear = document.getElementById('clear-button');
    clear.addEventListener('click', function() {
        a = null;
        b = null;
        currentOperation = false;
        storedOperator = null;
        display.textContent = '0';
    })

    const equals = document.getElementById('equal-button');
    equals.addEventListener('click', function() {
        if (storedOperator === null || a === null) {
            console.log("Equals condition not met: storedOperator or a is null. Exiting.");
            // Do nothing if no operator or first number is stored
            return;
        }
        else {
        operatorClick();
        storedOperator = null;
        }
    });
});