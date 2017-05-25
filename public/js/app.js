var app = angular.module('UsApp', ['ui.router', 'MainCtrls']);

app.config([
 '$stateProvider',
	'$urlRouterProvider',
 '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider){

		$urlRouterProvider.otherwise('/404');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: './views/home.html',
				controller: 'MapsCtrl'
			})
			.state('maps', {
				url: '/maps',
				templateUrl: './views/maps.html',
				controller: 'MapsCtrl'
			})
			.state('apiCall', {
				url: '/apiCall',
				template: '<h1>ApiCalled</h1>',
				controller: 'ArticlesCtrl'
			});
			$locationProvider.html5Mode(true);
	}
]);
