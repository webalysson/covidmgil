//padrão
    (function($) {
        //dados
        //https://raw.githubusercontent.com/webalysson/covidmgil/master/dados/notifications_mgil.csv
        d3.csv('https://doc-04-00-sheets.googleusercontent.com/export/2029omrg88826mq40ne5sj76ag/a4u75go9a1evldv3bicstqpl64/1593521560000/100387245204317262883/113622846726710193663/1pmHJzLZsE-7wnoXAlnBXmp1vKRx7B8K8j5xsnkH9jWk?format=csv&id=1pmHJzLZsE-7wnoXAlnBXmp1vKRx7B8K8j5xsnkH9jWk&gid=295642056&dat=AMvwolYzl6qL9P3uwo0nlf4hz-kK6jvPUfJ0EC7jYx6jBMQTcS8hT7UU0s4AgjBixWcq4moLZsAvdojzVtxoQFzizmjavTokVm6o20ZoO5xo6EiUboOjQgtwjL2WEUsq1z0jrXANjCade2CvCLotG9OE9SVcZpY__AbfFld6mK7T8pKygkhyEsm3XFbWWR59GwbJ07HX3D4Vmr5D47xhuEQ6jC4z40bpG63kr-L1e3ky-O0TZK6OQU3dDTAkWe8noOD9gARpT1qBf2OVdSTLjaCD7dc--kKShrHTYVTOO2sA952QlesikmYaSUhw2CVsjSBydgkAQysYJ1dTa3Z-WjEKqx0YQTPpW0cxt7VxG1dqzVQn5kv61mNjtNHLpyM-ktSBN9Yt_8fVzmrvL472MkVQIZ5R6wNkbBd-mgHV146CljHhjmMIvvkAHNclYLGXMYhlHK2i3ySmvaBuwUYvKg5aossGcTUzJMKee1b4O6mw8I2xtVIjVPYXcyV2sZ-dBI3cFYLTnfsGTxktmYo1qWDUZ3RDprQcHqjq0L-V_-lINCNYeLXKqhWKi0Mma65dkT4_JrcaptoTMOz1Ng5RB4Q6WU5SUEYdZ6P64yGmuLao61gFE_2ATr8U1GqTi5JtLAMDOPSMJ3RW5OVJES4ZzNruf8kW2jLD0JZIywl06GygFA5IaugP2MlMJLyEQCn_7LaeSPQlbbHZ5CE_pPsBK91XzoJ-Z1M7')
        .then(function(data){
            gerarGraficoArea(data.slice(-30)); //data.slice(-15)
            gerarGraficoBarras(data.slice(-30));
            gerarGraficoPizza(data);
            //gerarGraficoObitos(data)
            gerarGraficoRecuperados(data.slice(-30));
            //gerarGraficoConfirmados(data.slice(-30));
            gerarGraficoConfirmadosAndRecuperados(data.slice(-30));
            ultimo_boletim = data[data.length-1]; //pegar o último registro de boletim cadastrado
            document.getElementById('notificados').innerHTML = ultimo_boletim["Notificados"];
            document.getElementById('recuperados').innerHTML = ultimo_boletim["Recuperados"]; //Desde 25/05
            document.getElementById('descartados').innerHTML = ultimo_boletim["Descartados"];
            document.getElementById('confirmados').innerHTML = ultimo_boletim["Confirmados"];
            document.getElementById('obitos').innerHTML = ultimo_boletim["Obitos"];
            //Inserir a informação na página inicial
            document.getElementById("info_atualizacao").innerHTML = "Último boletim: " + ultimo_boletim["Data"] + "/2020";
        });

        d3.csv('https://docs.google.com/spreadsheets/d/1pmHJzLZsE-7wnoXAlnBXmp1vKRx7B8K8j5xsnkH9jWk/export?format=csv&id=1pmHJzLZsE-7wnoXAlnBXmp1vKRx7B8K8j5xsnkH9jWk&gid=155227802')
        .then(function(data){
            gerarTabela(data);
        })

})(jQuery);
