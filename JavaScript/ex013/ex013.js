
function sortear(){
    var nome = document.getElementById("nome").value
    var mes = parseInt(Math.random() * 13)
    
    
    switch (mes) {
        case 1:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar em janeiro`
            break
        case 2:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar em fevereiro`
            break
        case 3:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar em março`
            break
        case 4:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar em abril`
            break
        case 5:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar em maio`
            break
        case 6:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar em junho`
            break
        case 7:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar em julho`
            break
        case 8:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar em agosto`
            break
        case 9:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar em setembro`
            break
        case 10:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar em outubro`
            break
        case 11:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar em novembro`
            break
        case 12:
            document.getElementById("resultado").innerHTML = `${nome}, você vai se casar em dezembro`
            break
        default:
            document.getElementById("resultado").innerHTML = `${nome}, você não vai se casar`
    }
    
}