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

