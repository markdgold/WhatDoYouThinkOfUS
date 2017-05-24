angular.module('MainCtrls', ['NewsServices'])
	.controller('ArticlesCtrl', ['$scope', '$http', 'ArticlesFactory', function($scope, $http, ArticlesFactory){
			$scope.allArticles = "";
			$scope.white = "white";
			var sources = ['al-jazeera-english', 'bbc-news', 'handelsblatt', 'spiegel-online', 'reuters', 'the-hindu', 'abc-news-au', 'the-new-york-times', 'the-times-of-india']
			var alJazeera = 'al-jazeera-english';


				ArticlesFactory.get(function success(data){
					$scope.allArticles=JSON.stringify(data);
					console.log('success', $scope.allArticles);
				});

			var map = AmCharts.makeChart( "chartdiv", {
			  "type": "map",
			  "theme": "light",
			  "dataProvider": {
			    "map": "worldHigh",
			    "zoomLevel": 3.5,
			    "zoomLongitude": 10,
			    "zoomLatitude": 52,
			    "areas": [ {
			        "title": "Austria",
			        "id": "AT",
			        "color": $scope.white,
			        "customData": '',
			        "groupId": "before2004"
			      }, {
			        "title": "Ireland",
			        "id": "IE",
			        "color": "#67b7dc",
			        "customData": "1973",
			        "groupId": "before2004"
			      }, {
			        "title": "Denmark",
			        "id": "DK",
			        "color": "#67b7dc",
			        "customData": "1973",
			        "groupId": "before2004"
			      }, {
			        "title": "Finland",
			        "id": "FI",
			        "color": "#67b7dc",
			        "customData": "1995",
			        "groupId": "before2004"
			      }, {
			        "title": "Sweden",
			        "id": "SE",
			        "color": "#67b7dc",
			        "customData": "1995",
			        "groupId": "before2004"
			      }, {
			        "title": "Great Britain",
			        "id": "GB",
			        "color": "#67b7dc",
			        "customData": "1973",
			        "groupId": "before2004"
			      }, {
			        "title": "Italy",
			        "id": "IT",
			        "color": "#67b7dc",
			        "customData": "1957",
			        "groupId": "before2000"
			      }, {
			        "title": "France",
			        "id": "FR",
			        "color": "#67b7dc",
			        "customData": "1957",
			        "groupId": "before2004"
			      }, {
			        "title": "Spain",
			        "id": "ES",
			        "color": "#67b7dc",
			        "customData": "1986",
			        "groupId": "before2004"
			      }, {
			        "title": "Greece",
			        "id": "GR",
			        "color": "#67b7dc",
			        "customData": "1981",
			        "groupId": "before2004"
			      }, {
			        "title": "Germany",
			        "id": "DE",
			        "color": "#67b7dc",
			        "customData": "1957",
			        "groupId": "before2004"
			      }, {
			        "title": "Belgium",
			        "id": "BE",
			        "color": "#67b7dc",
			        "customData": "1957",
			        "groupId": "before2004"
			      }, {
			        "title": "Luxembourg",
			        "id": "LU",
			        "color": "#67b7dc",
			        "customData": "1957",
			        "groupId": "before2004"
			      }, {
			        "title": "Netherlands",
			        "id": "NL",
			        "color": "#67b7dc",
			        "customData": "1957",
			        "groupId": "before2004"
			      }, {
			        "title": "Portugal",
			        "id": "PT",
			        "color": "#67b7dc",
			        "customData": "1986",
			        "groupId": "before2004"
			      }, {
			        "title": "Lithuania",
			        "id": "LT",
			        "color": "#ebdb8b",
			        "customData": "2004",
			        "groupId": "2004"
			      }, {
			        "title": "Latvia",
			        "id": "LV",
			        "color": "#ebdb8b",
			        "customData": "2004",
			        "groupId": "2004"
			      }, {
			        "title": "Czech Republic ",
			        "id": "CZ",
			        "color": "#ebdb8b",
			        "customData": "2004",
			        "groupId": "2004"
			      }, {
			        "title": "Slovakia",
			        "id": "SK",
			        "color": "#ebdb8b",
			        "customData": "2004",
			        "groupId": "2004"
			      }, {
			        "title": "Slovenia",
			        "id": "SI",
			        "color": "#ebdb8b",
			        "customData": "2004",
			        "groupId": "2004"
			      }, {
			        "title": "Estonia",
			        "id": "EE",
			        "color": "#ebdb8b",
			        "customData": "2004",
			        "groupId": "2004"
			      }, {
			        "title": "Hungary",
			        "id": "HU",
			        "color": "#ebdb8b",
			        "customData": "2004",
			        "groupId": "2004"
			      }, {
			        "title": "Cyprus",
			        "id": "CY",
			        "color": "#ebdb8b",
			        "customData": "2004",
			        "groupId": "2004"
			      }, {
			        "title": "Malta",
			        "id": "MT",
			        "color": "#ebdb8b",
			        "customData": "2004",
			        "groupId": "2004"
			      }, {
			        "title": "Poland",
			        "id": "PL",
			        "color": "#ebdb8b",
			        "customData": "2004",
			        "groupId": "2004"
			      }, {
			        "title": "Romania",
			        "id": "RO",
			        "color": "#83c2ba",
			        "customData": "2007",
			        "groupId": "2007"
			      }, {
			        "title": "Bulgaria",
			        "id": "BG",
			        "color": "#83c2ba",
			        "customData": "2007",
			        "groupId": "2007"
			      }, {
			        "title": "Croatia",
			        "id": "HR",
			        "color": "#db8353",
			        "customData": "2013",
			        "groupId": "2013"
			      },
			{
			        "title": "Croatia",
			        "id": "AU",
			        "color": "#db8353",
			        "customData": "2013",
			        "groupId": "2013"
			      },

			{
			        "title": "Russia",
			        "id": "US",
			        "color": "#db8323",
			        "customData": "THE DANCE",
			        "groupId": "20123"
			      }
			    ]
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

	}]);
