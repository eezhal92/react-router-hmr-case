const webpack = require('webpack');
const { join, resolve } = require('path');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      resolve(__dirname, './src/index.js'),
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router',
    ],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/static/',
    filename: '[name].js',
  },
  context: resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: join(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
  ],
};
