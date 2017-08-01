const path = require("path");

module.exports = {
  entry: {
    demo: path.resolve(__dirname, "../example/main.js")
  },
  output: {
    path: path.resolve(__dirname, "../dist/demo"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          "sass": "vue-style-loader!css-loader!sass-loader!indentedSyntax"
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loader: ["style-loader", "css-loader", "stylus-loader"]
      }
    ]
  },
  resolve: {
    extensions: [ ".js", ".json", ".vue" ]
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: 9000
  }
}
