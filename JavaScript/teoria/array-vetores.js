//Criando um array vazio
var meuVetor = []

//Criando vetores com dados
var numeros = [4, 1, 8, 5, 2 , 7]
var nomes = [`Silvia`, `Marcos`, `Sandra`]
var novoVetor = [20, `SESI`, true]

//Acessando os dados de um vetor
console.log ( nomes[1] )
console.log ( novoVetor[1] )

//Verificando o atributo de tamanho do vetor
console.log (nomes.length)

//  Indice      0         1        2         3        4
var frutas = [`Maçã`, `Laranja`, `Pera`, `Morango`, `Uva`]
//faço um for para percorrer todo o tamanho do vetor
for (var i = 0; i < frutas.length; i++) {
    // Coloco o i no indice das frutas para pegar o valor de cada indice do vetor
    console.log ( frutas[i] )
}

//Para lermos todos os elementos de um vetor, podemos também utilizar o -- fir in -- como o exemplo abaixo
for (var pos in frutas) {
    console.log ( frutas[pos])
}

//Adicionando novo valor no FINAL do vetor
frutas.push(`Abacaxi`)
for (var i = 0; i < frutas.length; i++) {
    console.log ( frutas[i] )
}

// forEach significa "para cada"
//O método forEach - siginifica para cada item do vetor dentro do parenteses colocamos a variável que irá
//receber o conteúdo de cada linha do vetor e com o => {} informamos o bloco que irá executar para cada linha
frutas.forEach (item => {
    console.log(`Item pelo forEach`, item)
})
//Quando precisamos do indice também e colocamos entre assim como no exemplo abaixo
frutas.forEach ( (item, indice) => {
    console.log(`Item pelo forEach`, indice, item)
})

frutas.forEach ( item => {
    console.log (item)
})

var novaListaFrutas = []
novaListaFrutas.push(`Limão`)
novaListaFrutas.push(`Melancia`)
console.log(novaListaFrutas)

//Modificando o valor de um indice do vetor
novaListaFrutas[0] = `Melão`
console.log(novaListaFrutas)
novaListaFrutas[1] = `Banana`
console.log(novaListaFrutas) // [`Melão`, `Banana`]
novaListaFrutas.push (`Melância`)
console.log(novaListaFrutas) // [`Melão`, `Banana`,`Melância`]
novaListaFrutas[3] = `Abacate`
console.log(novaListaFrutas) // [`Melão`, `Banana`, `Melância`, `Abacate`]
novaListaFrutas.push (`Mamão`)

for (var i=0 ; i < frutas.length; i++) {
    console.log (frutas[i])
}

// for in -> não precisa inicializar uma variável de contador do loop
for (var pos in novaListaFrutas) {
    console.log (`novalistaFrutas[`+ pos +`]` + novaListaFrutas[pos])
}