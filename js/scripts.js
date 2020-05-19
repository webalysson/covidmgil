//padrão
    (function($) {
        //dados
        //https://docs.google.com/spreadsheets/d/1pmHJzLZsE-7wnoXAlnBXmp1vKRx7B8K8j5xsnkH9jWk/export?format=csv&gid=295642056
        //d3.csv('https://raw.githubusercontent.com/webalysson/covidmgil/master/dados/notifications_mgil.csv')
        d3.csv('https://docs.google.com/spreadsheets/d/1pmHJzLZsE-7wnoXAlnBXmp1vKRx7B8K8j5xsnkH9jWk/export?format=csv&gid=295642056')
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
