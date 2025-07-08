const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    baseUrl: 'https://automationexercise.com',
    retries: {
      runMode: 2,    // Retry failed tests twice during CI runs
      openMode: 1    // Retry once during local open mode
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
