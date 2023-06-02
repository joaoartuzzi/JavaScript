























var login = "adm"
var senha = 123

var possoAcessar = validarlogin(login, senha)
if (possoAcessar == true)
{
    console.log("Voce pode acessar o sistema")
} else
{
    console.log("Voce não tem permissão")
}

function validarLogin(login, senha)
{
    //valida se os valores são varios
    if (login == ``|| senha == ``)
    {
        return false
    }
    //valida se login e senha são iguais
    if (login == "adm" && senha == 123)
    {
        return true
    }
    else
    {
        return false
    }
}