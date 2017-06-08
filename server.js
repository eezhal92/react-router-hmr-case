const express = require('express');
const { resolve } = require('path');
const bodyParser = require('body-parser');

const app = new express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  inline: true,
  noInfo: true,
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(resolve(__dirname, '../dist')));
app.use('/', (req, res) => {
  res
    .sendFile(resolve(__dirname, 'index.html'));
});

// Run server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`running on http://localhost:${PORT} in ${ENV} enviroment `);
});
