var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var nluUsername = process.env.NLUUSER;
var nluPass = process.env.NLUPASS;
var express = require('express');
var router = express.Router();

var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': nluUsername,
  'password': nluPass,
  'version_date': '2017-02-27'
});

router.route('/:url')

.get(function(req,res){
  var parameters = {
    'url': req.params.url,
    'features': {
      'sentiment': {}
    }
  };
  var sentiment={};
  natural_language_understanding.analyze(parameters, function(err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
      sentiment = JSON.stringify(response, null, 2);
  res.send(sentiment);
  });
})

module.exports = router;
