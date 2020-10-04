const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    // client: './src/client.js',
    bundle: './Renderer/client.js'
  },
  output: {
    path: path.resolve(__dirname, 'Public'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
 }
}
