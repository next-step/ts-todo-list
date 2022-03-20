const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); 

module.exports = {
  plugins: [new CleanWebpackPlugin()],
}

module.exports = {
  entry: './src/app.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new CleanWebpackPlugin()]
};
