/// <reference types="cypress" />

describe("Search and return item", () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/products')
    })

    it('should search for an item and validate the results', () => {
        const searchQuery = 'T-shirt';
        cy.get('#search_product').type(searchQuery);

        cy.get('#submit_search').click();
        cy.get('.features_items').should('be.visible');

        //verify products matches 
        cy.get('.features_items .productinfo').each(($el) => {
            cy.wrap($el).find('p').invoke('text').then((text) => {
                expect(text.toLowerCase()).to.include(searchQuery.toLowerCase());
            })
        })
    })
})