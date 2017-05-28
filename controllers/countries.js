var express = require('express');
var Country = require('../models/countries');
var router = express.Router();
var async = require('async');

router.route('/:keyword')
.get(function(req, res){
    console.log("hitting contries");

    var countries=[
        {
            country: 'Germany',
            sum: 0,
            counter: 0,
            average: 0,
            articles: []
        },
        {
            country: 'GreatBritain',
            sum: 0,
            counter: 0,
            average: 0,
            articles: []
        },
        {
            country: 'UnitedStates',
            sum: 0,
            counter: 0,
            average: 0,
            articles: []
        }
    ];
    var filterArticles =function(countryFromArray, callback){
        Country.findOne({title: countryFromArray.country}, (function(err, country){
            if (err) return res.status(500).send(err);
            for( var i= 0; i<country.articles.length; i++){
                if(country.articles[i].title.includes(req.params.keyword)){
                    countryFromArray.sum += (country.articles[i].sentiment.document.score);
                    countryFromArray.counter++;
                    countryFromArray.articles.push({
                        title: country.articles[i].title,
                        url: country.articles[i].url
                    });

                }

            }
            countryFromArray.average = (countryFromArray.sum/countryFromArray.counter);
        })).then(function(result){
            callback(null, countryFromArray);
        });
    };

    async.concat(countries,filterArticles, function(err, result){
        res.send({Germany: countries[0], GreatBritain: countries[1], UnitedStates: countries[2]});
    });
});


module.exports = router;
