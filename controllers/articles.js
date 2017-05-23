var express = require('express');
var request = require('request');
var router = express.Router();
var newsApi = process.env.NEWSAPI;

router.route('/:source')

.get(function(req,res){
		console.log('article control req');
		request(`https://newsapi.org/v1/articles?source=${req.params.source}&sortBy=latest&apiKey=${newsApi}`, function(error, response, body){
					if (error) console.log(error);

					res.send(body);
		});
});
module.exports = router;
