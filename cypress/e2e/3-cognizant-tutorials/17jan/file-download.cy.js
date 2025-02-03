
describe('File Download Test', () => {
    it('should download a file', () => {
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
      });
  });