const path = require("path");
const HWP = require('html-webpack-plugin'); 

module.exports = {
  mode: "development",
  entry: "./index.jsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "web",
  devServer: {
    port: "9500",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".md"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    ],
  },
  plugins:[
    new HWP({template: path.join(__dirname,'/public/index.html')})
]
};
