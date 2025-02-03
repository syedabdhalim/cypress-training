import loginData from "../../../fixtures/mock.json";

describe('Validating sign up application', () => {
    beforeEach(() => {
        const email = loginData.validUser.email;
        const password = loginData.validUser.password;
        cy.session([email, password], () => {
            cy.visit('https://automationexercise.com/');
            cy.get("a[href='/login']").click();
            cy.login(email, password);
        },
        )
    })

    // it('Login with custom commands', () => {
    //     cy.visit('/');
    //     cy.get('li > a > .fa.fa-user').should('be.visible').then(() => {
    //         cy.get('b').invoke('text').then((loggedUserName) => {
    //             cy.log(loggedUserName)
    //             expect(loggedUserName).equals("Demo test");
    //         });
    //     });
    // });

    it('User adding products and click on view cart', () => {
        cy.intercept('GET', '/view_cart', { fixture: 'view_cart.html' }).as('viewCart');

        cy.visit('https://automationexercise.com/');
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('button.btn.btn-default.cart').click();
        cy.get('[href="/view_cart"]').eq(0).click();

        cy.wait('@viewCart', { timeout: 10000 }) 
        .its('response.statusCode')
        .should('eq', 200);
    
        cy.url().should('contains', '/view_cart');
        cy.get('.btn.btn-default.check_out').invoke('text').then((btnText) => {
            expect(btnText).equals('Proceed To Checkout');
        });

        cy.url().should('contains', '/view_cart');
        cy.get('.btn.btn-default.check_out').invoke('text').then((btnText) => {
            expect(btnText).equals('Proceed To Checkout');
        });
    });
});
