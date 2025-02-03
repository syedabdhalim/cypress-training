const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
   },
    baseUrl: 'https://automationexercise.com',
  },
});
