const dayjs = require("dayjs");
 
 
describe('using dayjs to get and format date', () => {
    it('dayjs',() => {
        // const dayjs = require("dayjs");        
        //getting today's date
 
        const todaysDate = dayjs().format("MMM DD, YYYY");
        cy.log('Printing today date in required format: ' + todaysDate)
        const date = '2017-02-12'
        const newDate = dayjs(date).format("MM-DD-YY");
        const dayhr  = dayjs()
        cy.log(dayhr.toString())
        cy.log('Formatting existing date: ' +newDate);
 
    })
 
})