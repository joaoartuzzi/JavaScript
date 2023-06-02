function botaocalcular(){
    var nr = document.getElementById("nrDigitado").value
    var dobro = nr * 2
    var metade = nr / 2
    document.getElementById("resultado").innerHTML += 
        `O dobro do número ${nr} é igual a ${dobro} e a metade é igual a ${metade} <br>`
}
function botaolimpar(){
    
}