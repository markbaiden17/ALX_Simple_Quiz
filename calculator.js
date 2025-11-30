// --- 1. Implement Arithmetic Functions ---

/**
 * Adds two numbers.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The sum of num1 and num2.
 */
function add(num1, num2) {
    return num1 + num2;
}

/**
 * Subtracts the second number from the first.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The difference between num1 and num2.
 */
function subtract(num1, num2) {
    return num1 - num2;
}

/**
 * Multiplies two numbers.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The product of num1 and num2.
 */
function multiply(num1, num2) {
    return num1 * num2;
}

/**
 * Divides the first number by the second.
 * @param {number} num1 - The numerator.
 * @param {number} num2 - The denominator.
 * @returns {number|string} The quotient, or "Error: Division by zero" if num2 is 0.
 */
function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    return num1 / num2;
}


// --- Utility Function to Get and Parse Inputs ---

function getInputs() {
    const num1Value = document.getElementById('number1').value;
    const num2Value = document.getElementById('number2').value;

    const number1 = parseFloat(num1Value) || 0;
    const number2 = parseFloat(num2Value) || 0;
    
    return { number1, number2 };
}

// Function to display the result in the dedicated span.
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}


// --- 2. Attach Event Listeners ---

document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('add').addEventListener('click', function() {
        const { number1, number2 } = getInputs();
        const result = add(number1, number2);
        displayResult(result);
    });

    document.getElementById('subtract').addEventListener('click', function() {
        const { number1, number2 } = getInputs();
        const result = subtract(number1, number2);
        displayResult(result);
    });

    document.getElementById('multiply').addEventListener('click', function() {
        const { number1, number2 } = getInputs();
        const result = multiply(number1, number2);
        displayResult(result);
    });

    document.getElementById('divide').addEventListener('click', function() {
        const { number1, number2 } = getInputs();
        const result = divide(number1, number2);
        displayResult(result);
    });
});