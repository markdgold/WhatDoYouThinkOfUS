var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();
var path = require('path');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var watson = require('watson-developer-cloud');
var async = require('async');
var app = express();
var Country = require('./models/countries');
var seeder = require('mongoose-seed');

var nluUsername = process.env.NLUUSER;
var nluPass = process.env.NLUPASS;

var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/whatdoyou');
// console.log(Country)
Country.create([
{

				title: 'Austria',
         id: "AT",
         color: "#67b7dc",

         groupId: 2
       }, {
         title: 'Ireland',
         id: 'IE',
         color: "#67b7dc",

         groupId: 1
       }, {
         title: 'Denmark',
         id: 'DK',
         color: "#67b7dc",

         groupId: 1
       }, {
         title: 'Finland',
         id: 'FI',
         color: "#67b7dc",

         groupId: 1
       }, {
         title: 'Sweden',
         id: 'SE',
         color: "#67b7dc",

         groupId: 1
       }, {
         title: 'GreatBritain',
         id: 'GB',
         color: "#67b7dc",

         groupId: 1
       }, {
         title: 'Italy',
         id: 'IT',
         color: "#67b7dc",

         groupId: 3
       }, {
         title: 'France',
         id: 'FR',
         color: "#67b7dc",

         groupId: 2
       }, {
         title: 'Spain',
         id: 'ES',
         color: "#67b7dc",

         groupId: 3
       }, {
         title: 'Greece',
         id: 'GR',
         color: "#67b7dc",

         groupId: 3
       }, {
         title: 'Germany',
         id: 'DE',
         color: "#67b7dc",

         groupId: 2
       }, {
         title: 'Belgium',
         id: 'BE',
         color: "#67b7dc",

         groupId: 2
       }, {
         title: 'Luxembourg',
         id: 'LU',
         color: "#67b7dc",

         groupId: 2
       }, {
         title: 'Netherlands',
         id: 'NL',
         color: "#67b7dc",

         groupId: 2
       }, {
         title: 'Portugal',
         id: 'PT',
         color: "#67b7dc",

         groupId: 3
       }, {
         title: 'Lithuania',
         id: 'LT',
         color: "#ebdb8b",

         groupId: 1
       }, {
         title: 'Latvia',
         id: 'LV',
         color: "#ebdb8b",

         groupId: 1
       }, {
         title: 'CzechRepublic' ,
         id: 'CZ',
         color: "#ebdb8b",

         groupId: 4
       }, {
         title: 'Slovakia',
         id: 'SK',
         color: "#ebdb8b",

         groupId: 4
       }, {
         title: 'Slovenia',
         id: 'SI',
         color: "#ebdb8b",

         groupId: 3
       }, {
         title: 'Estonia',
         id: 'EE',
         color: "#ebdb8b",

         groupId: 1
       }, {
         title: 'Hungary',
         id: 'HU',
         color: "#ebdb8b",

         groupId: 4
       }, {
         title: 'Cyprus',
         id: 'CY',
         color: "#ebdb8b",

         groupId: 3
       }, {
         title: 'Malta',
         id: 'MT',
         color: "#ebdb8b",

         groupId: 3
       }, {
         title: 'Poland',
         id: 'PL',
         color: "#ebdb8b",

         groupId: 4
       }, {
         title: 'Romania',
         id: 'RO',
         color: "#83c2ba",

         groupId: 4
       }, {
         title: 'Bulgaria',
         id: 'BG',
         color: "#83c2ba",

         groupId: 4
       }, {
         title: 'Croatia',
         id: 'HR',
         color: "#db8353",

         groupId: 3

 	}
]);
// var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
// seeder.connect('mongodb://localhost/whatdoyou', function() {

//     // Load Mongoose models
//     seeder.loadModels([
//         '.models/countries.js'
//     ]);

//     // Clear specified collections
//     seeder.clearModels(['countries'], function() {

//         // Callback to populate DB once collections have been cleared
//         seeder.populateModels(data, function() {
//             //seeder.disconnect();
//         });

//     });
// });

var data = [
	{
		"model" : 'countries',
		'area' : [{

				title: 'Austria',
         id: "AT",
         color: "#67b7dc",

         groupId: 2
       }, {
         title: 'Ireland',
         id: 'IE',
         color: "#67b7dc",

         groupId: 1
       }, {
         title: 'Denmark',
         id: 'DK',
         color: "#67b7dc",

         groupId: 1
       }, {
         title: 'Finland',
         id: 'FI',
         color: "#67b7dc",

         groupId: 1
       }, {
         title: 'Sweden',
         id: 'SE',
         color: "#67b7dc",

         groupId: 1
       }, {
         title: 'GreatBritain',
         id: 'GB',
         color: "#67b7dc",

         groupId: 1
       }, {
         title: 'Italy',
         id: 'IT',
         color: "#67b7dc",

         groupId: 3
       }, {
         title: 'France',
         id: 'FR',
         color: "#67b7dc",

         groupId: 2
       }, {
         title: 'Spain',
         id: 'ES',
         color: "#67b7dc",

         groupId: 3
       }, {
         title: 'Greece',
         id: 'GR',
         color: "#67b7dc",

         groupId: 3
       }, {
         title: 'Germany',
         id: 'DE',
         color: "#67b7dc",

         groupId: 2
       }, {
         title: 'Belgium',
         id: 'BE',
         color: "#67b7dc",

         groupId: 2
       }, {
         title: 'Luxembourg',
         id: 'LU',
         color: "#67b7dc",

         groupId: 2
       }, {
         title: 'Netherlands',
         id: 'NL',
         color: "#67b7dc",

         groupId: 2
       }, {
         title: 'Portugal',
         id: 'PT',
         color: "#67b7dc",

         groupId: 3
       }, {
         title: 'Lithuania',
         id: 'LT',
         color: "#ebdb8b",

         groupId: 1
       }, {
         title: 'Latvia',
         id: 'LV',
         color: "#ebdb8b",

         groupId: 1
       }, {
         title: 'CzechRepublic' ,
         id: 'CZ',
         color: "#ebdb8b",

         groupId: 4
       }, {
         title: 'Slovakia',
         id: 'SK',
         color: "#ebdb8b",

         groupId: 4
       }, {
         title: 'Slovenia',
         id: 'SI',
         color: "#ebdb8b",

         groupId: 3
       }, {
         title: 'Estonia',
         id: 'EE',
         color: "#ebdb8b",

         groupId: 1
       }, {
         title: 'Hungary',
         id: 'HU',
         color: "#ebdb8b",

         groupId: 4
       }, {
         title: 'Cyprus',
         id: 'CY',
         color: "#ebdb8b",

         groupId: 3
       }, {
         title: 'Malta',
         id: 'MT',
         color: "#ebdb8b",

         groupId: 3
       }, {
         title: 'Poland',
         id: 'PL',
         color: "#ebdb8b",

         groupId: 4
       }, {
         title: 'Romania',
         id: 'RO',
         color: "#83c2ba",

         groupId: 4
       }, {
         title: 'Bulgaria',
         id: 'BG',
         color: "#83c2ba",

         groupId: 4
       }, {
         title: 'Croatia',
         id: 'HR',
         color: "#db8353",

         groupId: 3

 	}]
}];





var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': nluUsername,
  'password': nluPass,
  'version_date': '2017-02-27'
});


app.use('/api/europes', require('./controllers/europes'));
app.use('/api/articles', require('./controllers/articles'));
app.use('/api/sentiments', require('./controllers/sentiments'));

app.get('/*', function(req, res) {

   res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);
