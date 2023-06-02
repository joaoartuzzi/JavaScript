function botaocalcular(){
    var nr1 = document.getElementById("nrDigitado1").value
    var nr2 = document.getElementById("nrDigitado2").value
    var opSoma = Number(nr1) + Number(nr2)
    var opSubtracao = nr1 - nr2
    var opMultiplicacao = nr1 * nr2
    var opDivisao = nr1 / nr2
    var opResto = nr1 % nr2
    var opExp = nr1 * nr2
    document.getElementById("resultado").innerHTML +=
    `${nr1} + ${nr2} = ${opSoma} <br> 
    ${nr1} - ${nr2} = ${opSubtracao} <br>
    ${nr1} * ${nr2} = ${opMultiplicacao} <br>
    ${nr1} / ${nr2} = ${opDivisao} <br>
    ${nr1} % ${nr2} = ${opResto} <br>
    ${nr1} ** ${nr2} = ${opExp}`
}
