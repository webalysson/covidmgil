// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

//dados previamente carregados e chamada esta function
var grafico_barras_labels;
//var dados_suspeitos;
var dados_descartados;
//var dados_confirmados;
var dados_notificados;

function gerarGraficoBarras(dadosMgil){
    //console.log(dadosMgil);
    grafico_barras_labels = dadosMgil.map(function(d) {return d.Data});
    //dados_suspeitos = dadosMgil.map(function(d) {return d.Suspeitos});
    dados_descartados = dadosMgil.map(function(d) {return d.Descartados});
    //dados_confirmados = dadosMgil.map(function(d) {return d.Confirmados});
    dados_notificados = dadosMgil.map(function(d) {return d.Notificados});
    // Bar Chart
    //var div_grafico_suspeitos = document.getElementById("grafico_barras_suspeitos");
    var div_grafico_notificados_descartados = document.getElementById("grafico_barras_notificados_descartados");
    //var div_grafico_novos_casos = document.getElementById("grafico_novos_casos");
    //grafico_barras_suspeitos(div_grafico_suspeitos);
    grafico_barras_notificados_descartados(div_grafico_notificados_descartados);
    //grafico_barras_novos_casos(div_grafico_novos_casos);
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
            maxTicksLimit: 45
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 10,
            maxTicksLimit: 10
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


function grafico_barras_notificados_descartados(div_grafico_notificados_descartados){

  var myLineChart = new Chart(div_grafico_notificados_descartados, {
    type: 'bar',
    data: {
      labels: grafico_barras_labels,
      datasets: [{
                label: "Notificados",
                backgroundColor: "rgba(2,117,216,1)",
                borderColor: "rgba(2,117,216,1)",
                data: dados_notificados,
              },
              {
                label: "Descartados",
                backgroundColor: "green",
                borderColor: "rgba(11,156,49,1)",
                data: dados_descartados,
              },              
            ],
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
            maxTicksLimit: 50
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 1000,
            maxTicksLimit: 10
          },
          gridLines: {
            display: true
          }
        }],
      },
      legend: {
        display: true
      }
    }
  });

}


function grafico_barras_novos_casos(div_grafico_novos_casos){

  var confirmados = dados_confirmados.map(function (x) { 
    return parseInt(x, 10); 
  });

  dados_novos_casos = []
  dados_novos_casos.push(0);
  for(i=0; i<=confirmados.length; i++){
    dados_novos_casos.push(confirmados[i+1]-confirmados[i]);
  }

  var myLineChart = new Chart(div_grafico_novos_casos, {
    type: 'line',
    data: {
      labels: grafico_barras_labels,
      datasets: [
                {
                  label: "Novos casos",
                  backgroundColor: "rgba(2,117,216,1)",
                  borderColor: "rgba(2,117,216,1)",
                  data: dados_novos_casos,
                },                
              ],
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
            maxTicksLimit: 30
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 20,
            maxTicksLimit: 8
          },
          gridLines: {
            display: true
          }
        }],
      },
      legend: {
        display: true
      }
    }
  });

}