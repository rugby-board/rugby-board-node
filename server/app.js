// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

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
  var newsList = fetch('http://www.rugbynews.space/api/v1/list').then(function (response){
    return response.json();
  }).then(function (json){
    res.send(json);
  });
});

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
