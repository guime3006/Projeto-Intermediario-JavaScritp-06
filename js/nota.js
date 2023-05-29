// calculo imc

// foram criadas duas variaveis que iram receber os dados do user
let recebePeso = prompt(`Digite Seu Peso, exemplo 49.2 : `) 
recebePeso = Number(recebePeso)

let recebeAltura = prompt(`Digite Sua Altura, exemplo 1.75 :`)
recebeAltura = Number(recebeAltura)

// em seguida as mesma seram convertidas para o tipo Number()

// funcao criada para realizar o calculo
function calculoIMC() {

    recebePeso;
    recebeAltura;
    let calculoPeso = recebePeso / Math.pow(recebeAltura, 2)
    // console.log(calculoPeso.toFixed(2))

    let mensagem;

    // Utilizei o if para ter o controle de diversas situações 
    if (calculoPeso < 18.5) {
        mensagem = "Resultado : Magreza"
    } else if (calculoPeso >= 18.5 && calculoPeso <= 24.9) {
        mensagem = "Resultado : Peso Normal"
    } else if (calculoPeso >= 25.0 && calculoPeso <= 29.9) {
        mensagem = "Resultado : Sobrepeso"
    } else if (calculoPeso >= 30.0 && calculoPeso <= 39.9) { // cada if acaba gerando um resultado diferente
        mensagem = "Resultado : Obesidade Nivel 1"
    } else {
        mensagem = "Resultado : Obesidade Grave" 
    }

    console.log(mensagem)

    return mensagem // no fim eu retoro
}

// no html foi criado algumas tags para ser exibido os resultados
let altura = document.getElementById("altura").innerHTML = `<b>Altura</b>: ${recebeAltura}m` // variavel que exibe Altura

let peso = document.getElementById("peso").innerHTML = `<b>Peso</b>: ${recebePeso}kl` // variavel que exibe Peso

let respostaIMC = calculoIMC() // variavel que irar armazenar o retorno da função
let resposta = document.getElementById("resposta").innerHTML = `<b>${respostaIMC}</b>` // variavel que exibe A Resposta