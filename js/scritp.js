// calculo imc

let recebePeso = prompt(`Digite Seu Peso, exemplo 49.2 : `)
recebePeso = Number(recebePeso)

let recebeAltura = prompt(`Digite Sua Altura, exemplo 1.75 :`)
recebeAltura = Number(recebeAltura)

function calculoIMC() {

    recebePeso;
    recebeAltura;
    let calculoPeso = recebePeso / Math.pow(recebeAltura, 2)

    let mensagem;

    if (calculoPeso < 18.5) {
        mensagem = "Resultado : Magreza"
    } else if (calculoPeso >= 18.5 && calculoPeso <= 24.9) {
        mensagem = "Resultado : Peso Normal"
    } else if (calculoPeso >= 25.0 && calculoPeso <= 29.9) {
        mensagem = "Resultado : Sobrepeso"
    } else if (calculoPeso >= 30.0 && calculoPeso <= 39.9) {
        mensagem = "Resultado : Obesidade Nivel 1"
    } else {
        mensagem = "Resultado : Obesidade Grave"
    }

    console.log(mensagem)

    return mensagem
}


let altura = document.getElementById("altura").innerHTML = `<b>Altura</b>: ${recebeAltura}m`

let peso = document.getElementById("peso").innerHTML = `<b>Peso</b>: ${recebePeso}kl`

let respostaIMC = calculoIMC()
let resposta = document.getElementById("resposta").innerHTML = `<b>${respostaIMC}</b>`