var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({ defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3001); // Bash to change node:  setenv PORT 3001

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/datetime', function(req, res) {
	res.render('datetime', { datetime: new Date().toString() });
});

app.use(function(req, res, next) {
	res.status(404);
	res.render('404');
});

app.use(function(req, res) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:' + 
		app.get('port') + '; press Ctrl+C to terminate.');


});

