let data = new Date()
let dia = data.getDate()
let mes = data.getMonth()
let paragrafo = document.querySelector("#texto")
let titulo = document.querySelector("#estacao")

if ((mes == 0) || (mes == 1) || (dia <= 21 && mes == 2) || (mes == 11 && dia > 21)) {
    titulo.innerHTML = "Verão"
    paragrafo.innerHTML = document.querySelector("#verao").innerHTML
    document.body.style.backgroundImage = "url('../../image/verao.jpg')"
}

if ((mes == 3) || (mes == 4) || (dia <= 21 && mes == 5) || (mes == 2 && dia > 21)) {
    titulo.innerHTML = "Outono"
    paragrafo.innerHTML = document.querySelector("#outono").innerHTML
    document.body.style.backgroundImage = "url('../../image/outono.jpg')"
}

if ((mes == 6) || (mes == 7) || (dia <= 21 && mes == 8) || (mes == 5 && dia > 21)) {
    titulo.innerHTML = "Inverno"
    paragrafo.innerHTML = document.querySelector("#inverno").innerHTML
    document.body.style.backgroundImage = "url('../../image/inverno.jpg')"
}

if ((mes == 9) || (mes == 10) || (dia <= 21 && mes == 11) || (mes == 8 && dia > 21)) {
    titulo.innerHTML = "Primavera"
    paragrafo.innerHTML = document.querySelector("#primavera").innerHTML
    document.body.style.backgroundImage = "url('image/primavera.jpg')"
}