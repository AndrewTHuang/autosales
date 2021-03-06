var webpack = require('webpack');
var path = require('path');
var express = require('express');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'public');

if (isDevelopment) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.listen(3001, 'localhost', function(err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Listening at http://localhost:3001');
  });
} else {
  process.env.PWD = process.cwd();
  app.use(express.static(process.env.PWD + '/public'));

  app.get('*', function(req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  });

  app.listen(process.env.PORT || 8080, function(err) {
      if (err) {
        console.log(err);
        return;
      }

      console.log('Listening at http://localhost:8080');
    });
};
