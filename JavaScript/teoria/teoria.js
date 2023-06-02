    /*
        Comentários em 
        multiplas linhas
    */
    //Comentário em uma única linha

    //O alert é utilizado para exibir uma mensagem em popup
    //alert("Olá mundo!!!")

    //No console conseguimos vizualizar informações sem exibir na página
    console.log("Olá mundo, estou utlizando o console")

    //Tipo de exibição de mensagem no console
    console.error("Esta é uma mensagem de erro")
    console.warn ("Esta é uma mensagem de erro")
    console.info("Esta é uma mensagem de erro")

    //Criando uma função chamada quando clicamos no botão
    //O nome da função tem que ser igual ao do evento onclick
    function Botao1(){
        alert("você clicou no botão")
    }
    function BotaoCorFundo(){
        //Alterando no documento html no elemento body e estilo fundo
        document.body.style.backgroundColor="green"
    }
    function BotaoNome(){
        //No prompt abre opção para digitar algo
        var nome2 = prompt("Qual é o seu nome?")
        confirm ("Olá " + nome2 + ", entendeu variável?")
        confirm (`Olá ${nome2}, entendeu variável?`)
    }

    //Declarando variáveis
    //String - Conjunto de caracteres - Declarar com "" ou ''
    var nome = "João André"
    var sobrenome = "Artuzzi"
    //Number - Todo número em JS é do tipo Number - Declarar sem ""
    var idade = 16
    //Boolean - Somente recebe true ou false
    var aprovado = true

    //Comando typeof para saber o tipo do dado
    console.log (typeof nome)
    //Concatenando strings com o +
    console.log (nome + ' ' + sobrenome)

    var n1 = 10
    var n2 = 15
    //Irá somar as 2 variaveis number (25)
    console.log (n1+n2)
    var n3 = "10"
    var n4 = "15"
    //Irá concatenar "juntar as 2 variaveis (1015)"
    console.log(n3 + n4)
    //Se utilizarmos o + com string ele concatena, se utilizar com number soma

    //Uma variável pode receber o valor de outra variável
    n1 = n2
    console.log("n1 = " + n1 + ' e o n2 = ' + n2)

    //Para atribuir um valor decimal utilizar . ao invés de ,
    var salario = 1290.85
    //Posso também somar a variável com ela mesmo
    salario + salario + 200
    console.log(salario)
    //Antigamente para juntar texto e variáveis faziamos assim
    console.log('Olá, ' + nome + ' você tem ' + idade + ' anos')
    //Hoje utilizamos o TemplaString, forma mais simples
    console.log(`Olá, ${nome} você tem ${idade} anos`)

    function BotaoSomar() {
        //Receber valor1 de um prompt
        var nr1 = prompt("Digite um número:")
        //Receber valor2 de um prompt
        var nr2 = prompt("Digite outro número:")

        //Convertendo a variavel valor1 e 2 da string para number
        nr1 = parseFloat (nr1) //Podemos utilizar o parseInt()
        //Convertendo a variavel nr1 de string para number
        nr2 = Number(nr2) //Podemos utilizar Number()

        console.log(typeof nr1) //Verificando o tipo do dado
        //variavel soma receber valor1 + valor2
        var soma = nr1 + nr2
        //Exibir em um alert o valor de soma
        //alert(soma)

        /*Alterando um elemento buscando ele pelo*/
        document.getElementById("res-soma").innerHTML += 
            `<br>A soma de ${nr1} + ${nr2} = ${soma}` 
    }
    function botaocidade(){
        var cidade = document.getElementById("cidade").value
        document.getElementById("resultadoCidade").innerHTML += `<br> O nome da cidade ${cidade}`
    }

    //Operadores Aritmétricos e Ordens de precedência
    var opSoma = 5 + 2 //Operador de soma +
    console.log(opSoma) // 7
    var opSubtracao = 5 - 2 //Operador de subtração -
    console.log(opSubtracao) // 3
    var opMultiplicacao = 5 * 2 //Operador de multiplicacao *
    console.log(opMultiplicacao) // 10
    var opDivisao = 5 / 2 //Operador de divisao
    var opExponenciacao = 5 ** 2
    console.log(opExponenciacao) //25
    var opResto = 5 % 2 //Operador de resto da divisao %
    console.log(opResto) //1
    //Ordem de precedencia
    var ordemPrecedencia1 = 5 + 3 / 2
    console.log(ordemPrecedencia1) //6.5
    var ordemPrecedencia2 = (5 + 3) / 2
    console.log(ordemPrecedencia2) // 4
    /*  1º ()
        2º **
        3º * /
        4º %
        5º + -
    */
   //Constantes - O valor não pode ser alterado depois de atribuido
   const pi = 3.14
   // pi = 3 - Se o valor for alterado dara erro no javascript

   //Auto atribuição
   var n = 3
   n= n + 3 // A variável recebe ela mesmo + 3
   n += 3 // qQer dizer o mesmo que a expressãp acima

   n++ // qQando precisamos somar + 1 ao valor da variável
   n-- // Quando precisamos subtrair -1 ao valor da variável

   //Operadores Relacionais
   var n1 = 5
   var n2 = 6
   console.log (n1 > n2) // > maior que
   console.log (n1 < n2) // < menor que
   console.log (n1 >= n2) // >= maior ou igual que
   console.log (n1 <= n2) // <= menor ou igual que
   console.log (n1 == n2) // == igual
   console.log (n1 != n2) // != não igual - Diferente

    //Estruturas condicionais
    if (n1 > n2){
        // Verificando a condição entre parenteses
        // Se a condição for  verdadeira "entra" nesse bloco
        console.log ("O n1 é maior que o n2")
    } else {
        // Se a condição não for verdadeira "entra" nesse bloco ELSE
        console.log ("O n1 não é maior que o n2")
    }

    
    
    
    
    //Exemplo de condição
    var minhaIdade = 16
    if (minhaIdade >= 16){
        console.log ('Você pode votar')
    } else{
        console.log("Você não pode votar")
    }

    //Operadores lógicos
    // && representa o "E"
    var login = "adm"
    var senha = "123"
    //Para entrar na condição TRUE as 2 condições precisam ser verdadeiras
    if (login == "adm" && senha == "123") {
        //Executa esse bloco quando as condições são TRUE
    } else {
        //Executa esse bloco se pelo menos 1 condição for FALSE
    } 

    var media = 6
    // Operador OU -> || (pipe)
    //Para entrar na condição TRUE pelo menos 1 condição precisa ser verdadeira
    if(media >= 6 || media == 5) {
        //Executa esse bloco quando 1 condição é TRUE pelo menos
    } else {
        //Aqui entra se todas as condições forem falsas
    }

    //Estruturas condicionais encadeadas
    if (media >= 7) {
        console.log("APROVADO")
    } else if(media >= 5) { //Podemos fazer um novo if junto com o else
        console.log("RECUPERAÇÃO")
    } else {
        console.log("REPROVADO")
    }

    if (media == 10) {
        console.log("Ótimo aluno")
    } else if (media == 9 || media == 8) {
        console.log("Bom aluno")
    } else if (media == 7 || media == 6) {
        console.log("aluno mediano")
    } else if (media == 5 || media == 4 || media == 3) {
        console.log("aluno abaixo da média")
    } else {
        console.log("aluno ruim")
    }
    //debugger
    //Podemos utilizar o debugger para solicitar o código linha a linha
    //return
    //Quando queremos parar de executar uma função do JS utilizamos o return





    //Para sortearmos um valor aleatório utilizamos o Math.random()
    //o Math.random retorna um número decimal e precisamos multiplicar pelo nr
    //máximo que desejar
    //o parseInt utilizamos para obter apenas a parte inteira do número
    var nrSorteado = parseInt(Math.random() * 100)
    console.log (nrSorteado)


    //Switch Case
    //E como se fosse várias if else de forma mais simples
    var diaSemana = 3
    switch (diaSemana) {
        case 1:
            console.log("Hoje é: Domingo")
            break   //para o Switch case e não verifica as outras opções
        case 2:
            console.log("Hoje é: Segunda")
            break
        case 3:
            console.log("Hoje é: Terça")
            break
        case 4:
            console.log("Hoje é: Quarta")
            break
        case 5:
            console.log("Hoje é: Quinta")
            break
        case 6:
            console.log("Hoje é: Sexta")
            break
        case 7:
            console.log("Hoje é: Sábado")
            break
    }


// 1ª Expressão var i = 1
// (Aqui eu inicio o controle de vezes)
// 2ª Expressão i <= 10
// Aqui nós

for (let i = 1; i <= 6; i++) {
    console.log
}





//Verificando se número é par com while
var contador = 1 //Iniciando o contador de vezes que irá executar
while (contador <= 10) { //Enquanto a condição for verdadeira
    if (contador % 2 == 0){ //Condição para caso o contador for par
        console.log (`${contador} é par`)
    } else {
        console.log (`${contador} é ímpar`)
    }
    contador++ //Adicionando +1 ao contador para não ficar em loop infinito
}


//while é usado para quando quer fazer uma repetição de código
var cont = 1
while (cont <= 5){
    console.log (cont)
    cont++
}
//oq faz em 3 linhas pode ser feito em uma
for (var cont = 1; cont <= 5; cont++){
    console.log(cont)
}