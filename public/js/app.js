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
				templateUrl: './views/home.html',
				controller: 'ArticlesCtrl'
			})
		.state('addCountry', {
			url: '/addcountry',
			templateUrl: 'app/views/addCountry.html'
});
			$locationProvider.html5Mode(true);
	}
]);
