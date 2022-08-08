const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video : false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/e2e/*.js"
  },pageLoadTimeout: 1200000,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    html: false,
    json: false
  },
});
