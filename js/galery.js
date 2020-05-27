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
        var imagem = document.createElement("img");
        imagem.src = arrayDeImagens;
        imagem.width = "400";
        imagem.style.margin = "5px";

        return imagem;
    }
    arrayDeImagens.forEach(imagem => {
            containerImagem.appendChild(criarImagens(imagem))
        }
    )
}