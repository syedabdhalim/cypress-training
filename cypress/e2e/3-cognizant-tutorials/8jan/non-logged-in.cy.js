/// <reference types="cypress" />
beforeEach(() => {
    cy.visit('https://automationexercise.com/');
});

context('Non logged in session', () => {
    it('Should display login and signup link', () => {
        cy.get('.nav.navbar-nav')
        .contains('Signup / Login')
        .should('be.visible'.padEnd('have.attr', 'href', ('/login')));

    })
    it('Should not display a logout link ', () => {
        cy.get('.nav.navbar-nav')
        .contains('Logout')
        .should('not.exist');a
    })
})