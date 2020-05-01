// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

//dados previamente carregados e chamada esta function

function gerarGraficoArea(dadosMgil){
  //console.log(dadosMgil);
  var dadosMgil_Labels = dadosMgil.map(function(d) {return d.Data});
  var dadosMgil_Data = dadosMgil.map(function(d) {return d.Notificados});
  
  var ctx = document.getElementById("grafico_area");
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dadosMgil_Labels,
      datasets: [{
        label: "Noticados",
        lineTension: 0.3,
        backgroundColor: "rgba(2,117,216,0.2)",
        borderColor: "rgba(2,117,216,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(2,117,216,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: dadosMgil_Data,
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'Data'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 20
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 15,
            maxTicksLimit: 7
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });

}