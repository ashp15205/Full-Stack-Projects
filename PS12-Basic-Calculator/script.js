const historyDisplay = document.getElementById('history');
const currentDisplay = document.getElementById('current');

let currentInput = '0';
let previousInput = '';
let operator = null;

function updateDisplay() {
    currentDisplay.textContent = currentInput;
    historyDisplay.textContent = previousInput + (operator ? ' ' + operator : '');
}

window.appendNumber = (num) => {
    if (currentInput === '0' && num !== '.') {
        currentInput = num;
    } else {
        if (num === '.' && currentInput.includes('.')) return;
        currentInput += num;
    }
    updateDisplay();
};

window.appendOperator = (op) => {
    if (operator !== null) calculate();
    previousInput = currentInput;
    operator = op;
    currentInput = '0';
    updateDisplay();
};

window.clearDisplay = () => {
    currentInput = '0';
    previousInput = '';
    operator = null;
    updateDisplay();
};

window.deleteDigit = () => {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
};

window.calculate = () => {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(curr)) return;
    
    switch (operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': 
            if (curr === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = prev / curr; 
            break;
        default: return;
    }
    
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
};
