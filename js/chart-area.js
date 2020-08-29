// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

//dados previamente carregados e chamada esta function

function gerarGraficoArea(dadosMgil){
  //console.log(dadosMgil);
  // Gráfico Notificados
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
            maxTicksLimit: 45
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 1000,
            maxTicksLimit: 10
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

//grafico de casos confirmados
function gerarGraficoConfirmados(dadosMgil){
  //console.log(dadosMgil);
  var dadosMgil_Labels = dadosMgil.map(function(d) {return d.Data});
  var dadosMgil_Data = dadosMgil.map(function(d) {return d.Confirmados});
  
  var ctx = document.getElementById("grafico_confirmados");
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dadosMgil_Labels,
      datasets: [{
        label: "Confirmados",
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
            maxTicksLimit: 45
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 50,
            maxTicksLimit: 10
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


//grafico de casos confirmados e  recuperados
function gerarGraficoConfirmadosAndRecuperados(dadosMgil){
  var dadosMgil_Labels = dadosMgil.map(function(d) {return d.Data});
  var dadosMgil_Data_Confirmados = dadosMgil.map(function(d) {return d.Confirmados});
  var dadosMgil_Data_Recuperados = dadosMgil.map(function(d) {return d.Recuperados});
  
  var ctx = document.getElementById("grafico_confirmados_recuperados");
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dadosMgil_Labels,
      datasets: [{
        label: "Confirmados",
        lineTension: 0.3,
        backgroundColor: "rgba(247,202,24,0.3)",
        borderColor: "rgba(247,202,24,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(247,202,24,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(247,202,24,1)",
        pointHitRadius: 70,
        pointBorderWidth: 2,
        data: dadosMgil_Data_Confirmados,
      },
      //
      {
      label: "Recuperados",
      lineTension: 0.3,
      backgroundColor: "rgba(11,156,49,0.2)",
      borderColor: "rgba(11,156,49,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(11,156,49,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(11,156,49,1)",
      pointHitRadius: 70,
      pointBorderWidth: 2,
      data: dadosMgil_Data_Recuperados, 
      }     
      //
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
            maxTicksLimit: 45
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 500,
            maxTicksLimit: 9
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          }
        }],
      },
      legend: {
        display: true
      }
    }
  });

}


// Gráficos de Novos Casos diários
function gerarGraficoNovosCasos(dadosMgil){
  var dadosMgil_Labels = dadosMgil.map(function(d) {return d.Data});
  var dadosMgil_Confirmados = dadosMgil.map(function(d) {return d.Confirmados});
  
  var confirmados = dadosMgil_Confirmados.map(function (x) { 
    return parseInt(x, 10); 
  });

  dados_novos_casos = []
  dados_novos_casos.push(0);
  for(i=0; i<=confirmados.length; i++){
    dados_novos_casos.push(confirmados[i+1]-confirmados[i]);
  }

  var ctx = document.getElementById("grafico_novos_casos");
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dadosMgil_Labels,
      datasets: [{
        label: "Novos Casos",
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
        data: dados_novos_casos,
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
            maxTicksLimit: 30
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 20,
            maxTicksLimit: 4
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


// Gráficos de óbitos
function gerarGraficoObitos(dadosMgil){
  var dadosMgil_Labels = dadosMgil.map(function(d) {return d.Data});
  var dadosMgil_Data = dadosMgil.map(function(d) {return d.Obitos});
  
  var ctx = document.getElementById("grafico_obitos");
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dadosMgil_Labels,
      datasets: [{
        label: "Óbitos",
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
            maxTicksLimit: 45
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 25,
            maxTicksLimit: 10
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


// Gráficos de Recuperados
function gerarGraficoRecuperados(dadosMgil){
  var dadosMgil_Labels = dadosMgil.map(function(d) {return d.Data});
  var dadosMgil_Data = dadosMgil.map(function(d) {return d.Recuperados});
  
  var ctx = document.getElementById("grafico_recuperados");
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dadosMgil_Labels,
      datasets: [{
        label: "Recuperados",
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
            maxTicksLimit: 45
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 100,
            maxTicksLimit: 10
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

// Gerar a tabela Modal
function gerarTabela(dadosMgil) {
  var casos = dadosMgil.map(function(d) {return d.CASOS});
  var bairros = dadosMgil.map(function(d) {return d.BAIRRO});

  var corpoTabela = document.getElementById('tabela-bairros');
  function tabela() {
    // Tabela
    var tabela = document.createElement('table');
    tabela.className = "table";
    // Título
    var thead = tabela.appendChild(document.createElement('thead'));
    var trTitulo = thead.appendChild(document.createElement('tr'));
    var thCasos= trTitulo.appendChild(document.createElement('th'));
    thCasos.scope = "col";
    var thBairros = trTitulo.appendChild(document.createElement('th'));
    thBairros.scope = 'col';

    thCasos.append("Casos");
    thBairros.append("Bairros");

    var tbody = tabela.appendChild(document.createElement('tbody'));

    // Gerar Linha
    function tr(caso, bairro) {
      var tr = document.createElement('tr');
      
      var th = document.createElement('th');
      th.scope = "row"
      var td = document.createElement('td');
    
      th.innerHTML = caso;
      td.innerHTML = bairro;
      tr.appendChild(th);
      tr.appendChild(td);

      return tr;
    }

    // Adiciona Elemento linha a linha
    for (var i = 0; i < casos.length; i++) {
      tbody.appendChild(tr(casos[i], bairros[i]));
    }

    return tabela;
  }

  corpoTabela.appendChild(tabela());
}
