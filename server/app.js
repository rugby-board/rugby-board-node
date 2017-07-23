// server/app.js

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const bodyParser = require('body-parser');
const FormData = require('form-data');

// webpack-dev-middleware
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackConfig = require('../config/webpack.dev.config.js');
  const compiler = webpack(webpackConfig);
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  // Dev
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  // HMR
  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
  // Serve for dev
  app.get('/admin', (req, res) => {
    const filename = path.join(compiler.outputPath, 'admin.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
}

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Parse body
app.use(bodyParser.json());

// Serve index
app.use(express.static(path.resolve(__dirname, '..', 'dist')));
// Serve static assets
app.use('/public', express.static(path.resolve(__dirname, '.', 'public')));

// Access token
const ADMIN_TOKEN = process.env.ADMIN_TOKEN === undefined ? '12ffbb6' : process.env.ADMIN_TOKEN;
const API_TOKEN = process.env.API_TOKEN === undefined ? '12ffbb6' : process.env.API_TOKEN;
const API_PROD_URL = 'https://rugby-board.herokuapp.com/api/v1';
const API_DEV_URL = 'http://localhost:3000/api/v1';
const API_URL = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'sandbox' ? API_PROD_URL : API_DEV_URL;

// Get Index
app.get('/api/index', (req, res) => {
  fetch(`${API_URL}/index?token=${API_TOKEN}`).then((response) => {
    return response.json();
  }).then((json) => {
    res.send(json);
  });
});

// Get News Item
app.get('/api/news/:id', (req, res) => {
  fetch(`${API_URL}/news/${req.params.id}?token=${API_TOKEN}`).then((response) => {
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
  let url = `${API_URL}/list?token=${API_TOKEN}`;
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

// Create
app.post('/api/create', (req, res) => {
  const url = `${API_URL}/news?token=${API_TOKEN}`;
  const form = new FormData();
  form.append('title', req.body.title);
  form.append('content', req.body.content);
  form.append('channel', req.body.channel);
  form.append('event', req.body.event);

  fetch(url, { method: 'POST', body: form }).then((response) => {
    return response.json();
  }).then((json) => {
    res.send(json);
  });
});
// Update
app.post('/api/update/:id', (req, res) => {
  const url = `${API_URL}/news/${req.params.id}?token=${API_TOKEN}`;
  const form = new FormData();
  form.append('title', req.body.title);
  form.append('content', req.body.content);
  form.append('channel', req.body.channel);
  form.append('event', req.body.event);

  fetch(url, { method: 'PUT', body: form }).then((response) => {
    return response.json();
  }).then((json) => {
    res.send(json);
  });
});
// Highlight
app.post('/api/highlight/:id', (req, res) => {
  const url = `${API_URL}/news/highlight/${req.params.id}?token=${API_TOKEN}`;
  fetch(url, { method: 'POST' }).then((response) => {
    return response.json();
  }).then((json) => {
    res.send(json);
  });
});
// Unhighlight
app.post('/api/unhighlight/:id', (req, res) => {
  const url = `${API_URL}/news/unhighlight/${req.params.id}?token=${API_TOKEN}`;
  fetch(url, { method: 'POST' }).then((response) => {
    return response.json();
  }).then((json) => {
    res.send(json);
  });
});
// Delete
app.post('/api/delete/:id', (req, res) => {
  const url = `${API_URL}/news/${req.params.id}?token=${API_TOKEN}`;
  fetch(url, { method: 'DELETE' }).then((response) => {
    return response.json();
  }).then((json) => {
    res.send(json);
  });
});

// Translate
app.get('/api/translate/:word', (req, res) => {
  fetch(`${API_URL}/dict?entry=${req.params.word}`).then((response) => {
    return response.json();
  }).then((json) => {
    res.send(json);
  });
});

// Admin page
app.get('/admin', (req, res) => {
  if (req.query.token === ADMIN_TOKEN) {
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
