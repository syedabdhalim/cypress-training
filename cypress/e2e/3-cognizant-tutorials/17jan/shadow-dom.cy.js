describe('Shadow DOM Content Validation', () => {
    it('should validate the text inside the shadow DOM', () => {
        cy.visit('https://practice.expandtesting.com/shadowdom');
        cy.get('#shadow-host').shadow().within(() => {
            cy.get('button').should('have.text', 'This button is inside a Shadow DOM.').click();
            cy.get('button').should('have.css', 'background-color', 'rgb(24, 43, 69)');
          });
    });
});