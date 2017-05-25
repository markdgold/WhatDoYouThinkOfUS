angular.module('NewsServices', ['ngResource'])
	.factory('ArticlesFactory', ['$resource', function($resource) {
    // use the colon syntax to specify the id parameter in the url.

        return $resource('/api/articles/:source/:country');
    }])
	.factory('CountriesFactory', ['$resource', function($resource){

				return $resource('/api/countries/:keyword');
}]);

