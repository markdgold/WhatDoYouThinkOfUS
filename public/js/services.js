angular.module('NewsServices', ['ngResource'])
	.factory('ArticlesFactory', ['$resource', function($resource) {
    // use the colon syntax to specify the id parameter in the url.
    var url = 'https://newsapi.org/v1/articles?source=al-jazeera-english&sortBy=latest&apiKey=aca0cec3697849f88f54f0441ce074d5';
    return $resource(url, {
    }, {
        // overwrite the isArray value when querying for movies
        query: { isArray: false }
    });
}])
	.factory('ExtractFactory', ['$resource', function($resource){
				var url = ''
}])
