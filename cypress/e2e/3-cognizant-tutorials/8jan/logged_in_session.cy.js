/// <reference types="cypress" />
import loginData from "../../../fixtures/mock.json";

describe('Logged in session', () => {

    it('Should  display a logout link ', () => {
        cy.visit('https://automationexercise.com/login');
        // cy.get("input[data-qa='login-email']").type('email')
        // .blur().should('have.attr', 'aria-invalid');

        cy.get("input[data-qa='login-email']")
        .type('emailww')
        .blur().
        then((el)=>{
            cy.log(el[0])
            expect(el[0].checkValidity()).to.be.false;
        })
    })



    // beforeEach(() => {
    //     const email = loginData.validUser.email;
    //     const password = loginData.validUser.password;
    //     cy.session([email, password], () => {
    //         cy.visit('https://automationexercise.com/');
    //         cy.get("a[href='/login']").click();
    //         cy.login(email, password);
    //     },
    //     )
    // })
    // it('Should  display a logout link ', () => {
    //     cy.visit('https://automationexercise.com/');
    //     cy.get('.nav.navbar-nav').contains('Logout').should('exist');
    // })
    // it('Should display user fullname ', () => {
    //     const name = loginData.validUser.name;
    //     cy.visit('https://automationexercise.com/');
    //     cy.get('.nav.navbar-nav')
    //     .contains('Logged in as ')
    //     .should('be.visible')
    //     .and('contain.text', name)
    // })
})