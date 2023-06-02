function verificar(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    if(idade >= 7){
        document.getElementById("resultado").innerHTML =
        ` Parabéns ${nome} você pode tirar CNH `
    }
    if(idade < 18){
        document.getElementById("resultado").innerHTML = 
        `não pode tirar`
    }
}
