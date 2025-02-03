/// <reference types="cypress" />
import loginData from "../../../fixtures/mock.json";
describe('Login using custom command & fixtures', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    })

    it('Login with valid user', function () {
        cy.get("a[href='/login']").click();
        cy.get(".login-form > h2").should("contain", "Login to your account").and("be.visible");
        cy.login(loginData.validUser.email, loginData.validUser.password);
  
    });
    it('Login with invalid user', function () {
        cy.get("a[href='/login']").click();
        cy.get(".login-form > h2").should("contain", "Login to your account").and("be.visible");
        cy.log(loginData.invalidUser.password)
        cy.login(loginData.invalidUser.email, loginData.invalidUser.password);
        cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!').and('be.visible');
    });

})
