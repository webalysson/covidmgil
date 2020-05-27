(function($) {
    //dados
    //https://raw.githubusercontent.com/webalysson/covidmgil/master/dados/notifications_mgil.csv
    d3.csv('https://docs.google.com/spreadsheets/d/1pmHJzLZsE-7wnoXAlnBXmp1vKRx7B8K8j5xsnkH9jWk/export?format=csv&gid=295642056')
    .then(function(data){
        gerarGaleiraDeImagens(data); //data.slice(-15)
    });

})(jQuery);