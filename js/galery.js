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
    var containerImagem = document.getElementById("galeria");

    function criarImagens(arrayDeImagens) {
        // Div de container de imagerm
        var div = document.createElement("div");
        div.className = "col-sm-4 col-md-4 mb-4";

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

        div.appendChild(a);
        a.append(imagem);

        return div;
    }
    arrayDeImagens.forEach(imagem => {
            containerImagem.appendChild(criarImagens(imagem))
        }
    )
}