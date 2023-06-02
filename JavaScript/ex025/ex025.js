var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null){
    listaUsuarios = []
}
exibirUsuarios()

console.log(listaUsuarios)

function validarCadastro(nome, usuario, senha, confirmarSenha){
    if (senha != confirmarSenha) {
        alert ('Verifique suas senhas pois estão diferentes')
        return false
    }

    if (nome != '' && usuario != '' && senha != '' && confirmarSenha != '' ) {
        return true
    } else {
        return false
    }    
}

function botaoCadastrar() {
    var nome = document.getElementById("nome").value
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value
    var confirmarSenha = document.getElementById("confirmarSenha").value
    
    var possoCadastrar = validarCadastro(nome, usuario, senha, confirmarSenha)
    if (possoCadastrar == false) {
        alert ('Verifique os dados antes de cadastrar')
        return 
    }
    
    var usuario = {
        nome: nome,
        usuario: usuario, 
        senha: senha
    }
    listaUsuarios.push(usuario)
    
    localStorage.setItem( 'bdUsuarios', JSON.stringify(listaUsuarios) )

    exibirUsuarios()

    document.getElementById("nome").value = ''
    document.getElementById("usuario").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("confirmarSenha").value = ''
    document.getElementById("nome").focus()

    alert ('Usuário cadastrado com sucesso. Faça o login.   ')

    window.location.href = 'login.html'
}

function exibirUsuarios(){
    document.getElementById('resultado').innerHTML = ''

    listaUsuarios.forEach( (item, indice) => {
        document.getElementById('resultado').innerHTML +=
            `<div>
                <p><b>Nome:</b> ${item.nome} - <b>Login:</b> ${item.usuario}  
                <img src='excluir.svg' onclick='excluirUsuario(${indice})'></p>
            </div>`
    })
}
function excluirUsuario(indice){
    listaUsuarios.splice (indice, 1)
    localStorage.setItem('bdListaUsuarios', JSON.stringify(listaUsuarios))
    exibirUsuarios()
}