// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

//dados previamente carregados e chamada esta function

function gerarGraficoBarras(dadosMgil){
    console.log(dadosMgil);
    var grafico_barras_labels = dadosMgil.map(function(d) {return d.Data});
    var grafico_barras_dados = dadosMgil.map(function(d) {return d.Suspeitos});

    // Bar Chart Example
    var grafico_barras = document.getElementById("grafico_barras");

    var myLineChart = new Chart(grafico_barras, {
      type: 'bar',
      data: {
        labels: grafico_barras_labels,
        datasets: [{
          label: "Suspeitos",
          backgroundColor: "rgba(2,117,216,1)",
          borderColor: "rgba(2,117,216,1)",
          data: grafico_barras_dados,
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'month'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 6
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 20,
              maxTicksLimit: 5
            },
            gridLines: {
              display: true
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });

}