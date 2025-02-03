/// <reference types="cypress" />

describe("Access and validate multiple elements", () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    });

    it('Accesses and validates multiple categories in the sidebar', () => {
        cy.get('.left-sidebar .category-products .panel').each((category) => {
            cy.wrap(category).find('.panel-title a').click();

            //Validate the category contains subcategories
            cy.wrap(category).find('ul li').each((subcategory) => {
                cy.wrap(subcategory).find('a').invoke('text').should('not.be.empty');
            })
        })
    })
})