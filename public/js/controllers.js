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
				var chart = AmCharts.makeChart("chartdiv1", {
				    "theme": "light",
				    "type": "serial",
				    "dataProvider": [ {
				        "C": "Germany",
				        "score": $scope.germanySentiment
				    }, {
				        "C": "UK",
				        "score": $scope.gbSentiment
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
				    "valueInterval": .25,
				    "bands": [ {
				      "color":  "#cc4748",
				      "endValue": .75,
				      "startValue": 0
				    }, {
				      "color": "#fdd400",
				      "endValue": 1.25,
				      "startValue": .75
				    }, {
				      "color": "#84b761",
				      "endValue": 2,
				      "innerRadius": "95%",
				      "startValue": 1.25
				    } ],
				    "bottomText": "Sentiment Score",
				    "bottomTextYOffset": 20,
				    "endValue": 2
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
				          gaugeChart.arrows[ 0 ].setValue( $scope.gbSentiment + 1 );
				          gaugeChart.axes[ 0 ].setBottomText( ($scope.gbSentiment + 1) + " Sentiment" );
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
