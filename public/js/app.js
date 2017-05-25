var app = angular.module('UsApp', ['ui.router', 'MainCtrls']);

app.config([
 '$stateProvider',
	'$urlRouterProvider',
 '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider){

		$urlRouterProvider.otherwise('/404');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: './views/newsApiReturn.html',
				controller: 'MapsCtrl'
			})
		.state('apiCall', {
	url: '/apiCall',
	template: '<h1>ApiCalled</h1>',
	controller: 'ArticlesCtrl'
	})
		.state('addCountry', {
			url: '/addcountry',
			templateUrl: 'app/views/addCountry.html'
});
			$locationProvider.html5Mode(true);
	}
]);
