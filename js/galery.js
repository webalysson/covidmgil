// Exemplo de funcionamento
// var imageArray = ["1", "2", "3"];
// var imageArrayContainer = document.getElementById("galeria");

// function criarArrayDeImagens() {
//     var imagem = document.createElement("img");
//     imagem.src = "https://insider.directv.com/wp-content/uploads/2012/07/nemo_big.jpg";
//     imagem.width = "250";
//     imagem.style.margin = "5px";
//     return imagem;
// }

// imageArray.forEach(imagem => {
//     imageArrayContainer.appendChild(criarArrayDeImagens(imagem));
// });

function gerarGaleiraDeImagens(dadosMgil) {
    var arrayDeImagens = dadosMgil.map(function(d) {return d.Boletin});
    var dataBoletim = dadosMgil.map(function(d) {return d.Data});
    var containerImagem = document.getElementById("galeria");
    var limite = 12 // Limite de imagens

    function criarImagens(arrayDeImagens, dataBoletim) {
        // Div de container de imagerm
        var div = document.createElement("div");
        div.className = "col-sm-2 col-md-2 mb-2";

        // Link de referencia para ser usado no JS para chamar lightbox
        var a = document.createElement("a");
        a.className = "col-sm-4";
        a.href = arrayDeImagens;
        a.dataset.toggle = "lightbox";
        a.dataset.gallery = "example-gallery";

        // Imagem que será mostrada
        var imagem = document.createElement("img");
        imagem.className = "img-fluid";
        imagem.src = arrayDeImagens;
        imagem.width = 200;
        imagem.height = 200;

        div.appendChild(a);
        a.append(imagem);

        return div;
    }
 
    // Nova função para apresentar apenas 12 imagens
    function mostrarImagens() {
        var anterior = limite - 12
        console.log(limite);
        console.log(anterior); 

            if (limite >= arrayDeImagens.length - 1) {
                limite = arrayDeImagens.length - 1
                $("#carregar").remove();
            } 
            if (anterior != 0) {
                var anterior = limite - 11
            }
            for(var i = anterior; i <= limite; i++) {
                containerImagem.appendChild(criarImagens(arrayDeImagens[i], dataBoletim[i]))
            }
            limite += 12;
    }

    mostrarImagens();
    $('#carregar').on('click',function() {
        mostrarImagens();
    })

    //console.log(arrayDeImagens.length / 12);

    // arrayDeImagens.forEach(imagem => {
    //         containerImagem.appendChild(criarImagens(imagem, dataBoletim[imagem]))
    //     }
    // )
}