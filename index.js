var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var path = require('path');

app.use(express.static(path.join(__dirname, '/views')));
//app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);


app.get('/', function (req, res) {
  res.render('index.html');
} );

app.get('/fenotipado', function (req, res) {
  res.render('fenotipado.html');
} );

app.use(favicon(path.join(__dirname,'/views/img/favicon.ico')));

app.listen(process.env.PORT || 3000);