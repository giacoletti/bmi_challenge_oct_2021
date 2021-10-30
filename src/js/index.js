// const BMICalculator = require('./bmiCalculator.js'); // doesn't work, need to figure out why, added <script> tag in index.html to get around
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const button = document.getElementById('submit-button');
const messageElement = document.getElementById('response-message');
const BMI = new BMICalculator();

button.addEventListener('click', () => {
    if (heightInput.value === '') {
        messageElement.innerText = 'Enter a height, please!';
    } else {
        const BMIResult = BMI.calculateBMIMetric({ height: heightInput.value, weight: weightInput.value });
        messageElement.innerText = `BMI: ${BMIResult.value} - ${BMIResult.classification}`;
    }
});
