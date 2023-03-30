const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'i2xe8v',
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
