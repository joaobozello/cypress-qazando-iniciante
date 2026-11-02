const { defineConfig } = require("cypress");

export default defineConfig({
  projectId: 'r3ybtf',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do Curso de Cypress',
      reportPageTitle: 'Projeto do Curso de Cypress'
    },
    baseUrl: "http://automationpratice.com.br",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
