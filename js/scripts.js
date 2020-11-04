// local
//url = 'http://localhost.com:8000/api/';
// produção    
url = 'https://covidmonsenhorgil.herokuapp.com/';

    (function($) {
        d3.json(url+'boletins_por_periodo/?periodo=30') .then(function(data){
            montar_graficos(data);
        });
})(jQuery);


function filtrar_periodo(data_periodo){
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: url+"boletins_por_periodo/",
        data: {periodo:data_periodo},
        dataType: "json",
        success: function (data) {
            //alert(data);
            montar_graficos(data);
        },
        error: function (result) {
            alert("Não foi possível obter os dados no momento.");
        }
    });
}


function filtrar_mes(mes_referencia){
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: url+"boletins_por_mes/",
        data: {mes:mes_referencia},
        dataType: "json",
        success: function (data) {
            //alert(data);
            montar_graficos(data);
        },
        error: function (result) {
            alert("Não foi possível obter os dados no momento.");
            console.log(result)
        }
    });
}


function montar_graficos(data){
        //formatar a data no padrão pt-BR
        data.map(function(d) {d.data = date_format(d.data)});
        //data.slice(-30) para considerar apenas os últimos 30  boletins
        gerarGraficoBarras(data);
        gerarGraficoPizza(data);
        //gerarGraficoRecuperados(data.slice(-30));
        //gerarGraficoConfirmados(data.slice(-30));
        gerarGraficoConfirmadosAndRecuperados(data);
        gerarGraficoNovosCasos(data);  
        //último registro de boletim cadastrado         
        ultimo_boletim = data[data.length-1]; 
        //penúltimo registro de boletim para cálculo de novos casos
        penultimo_boletim = data[data.length-2]; 
        //ultima semana
        ultima_semana = data[data.length-8]; 
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
        var novos_casos = (parseInt(ultimo_boletim["confirmados"]))-(parseInt(penultimo_boletim["confirmados"]));
        var ultima_semana = (parseInt(ultimo_boletim["confirmados"]))-(parseInt(ultima_semana["confirmados"]));

        var texto_info = "Atualização: " + ultimo_boletim["data"];
        texto_info += " | "+ novos_casos+" novos casos em relação ao boletim anterior";
        texto_info += " | "+ultima_semana+" na última semana";

        document.getElementById("info_atualizacao").innerHTML = texto_info;
}


function padrao(){
    d3.json(url+'/api/list/')
    .then(function(data){
        //formatar a data no padrão pt-BR
        data.map(function(d) {d.data = date_format(d.data)});
        //data.slice(-30) para considerar apenas os últimos 30  boletins
        gerarGraficoBarras(data);
        gerarGraficoPizza(data);
        //gerarGraficoRecuperados(data.slice(-30));
        //gerarGraficoConfirmados(data.slice(-30));
        gerarGraficoConfirmadosAndRecuperados(data);
        gerarGraficoNovosCasos(data);  
        //último registro de boletim cadastrado         
        ultimo_boletim = data[data.length-1]; 
        //penúltimo registro de boletim para cálculo de novos casos
        penultimo_boletim = data[data.length-2]; 
        //ultima semana
        ultima_semana = data[data.length-8]; 
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
        var novos_casos = (parseInt(ultimo_boletim["confirmados"]))-(parseInt(penultimo_boletim["confirmados"]));
        var ultima_semana = (parseInt(ultimo_boletim["confirmados"]))-(parseInt(ultima_semana["confirmados"]));

        var texto_info = "Atualização: " + ultimo_boletim["data"];
        texto_info += " | "+ novos_casos+" novos casos em relação ao boletim anterior";
        texto_info += " | "+ultima_semana+" na última semana";

        document.getElementById("info_atualizacao").innerHTML = texto_info;

    });

    d3.json(url+'/api/localidades/')
    .then(function(data){
        gerarTabela(data);
    })
}


function date_format(data){
    var date = Date.parse(data+"T00:00:00-0300");
    date = new Date(date);
    date = new Intl.DateTimeFormat('pt-BR').format(date); 
    return date
}