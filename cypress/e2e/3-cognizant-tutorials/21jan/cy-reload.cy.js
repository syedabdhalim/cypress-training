describe('Automation Exercise - Reload Test', () => {
    it('should reload the page and verify the URL', () => {
      cy.visit('https://automationexercise.com');
      cy.url().should('eq', 'https://automationexercise.com/');
      cy.reload();
      cy.url().should('eq', 'https://automationexercise.com/');
    });
  });
  