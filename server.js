
const fs = require('fs')
const path = require('path')

const testProfile = path.join(__dirname, 'exampleProfile.json')
const testPortfolio = path.join(__dirname, 'examplePortfolio.json')
const index = require('./index')

const express = require('express')
const app = express()

// start the server
app.listen(9001, function() {
  console.log('theme development server started');
});

app.get('/profile', function(req, res) {
  return fs.readFile(testProfile, {
    encoding: 'utf-8'
  }, function(err, profile) {
    if (!err) {
      return res.send(index.renderProfile(JSON.parse(profile)));
    } else {
      return console.log(err);
    }
  });
});

app.get('/portfolio', function(req, res) {
  return fs.readFile(testPortfolio, {
    encoding: 'utf-8'
  }, function(err, portfolio) {
    if (!err) {
      return res.send(index.renderPortfolio(JSON.parse(portfolio)));
    } else {
      return console.log(err);
    }
  });
});


module.exports = app
