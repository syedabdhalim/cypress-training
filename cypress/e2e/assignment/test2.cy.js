describe('Login Tests', function () {
    beforeEach(function () {
        cy.fixture('mockData').then(function (data) {
            this.mockData = data;
        });
        cy.fixture('signupData').as('sig');

    
    });

    it('Login with invalid user', function () {
        cy.get("a[href='/login']").click();
        cy.get(".login-form > h2").should("contain", "Login to your account").and("be.visible");
        
        cy.log(this.mockData.invalidUser.password);
        cy.login(this.mockData.invalidUser.email, this.mockData.invalidUser.password);
        
        cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!').and('be.visible');
    });
});
