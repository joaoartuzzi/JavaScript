function verificar(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    idade = Number(idade)

    if (idade >= 18 && idade <= 65) {
        document.getElementById("resultado").innerHTML =
        ` ${nome}, seu voto é obrigatório `
    } else if (idade < 16) {
         document.getElementById("resultado").innerHTML = 
        `${nome}, você não pode votar`
    } else {
         document.getElementById("resultado").innerHTML =
         `${nome}, seu voto é opcional`
    }
}