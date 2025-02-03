class InventoryPage {

    sortDropdown = '.product_sort_container';
    inventoryItem = '.inventory_item';
    inventoryPrice = '.inventory_item_price';
    addToCartButton = '.btn_primary';
    shoppingCartLink = '.shopping_cart_link'

    selectSortingOption(optionValue){
        cy.get(this.addToCartButton).eq(optionValue);
    }

    getSortedPrices(){
        return cy.get(this.inventoryPrice).then($prices=>{
            return[...$prices].map(el=>parseFloat(el.innerText.replace('$','')));
        })
    }

    selectMostExpensiveProduct(){
        cy.get(this.inventoryItem).last().find(this.addToCartButton).click();
    }


    goToCart(){
        cy.get(this.shoppingCartLink).click();
    }


    clickAddToCart(index){
        cy.get(this.addToCartButton).eq(index).click();
    }

    verifySortingOption(optionValue){
        cy.get(this.sortDropdown).should('have.value', optionValue);
    }

    getInventoryCount(){
        return cy.get(this.inventoryItem).its('length');
    }
}

export default new InventoryPage();