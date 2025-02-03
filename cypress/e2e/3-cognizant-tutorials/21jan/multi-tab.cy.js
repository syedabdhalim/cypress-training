describe('Validating multiple tabs', function () {
    it('Handling new browser tab by removing target attribute', function () {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a')
            .invoke('removeAttr', 'target').click()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows/new')

        cy.go('back')
    })

    it('Handling new browser tab by replacing target with _self', function () {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke("attr", "target", "_self").click()
        cy.url().should('include', '/windows/new');
        cy.get('h3').should('have.text', 'New Window');
        cy.go(-1);
    })

    it('Handling new Browser Tab using chain command', function () {
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example > a').then(tab => {
            const newTab = tab.prop("href");
            cy.visit(newTab);
            cy.url().should('include', '/windows/new');
            cy.get('h3').should('have.text', 'New Window');
        })
    })
});