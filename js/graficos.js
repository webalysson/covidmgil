class Grafico {
  list = []
  add(ctx, options) {
    this.list.push(new Chart(ctx, options))
    console.log('Gráfico Adicionado')
  }

  update(id, data, label, multiple_data = false) {
    // Título
    this.list[id].data.labels = label
    // Dados
    if (!multiple_data) {
      this.list[id].data.datasets[0].data = data
    } else {
      for (let i = 0; i < data.length; i++) {
        this.list[id].data.datasets[i].data = data[i];
      }
    }

    this.list[id].update()
  }
  clearAll() {
    for (var i = 0; i < this.list.length; i++) {
      this.list[i].clear()
      //this.list[i].destroy()
    }
  }
}

/* ---------------------------------------------------------------
 *               CONFIGURAÇÕES DOS GRÁFICOS
 * ---------------------------------------------------------------
*/
var ctx_confirmados = document.getElementById("grafico_confirmados_recuperados").getContext('2d');
var options_confirmados = {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
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
        data: []
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
        data: []
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
          maxTicksLimit: 100
        }
      }],
      yAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          }
        }],
    },
    legend: {
      display: true
    }
  }
};

var ctx_novos = document.getElementById("grafico_novos_casos").getContext('2d');
var options_novos = {
  type: 'line',
  data: {
    labels: [],
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
          maxTicksLimit: 200
        }
      }],
      yAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
};


var ctx_media_semanal = document.getElementById("grafico_media_semanal").getContext('2d');
var options_media_semanal = {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: "Média Semanal",
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
          maxTicksLimit: 200
        }
      }],
      yAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
};


var ctx_diario = document.getElementById("grafico_barras_notificados_descartados_diario").getContext('2d');
var options_diarios = {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: "Notificados",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
    },
    {
      label: "Descartados",
      backgroundColor: "green",
      borderColor: "rgba(11,156,49,1)",
    },
    {
      label: "Confirmados",
      backgroundColor: "rgba(244, 255, 87, 1)",
      borderColor: "rgba(11,156,49,1)",
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
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: true
    }
  }
}


var ctx_media_mensal = document.getElementById("grafico_media_mensal").getContext('2d');
var options_media_mensal = {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: "Média no mês",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
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
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: true
    }
  }
}


var ctx_novos_mes = document.getElementById("grafico_novos_mes").getContext('2d');
var options_novos_mes = {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: "Novos casos no mês",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
    },
    /*
    {
      label: "Descartados",
      backgroundColor: "green",
      borderColor: "rgba(11,156,49,1)",
    },
    {
      label: "Confirmados",
      backgroundColor: "rgba(244, 255, 87, 1)",
      borderColor: "rgba(11,156,49,1)",
    },*/
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
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: true
    }
  }
}


/*
var ctx_descartados = document.getElementById("grafico_barras_notificados_descartados").getContext('2d');
var options_descartados = {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: "Notificados",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
    },
    {
      label: "Descartados",
      backgroundColor: "green",
      borderColor: "rgba(11,156,49,1)",
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
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: true
    }
  }
};
*/
var ctx_pizza = document.getElementById("grafico_pizza").getContext('2d');
var options_pizza = {
  type: 'pie',
  data: {
    datasets: [{
      backgroundColor: ['#6c757d', '#ffc107', '#28a745', '#007bff'],
    }],
  },
};




/* ---------------------------------------------------------------
 *                    TABELA DE LOCALIDADES
 * ---------------------------------------------------------------
*/

// Gerar a tabela Modal
function gerarTabela(dadosMgil) {
  var casos = dadosMgil.map(function (d) { return d.localidade });
  var bairros = dadosMgil.map(function (d) { return d.registros });

  var corpoTabela = document.getElementById('tabela-bairros');
  function tabela() {
    // Tabela
    var tabela = document.createElement('table');
    tabela.className = "table";
    // Título
    var thead = tabela.appendChild(document.createElement('thead'));
    var trTitulo = thead.appendChild(document.createElement('tr'));
    var thCasos = trTitulo.appendChild(document.createElement('th'));
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
