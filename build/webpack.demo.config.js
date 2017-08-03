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
          "sass": "vue-style-loader!css-loader!sass-loader!"
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
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?|eot|woff|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  resolve: {
    extensions: [ ".js", ".json", ".vue" ],
    alias: {
      // 'vue$': 'vue/dist/vue.js',
      echarts: path.resolve(__dirname, '../node_modules/echarts'),
      ECharts: path.resolve(__dirname, '../node_modules/vue-echarts/components/ECharts')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
        inject: true,
        filename: path.join(__dirname, '../example/dist/index.html'),
        template: path.join(__dirname, '../example/index.html')
    }),
    new FriendlyErrorsPlugin()
  ]
}
