const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,

  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
