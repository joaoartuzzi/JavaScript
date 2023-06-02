var nm = parseInt(Math.random() * 100)
var nr = 0
nr = parseInt(nr)

function chutar() {
    var guess = prompt("Digite o número que você deseja")
    nr++
    if (guess < nm) {
            document.getElementById("resultado").innerHTML +=
            `Você chutou ${guess}, pensei em um número MENOR`
        } else if (guess > nm){
            document.getElementById("resultado").innerHTML += 
            ` Você chutou ${guess}, pensei em um número MAIOR`
        } else {
            document.getElementById("resultado").innerHTML += 
            `PARABÉNS, VOCÊ ACERTOU, ${guess} é o número que eu pensei. ${nr} tentativas`
        }
}