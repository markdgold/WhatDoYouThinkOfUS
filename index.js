var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();
var path = require('path');
var app = express();

var newsApi = process.env.NEWSAPI;
console.log(newsApi)
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/devDb'); //change to db want to use

//app.use('/api/articles', require('./controllers/articles'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);
