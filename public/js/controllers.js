angular.module('MainCtrls', ['NewsServices'])
	.controller('ArticlesCtrl', ['$scope', '$http', 'ArticlesFactory', function($scope, $http, ArticlesFactory){
			$scope.allArticles = [];
			var sources = ['al-jazeera-english', 'bbc-news', 'handelsblatt', 'spiegel-online', 'reuters', 'the-hindu', 'abc-news-au', 'the-new-york-times', 'the-times-of-india']
			var alJazeera = 'al-jazeera-english';

		 sources.forEach(source=>{
			for(var i=0; i < 5; i++){
				ArticlesFactory.get({source: sources[2], number: i}, function success(data){
					$scope.allArticles.push(data);
					console.log('success', $scope.allArticles);
				});
			}
		})
	}]);
