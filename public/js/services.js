angular.module('NewsServices', ['ngResource'])
	.factory('ArticlesFactory', ['$resource', function($resource) {
    // use the colon syntax to specify the id parameter in the url.
        return $resource('/api/articles/:source/:number');
    }])
    .factory('SentimentFactory', ['$resource', function($resource){
        return $resource('/api/sentiments/:url');
    }])
