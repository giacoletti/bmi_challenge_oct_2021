const BMICalculator = require('../src/js/bmiCalculator');

subject = new BMICalculator();

describe('BMI Calculator', () => {
    describe('calculateBMIMetric()', () => {

        let results;

        beforeEach(() => {
            results = subject.calculateBMIMetric({ height: 174, weight: 67 });
        });

        it('is expected to return a numeric value (float with 2 decimals) if given correct arguments', () => {
            expect(results).toEqual(22.13);
        });

    });
});