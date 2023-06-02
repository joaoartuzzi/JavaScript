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
function indicar() {
    var sorteio = parseInt (Math.random() * filmes.length)
    document.getElementById("resultado2").innerHTML = 
    `<div>
    <img src ="${links[sorteio]}" class="img"> 
    <p>${filmes[sorteio]}<p>
    </div>`    
}