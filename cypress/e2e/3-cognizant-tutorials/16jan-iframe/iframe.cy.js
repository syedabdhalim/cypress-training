import 'cypress-iframe'
describe('iframe handling', () => {

    beforeEach(() => {
        cy.visit("https://www.automationtesting.co.uk/iframe.html");
    })

    it('Inline frame handling using wrap()', () => {
        cy.get('[src="index.html"')
        .its('0.contentDocument.body').should('not.be.empty').then((frameBody)=>{
            cy.wrap(frameBody).as('iFrameBody')
            cy.get('@iFrameBody').find('div > div > div > header > a').should('have.text','Automation Testing Test Arena')
        })
    });

    it('Accessing frame from common methods', () => {
        cy.iFrameMethod('[src="index.html"').within(() => {
            cy.get('div > div > div > header > a').should('have.text', 'Automation Testing Test Arena');
        })
    })
})