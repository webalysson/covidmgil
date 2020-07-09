//padrão
    (function($) {
        //dados
        //https://raw.githubusercontent.com/webalysson/covidmgil/master/dados/notifications_mgil.csv
        d3.csv('https://raw.githubusercontent.com/webalysson/covidmgil/master/dados/COVIDMGIL%20-%20Dados_Boletins.csv')
        .then(function(data){
            gerarGraficoArea(data.slice(-30)); //data.slice(-15)
            gerarGraficoBarras(data.slice(-30));
            gerarGraficoPizza(data);
            //gerarGraficoObitos(data)
            gerarGraficoRecuperados(data.slice(-30));
            //gerarGraficoConfirmados(data.slice(-30));
            gerarGraficoConfirmadosAndRecuperados(data.slice(-30));
            ultimo_boletim = data[data.length-1]; //último registro de boletim cadastrado
            penultimo_boletim = data[data.length-2]; //penúltimo registro de boletim para cálculo de novos casos
            document.getElementById('notificados').innerHTML = ultimo_boletim["Notificados"];
            document.getElementById('recuperados').innerHTML = ultimo_boletim["Recuperados"]; //Desde 25/05
            document.getElementById('descartados').innerHTML = ultimo_boletim["Descartados"];
            document.getElementById('confirmados').innerHTML = ultimo_boletim["Confirmados"];
            document.getElementById('obitos').innerHTML = ultimo_boletim["Obitos"];
            //Inserir a informação na página inicial
            var novos_casos = (parseInt(ultimo_boletim["Confirmados"]))-(parseInt(penultimo_boletim["Confirmados"]))
            document.getElementById("info_atualizacao").innerHTML = "Boletim: " + ultimo_boletim["Data"] + "/2020  | Novos casos confirmados: "+novos_casos;
        });

        d3.csv('https://raw.githubusercontent.com/webalysson/covidmgil/master/dados/COVIDMGIL%20-%20Bairros.csv')
        .then(function(data){
            gerarTabela(data);
        })

})(jQuery);
