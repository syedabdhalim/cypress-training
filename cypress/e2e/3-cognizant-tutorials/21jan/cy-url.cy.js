describe("Test Reload and URL functions", () => {
    it("should verify URL before and after page reload", () => {
        cy.visit("/");
        cy.get('a[href="/products"]').then((page) => {
            cy.wrap(page).click();
            cy.url().should('eq' , 'https://automationexercise.com/products')
        });

        cy.reload();
        cy.url().should('include', '/products');
    })
})