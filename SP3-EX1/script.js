function calcularIdade() {
  var aniversario = "Seu aniversário é: "
  var diadoniver = document.getElementById('datadenascimento').value
  var Bday = new Date(diadoniver)
  var calcIdade = ((Date.now() - Bday) / (31557600000))
  aniversario += diadoniver + ". Você tem " + Math.floor(calcIdade) + " anos de idade."
  var theBday = document.getElementById('resultado')
  theBday.innerHTML = aniversario
}     