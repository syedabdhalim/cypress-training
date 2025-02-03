/// <reference types="cypress" />

describe("Table Validation", () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    });

    it('Validates the item table structure', () => {
        cy.get('.features_items .product-image-wrapper').each((product, index) => {
            cy.wrap(product).within(() => {
                //Check price
                cy.get('h2').invoke('text').should('match', /^Rs\. \d+/);

                //Check product name visible
                cy.get('p').invoke('text').should('not.be.empty');

                //Check button 'Add to cart' exist
                cy.get('.add-to-cart').should('be.visible');
            })
        })
    })
})