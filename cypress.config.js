const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalStudio: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
