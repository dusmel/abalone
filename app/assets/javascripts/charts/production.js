var ProductionChart = function(element) {
  this.element = element;
  this.chart = Highcharts.chart('chart', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Production Chart'
    }
  });
};
