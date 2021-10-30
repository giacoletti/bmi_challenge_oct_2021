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

});