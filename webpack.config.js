const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'worker.js',
    path: __dirname
  },
  plugins: [
    new NodePolyfillPlugin()
  ]
};
