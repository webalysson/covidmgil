//padrão
    (function($) {

        //dados
        d3.csv('https://raw.githubusercontent.com/webalysson/covid19/master/notifications_mgil.csv')
        .then(function(data){
            gerarGraficoArea(data);
            gerarGraficoBarras(data);
            gerarGraficoPizza(data);
            document.getElementById('notificados').innerHTML=data[data.length-1].Notificados;
            document.getElementById('suspeitos').innerHTML=data[data.length-1].Suspeitos;
            document.getElementById('descartados').innerHTML=data[data.length-1].Descartados;
            document.getElementById('confirmados').innerHTML=data[data.length-1].Confirmados;
        });

})(jQuery);
