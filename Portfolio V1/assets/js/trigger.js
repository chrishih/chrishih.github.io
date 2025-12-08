/**
 * Set up charts data and settings
 */

var charts = {};
var chartConfig = {};

chartConfig.chart1 = {
  "type": "serial",
  "theme": "light",
  "startDuration": 1,
  "dataProvider": [{
    "country": "USA",
    "visits": 3025,
    "color": "#FF0F00"
  }, {
    "country": "China",
    "visits": 1882,
    "color": "#FF6600"
  }, {
    "country": "Japan",
    "visits": 1809,
    "color": "#FF9E01"
  }, {
    "country": "Germany",
    "visits": 1322,
    "color": "#FCD202"
  }, {
    "country": "UK",
    "visits": 1122,
    "color": "#F8FF01"
  }, {
    "country": "France",
    "visits": 1114,
    "color": "#B0DE09"
  }, {
    "country": "India",
    "visits": 984,
    "color": "#04D215"
  }, {
    "country": "Spain",
    "visits": 711,
    "color": "#0D8ECF"
  }, {
    "country": "Netherlands",
    "visits": 665,
    "color": "#0D52D1"
  }, {
    "country": "Russia",
    "visits": 580,
    "color": "#2A0CD0"
  }, {
    "country": "South Korea",
    "visits": 443,
    "color": "#8A0CCF"
  }, {
    "country": "Canada",
    "visits": 441,
    "color": "#CD0D74"
  }],
  "valueAxes": [{
    "axisAlpha": 0,
    "position": "left",
    "title": "Visitors from country"
  }],
  "graphs": [{
    "balloonText": "<b>[[category]]: [[value]]</b>",
    "colorField": "color",
    "fillAlphas": 0.9,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "visits"
  }],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "country",
  "categoryAxis": {
    "gridPosition": "start",
    "labelRotation": 45
  }

};

chartConfig.chart2 = {
  "type": "serial",
  "theme": "light",
  "startDuration": 1,
  "dataProvider": [{
    "country": "USA",
    "visits": 2025
  }, {
    "country": "China",
    "visits": 1882
  }, {
    "country": "Japan",
    "visits": 1809
  }, {
    "country": "Germany",
    "visits": 1322
  }, {
    "country": "UK",
    "visits": 1122
  }, {
    "country": "France",
    "visits": 1114
  }, {
    "country": "India",
    "visits": 984
  }, {
    "country": "Spain",
    "visits": 711
  }, {
    "country": "Netherlands",
    "visits": 665
  }, {
    "country": "Russia",
    "visits": 580
  }, {
    "country": "South Korea",
    "visits": 443
  }, {
    "country": "Canada",
    "visits": 441
  }, {
    "country": "Brazil",
    "visits": 395
  }],
  "valueAxes": [{
    "gridColor": "#FFFFFF",
    "gridAlpha": 0.2,
    "dashLength": 0
  }],
  "gridAboveGraphs": true,
  "startDuration": 1,
  "graphs": [{
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "visits"
  }],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "country",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0,
    "tickPosition": "start",
    "tickLength": 20
  }
};

chartConfig.chart3 = {
  "type": "serial",
  "theme": "light",
  "startDuration": 1,
  "legend": {
    "horizontalGap": 10,
    "maxColumns": 1,
    "position": "right",
    "useGraphSettings": true,
    "markerSize": 10
  },
  "dataProvider": [{
    "year": 2003,
    "europe": 2.5,
    "namerica": 2.5,
    "asia": 2.1,
    "lamerica": 0.3,
    "meast": 0.2,
    "africa": 0.1
  }, {
    "year": 2004,
    "europe": 2.6,
    "namerica": 2.7,
    "asia": 2.2,
    "lamerica": 0.3,
    "meast": 0.3,
    "africa": 0.1
  }, {
    "year": 2005,
    "europe": 2.8,
    "namerica": 2.9,
    "asia": 2.4,
    "lamerica": 0.3,
    "meast": 0.3,
    "africa": 0.1
  }],
  "valueAxes": [{
    "stackType": "regular",
    "axisAlpha": 0.3,
    "gridAlpha": 0
  }],
  "graphs": [{
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "Europe",
    "type": "column",
    "color": "#000000",
    "valueField": "europe"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "North America",
    "type": "column",
    "color": "#000000",
    "valueField": "namerica"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "Asia-Pacific",
    "type": "column",
    "color": "#000000",
    "valueField": "asia"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "Latin America",
    "type": "column",
    "color": "#000000",
    "valueField": "lamerica"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "Middle-East",
    "type": "column",
    "color": "#000000",
    "valueField": "meast"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "Africa",
    "type": "column",
    "color": "#000000",
    "valueField": "africa"
  }],
  "categoryField": "year",
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "gridAlpha": 0,
    "position": "left"
  }
};

chartConfig.chart4 = {
  "type": "serial",
  "theme": "light",
  "startDuration": 1,
  "autoMargins": false,
  "marginLeft": 30,
  "marginRight": 8,
  "marginTop": 10,
  "marginBottom": 26,

  "dataProvider": [{
    "year": 2009,
    "income": 23.5,
    "expenses": 18.1
  }, {
    "year": 2010,
    "income": 26.2,
    "expenses": 22.8
  }, {
    "year": 2011,
    "income": 30.1,
    "expenses": 23.9
  }, {
    "year": 2012,
    "income": 29.5,
    "expenses": 25.1
  }, {
    "year": 2013,
    "income": 30.6,
    "expenses": 27.2,
    "dashLengthLine": 5
  }, {
    "year": 2014,
    "income": 34.1,
    "expenses": 29.9,
    "dashLengthColumn": 5,
    "alpha": 0.2,
    "additional": "(projection)"
  }],
  "valueAxes": [{
    "axisAlpha": 0,
    "position": "left"
  }],
  "startDuration": 1,
  "graphs": [{
    "alphaField": "alpha",
    "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b> [[additional]]</span>",
    "dashLengthField": "dashLengthColumn",
    "fillAlphas": 1,
    "title": "Income",
    "type": "column",
    "valueField": "income"
  }, {
    "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b> [[additional]]</span>",
    "bullet": "round",
    "dashLengthField": "dashLengthLine",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "Expenses",
    "valueField": "expenses"
  }],
  "categoryField": "year",
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "tickLength": 0
  }
};

/**
 * Build first chart right away
 */

charts.chart1 = AmCharts.makeChart("chart1", chartConfig.chart1);

/**
 * Add code to handle scroll events and animation
 */

$(window).scroll(function() {
  for (var x in chartConfig) {
    if (undefined != charts[x])
      continue;
    var hT = $('#' + x).offset().top,
      hH = $('#' + x).outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    if (wS > (hT + hH - wH)) {
      charts[x] = AmCharts.makeChart(x, chartConfig[x]);
    }
  }
});