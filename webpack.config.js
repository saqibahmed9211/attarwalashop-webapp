const path = require("path");

module.exports = {
  mode: "development",
  devtool: 'cheap-module-source-map',
  entry: '/src/index.js',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js"
  },
  target: "web",
  devServer: {
    port: 3002,
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}