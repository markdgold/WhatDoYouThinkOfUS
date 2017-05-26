var express = require('express');
var Country = require('../models/countries');
var router = express.Router();

router.route('/:keyword')
.get(function(req, res){
    console.log("hitting contries");
    var gb = {
        sum: 0,
        counter: 0,
        average: 0,
        articles: []
    };
    var germany = {
        sum: 0,
        counter: 0,
        average: 0,
        articles: []
    };
    var us = {
        sum: 0,
        counter: 0,
        average: 0,
        articles: []
    };

    Country.findOne({title: 'Germany'}, (function(err, country){
        if (err) return res.status(500).send(err);
        for( var i= 0; i<country.articles.length; i++){
            if(country.articles[i].title.includes(req.params.keyword)){
                germany.sum += (country.articles[i].sentiment.document.score);
                console.log('germany sum: ', germany.sum);
                germany.counter++;
                console.log('counter', germany.counter);
                germany.articles.push({
                    title: country.articles[i].title,
                    url: country.articles[i].url
                });
            }

        }
        germany.average = (germany.sum/germany.counter);


    })).then(function(response){
        console.log('germany average', germany.average);

    });

    Country.findOne({title: 'UnitedStates'}, (function(err, country){
        if (err) return res.status(500).send(err);
        for( var i= 0; i<country.articles.length; i++){
            if(country.articles[i].title.includes(req.params.keyword)){
                us.sum += (country.articles[i].sentiment.document.score);
                us.counter +=1;
                us.articles.push({
                    title: country.articles[i].title,
                    url: country.articles[i].url
                });
            }

        }
        us.average = (us.sum/us.counter);

    })).then(function(response){
        console.log('United States Average', us.average);
    });

    Country.findOne({title: 'GreatBritain'}, (function(err, country){
        if (err) return res.status(500).send(err);
        for( var i= 0; i<country.articles.length; i++){
            if(country.articles[i].title.includes(req.params.keyword)){
                gb.sum += (country.articles[i].sentiment.document.score);
                gb.counter +=1;
                gb.articles.push({
                    title: country.articles[i].title,
                    url: country.articles[i].url
                });
            }

        }
        gb.average = (gb.sum/gb.counter);
    })).then(function(response){
        res.send({Germany: germany, GreatBritain: gb, UnitedStates: us});
    });
});


module.exports = router;
