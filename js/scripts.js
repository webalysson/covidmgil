//padrão
    (function($) {
        // dados
        // https://raw.githubusercontent.com/webalysson/covidmgil/master/dados/notifications_mgil.csv
        // http://localhost.com:8000/api/list/
        // atual
        // d3.csv('https://raw.githubusercontent.com/webalysson/covidmgil/master/dados/COVIDMGIL%20-%20Dados_Boletins.csv')
        // var dados = d3.csv('http://localhost.com:8000/api/list/');
        d3.json('https://covidmonsenhorgil.herokuapp.com/api/list/')
        .then(function(data){
            console.log(data);
            //gerarGraficoArea(data.slice(-30)); //data.slice(-15)
            gerarGraficoBarras(data.slice(-30));
            gerarGraficoPizza(data);
            //gerarGraficoObitos(data)
            //gerarGraficoRecuperados(data.slice(-30));
            //gerarGraficoConfirmados(data.slice(-30));
            gerarGraficoConfirmadosAndRecuperados(data.slice(-30));
            gerarGraficoNovosCasos(data.slice(-30));           
            ultimo_boletim = data[data.length-1]; //último registro de boletim cadastrado
            penultimo_boletim = data[data.length-2]; //penúltimo registro de boletim para cálculo de novos casos
            ultima_semana = data[data.length-8]; //ultima semana
            document.getElementById('notificados').innerHTML = ultimo_boletim["notificados"];
            document.getElementById('recuperados').innerHTML = ultimo_boletim["recuperados"]; //Desde 25/05
            document.getElementById('descartados').innerHTML = ultimo_boletim["descartados"];
            document.getElementById('confirmados').innerHTML = ultimo_boletim["confirmados"];
            document.getElementById('obitos').innerHTML = ultimo_boletim["obitos"];
            //calcular a quantidade em tratamento = confirmados - (recuperados+obitos)
            document.getElementById('em_tratamento').innerHTML = parseInt(ultimo_boletim["confirmados"])-
                                                                 (parseInt(ultimo_boletim["recuperados"])+
                                                                 parseInt(ultimo_boletim["obitos"]));
            //Inserir a informação na página inicial
            var novos_casos = 0;//(parseInt(ultimo_boletim["Confirmados"]))-(parseInt(penultimo_boletim["Confirmados"]));
            var ultima_semana = 0;//(parseInt(ultimo_boletim["Confirmados"]))-(parseInt(ultima_semana["Confirmados"]));

            var texto_info = "Atualização: " + ultimo_boletim["data"];
            texto_info += " | "+ novos_casos+" novos casos em relação ao boletim anterior";
            texto_info += " | "+ultima_semana+" na última semana";

            document.getElementById("info_atualizacao").innerHTML = texto_info;

        });

        d3.csv('https://raw.githubusercontent.com/webalysson/covidmgil/master/dados/COVIDMGIL%20-%20Bairros.csv')
        .then(function(data){
            gerarTabela(data);
        })

})(jQuery);
