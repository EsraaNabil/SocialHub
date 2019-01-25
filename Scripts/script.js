$(document).ready(function(){
  /////////////////// doughnut chart ////////////////
  anychart.onDocumentReady(function () {
    //create data
    var chart = anychart.pie([
      {x: "Positive", value: 15,
        normal:  {fill: "#6ab04d"},
        hovered: {
          fill: "#6ab04d",
          outline: {
              enabled: false
          }
        },legendItem:{iconType: "circle"}
      },
      {x: "Netural", value: 9,
        normal:  {fill: "#f1c40f"},
        hovered: {
          fill: "#f1c40f",
          outline: {
              enabled: false
          }
        },legendItem:{iconType: "circle"}
      },
      {x: "Negative", value: 6,
        normal:  {fill: "#b7143f"},
        hovered: {
          fill: "#b7143f",
          outline: {
              enabled: false
          }
        },legendItem:{iconType: "circle"}
      }
    ]);

    // set the label as the center content
    var label = anychart.standalones.label();
    label.text("");
    label.width("100%");
    label.height("100%");
    label.adjustFontSize(true);
    label.fontColor("#60727b");
    label.hAlign("right");
    label.vAlign("middle");
    // set the position of labels
    var labels = chart.labels();
    labels.position("outside");
    // configure the labels: font,color
    labels.fontColor("#000000");

    //chartFunctions
    chart.overlapMode(true);
    chart.insideLabelsOffset("-75%");
    chart.center().content(label);
    chart.innerRadius("65%");
    chart.connectorStroke(false);
    chart.legend().position('right').itemsLayout('vertical').align('bottom').maxWidth(95);
    chart.minWidth('380');

    chart.container("container");
    chart.draw();
  });

  //////////////////////////////// pie chart //////////////////////////////////////
  anychart.onDocumentReady(function () {
    // create data
    var data = [
      {x: "Positive", value: 56.2,
        normal:  {fill: "#6ab04d"},
        hovered: {
          fill: "#6ab04d",
          outline: {
              enabled: false
          }
        },legendItem:{iconType: "circle"}
      },
      {x: "Netural", value: 28.1, state:"selected",
        normal:  {fill: "#f1c40f"},
        hovered: {
          fill: "#f1c40f",
          outline: {
              enabled: false
          }
        },legendItem:{iconType: "circle"}
      },
      {x: "Negative", value: 9.4, state:"selected",
        normal:  {fill: "#b7143f"},
        hovered: {
          fill: "#b7143f",
          outline: {
              enabled: false
          }
        },legendItem:{iconType: "circle"}
      }
    ];

    // create a chart and set the data
    var chart = anychart.pie(data);
    chart.startAngle(-40);
    chart.connectorStroke(false);
    chart.legend().position('right').itemsLayout('vertical').align('bottom').maxWidth(95);
    chart.minWidth('380');

    // set the position of labels
    var labels = chart.labels();
    labels.position("outside");

    chart.container("pieChart");
    chart.draw();
  });

  /////////////////////////////////// line chart /////////////////////////////////
  anychart.onDocumentReady(function () {
    //create data
    var dataSet = anychart.data.set([
        ['0', 0, 0],
        ['1', 1200,2000],
        ['2', 4000, 3000],
        ['3', 2000, 1500],
        ['4', 2999, 2000],
        ['5', 1400, 3500],
        ['6', 1000, 1800],
        ['7', 1200, 900],
        ['8', 800, 500]
    ]);

    var data1 = dataSet.mapAs({x: 0, value: 1});
    var data2 = dataSet.mapAs({x: 0, value: 2});

    var chart = anychart.line();
    var series1;
    series1 = chart.line(data1);
    series1.name('Posts');
    series1.hovered().markers(true);
    series1.normal().stroke("#0c2462");
    series1.hovered().stroke("#0c2462", 2);
    series1.selected().stroke("#0c2462", 4);
    series1.legendItem().iconType('circle');
    series1.markers(true);

    var series2;
    series2 = chart.line(data2);
    series2.name('Comments');
    series2.hovered().markers(true); 
    series2.normal().stroke('#1f3799');
    series2.hovered().stroke("#1f3799", 2);
    series2.selected().stroke("#1f3799", 4);
    series2.legendItem().iconType('circle');
    series2.markers(true);

    chart.legend(true);
    chart.legend().position('right').itemsLayout('vertical').align("bottom").margin().left(60);
    chart.legend().maxWidth(170);
    chart.padding().left(15);
    chart.xGrid(true);
    chart.yGrid(true);
    chart.crosshair(true);
    chart.yAxis().enabled(false);
    chart.xAxis().enabled(false);
    chart.yGrid(true).xGrid(true).xMinorGrid(true).yMinorGrid(true);

    //logScale
    var logScale = anychart.scales.log();
    logScale.minimum(1);
    chart.xScale(logScale);


    chart.animation(true);
    chart.title('');
    chart.minWidth('350');

    chart.container('posts');
    chart.draw();
  });


  anychart.onDocumentReady(function () {
    //create data
    var dataSet = anychart.data.set([
        ['0', 0, 0, 0],
        ['1', 1200,2000,800],
        ['2', 4000, 3000,2000],
        ['3', 2000, 1500,1200],
        ['4', 2999, 2000,2499],
        ['5', 1400, 3500,900],
        ['6', 1000, 1800,500],
        ['7', 1200, 900,700],
        ['8', 800, 500,300]
    ]);

    var data1 = dataSet.mapAs({x: 0, value: 1});
    var data2 = dataSet.mapAs({x: 0, value: 2});
    var data3 = dataSet.mapAs({x: 0, value: 3});

    var chart = anychart.line();
    var series1;
    series1 = chart.line(data1);
    series1.name('Positive');
    series1.hovered().markers(true);
    series1.normal().stroke("#6ab04d");
    series1.hovered().stroke("#6ab04d", 2);
    series1.selected().stroke("#6ab04d", 4);
    series1.legendItem().iconType('circle');
    series1.markers(true);

    var series2;
    series2 = chart.line(data2);
    series2.name('Netural');
    series2.hovered().markers(true); 
    series2.normal().stroke('#f1c40f');
    series2.hovered().stroke("#f1c40f", 2);
    series2.selected().stroke("#f1c40f", 4);
    series2.legendItem().iconType('circle');
    series2.markers(true);

    var series3;
    series3 = chart.line(data3);
    series3.name('Negative');
    series3.hovered().markers(true); 
    series3.normal().stroke('#b7143f');
    series3.hovered().stroke("#b7143f", 2);
    series3.selected().stroke("#b7143f", 4);
    series3.legendItem().iconType('circle');
    series3.markers(true);

    chart.legend(true);
    chart.legend().position('right').itemsLayout('vertical').align("bottom").margin().left(60);
    chart.padding().left(20);
    chart.xGrid(true);
    chart.yGrid(true);
    chart.crosshair(true);
    chart.yAxis().enabled(false);
    chart.xAxis().enabled(false);
    chart.yGrid(true).xGrid(true).xMinorGrid(true).yMinorGrid(true);
    chart.minWidth('350');

    //logScale
    var logScale = anychart.scales.log();
    logScale.minimum(1);
    chart.xScale(logScale);

    // Enable animation.
    chart.animation(true);
    chart.title('');
    
    chart.container('chartContainer');
    chart.draw();
  });

  ///////////////// Map //////////////////////
  anychart.onDocumentReady(function () {

    var map = anychart.map(); 
    map.geoData(anychart.maps.world_source);

    var dataSet = anychart.data.set([
    {'id':	'CA'	, 'value':	89	},
    {'id':	'BR'	, 'value':	16	},
    {'id':	'RU'	, 'value':	25	}
    ]);

    series = map.choropleth(dataSet);

    map.crs("robinson");
    map.container("map");
    
    series.fill({
      src: "./images/map.png"
    });
    series.hovered('#1f3799');

    map.draw();
  });
})