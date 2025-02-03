describe('Signup Form', () => {
    beforeEach(() => {
        cy.fixture('signupData').as('sig');
    });

    it('should fill out and submit the signup form using fixture data', function () {
        cy.visit('/login');
        cy.get('input[data-qa="signup-name"]').type(this.signupData.name);
        cy.get('input[data-qa="signup-email"]').type('john.doe@example.com'); // Use a valid email for testing

        // Submit the initial email form
        cy.get('button[data-qa="signup-button"]').click();

        // Now on the main signup form page
        cy.url().should('include', '/signup'); // Adjust this if the URL changes

        cy.get(`#id_gender${this.signupData.title === 'Mr' ? '1' : '2'}`).check();

        cy.get('#name').type(this.signupData.name);

        cy.get('#password').type(this.signupData.password);

        cy.get('#days').select(this.signupData.dob.day);
        cy.get('#months').select(this.signupData.dob.month);
        cy.get('#years').select(this.signupData.dob.year);

        if (this.signupData.newsletter) {
            cy.get('#newsletter').check();
        }
        if (this.signupData.optin) {
            cy.get('#optin').check();
        }

        cy.get('#first_name').type(this.signupData.address.first_name);
        cy.get('#last_name').type(this.signupData.address.last_name);
        cy.get('#company').type(this.signupData.address.company);
        cy.get('#address1').type(this.signupData.address.address1);
        cy.get('#address2').type(this.signupData.address.address2);
        cy.get('#country').select(this.signupData.address.country);
        cy.get('#state').type(this.signupData.address.state);
        cy.get('#city').type(this.signupData.address.city);
        cy.get('#zipcode').type(this.signupData.address.zipcode);
        cy.get('#mobile_number').type(this.signupData.address.mobile_number);

          cy.get('button[data-qa="create-account"]').click();

          cy.url().should('include', '/account');
          cy.get('.success-message').should('contain', 'Account created successfully');
    });
});
