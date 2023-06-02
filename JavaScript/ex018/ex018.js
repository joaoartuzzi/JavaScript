function gerar() {
    document.getElementById("resultado").innerHTML = ''
    var fin = document.getElementById("nr").value
    var ini = 0
    while ( ini < fin  ){
        document.getElementById("resultado").innerHTML += `🖤`
        ini++
    }
}