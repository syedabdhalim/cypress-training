/// <reference types="cypress" />

import LoginPage from '../../../PageObjects/Pages/loginPage.js';
import loginData from '../../../fixtures/mock.json';

describe('Login Tests', () => {
    const loginPage = new LoginPage();

    it('Login with valid user', function () {
        loginPage.visit();
        loginPage.getLoginHeader().should("contain", "Login to your account").and("be.visible");
        loginPage.login(loginData.validUser.email, loginData.validUser.password);
    });

    it('Login with invalid user', function () {
        loginPage.visit();
        loginPage.getLoginHeader().should("contain", "Login to your account").and("be.visible");
        cy.log(loginData.invalidUser.password);
        loginPage.login(loginData.invalidUser.email, loginData.invalidUser.password);
        loginPage.getErrorMessage().should('contain', 'Your email or password is incorrect!').and('be.visible');
    });
});
