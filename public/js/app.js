var app = angular.module('UsApp', ['ui.router', 'MainCtrls']);

app.config([
 '$stateProvider',
	'$urlRouterProvider',
 '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider){

		$urlRouterProvider.otherwise('/404');

		$stateProvider
			.state('/', {
				url: '/',
				templateUrl: './views/home.html',
				controller: 'MapsCtrl'
			})
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
			})
			.state('404', {
				url: '/404',
				templateUrl: './views/404.html'
			});
			$locationProvider.html5Mode(true);
	}
]);
