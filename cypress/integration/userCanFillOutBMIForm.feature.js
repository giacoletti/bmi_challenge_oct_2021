describe('User fills out the BMI form', () => {
    
    describe('with all the correct values needed', () => {  //Happy path
        
        before(() => {
            cy.visit('/');
            cy.get('input[id=height]').type('174');
            cy.get('input[id=weight]').type('67');
            cy.get('input[id=submit-button]').click();
        });

        it('is expected to see the BMI calculated on screen', () => {
            cy.get('div[id=response-message]').should('contain.text', "22.13").should('contain.text', "Normal Weight");
        });

    });

    describe('with height field missing', () => {
        
        before(() => {
            cy.visit('/');
            cy.get('input[id=weight]').type('67');
            cy.get('input[id=submit-button]').click();
        });

        it('is expected to see an error message about missing height', () => {
            cy.get('div[id=response-message]').should('contain.text', 'Enter a height, please!');
        });

    });

    describe('with weight field missing', () => {
        
        before(() => {
            cy.visit('/');
            cy.get('input[id=height]').type('174');
            cy.get('input[id=submit-button]').click();
        });

        it('is expected to see an error message about missing weight', () => {
            cy.get('div[id=response-message]').should('contain.text', 'Enter a weight, please!');
        });

    });

    describe('with invalid height field value', () => {

        before(() => {
            cy.visit('/');
            cy.get('input[id=height]').type('hello@#ùù');
            cy.get('input[id=weight]').type('67');
            cy.get('input[id=submit-button]').click();
        });

        it('is expected to see an error message about invalid height value', () => {
            cy.get('div[id=response-message]').should('contain.text', 'Height is invalid, please enter a valid number!');
        });

    });   
    
    describe('with negative height field value', () => {

        before(() => {
            cy.visit('/');
            cy.get('input[id=height]').type('-179');
            cy.get('input[id=weight]').type('67');
            cy.get('input[id=submit-button]').click();
        });

        it('is expected to see an error message about invalid height value', () => {
            cy.get('div[id=response-message]').should('contain.text', 'Height is invalid, please enter a valid number!');
        });

    }); 

    describe('with invalid weight field value', () => {

        before(() => {
            cy.visit('/');
            cy.get('input[id=height]').type('174');
            cy.get('input[id=weight]').type('hello@#à°');
            cy.get('input[id=submit-button]').click();
        });

        it('is expected to see an error message about invalid weight value', () => {
            cy.get('div[id=response-message]').should('contain.text', 'Weight is invalid, please enter a valid number!');
        });

    });

    describe('with negative weight field value', () => {

        before(() => {
            cy.visit('/');
            cy.get('input[id=height]').type('174');
            cy.get('input[id=weight]').type('-67');
            cy.get('input[id=submit-button]').click();
        });

        it('is expected to see an error message about invalid weight value', () => {
            cy.get('div[id=response-message]').should('contain.text', 'Weight is invalid, please enter a valid number!');
        });

    });

});