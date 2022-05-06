document.querySelector("#read").readOnly = true

function fazerAd () {
    let primeiroNumero = document.querySelector("#firstnumber").value
    let segundoNumero = document.querySelector("#secondnumber").value
    let adicao = parseFloat(primeiroNumero) + parseFloat(segundoNumero)
    let resultado = document.querySelector("#read")
    resultado.innerHTML = adicao
}

function fazerSub () {
    let primeiroNumero = document.querySelector("#firstnumber").value
    let segundoNumero = document.querySelector("#secondnumber").value
    let subtracao = primeiroNumero - segundoNumero
    let resultado = document.querySelector("#read")
    resultado.innerHTML = subtracao
}

function fazerMult () {
    let primeiroNumero = document.querySelector("#firstnumber").value
    let segundoNumero = document.querySelector("#secondnumber").value
    let multiplicacao = primeiroNumero * segundoNumero
    let resultado = document.querySelector("#read")
    resultado.innerHTML = multiplicacao
}

function fazerDiv () {
    let primeiroNumero = document.querySelector('#firstnumber').value
    let segundoNumero = document.querySelector('#secondnumber').value
    let divisao = primeiroNumero / segundoNumero
    let resultado = document.querySelector('#read')
    resultado.innerHTML = divisao
}