var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var path = require('path');
var bodyParser = require('body-parser');
var sendmail = require('sendmail')();



app.use(express.static(path.join(__dirname, '/views')));
//app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', function (req, res) {
  res.render('index.html');
} );

app.get('/fenotipado', function (req, res) {
  res.render('fenotipado.html');
} );

app.post('/endpoint', function(req, res){
	var obj = {};
	console.log('body: ' + req.body.name);

	sendmail({
		  from: 'no-reply@yourdomain.com.ar',
		  to: 'balmerags@gmail.com',
		  subject: 'test sendmail',
		  html: 'Mail of test sendmail ',
		}, function(err, reply) {
		  console.log(err && err.stack);
		  console.dir(reply);
	});

	res.send(req.body);


});

app.use(favicon(path.join(__dirname,'/views/img/favicon.ico')));

app.listen(process.env.PORT || 3000);