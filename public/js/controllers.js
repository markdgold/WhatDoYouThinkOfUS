angular.module('MainCtrls', ['NewsServices'])

	.controller('MapsCtrl', ['$scope','CountriesFactory', function($scope, CountriesFactory){
		$scope.keyword = "Manchester";
		$scope.search = function(){
			console.log($scope.searchTerm);
			$scope.keyword = $scope.searchTerm;
			mapUpdate();
		};

		function mapUpdate(){
			CountriesFactory.get({keyword: $scope.keyword}, function success(data){
				console.log('Countries success');
				console.log(data);
				console.log(data.UnitedStates.average)
				$scope.germanySentiment = data.Germany.average;
				$scope.germanyArticles = data.Germany.articles;
				$scope.gbSentiment = data.GreatBritain.average;
				$scope.gbArticles = data.GreatBritain.articles;
				$scope.usSentiment = data.UnitedStates.average;
				$scope.usArticles = data.UnitedStates.articles;

				$scope.totalSentiment = 0;
				$scope.numberSourcesWithSentiment = 0;
				if($scope.germanySentiment!==null){
					$scope.totalSentiment += $scope.germanySentiment;
					$scope.numberSourcesWithSentiment++;
				}
				if($scope.gbSentiment!==null){
					$scope.totalSentiment += $scope.gbSentiment;
					$scope.numberSourcesWithSentiment++;
				}
				if($scope.usSentiment!==null){
					$scope.totalSentiment += $scope.usSentiment;
					$scope.numberSourcesWithSentiment++;
				}

				$scope.averageTotalSentiment = $scope.totalSentiment/$scope.numberSourcesWithSentiment;
				console.log($scope.averageTotalSentiment);

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
								 "score": $scope.averageTotalSentiment

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
				var gaugeChartUk = AmCharts.makeChart( "chartdiv2", {
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
				      // "innerRadius": "95%",
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
				var gaugeChartGermany = AmCharts.makeChart( "chartdiv3", {
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
				      // "innerRadius": "95%",
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
				var gaugeChartUs = AmCharts.makeChart( "chartdiv4", {
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
				      // "innerRadius": "95%",
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
				setInterval( randomValueUk, 2000 );
				setInterval( randomValueGermany, 2000 );
				setInterval( randomValueUs, 2000 );

				// set random value
				function randomValueUk() {
				  if ( gaugeChartUk ) {
				    if ( gaugeChartUk.arrows ) {
				      if ( gaugeChartUk.arrows[ 0 ] ) {
				        if ( gaugeChartUk.arrows[ 0 ].setValue ) {
				          gaugeChartUk.arrows[ 0 ].setValue(($scope.gbSentiment + 1) *50);
				          gaugeChartUk.axes[ 0 ].setBottomText($scope.gbSentiment + " Sentiment" );
				        }
				      }
				    }
				  }
				}
				function randomValueGermany() {
				  if ( gaugeChartGermany ) {
				    if ( gaugeChartGermany.arrows ) {
				      if ( gaugeChartGermany.arrows[ 0 ] ) {
				        if ( gaugeChartGermany.arrows[ 0 ].setValue ) {
				          gaugeChartGermany.arrows[ 0 ].setValue(($scope.germanySentiment + 1) *50);
				          gaugeChartGermany.axes[ 0 ].setBottomText($scope.germanySentiment + " Sentiment" );
				        }
				      }
				    }
				  }
				}
				function randomValueUs() {
				  if ( gaugeChartUs ) {
				    if ( gaugeChartUs.arrows ) {
				      if ( gaugeChartUs.arrows[ 0 ] ) {
				        if ( gaugeChartUs.arrows[ 0 ].setValue ) {
				          gaugeChartUs.arrows[ 0 ].setValue(($scope.usSentiment + 1) *50);
				          gaugeChartUs.axes[ 0 ].setBottomText($scope.usSentiment + " Sentiment" );
				        }
				      }
				    }
				  }
				}

			})};
$('.box-wrapper').each(function(index, element) {

    setTimeout(function(){
        element.classList.remove('loading');
    }, index * 500);

});
		mapUpdate();
	}])

	.controller('ArticlesCtrl', ['$scope', 'ArticlesFactory', function($scope, ArticlesFactory){
			//var sources = ['al-jazeera-english', 'bbc-news', 'handelsblatt', 'spiegel-online', 'reuters', 'the-hindu', 'abc-news-au', 'the-new-york-times', 'the-times-of-india']

			ArticlesFactory.get(function success(data){
				console.log('api success')
			});
	}]);
