var express = require('express');
var Europe = require('../models/countries');
var router = express.Router();


router.route('/')
	.get(function(req, res){
	Europe.find(function(err, europe){
	if (err) return res.status(500).send(err);
console.log(europe);
	return res.send(europe);
});

})

.post(function(req, res) {
        // find the user first in case the email already exists
        Europe.findOne({ email: req.body.email }, function(err, country) {
            if (country) return res.status(400).send({ message: 'country exists' });

            Europe.create(req.body, function(err, country) {
                if (err) return res.status(500).send(err);

                return res.send(country);
            });
        });
    });

module.exports = router;
