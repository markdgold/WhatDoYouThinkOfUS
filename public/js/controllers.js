angular.module('MainCtrls', ['NewsServices'])

	.controller('MapsCtrl', ['$scope','CountriesFactory', function($scope, CountriesFactory){
		$scope.keyword = "Trump";
		$scope.search = function(){
			console.log($scope.searchTerm);
			$scope.keyword = $scope.searchTerm;
			mapUpdate();
		};

		function mapUpdate(){
			CountriesFactory.get({keyword: $scope.keyword}, function success(data){
				console.log('Countries success');
				console.log(data);
				$scope.germanySentiment = data.Germany;
				$scope.gbSentiment = data.GreatBritain;
				$scope.usSentiment = data.UnitedStates;
				$scope.totalSentiment = (data.Germany + data.GreatBritain+ data.UnitedStates)/3;
				console.log($scope.totalSentiment);

				var map = AmCharts.makeChart( "chartdiv", {
					  "type": "map",
					  "theme": "light",
					  "dataProvider": {
					    "map": "worldHigh",
					    "zoomLevel": 3.5,
					    "zoomLongitude": 10,
					    "zoomLatitude": 52,
					    "areas": [{"title":"UnitedStates","id":"US","color":"blue","customData": $scope.usSentiment,"groupId":3},{"title":"GreatBritain","id":"GB","color":"red","customData": $scope.gbSentiment,"groupId":1},{"title":"Germany","id":"DE","color":"green","customData": $scope.germanySentiment, "groupId":2}]
					  },
					  "areasSettings": {
					    "rollOverOutlineColor": "#000000",
					    "rollOverColor": "#CC0000",
					    "alpha": 0.8,
					    "unlistedAreasAlpha": 0.1,
					    "balloonText": "[[title]] has a Sentiment value of [[customData]] about "+$scope.keyword
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
					  },
					  "export": {
					    "enabled": true
					  }
				});
				var chart = AmCharts.makeChart("chartdiv1", {
				    "theme": "light",
				    "type": "serial",
				    "dataProvider": [ {
				        "C": "Germany",
				        "score": $scope.germanySentiment
				    }, {
				        "C": "UK",
				        "score": $scope.gbSentiment
				    }, {
								"C": "US",
								"score": $scope.usSentiment

						}, {
								"C": "Composite",
								 "score": $scope.totalSentiment

						}],
				    "valueAxes": [{
				        "title": "Sentiment Score -1 to 1"
				    }],
				    "graphs": [{
				        "balloonText": "Sentiment Score [[value]]",
				        "fillAlphas": 1,
				        "lineAlpha": 0.2,
				        "title": "C",
				        "type": "column",
				        "valueField": "score"
				    }],
				    "depth3D": 80,
				    "angle": 30,
				    "rotate": true,
				    "categoryField": "C",
				    "categoryAxis": {
				        "gridPosition": "start",
				        "fillAlpha": 0.05,
				        "position": "left"
				    },
				    "export": {
				    	"enabled": true
				     }
				});
				var gaugeChart = AmCharts.makeChart( "chartdiv2", {
				  "type": "gauge",
				  "theme": "light",
				  "axes": [ {
				    "axisThickness": 1,
				    "axisAlpha": 0.2,
				    "tickAlpha": 0.2,
				    "valueInterval": 20,
				    "bands": [ {
				      "color":  "#cc4748",
				      "endValue": 33.333,
				      "startValue": 0
				    }, {
				      "color": "#fdd400",
				      "endValue": 66.666,
				      "startValue": 33.333
				    }, {
				      "color": "#84b761",
				      "endValue": 100,
				      "innerRadius": "95%",
				      "startValue": 66.6666
				    } ],
				    "bottomText": "Sentiment Score",
				    "bottomTextYOffset": 20,
				    "endValue": 100
				  } ],
				  "arrows": [ {} ],
				  "export": {
				    "enabled": true
				  }
				});

				setInterval( randomValue, 2000 );

				// set random value
				function randomValue() {
				  if ( gaugeChart ) {
				    if ( gaugeChart.arrows ) {
				      if ( gaugeChart.arrows[ 0 ] ) {
				        if ( gaugeChart.arrows[ 0 ].setValue ) {
				          gaugeChart.arrows[ 0 ].setValue(($scope.gbSentiment + 1) *50);
				          gaugeChart.axes[ 0 ].setBottomText($scope.gbSentiment + " Sentiment" );
				        }
				      }
				    }
				  }
				}
			})};

		mapUpdate();
	}])

	.controller('ArticlesCtrl', ['$scope', 'ArticlesFactory', function($scope, ArticlesFactory){
			//var sources = ['al-jazeera-english', 'bbc-news', 'handelsblatt', 'spiegel-online', 'reuters', 'the-hindu', 'abc-news-au', 'the-new-york-times', 'the-times-of-india']

			ArticlesFactory.get(function success(data){
				console.log('api success')
			});
	}]);
