document.getElementById("botaoPA").addEventListener("click", function() {
  let valorInicial = parseFloat(document.querySelector("#valorinicial").value)
  let raiz = parseFloat(document.querySelector("#raiz").value)
  let arrayValores = []
  let resultado = document.querySelector("#resultado")
  
  for (let index = 1; index <= 10; index++) {
      arrayValores.push(valorInicial)
      valorInicial+=raiz
      }
  resultado.innerHTML = arrayValores
})

document.getElementById("botaoPG").addEventListener("click", function() {
  let valorInicial = parseFloat(document.querySelector("#valorinicial").value)
  let raiz = parseFloat(document.querySelector("#raiz").value)
  let arrayValores = []
  let resultado = document.querySelector("#resultado")
  
  for (let index = 1; index <= 10; index++) {
      arrayValores.push(valorInicial)
      valorInicial*=raiz
      }
  resultado.innerHTML = arrayValores
})