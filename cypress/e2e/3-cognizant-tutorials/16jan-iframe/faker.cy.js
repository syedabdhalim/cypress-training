import { faker } from '@faker-js/faker';

describe('iframe handling', ()=>{
    it('sign up with random details',()=>{
        cy.visit('/')
        const name = faker.person.firstName() + ' ' + faker.person.lastName();
        const email = faker.internet.email();
        // const pwd = faker.internet.password();

        cy.get('.fa.fa-lock').click();
        cy.get('[data-qa="signup-name"').clear().type(name);
        cy.get('[data-qa="signup-email"').clear().type(email);
        cy.get('[data-qa="signup-button"').click();
        cy.wait(2000)

    })
})