/// <reference types="cypress" />

describe('Automation Exercise', () => {
  const name = 'SYED ABDUL HALIM BIN SYED ADBUL RAHMAN';
  const email = '2373250@cognizant.com';
  const password = 'zxvz9023408!'
  const first_name = 'SYED ABDUL HALIM';
  const last_name = 'BIN SYED ADBUL RAHMAN';
  const year = 1996;
  const month = 8;
  const day = 18;
  const company = 'Cognizant';
  const address1 = '219 Jalan Kayu';
  const address2 = 'Woodlands';
  const country = 'Singapore';
  const state = 'Singapore';
  const city = 'Singapore';
  const mobile_number = '64817830';
  const zipCode = '799442';
  const productName = '';
  let productsName = ['Blue Top', 'Men Tshirt'];
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
  })
  it('displays Website for automation practice', () => {
    cy.get('[alt="Website for automation practice"]').should('be.visible');
  })

  it('should perform valid signup', () => {
    cy.get('a[href="/login"]').click();
    cy.url().should('include', '/login');
    cy.contains('New User Signup!').should('be.visible');
    cy.url().should('include', '/login');
    cy.contains('New User Signup!').should('be.visible');
    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
    cy.contains('Enter Account Information').should('be.visible');

    cy.get('[data-qa="password"]').type(password);
    cy.get('[data-qa="days"]').select(day);
    cy.get('[data-qa="months"]').select(month);
    cy.get('[data-qa="years"]').select('1996');

    cy.get('[data-qa="first_name"]').type(first_name);
    cy.get('[data-qa="last_name"]').type(last_name);
    cy.get('[data-qa="company"]').type(company);

    cy.get('[data-qa="address"]').type(address1);
    cy.get('[data-qa="address2"]').type(address2);
    cy.get('[data-qa="country"]').select(country);
    cy.get('[data-qa="state"]').type(state);
    cy.get('[data-qa="city"]').type(city);
    cy.get('[data-qa="zipcode"]').type(zipCode);
    cy.get('[data-qa="mobile_number"]').type(mobile_number);

    cy.get('[data-qa="create-account"]').click();
    cy.contains('Account Created!').should('be.visible').then(()=>{
      cy.get('[data-qa="continue-button"]').click();
    })
  })

  it('Login with incorrect email', function () {

    cy.get("a[href='/login']").click();
    cy.get(".login-form > h2").should("contain", "Login to your account").and("be.visible");

    cy.get("input[data-qa='login-email']").type("wrongusername@cognizant.com");
    cy.get("input[placeholder='Password']").type(password);
    cy.get("button[data-qa='login-button']").click();

    cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!').and('be.visible');
  });

  it('Login with incorrect password', function () {


    cy.url().should("include", "automationexercise");
    cy.title().should('eq', 'Automation Exercise');

    cy.get("a[href='/login']").click();
    cy.get(".login-form > h2").should("contain", "Login to your account").and("be.visible");

    cy.get("input[data-qa='login-email']").type(email);
    cy.get("input[placeholder='Password']").type("WrongPassword");
    cy.get("button[data-qa='login-button']").click();

    cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!').and('be.visible');

  });

  it('Login and logout as valid user', () => {
    cy.get('a[href="/login"]').click();
    cy.contains('Login to your account').should('be.visible').then(() => {
      cy.get('[data-qa="login-email"]').type(email);
      cy.get('[data-qa="login-password"]').type(password);
      cy.get('[data-qa="login-button"]').click();
      cy.contains(`Logged in as ${name}`).should('be.visible');

      cy.get('a[href="/logout"]').click(); 
      cy.get('a[href="/login"]').should('exist').and('be.visible'); 
    })
  })

  it("Verify All Products and Product Details page", () => {

    cy.get("a[href='/products']").click();
    cy.get("a[href='/products']").should("have.css", "color", "rgb(255, 165, 0)");
    cy.url().should("contain", "products");
    cy.title().should("contain", "Automation Exercise - All Products")

    //Product list is visible
    cy.get('.features_items .col-sm-4').should('have.length.greaterThan', 0);
    cy.get('.features_items .col-sm-4').each(($el) => {
      cy.wrap($el).should('be.visible');
    });

    cy.get("a[href='/product_details/1']").first().click();

    cy.url().should("contain", "product_details");
    cy.get("button[type='button']").should("contain", "Add to cart").and("be.visible");

    cy.get(".product-information h2").should('be.visible').and('contain.text', 'Blue Top');
    cy.get('.product-information p').eq(0).should('be.visible').and('contain.text', 'Category: Women > Tops');
    cy.get('.product-information span span').should('be.visible').and('contain.text', 'Rs. 500');
    cy.get('.product-information p').eq(1).should('be.visible').and('contain.text', 'Availability: In Stock');
    cy.get('.product-information p').eq(2).should('be.visible').and('contain.text', 'Condition: New');
    cy.get('.product-information p').eq(3).should('be.visible').and('contain.text', 'Brand: Polo');
  })

  it('Delete created account', () => {
    cy.get('a[href="/login"]').click();
    cy.contains('Login to your account').should('be.visible').then(() => {
      cy.get('[data-qa="login-email"]').type(email);
      cy.get('[data-qa="login-password"]').type(password);
      cy.get('[data-qa="login-button"]').click();
      cy.contains(`Logged in as ${name}`).should('be.visible');
      cy.get('a[href="/delete_account"]').click(); 
      cy.contains(`Account Deleted!`).should('be.visible');
      cy.get('[data-qa="continue-button"]').click();
    })
  })

})
