const { dependencies } = require("./package.json");

module.exports = {
  name: "name_two",
  exposes: {
    "./AppTwo": "./src/AppTwo",
  },
  filename: "two-remote-entry.js",
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
