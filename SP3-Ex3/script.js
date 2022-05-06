function verPar() {
  let numero = document.querySelector("#numero").value
  let resultado = document.querySelector("#resultado")
  if ((numero % 2) == 0) {
      resultado.innerHTML = "O número " + numero + " é par."
  }
  else {
      resultado.innerHTML = "O número " + numero + " é ímpar."
  }
}