var chart = AmCharts.makeChart("chartdiv3", {
    "theme": "light",
    "type": "serial",
    "dataProvider": [{
        "title": 2005,
        "score": 23.5
    }, {
       "title": 2005,
        "score": 23.5
    }, {
         "title": 2005,
        "score": 23.5
    }, {
         "title": 2005,
        "score": 23.5
    }, {
         "title": 2005,
        "score": 23.5
    }],
    "valueAxes": [{
        "title": "Sentiment score -1 to 1"
    }],
    "graphs": [{
        "balloonText": "Income in [[category]]:[[value]]",
        "fillAlphas": 1,
        "lineAlpha": 0.2,
        "title": "Income",
        "type": "column",
        "valueField": "income"
    }],
    "depth3D": 20,
    "angle": 30,
    "rotate": true,
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "fillAlpha": 0.05,
        "position": "left"
    },
    "export": {
    	"enabled": true
     }
});
