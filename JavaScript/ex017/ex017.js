function gerar() {
    var inicio = Number(document.getElementById("nri").value)
    var final = Number(document.getElementById("nrf").value)
    document.getElementById("resultado").innerHTML =
    `Relação de Nº ímpares de ${inicio} até ${final} <br> <br>`
    for (let i = inicio; i <= final; i++){
        if (i % 2 == 1) {
            document.getElementById("resultado").innerHTML += `${i} <br>`
        }
    }
}