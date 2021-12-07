const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./client/src/index.jsx",
  output: {
    filename: "transformed.js",
    path: path.join(__dirname, '/client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
    ]
  }

}