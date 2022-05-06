let data = new Date()
let horas = ('0'+data.getHours()).substr(-2)
let minutos = ('0'+data.getMinutes()).substr(-2)

let horario = horas + ":" + minutos

document.querySelector("#horario").innerHTML = horario