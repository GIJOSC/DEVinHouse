class Endereço {
  constructor(logradouro, numero, cidade, estado, pais, cep) {
      this.logradouro = logradouro
      this.numero = numero
      this.cidade = cidade
      this.estado = estado
      this.pais = pais
      this.cep = cep
  }
}
cliente1 = new Endereço("Travessa Ressacada", 49, "LondrinaFlorianópolis", "Santa Catarina", "Brasil", "88047-604")
console.log(cliente1)