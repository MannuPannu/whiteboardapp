var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var http = require('http').Server(app);

var io = require('socket.io')(http);

router.get('/', function(req, res) {
	res.redirect('/');		
});

app.use(express.static(path.join(path.resolve(__dirname), '')));
app.use('/', router);

http.listen(8000, function(){
  console.log('listening on *:8000');
});

//Socket io config goes here

io.on('connection', function(socket) {
	console.log("a user connected");

	socket.on('drawing', function(msg) {
		io.emit('drawing', msg);
	});

	socket.on('disconnect', function(){
    	console.log('user disconnected');
	});
});



