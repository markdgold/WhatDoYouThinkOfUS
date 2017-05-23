var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();
var path = require('path');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var watson = require('watson-developer-cloud');
var async = require('async')
var app = express();


var nluUsername = process.env.NLUUSER;
var nluPass = process.env.NLUPASS;

var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/devDb');

var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': nluUsername,
  'password': nluPass,
  'version_date': '2017-02-27'
});

app.use('/api/articles', require('./controllers/articles'));
app.use('/api/sentiments', require('./controllers/sentiments'));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);
