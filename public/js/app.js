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
				controller: 'ArticlesCtrl'
			});
			$locationProvider.html5Mode(true);
	}
]);
