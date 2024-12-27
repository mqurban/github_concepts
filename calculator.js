function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerText = 'Please enter valid numbers.';
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultDiv.innerText = 'Division by zero is not allowed.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultDiv.innerText = 'Invalid operator.';
            return;
    }

    resultDiv.innerText = `Result: ${result}`;
}
