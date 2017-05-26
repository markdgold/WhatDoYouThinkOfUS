var express = require('express');
var Country = require('../models/countries');
var router = express.Router();

router.route('/:keyword')
.get(function(req, res){
    console.log("hitting contries");
    var germanySum = 0;
    var usCounter = 0;
    var usAverage = 0;
    var usSum = 0;
    var germanyCounter = 0;
    var germanyAverage = 0;
    var gbSum = 0;
    var gbCounter = 0;
    var gbAverage = 0
    Country.findOne({title: 'Germany'}, (function(err, country){
        if (err) return res.status(500).send(err);
        if(!country)
        return  "hi";
        for( var i= 0; i<country.articles.length; i++){
            if(country.articles[i].title.includes(req.params.keyword)){
                germanySum += (country.articles[i].sentiment.document.score);
                germanyCounter ++;
                console.log(country.articles[i].sentiment.document.score)
            }

        }
        germanyAverage = (germanySum/germanyCounter);

    })).then(function(response){
        console.log('germany average', germanyAverage);
    });

    Country.findOne({title: 'UnitedStates'}, (function(err, country){
        console.log(country);

        if (err) return res.status(500).send(err);
        for( var i= 0; i<country.articles.length; i++){
            if(country.articles[i].title.includes(req.params.keyword)){
                usSum += (country.articles[i].sentiment.document.score);
                usCounter ++;
            }

        }
        usAverage = (usSum/usCounter);

    })).then(function(response){
        console.log('United States Average', germanyAverage);
    });

    Country.findOne({title: 'GreatBritain'}, (function(err, country){
        console.log(country);

        if (err) return res.status(500).send(err);
        for( var i= 0; i<country.articles.length; i++){
            if(country.articles[i].title.includes(req.params.keyword)){
                gbSum += (country.articles[i].sentiment.document.score);
                gbCounter ++;
            }

        }
        gbAverage = (gbSum/gbCounter);

    })).then(function(response){
        res.send({Germany: germanyAverage, GreatBritain: gbAverage, UnitedStates: usAverage});
    });
});


module.exports = router;
