describe("Boostrap date picker - test", () => {
    it('selects the date and verifies the input value', () => {
        cy.visit("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
        cy.get('#birthday')
        .type('2025-01-10');

        cy.get('#birthday')
        .should('have.value', '2025-01-10')

    })
})