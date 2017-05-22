angular.module('MainCtrls', ["NewsServices"])
	.controller('ArticlesCtrl', ['$scope', '$http', function($scope, $http){
			$scope.article = "";
			var alJazeera = 'al-jazeera-english';
			$http({
						method: 'GET',
						url: `https://newsapi.org/v1/articles?source=${alJazeera}&sortBy=latest&apiKey=${__env.NEWSAPI}`
			}).then(function success(response){
					console.log(response.data);
					$scope.article = response.data.articles[0];
			}).then(function success(response){
				console.log('next response')
			})
	}]);
