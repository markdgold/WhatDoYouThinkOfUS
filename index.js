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


Country.find({}, function(err, docs){
if(!err){

	 console.log(JSON.stringify(docs));


}else {throw err;}
});


// console.log(Country)
// Country.create([
// {

// 				title: 'Austria',
//          id: "AT",
//          color: "#67b7dc",

//          groupId: 2
//        }, {
//          title: 'Ireland',
//          id: 'IE',
//          color: "#67b7dc",

//          groupId: 1
//        }, {
//          title: 'Denmark',
//          id: 'DK',
//          color: "#67b7dc",

//          groupId: 1
//        }, {
//          title: 'Finland',
//          id: 'FI',
//          color: "#67b7dc",

//          groupId: 1
//        }, {
//          title: 'Sweden',
//          id: 'SE',
//          color: "#67b7dc",

//          groupId: 1
//        }, {
//          title: 'GreatBritain',
//          id: 'GB',
//          color: "#67b7dc",

//          groupId: 1
//        }, {
//          title: 'Italy',
//          id: 'IT',
//          color: "#67b7dc",

//          groupId: 3
//        }, {
//          title: 'France',
//          id: 'FR',
//          color: "#67b7dc",

//          groupId: 2
//        }, {
//          title: 'Spain',
//          id: 'ES',
//          color: "#67b7dc",

//          groupId: 3
//        }, {
//          title: 'Greece',
//          id: 'GR',
//          color: "#67b7dc",

//          groupId: 3
//        }, {
//          title: 'Germany',
//          id: 'DE',
//          color: "#67b7dc",

//          groupId: 2
//        }, {
//          title: 'Belgium',
//          id: 'BE',
//          color: "#67b7dc",

//          groupId: 2
//        }, {
//          title: 'Luxembourg',
//          id: 'LU',
//          color: "#67b7dc",

//          groupId: 2
//        }, {
//          title: 'Netherlands',
//          id: 'NL',
//          color: "#67b7dc",

//          groupId: 2
//        }, {
//          title: 'Portugal',
//          id: 'PT',
//          color: "#67b7dc",

//          groupId: 3
//        }, {
//          title: 'Lithuania',
//          id: 'LT',
//          color: "#ebdb8b",

//          groupId: 1
//        }, {
//          title: 'Latvia',
//          id: 'LV',
//          color: "#ebdb8b",

//          groupId: 1
//        }, {
//          title: 'CzechRepublic' ,
//          id: 'CZ',
//          color: "#ebdb8b",

//          groupId: 4
//        }, {
//          title: 'Slovakia',
//          id: 'SK',
//          color: "#ebdb8b",

//          groupId: 4
//        }, {
//          title: 'Slovenia',
//          id: 'SI',
//          color: "#ebdb8b",

//          groupId: 3
//        }, {
//          title: 'Estonia',
//          id: 'EE',
//          color: "#ebdb8b",

//          groupId: 1
//        }, {
//          title: 'Hungary',
//          id: 'HU',
//          color: "#ebdb8b",

//          groupId: 4
//        }, {
//          title: 'Cyprus',
//          id: 'CY',
//          color: "#ebdb8b",

//          groupId: 3
//        }, {
//          title: 'Malta',
//          id: 'MT',
//          color: "#ebdb8b",

//          groupId: 3
//        }, {
//          title: 'Poland',
//          id: 'PL',
//          color: "#ebdb8b",

//          groupId: 4
//        }, {
//          title: 'Romania',
//          id: 'RO',
//          color: "#83c2ba",

//          groupId: 4
//        }, {
//          title: 'Bulgaria',
//          id: 'BG',
//          color: "#83c2ba",

//          groupId: 4
//        }, {
//          title: 'Croatia',
//          id: 'HR',
//          color: "#db8353",

//          groupId: 3

//  	}
// ]);





app.use('/api/countries', require('./controllers/countries'));
app.use('/api/articles', require('./controllers/articles'));

app.get('/*', function(req, res) {
   res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);
