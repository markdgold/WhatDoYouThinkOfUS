var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();
var path = require('path');
var async = require('async');
var app = express();
var Country = require('./models/countries');
var morgan = require('morgan');


var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
mongoose.connect('mongodb://localhost/whatdoyou');

app.use('/api/countries', require('./controllers/countries'));
app.use('/api/articles', require('./controllers/articles'));

app.get('/*', function(req, res) {
   res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);
