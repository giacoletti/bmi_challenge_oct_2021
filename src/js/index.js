const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const button = document.getElementById('submit-button');
const messageElement = document.getElementById('response-message');
const BMI = new BMICalculator();

button.addEventListener('click', () => {
    if (heightInput.value === '') {
        messageElement.innerText = 'Enter a height, please!';
    } else if ((!isNumber(heightInput.value)) || (heightInput.value <= 0)) {
        messageElement.innerText = 'Height is invalid, please enter a valid number!';
    } else if (weightInput.value === '') {
        messageElement.innerText = 'Enter a weight, please!';
    } else if ((!isNumber(weightInput.value)) || (weightInput.value <= 0)) {
        messageElement.innerText = 'Weight is invalid, please enter a valid number!';
    } else {
        const BMIResult = BMI.calculateBMIMetric({ height: heightInput.value, weight: weightInput.value });
        messageElement.innerText = `BMI: ${BMIResult.value} - ${BMIResult.classification}`;
    }
});

function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}