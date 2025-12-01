const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (Error) {
        display.value = "Error";
    }
}
function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    }
    catch (Error) {
        display.value = "Error";
    }
}
function calculateAbsoluteValue() {
    const display = document.getElementById('display');
    
    let currentValue;
    try {
        currentValue = eval(display.value);
    } catch (e) {
        display.value = 'Error';
        return;
    }
    
    const absoluteValue = Math.abs(currentValue);
    
    display.value = absoluteValue;
}