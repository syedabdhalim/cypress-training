/// <reference types="cypress" />
import loginData from "../../../fixtures/login.json";
describe('Login Request Intercept', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    })

  


    // it('Login and logout as valid user', () => {
    //     cy.get('a[href="/login"]').click();
    //     cy.contains('Login to your account').should('be.visible').then(() => {
    //         cy.get('[data-qa="login-email"]').type(email);
    //         cy.get('[data-qa="login-password"]').type(password);
    //         cy.get('[data-qa="login-button"]').click();
    //         cy.contains(`Logged in as ${name}`).should('be.visible');

    //         cy.get('a[href="/logout"]').click();
    //         cy.get('a[href="/login"]').should('exist').and('be.visible');
    //     })
    // })

})
