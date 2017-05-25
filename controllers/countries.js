var express = require('express');
var Country = require('../models/countries');
var router = express.Router();

router.route('/:keyword')
.get(function(req, res){
    console.log("hitting contries");
    var germanySum = 0;
    var germanyCounter = 0;
    var germanyAverage = 0;
    var gbSum = 0;
    var gbCounter = 0;
    var gbAverage = 0;
    Country.findOne({title: 'Germany'}, (function(err, country){
        console.log(country);

        if (err) return res.status(500).send(err);
        for( var i= 0; i<country.articles.length; i++){
            if(country.articles[i].title.includes(req.params.keyword)){
                console.log(country.articles[i].source);
                console.log(country.articles[i].sentiment.document.score);
                germanySum += (country.articles[i].sentiment.document.score);
                germanyCounter ++;
            }

        }
        germanyAverage = (germanySum/germanyCounter);

    })).then(function(response){
        console.log('germany average', germanyAverage);
        //res.send({data: average});
    });
    Country.findOne({title: 'GreatBritain'}, (function(err, country){
        console.log(country);

        if (err) return res.status(500).send(err);
        for( var i= 0; i<country.articles.length; i++){
            if(country.articles[i].title.includes(req.params.keyword)){
                console.log(country.articles[i].source);
                console.log(country.articles[i].sentiment.document.score);
                gbSum += (country.articles[i].sentiment.document.score);
                gbCounter ++;
            }

        }
        gbAverage = (gbSum/gbCounter);

    })).then(function(response){
        console.log('gb average', gbAverage);
        res.send({Germany: germanyAverage, GreatBritain: gbAverage});
    });
    // console.log(germanyAverage);
    // res.send({Germany: germanyAverage, GreatBritain: gbAverage});

});


module.exports = router;
