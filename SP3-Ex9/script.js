function adicionarElem() {
  let elemento = document.querySelector("#dados").value
  if (elemento.length == 0) {
      alert("Digite um item")
  }
  else {
  let lista = document.querySelector("#lista")
  let option = document.createElement("option")
  lista.appendChild(option)
  let item = document.createTextNode(elemento)
  option.appendChild(item)
  }
}

let arrayLista = []

function salvarLista() {
  let opcoes = document.querySelector('#lista').options
  for (let i = 0; i < opcoes.length; i++) {
  arrayLista.push(opcoes[i].value)
}
  localStorage.setItem('lista', JSON.stringify(arrayLista))
}

function carregarLista() {
  if (localStorage.hasOwnProperty('lista')) {
  document.querySelector("#lista").innerHTML = ""
  let arrayJSON = localStorage.getItem('lista')
  let listasalva = JSON.parse(arrayJSON)
  for (const unidade of listasalva) {
      let lista = document.querySelector("#lista")
      let option = document.createElement("option")
      lista.appendChild(option)
      let item = document.createTextNode(unidade)
      option.appendChild(item)
  }
  }
  else {
      alert("Não há lista salva.")
  }
  }