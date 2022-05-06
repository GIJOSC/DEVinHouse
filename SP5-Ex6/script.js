const estadosBrasileiros = Object.freeze({
  AC: 'Acre', AL: 'Alagoas', PR: 'Paraná', AP: 'Amapá', AM: 'Amazonas', BA: 'Bahia', CE: 'Ceará', ES: 'Espírito Santo', GO: 'Goiás', MA: 'Maranhão', MT: 'Mato Grosso', MS: 'Mato Grosso do Sul', MG: 'Minas Gerais', PA: 'Pará', PB: 'Paraíba', PE: 'Pernambuco', PI: 'Piauí', RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RS: 'Rio Grande do Sul', RO: 'Rondônia', RR: 'Roraima', SC: 'Santa Catarina', SP: 'São Paulo', SE: 'Sergipe', TO: 'Tocantins', DF: 'Distrito Federal'
})

class Endereco {
  constructor(logradouro, numero, cidade, estado, pais, cep) {
      this.logradouro = logradouro
      this.numero = numero
      this.cidade = cidade
      this.estado = this.checaEstado(estado)
      this.pais = pais
      this.cep = cep
  }
  checaEstado(estado) {
      for (const enumEstado of Object.values(estadosBrasileiros)) {
          if (enumEstado == estado) {
              return estado
          }
      }
      console.log("Estado não encontrado")
      return false
  }
}

let cliente1 = new Endereco("Travessa Ressacada", 49, "Florianópolis", "Santa Catarina", "Brasil", "88047-604")
let cliente2 = new Endereco("Rua Olavo Bilac", 246, "Curitiba", "Parana", "Brasil", "88000-246")

console.log(cliente1)
console.log(cliente2)