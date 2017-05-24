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





router.route('/')
.get(function(req,res){

	var sources ={
		'bbc-news': 'GreatBritain',
		'spiegel-online': 'Germany',
	};

	// var j=Object.keys(sources);
	// for(var i=0; i<j; i++){

		var country = sources[Object.keys(sources)[0]];
		var source =  Object.keys(sources)[0];
		console.log('source------------', source)
		console.log('country------------', country)
		Country.findOne({title: country}, function (err, doc){


			doc.articles = [];

			var articleSource = {
				source: ""
			};

			async.waterfall([
		    function(waterCallbackOne) {
		        request(`https://newsapi.org/v1/articles?source=${source}&apiKey=${newsApi}`, function(error, response, body){
							if (error) console.log(error);
							articleSource.source = JSON.parse(response.body).source;
			        waterCallbackOne(null, JSON.parse(response.body).articles);
						});
		    },
		    function(articles, waterCallbackTwo){
		    	async.concat(articles, function(article, concatCallback){
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

		  						concatCallback(null, articleWithSent);

						  });
						},function(err, result){
							 waterCallbackTwo(null, result);
						});
		    }],
		  	function (err, result) {
					console.log('waterfall result', result);
					doc.articles = result
					doc.save();
				}
			);

		});


	//}

});


module.exports = router;
