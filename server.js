var http = require('http');

var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function () {
	console.log('Server running on port' + app.get('port'));
	console.log('How to Mean is up!')
})

