/// <reference types="cypress" />

describe('Exception Handling Test', () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
    });

    it('should handle HTTP status code errors gracefully', () => {
        cy.request({
            url: 'https://automationexercise.com/random-non-exesisting-page',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });

    it('should handle uncaught exceptions gracefully', () => {
        cy.visit('https://automationexercise.com/random-non-exesisting-page');
        cy.window().then((win) => {
            win.eval('throw new Error("Test Uncaught Exception")');
        });
        cy.log('Uncaught exception handled');
    });
});