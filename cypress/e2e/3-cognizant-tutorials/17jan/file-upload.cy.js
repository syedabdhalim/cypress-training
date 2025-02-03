import 'cypress-file-upload';

describe('File Upload Test', () => {
    it('should upload a file', () => {
        cy.visit('https://practice.expandtesting.com/upload');

        const fileName = 'example.json';
        cy.get('[data-testid="file-input"]')
            .attachFile('example.json');
            
        cy.get('[data-testid="file-submit"]').click();

        cy.get('h1').should('contain', 'File Uploaded!');
    });
});