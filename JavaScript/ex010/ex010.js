function login() {
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value

    if (usuario == "adm" && senha == "123") {
        document.getElementById("passou").innerHTML = `Login concluído`
    } else {
        document.getElementById("passou").innerHTML = `Usuário ou senha incorretos`
    }
}
