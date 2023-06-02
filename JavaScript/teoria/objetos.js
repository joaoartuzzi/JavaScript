//Declarando um objeto e irnformando os atributos
//Todo objeto declaro com { }
var carro = {
    ano: `2020`,
    modelo: `S10`,
    marca: `chevrolet`
}

//Para exibir o atributo do objeto faço da seguinte forma:
//objetivo.atributo
console.log (carro.ano + ` - ` + carro.modelo)
console.log (`${carro.ano} - ${carro.modelo}`)

//Adicionando novo objeto carro ao vetor listaCarros
listaCarros.push(carro)


console.log (listaCarros.length)

carro = {
ano: `2022`,
modelo: `onix`,
marca: `chevrolet`
}
listaCarros.push(carro)
console.log(listaCarros)

for (var pos in listaCarros) {
    console.log (listaCarros[pos].modelo)
}