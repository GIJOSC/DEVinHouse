class Cliente {
  constructor (nome, cpf, endereco, celular){
      this.nome = nome
      this.cpf = cpf
      this.endereco = endereco
      this.celular = celular
  }
}
let cliente1 = new Cliente('Gesiel', 11111111111, 'Travessa Ressacada, 49', 48991050132);

console.log(cliente1)