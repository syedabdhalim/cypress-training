describe("Sort items price from low to high", () => {
    it("Sort the items from low to high", () => {
        cy.visit("https://www.saucedemo.com/v1/inventory.html");

        cy.get('.product_sort_container').select('lohi');
        cy.get('.inventory_item_price').then((prices)=>{
            const priceArray = [...prices].map(price=>{
                return parseFloat(price.innerText.replace('$',''))
            })
            cy.log('priceArray =>', priceArray);
            const sortedPrices = [...priceArray].sort((a,b) => a- b);
            cy.log('sortedPrices =>', sortedPrices)

            //using equals will result to fail because it is difference references
            expect(priceArray).to.deep.equals(sortedPrices);
        })
    })
    
})