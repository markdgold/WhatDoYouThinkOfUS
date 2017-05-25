angular.module('MainCtrls', ['NewsServices'])
	.controller('MapsCtrl', ['$scope', function($scope){
			$scope.white = "white";

			var map = AmCharts.makeChart( "chartdiv", {
			  "type": "map",
			  "theme": "light",
			  "dataProvider": {
			    "map": "worldHigh",
			    "zoomLevel": 3.5,
			    "zoomLongitude": 10,
			    "zoomLatitude": 52,
			    "areas": [{"title":"Austria","id":"AT","color":$scope.white,"groupId":2},{"title":"Ireland","id":"IE","color":"#67b7dc","groupId":1},{"title":"Denmark","id":"DK","color":"#67b7dc","groupId":1},{"title":"Finland","id":"FI","color":"#67b7dc","groupId":1},{"title":"Sweden","id":"SE","color":"#67b7dc","groupId":1},{"title":"GreatBritain","id":"GB","color":"#67b7dc","groupId":1},{"title":"Italy","id":"IT","color":"#67b7dc","groupId":3},{"title":"Spain","id":"ES","color":"#67b7dc","groupId":3},{"title":"France","id":"FR","color":"#67b7dc","groupId":2},{"title":"Greece","id":"GR","color":"#67b7dc","groupId":3},{"title":"Germany","id":"DE","color":"#67b7dc","groupId":2},{"title":"Belgium","id":"BE","color":"#67b7dc","groupId":2},{"title":"Netherlands","id":"NL","color":"#67b7dc","groupId":2},{"title":"Luxembourg","id":"LU","color":"#67b7dc","groupId":2},{"title":"Portugal","id":"PT","color":"#67b7dc","groupId":3},{"title":"Lithuania","id":"LT","color":"#ebdb8b","groupId":1},{"title":"Latvia","id":"LV","color":"#ebdb8b","groupId":1},{"title":"CzechRepublic","id":"CZ","color":"#ebdb8b","groupId":4},{"title":"Slovakia","id":"SK","color":"#ebdb8b","groupId":4},{"title":"Slovenia","id":"SI","color":"#ebdb8b","groupId":3},{"title":"Estonia","id":"EE","color":"#ebdb8b","groupId":1},{"title":"Hungary","id":"HU","color":"#ebdb8b","groupId":4},{"title":"Cyprus","id":"CY","color":"#ebdb8b","groupId":3},{"title":"Malta","id":"MT","color":"#ebdb8b","groupId":3},{"title":"Poland","id":"PL","color":"#ebdb8b","groupId":4},{"title":"Romania","id":"RO","color":"#83c2ba","groupId":4},{"title":"Bulgaria","id":"BG","color":"#83c2ba","groupId":4},{"title":"Croatia","id":"HR","color":"#db8353","groupId":3}]
			  },
			  "areasSettings": {
			    "rollOverOutlineColor": "#000000",
			    "rollOverColor": "#CC0000",
			    "alpha": 0.8,
			    "unlistedAreasAlpha": 0.1,
			    "balloonText": "[[title]] Has a US confidence rating of [[customData]]"
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

				} );

	}])

	.controller('ArticlesCtrl', ['$scope', 'ArticlesFactory', function($scope, ArticlesFactory){
			$scope.allArticles = "";
			//var sources = ['al-jazeera-english', 'bbc-news', 'handelsblatt', 'spiegel-online', 'reuters', 'the-hindu', 'abc-news-au', 'the-new-york-times', 'the-times-of-india']


			ArticlesFactory.get(function success(data){
				$scope.allArticles=JSON.stringify(data);
				console.log('success', $scope.allArticles);
			});
	}]);
