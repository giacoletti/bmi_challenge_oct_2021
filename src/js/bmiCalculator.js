class BMICalculator {
    calculateBMIMetric(details) {
        const height = details.height / 100;
        const bmi = parseFloat((details.weight / (height * height)).toFixed(2));
        const bmiResults = {
            value: bmi,
            classification: this.getBMIClassification(bmi)
        }
        return bmiResults;
    }

    getBMIClassification(value) {
        switch (true) {
            case (value < 18.5):
                return 'Underweight';
                break;
            case (value <= 24.9):
                return 'Normal Weight';
                break;
            case (value <= 29.9):
                return 'Overweight';
                break;
            case (value <= 34.9):
                return 'Obesity Class 1';
                break;
            case (value <= 39.9):
                return 'Obesity Class 2';
                break;
            default:
                return 'Extreme Obesity Class 3';
                break;
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BMICalculator
}
