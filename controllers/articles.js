var express = require('express');
var request = require('request');
var router = express.Router();
var newsApi = process.env.NEWSAPI;
var async = require('async');
var Country = require('../models/countries');
var mongoose = require('mongoose');


var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var nluUsername = process.env.NLUUSER;
var nluPass = process.env.NLUPASS;

var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': nluUsername,
  'password': nluPass,
  'version_date': '2017-02-27'
});

var articleSource = {
	source: ""
};

router.route('/:source/:number')
.get(function(req,res){
Country.findOne({title: 'Germany'}, function (err, doc){
	doc.articles = [];

		console.log(doc);
		doc.save();
});
	async.waterfall([
    function(callback) {
        request(`https://newsapi.org/v1/articles?source=${req.params.source}&apiKey=${newsApi}`, function(error, response, body){
					if (error) console.log(error);
					articleSource.source = JSON.parse(response.body).source;
	        callback(null, JSON.parse(response.body).articles[req.params.number]);
				});
    },
    function(article, callback) {
				  var parameters = {
				    'url': article.url,
				    'features': {
				      'sentiment': {},
				      'emotion': {}
				    }
				  };
				  natural_language_understanding.analyze(parameters, function(err, response) {
				    if (err)
				      console.log('error:', err);
				    else
				      var watsonData = response;
  						var articleWithSent =Object.assign({}, articleSource, article, watsonData);
     			    callback(null, articleWithSent);
				  });
    }],
  	function (err, result) {

			// Country.findOne({title: 'Germany'}, function (err, doc){
			// 	doc.articles.push(result);
			// 	console.log(doc);
			// 	doc.save();
 				res.send(result);
			// });
		});
});


module.exports = router;
