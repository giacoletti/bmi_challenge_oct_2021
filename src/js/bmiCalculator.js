class BMICalculator {
    calculateBMIMetric(details) {
        let height = details.height / 100;
        return parseFloat((details.weight / (height * height)).toFixed(2));
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BMICalculator
}
