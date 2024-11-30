const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e:{
    baseUrl: 'https://official-joke-api.appspot.com',
  },
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Relatório de Testes',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
});

