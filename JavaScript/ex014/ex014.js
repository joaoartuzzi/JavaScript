function sortear() {
    document.getElementById("resultado").innerHTML = ""
   for (var i = 1; i <= 6; i++) {
    var num = parseInt(Math.random() * 60) + 1
        document.getElementById("resultado").innerHTML +=
        ` ${num} `
    }
}