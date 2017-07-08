// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

// webpack-dev-middleware
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackConfig = require('../config/webpack.dev.config.js');
  const compiler = webpack(webpackConfig);
  const middleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  app.use(middleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
}

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve index
app.use(express.static(path.resolve(__dirname, '..', 'dist')));
// Serve static assets
app.use('/public', express.static(path.resolve(__dirname, '.', 'public')));

// Access token
const ACCESS_TOKEN = process.env.ADMIN_TOKEN === undefined ? '12ffbb6' : process.env.ADMIN_TOKEN;
const API_URL = 'https://rugby-board.herokuapp.com/api/v1';

// Get Index
app.get('/api/index', (req, res) => {
  fetch(`${API_URL}/index?token=${ACCESS_TOKEN}`).then((response) => {
    return response.json();
  }).then((json) => {
    res.send(json);
  });
});

// Get News Item
app.get('/api/news/:id', (req, res) => {
  fetch(`${API_URL}/news/${req.params.id}?token=${ACCESS_TOKEN}`).then((response) => {
    return response.json();
  }).then((json) => {
    res.send(json);
  });
});

// Get News List
app.get('/api/list', (req, res) => {
  const channel = req.query.channel || -1;
  const event = req.query.event || -1;
  let page = req.query.page || 1;
  if (page < 1) {
    page = 1;
  }
  let url = `${API_URL}/list?token=${ACCESS_TOKEN}`;
  const params = [];
  params.push('p=' + page);
  if (channel !== -1) {
    params.push('channel=' + channel);
  }
  if (event !== -1) {
    params.push('event=' + event);
  }
  if (channel !== -1 || event !== -1) {
    url += ('&' + params.join('&'));
  }
  fetch(url).then((response) => {
    return response.json();
  }).then((json) => {
    res.send(json);
  });
});

// Translate
app.get('/api/translate/:word', (req, res) => {
  fetch(`${API_URL}/dict?entry=${req.params.word}`).then(function (response){
    return response.json();
  }).then(function (json){
    res.send(json);
  });
});

// Create
// Update
// Highlight
// Unhighlight
// Delete

// Admin page
app.get('/admin', (req, res) => {
  if (req.query.token === ACCESS_TOKEN) {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'admin.html'));
  } else {
    res.send('Access Denied.');
  }
});

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;
