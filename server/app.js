// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

// webpack-dev-middleware
if (!process.env.NO_DEV) {
  var webpack = require('webpack');
  var webpackConfig = require('../webpack.config.js');
  var compiler = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));
}

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

// Get News Item
app.get('/news/:id', (req, res) => {
  var newsItem = fetch('http://www.rugbynews.space/api/v1/news/' + req.params.id).then(function (response){
    return response.json();
  }).then(function (json){
    res.send(json);
  });
});

// Get News List
app.get('/list', (req, res) => {
  const channel = req.query.channel || -1;
  const event = req.query.event || -1;
  var page = req.query.page || 1;
  if (page < 1) {
    page = 1;
  }
  var url = 'http://www.rugbynews.space/api/v1/list';
  params = new Array();
  params.push('p=' + page);
  if (channel != -1) {
    params.push('channel=' + channel);
  }
  if (event != -1) {
    params.push('event=' + event);
  }
  if (channel != -1 || event != -1) {
    url += ('?' + params.join('&'));
  }
  var newsList = fetch(url).then(function (response){
    return response.json();
  }).then(function (json){
    res.send(json);
  });
});

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;
