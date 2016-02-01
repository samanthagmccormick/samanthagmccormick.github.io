// SERVER SIDE

// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB: Connect to local database named rest_test
mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
// Required middleware not included by Express, this is used to handle POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/', function(req, res) {
  res.send("index.html");
});

app.post('handle', function(req, res) {
  var body = request.body;
});

// Anything that comes through with /api/, direct it to this location
app.use('/api', require('./routes/api'));

app.listen(3000);
console.log("API is running on port 3000");
