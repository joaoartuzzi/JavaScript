function gerar() {
    let nr = document.getElementById("nr").value
    document.getElementById("resultado").innerHTML = 
    `Tabuada do ${nr} <br> <br>`
    let cont = 1
    for (var res = 1; cont <= 10; cont++){
        var res = cont * nr
        document.getElementById("resultado").innerHTML += 
        `${nr} x ${cont} = ${res} <br>`
        cont++
    }
}
