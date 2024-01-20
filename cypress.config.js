const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
    baseUrl: 'http://demo.nopcommerce.com',
    viewportHeight:1080,
    viewportWidth:1920,
    experimentalStudio: true,
    defaultCommandTimeout: 5000,
    pageLoadTimeout:10000,
  },
});


require('@applitools/eyes-cypress')(module);
