var listaFilmes = []

//Buscando as informações do localStorage gravadas no Navegador utilizo o método getItem com o nome exatamente que utilizamos no setItem

listaFilmes = JSON.parse(localStorage.getItem(`bdfilmes`))
if (listaFilmes == null) {
    listaFilmes = []
}
exibirFilmes()

//Exibindo no console a lista de filmes que carregou no vetor
console.log(listaFilmes)

function validarCadastro(nomeFilme, imagemFilme) {
    if (nomeFilme != `` && imagemFilme != ``) {
        return true
    } else {
        return false
    }
}

function botaoFilmes() {
    var nomeFilme = document.getElementById("nome").value
    var imagemFilme = document.getElementById("imagem").value

    var possoCadastrar = validarCadastro(nomeFilme, imagemFilme)
    if (possoCadastrar == false) {
        alert(`Verifique os dados antes de cadastrar`)
        return
    }

    var filme = {
        nome: nomeFilme,
        link: imagemFilme
    }
    listaFilmes.push(filme)
    //Utilizando o localStorage que irá gravar o nosso vetor de filmes no método setItem, preciso passar como parâmetro o nome do
    //espaço que o navegador irá reserva e passo também o vetor de filmes convertida em formato JSON
    localStorage.setItem(`bdfilmes`, JSON.stringify(listaFilmes))

    exibirFilmes()

    document.getElementById("nome").value = ``
    document.getElementById("imagem").value = ``
    document.getElementById("nome").focus()
}

function botaoIndicado() {
    var nrSorteado = parseInt(Math.random() * listaFilmes.length)
    document.getElementById(`indicado`).innerHTML =
        `<div>
            <img src="${listaFilmes(nrSorteado).link}" class="img">
            <p>${listaFilmes(nrSorteado).nome}</P>
        </div>`
}

function exibirFilmes() {
    document.getElementById("resultado").innerHTML = ``

    for (var i = 0; i < listaFilmes.length; i++) {
        document.getElementById("resultado").innerHTML +=
            `<div>
        <img src ="${listaFilmes[i].link}" class="img">
        <P>${listaFilmes[i].nome}</p>
        </div>`
    }
}

function botaoLimpar(){
    listaFilmes = []
    localStorage.getItem( `bdfilmes`, JSON.stringify(listaFilmes) )
    exibirFilmes()
}