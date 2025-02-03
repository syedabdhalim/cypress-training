class LoginPage {
    visit() {
        cy.visit('/login');
    }

    getLoginHeader() {
        return cy.get(".login-form > h2");
    }

    getEmailInput() {
        return cy.get('[data-qa="login-email"]');
    }

    getPasswordInput() {
        return cy.get('[data-qa="login-password"]');
    }

    getSubmitButton() {
        return cy.get('[data-qa="login-button"]');
    }

    getErrorMessage() {
        return cy.get('.login-form > form > p');
    }

    login(email, password) {
        this.getEmailInput().click().clear().type(email);
        this.getPasswordInput().click().clear().type(password);
        this.getSubmitButton().click();
    }
}

export default LoginPage;
