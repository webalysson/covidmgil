(function($) {
    //dados
    //https://raw.githubusercontent.com/webalysson/covidmgil/master/dados/notifications_mgil.csv
    d3.csv('https://raw.githubusercontent.com/webalysson/covidmgil/master/dados/COVIDMGIL%20-%20Dados_Boletins.csv')
    .then(function(data){
        gerarGaleiraDeImagens(data); //data.slice(-15)
    });

})(jQuery);