/**
 * Created by rong.chen on 2018/9/5.
 */
'use strict'

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config');
const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, '../dist'),
  historyApiFallback: true,
  hot: true,
  port: 9090,
  publicPath: "/"
});
server.listen(9090, 'localhost', function (err) {
  if (err) throw err
})