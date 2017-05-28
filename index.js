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
mongoose.connect("mongodb://heroku_rr89r5q3:a2t5ot4bmb0ohkh62kthlk3nm8@ds155811.mlab.com:55811/heroku_rr89r5q3" || /mongodb://localhost/whatdoyou);
 Country.find({},  function(err ,response){
 	console.log(JSON.stringify(response));
 });

app.use('/api/countries', require('./controllers/countries'));
app.use('/api/articles', require('./controllers/articles'));


app.get('/*', function(req, res) {
   res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT || 3000);
