var filmes = []
var links = []
function cadastrar() {
    document.getElementById("resultado").innerHTML = ``
    var nomeFilme = document.getElementById("nomeFilme").value
    filmes.push(nomeFilme)
    
    var linkimg = document.getElementById("linkimg").value
    links.push(linkimg)
    for ( var i = 0; i < filmes.length ; i++) {
        document.getElementById("resultado").innerHTML += `${filmes[i]} <img src ="${links[i]}" class="img"> <br>`
    }
}