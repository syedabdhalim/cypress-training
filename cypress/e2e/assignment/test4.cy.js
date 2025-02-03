/// <reference types="cypress" />
import 'cypress-iframe';

describe("Test 4 ", () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });

    it('Verify the text in alert and verify the URL', () => {
        cy.get('#name').type('Syed');
        cy.get('#alertbtn').click();
        cy.on('window:alert', (text) => {
            expect(text).contains('Hello Syed, share this practice page and share your knowledge')
        })
    })

    it('Verify title of the newly opened tab ', () => {
        cy.get('#opentab').then(tab => {
            const newTab = tab.prop("href");
            cy.visit(newTab);
            cy.url().should('include' , 'qaclickacademy.com/');
            cy.go('back');
            cy.get('h2').should('have.text', 'Welcome to QAClick Academy ');
            cy.url().should('include', 'rahulshettyacademy.com')
        })
    })

    it('Verify content loaded for mentorship Iframe ', () => {
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find('header.main-header').should('exist');
        cy.iframe().find('footer.main-footer').should('be.visible');
    })
})