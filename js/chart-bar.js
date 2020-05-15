// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

//dados previamente carregados e chamada esta function
var grafico_barras_labels;
var dados_suspeitos;
var dados_descartados;

function gerarGraficoBarras(dadosMgil){
    //console.log(dadosMgil);
    grafico_barras_labels = dadosMgil.map(function(d) {return d.Data});
    dados_suspeitos = dadosMgil.map(function(d) {return d.Suspeitos});
    dados_descartados = dadosMgil.map(function(d) {return d.Descartados});

    // Bar Chart
    var div_grafico_suspeitos = document.getElementById("grafico_barras_suspeitos");
    var div_grafico_descartados = document.getElementById("grafico_barras_descartados");
    grafico_barras_suspeitos(div_grafico_suspeitos);
    grafico_barras_descartados(div_grafico_descartados);

}


function grafico_barras_suspeitos(div_grafico_suspeitos){

  var myLineChart = new Chart(div_grafico_suspeitos, {
    type: 'bar',
    data: {
      labels: grafico_barras_labels,
      datasets: [{
        label: "Suspeitos",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: dados_suspeitos,
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
            maxTicksLimit: 40
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 35,
            maxTicksLimit: 7
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


function grafico_barras_descartados(div_grafico_descartados){

  var myLineChart = new Chart(div_grafico_descartados, {
    type: 'bar',
    data: {
      labels: grafico_barras_labels,
      datasets: [{
        label: "Descartados",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: dados_descartados,
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
            max: 20,
            maxTicksLimit: 7
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