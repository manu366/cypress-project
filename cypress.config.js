const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");
const { defineConfig } = require("cypress");



module.exports = defineConfig({
  video : false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      });
    },
  
  specPattern:"cypress/e2e/*.js",
},
  pageLoadTimeout: 1200000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts:true,
    reportPageTitle:"my test suite",
    embededscreenshoots: true,
    inlineAssets:true
  }
})
