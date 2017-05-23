angular.module('MainCtrls', ['NewsServices'])
	.controller('ArticlesCtrl', ['$scope', '$http', 'ArticlesFactory', function($scope, $http, ArticlesFactory){
			$scope.article = {};
			$scope.articles = [];
			$scope.watsonData = {};
			var alJazeera = 'al-jazeera-english';

			ArticlesFactory.get({source: alJazeera}, function success(data){
				$scope.article = data;
				$scope.articles.push(data)
				console.log('success', $scope.articles);
			});
	}]);
