
//Declarando uma função sem parametro e sem retorno
function exibirInformacao(){
    console.log (`Executei a funçao exibir info`)
}
//Chamando a minha função
exibirInformacao()

//Funçao com entrada de parametro e sem retorno (sem saida de dados)
//Criando a funçao para gerar no console a tabuada do nr desejado
function ricardoCalculeTabuada(nr){
    for (var i=0; i<=30; i++){
        console.log (`${nr} x ${i} = ${nr * i}`)
    }
}
//Chamando a função e passando o nº com PARAMETRO que deseja ver a tabuada
ricardoCalculeTabuada(428)

//Declarando a função recebendo o parametro e retornando um valor
function ricardoCalculeTabuada(nr){
    let dobro = nr * 2
    return dobro
}

//Chamando função para calcular o dobro e receber o resultado na variável
var resultado = ricardoCalculeTabuada(7)
console.log (resultado)
var resultado = ricardoCalculeTabuada(738374)
console.log (resultado)

