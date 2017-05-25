var express = require('express');
var Country = require('../models/countries');
var router = express.Router();


router.route('/')
	.get(function(req, res){
	Country.find(function(err, country){
	if (err) return res.status(500).send(err);
console.log(country);
	return res.send(country);
});

})

.post(function(req, res) {
        // find the user first in case the email already exists
        Country.findOne({ title: req.body.title }, function(err, country) {
            if (country) return res.status(400).send({ message: 'country exists' });

            Country.create(req.body, function(err, country) {
                if (err) return res.status(500).send(err);

                return res.send(country);
            });
        });
    });

module.exports = router;
