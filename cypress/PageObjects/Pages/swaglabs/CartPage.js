class CartPage {
    cartItemLabel = '.inventory_item_name';
    checkoutButton = '.checkout_button';

    verifyCartItem(expectedTitle){
        cy.get(this.cartItemLabel).should('contain',expectedTitle);
    }
    
    clickCheckout(){
        cy.get(this.checkoutButton).click();
    }

}

export default new CartPage();
