angular.module('MainCtrls', ['NewsServices'])

	.controller('MapsCtrl', ['$scope','CountriesFactory', function($scope, CountriesFactory){
		$scope.keyword = "Trump";
		$scope.search = function(){
			console.log($scope.searchTerm);
			$scope.keyword = $scope.searchTerm;
			mapUpdate();
		}

		function mapUpdate(){
			CountriesFactory.get({keyword: $scope.keyword}, function success(data){
				console.log('Countries success');
				console.log(data)
				$scope.germanySentiment = data.Germany;
				$scope.gbSentiment = data.GreatBritain;
				console.log($scope.sentiment);

				var map = AmCharts.makeChart( "chartdiv", {
					  "type": "map",
					  "theme": "light",
					  "dataProvider": {
					    "map": "worldHigh",
					    "zoomLevel": 3.5,
					    "zoomLongitude": 10,
					    "zoomLatitude": 52,
					    "areas": [{"title":"GreatBritain","id":"GB","color":"#67b7dc","customData": $scope.gbSentiment,"groupId":1},{"title":"Germany","id":"DE","color":"#67b7dc","customData": $scope.germanySentiment, "groupId":2}]
					  },
					  "areasSettings": {
					    "rollOverOutlineColor": "#000000",
					    "rollOverColor": "#CC0000",
					    "alpha": 0.8,
					    "unlistedAreasAlpha": 0.1,
					    "balloonText": "[[title]] has a US Sentiment value of [[customData]] about "+$scope.keyword
					  },
					  "legend": {
					    "width": "100%",
					    "marginRight": 27,
					    "marginLeft": 27,
					    "equalWidths": false,
					    "backgroundAlpha": 0.5,
					    "backgroundColor": "#FFFFFF",
					    "borderColor": "#ffffff",
					    "borderAlpha": 1,
					    "top": 450,
					    "left": 0,
					    "horizontalGap": 10,
					    "data": [ {
					      "title": "Super cool places",
					      "color": "#67b7dc"
					    }, {
					      "title": "That love stuff",
					      "color": "#ebdb8b"
					    }, {
					      "title": "thats awesome",
					      "color": "#83c2ba"
					    }, {
					      "title": "YEAAA",
					      "color": "#000000"
					    } ]
					  },
					  "export": {
					    "enabled": true
					  }
				});
			});
		}
		mapUpdate();
	}])

	.controller('ArticlesCtrl', ['$scope', 'ArticlesFactory', function($scope, ArticlesFactory){
			//var sources = ['al-jazeera-english', 'bbc-news', 'handelsblatt', 'spiegel-online', 'reuters', 'the-hindu', 'abc-news-au', 'the-new-york-times', 'the-times-of-india']

			ArticlesFactory.get(function success(data){
				console.log('api success')
			});
	}]);
