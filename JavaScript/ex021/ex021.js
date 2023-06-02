var filmes = []
function cadastrar() {
    document.getElementById("resultado").innerHTML = ``
    var nomeFilme = document.getElementById("nomeFilme").value
    filmes.push(nomeFilme)
    for ( var i = 0; i < filmes.length ; i++) {
        document.getElementById("resultado").innerHTML += `${filmes[i]} <br>`
    }
}