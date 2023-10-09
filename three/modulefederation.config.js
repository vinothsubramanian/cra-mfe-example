const { dependencies } = require("./package.json");

module.exports = {
  name: "name_three",
  exposes: {
    "./AppThree": "./src/AppThree", // AppThree component name should match both sides
  },
  filename: "three-remote-entry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
