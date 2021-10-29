const BMICalculator = require('../src/js/bmiCalculator');

subject = new BMICalculator();

describe('BMI Calculator', () => {
    describe('calculateBMIMetric()', () => {

        let results;

        describe('Giovanni', () => {

            beforeEach(() => {
                results = subject.calculateBMIMetric({ height: 174, weight: 67 });
            });

            it('is expected to return a numeric value (float with 2 decimals) if given correct arguments', () => {
                expect(results.value).toEqual(22.13);
            });

            it("is expected to return BMI classification 'Normal Weight'", () => {
                expect(results.classification).toEqual('Normal Weight');
            });

        });

        describe('Underweight person', () => {

            beforeEach(() => {
                results = subject.calculateBMIMetric({ height: 170, weight: 50 });
            });

            it('is expected to return a numeric value (float with 2 decimals) if given correct arguments', () => {
                expect(results.value).toEqual(17.3);
            });

            it("is expected to return BMI classification 'Underweight'", () => {
                expect(results.classification).toEqual('Underweight');
            });

        });

        describe('Overweight person', () => {

            beforeEach(() => {
                results = subject.calculateBMIMetric({ height: 182, weight: 87 });
            });

            it('is expected to return a numeric value (float with 2 decimals) if given correct arguments', () => {
                expect(results.value).toEqual(26.26);
            });

            it("is expected to return BMI classification 'Overweight'", () => {
                expect(results.classification).toEqual('Overweight');
            });

        });

        describe('Obesity Class 1 person', () => {

            beforeEach(() => {
                results = subject.calculateBMIMetric({ height: 184, weight: 104 });
            });

            it('is expected to return a numeric value (float with 2 decimals) if given correct arguments', () => {
                expect(results.value).toEqual(30.72);
            });

            it("is expected to return BMI classification 'Obesity Class 1'", () => {
                expect(results.classification).toEqual('Obesity Class 1');
            });

        });

        describe('Obesity Class 2 person', () => {

            beforeEach(() => {
                results = subject.calculateBMIMetric({ height: 181, weight: 123 });
            });

            it('is expected to return a numeric value (float with 2 decimals) if given correct arguments', () => {
                expect(results.value).toEqual(37.54);
            });

            it("is expected to return BMI classification 'Obesity Class 2'", () => {
                expect(results.classification).toEqual('Obesity Class 2');
            });

        });

        describe('Extreme Obesity Class 3 person', () => {

            beforeEach(() => {
                results = subject.calculateBMIMetric({ height: 171, weight: 133 });
            });

            it('is expected to return a numeric value (float with 2 decimals) if given correct arguments', () => {
                expect(results.value).toEqual(45.48);
            });

            it("is expected to return BMI classification 'Extreme Obesity Class 3'", () => {
                expect(results.classification).toEqual('Extreme Obesity Class 3');
            });

        });

    });
});