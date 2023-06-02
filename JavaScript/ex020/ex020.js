function exibir() {
        var filmes = [`Interestelar`, `Star Wars`, `Harry Potter`, `Super Mario World`, `Vingadores`, `Barbie`]
    for (var i = 0; i < filmes.length; i++) {
        document.getElementById("resultado").innerHTML += `Posição no vetor ${i} - Filme ${filmes[i]} <br>`
    }
}