const { dependencies } = require("./package.json");

module.exports = {
  name: "name_one",
  remotes: {
    twoJsonProp: "name_two@http://localhost:5001/two-remote-entry.js",
    threeJsonProp: "name_three@http://localhost:5002/three-remote-entry.js",
  },
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
