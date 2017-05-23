var express = require('express');
var request = require('request');
var router = express.Router();
var newsApi = process.env.NEWSAPI;
var async = require('async');

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
		res.send(result);
	});
})



// .get(function(req,res){
// 		console.log('article control req');
// 		request(`https://newsapi.org/v1/articles?source=${req.params.source}&sortBy=latest&apiKey=${newsApi}`, function(error, response, body){
// 					if (error) console.log(error);
// 					articleData = body;
// 					res.send(articleData);
// 		});
// })

// .get(function(req,res){
//   var parameters = {
//     'url': req.params.url,
//     'features': {
//       'sentiment': {},
//       'emotion': {}
//     }
//   };
//   natural_language_understanding.analyze(parameters, function(err, response) {
//     if (err)
//       console.log('error:', err);
//     else
//       console.log(JSON.stringify(response, null, 2));
//       watsonData = JSON.stringify(response, null, 2);
//   res.send(watsonData);
//   });
// })

module.exports = router;
