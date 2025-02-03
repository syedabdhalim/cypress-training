/// <reference types="cypress" />
import loginData from "../../../fixtures/mock.json";
describe('Login Request Intercept', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    })

    it('Should login with valid user and intercept the request', () => {

        cy.get("a[href='/login'").click();
        const email = loginData.validUser.email;
        const password = loginData.validUser.password;
        cy.login(email, password);
        cy.wait('@loginRequestSuccess').then((interception) =>{
            expect(interception.response.statusCode).to.eq(302);
            expect(interception.request.body).to.include('csrfmiddlewaretoken');
        })
    })

})
