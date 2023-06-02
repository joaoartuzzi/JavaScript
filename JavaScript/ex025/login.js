var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null) {
    listaUsuarios = []
}

function botaoEntrar() {
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value

    if (validarUsuario(usuario, senha)) {
        alert('Bem vindo ao sistema')
    } else {
        alert('VERIFIQUE SEU USUÁRIO E SENHA OU SE CADASTRE')
    }
}

function validarUsuario(usuario, senha) {
    
    var encontrou = false

    listaUsuarios.forEach ( item => {
        if (usuario == item.usuario && senha == item.senha) {
            
            encontrou = true
        }
    })

    return encontrou
}

function botaoCadastrar() {
    location.href = 'ex025.html'
}