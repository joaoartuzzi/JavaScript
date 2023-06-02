function botaocalcular(){
    var aluno = document.getElementById("aluno").value
    var nr1 = document.getElementById("nrDigitado1").value
    var nr2 = document.getElementById("nrDigitado2").value

    if(nrDigitado1 > 10) {
        alert ("Nota 1 não pode ser maior que 10")
        
    }
    if(nrDigitado2 > 10) {
        alert ("Nota 2 não pode ser maior que 10")
        
    }
    nr1 = Number(nr1)
    nr2 = Number(nr2)
    var soma = nr1 + nr2
    var media = soma / 2
    if(media >= 7){
        document.getElementById("resultado").innerHTML +=
    
    ` O aluno ${aluno} tirou a nota ${nr1} e ${nr2} sua média foi ${media} o aluno foi aprovado`
    }
    else{document.getElementById("resultado").innerHTML +=
    
    ` O aluno ${aluno} tirou a nota ${nr1} e ${nr2} sua média foi ${media} o aluno foi reprovado`}
    
    
}