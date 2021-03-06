describe('User that navigates to the index page', () => {

    before(() => {
        cy.visit('/');
    });

    it('is expected to see main page with title, input fields and labels', () => {
        cy.get('img[id=bmiImage]').should('be.visible')
            .and(($img) => { expect($img[0].naturalWidth).to.be.greaterThan(0) });
        cy.get('h3').should('contain.text', 'BMI Calculator');
        cy.get('label[id=heightLabel]').should('be.visible').should('contain.text', 'Height (cm):');
        cy.get('input[id=height]').should('be.visible');
        cy.get('label[id=weightLabel]').should('be.visible').should('contain.text', 'Weight (kg):');
        cy.get('input[id=weight]').should('be.visible');
        cy.get('input[id=submit-button]').should('be.visible').should('have.value', 'Calculate');
    });

});