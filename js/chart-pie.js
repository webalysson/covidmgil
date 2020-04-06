// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

function gerarGraficoPizza(dadosMgil){

  //console.log(dadosMgil);
  var dadosMgil_Labels = dadosMgil.map(function(d) {return d.Data});
  var dadosMgil_Data = dadosMgil.map(function(d) {return d.Notificados});

  var valores = [
      dadosMgil[dadosMgil.length-1].Notificados,
      dadosMgil[dadosMgil.length-1].Confirmados,
      dadosMgil[dadosMgil.length-1].Suspeitos,
      dadosMgil[dadosMgil.length-1].Descartados
    ];

  // Pie Chart Example
  var grafico_pizza = document.getElementById("grafico_pizza");
  var myPieChart = new Chart(grafico_pizza, {
    type: 'pie',
    data: {
      labels: ["Notificados", "Confirmados", "Suspeitos", "Descartados"],
      datasets: [{
        data: valores, //[12.21, 15.58, 11.25, 8.32],
        backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
      }],
    },
  });


}