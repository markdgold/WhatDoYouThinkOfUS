angular.module('MainCtrls', ['NewsServices'])
	.controller('ArticlesCtrl', ['$scope', '$http', 'ArticlesFactory', 'SentimentFactory', function($scope, $http, ArticlesFactory, SentimentFactory){
			$scope.article = {};
			$scope.sentiment = {};
			var alJazeera = 'al-jazeera-english';
			/*$http({
						method: 'GET',
						url: `https://newsapi.org/v1/articles?source=${alJazeera}&sortBy=latest&apiKey=${__env.NEWSAPI}`
			}).then(function success(response){
					$scope.article = response.data.articles[0];


			});*/
			ArticlesFactory.get({source: alJazeera}, function success(data){
				$scope.article = data.articles[0];

			});
			SentimentFactory.get({url: 'http://www.aljazeera.com/news/2017/05/uk-police-confirmed-fatalities-manchester-concert-170522230211269.html'}, function success(data){
				console.log('sentimentfact data', data.sentiment.document);
				$scope.sentiment = data.sentiment.document;
			})


	}])


