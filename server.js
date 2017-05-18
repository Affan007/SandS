// externsl modules
var express = require('express');
var request=require('request');
var bodyParser = require('body-parser');
var config = require('./config')[process.env.NODE_ENV || 'dev'];

// variables
var app = express();
app.use(bodyParser());

// app config
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/libs', express.static(__dirname + '/public/libs'));
app.use('/styles', express.static(__dirname + '/public/styles'));
// routes

app.get('/*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
});

//start server on port
var server = app.listen(process.env.PORT || 3000, function() {
	console.log('server started. Listening on port '+3000);
});
