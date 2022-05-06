class Cliente {
  constructor (nome, cpf, endereco, celular){
      this.nome = nome
      this.cpf = this.validaCPF(cpf)
      this.endereco = endereco
      this.celular = celular
  }
  validaCPF (cpf) {
  if (typeof cpf !== "string") {
      alert("CPF inválido")
      return false
  }
  cpf = cpf.replace(/[\s.-]*/igm, '')
  if (
      !cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999" 
      ) {
          alert("CPF inválido")
          return ""
      }
      var soma = 0
      var resto
      for (var i = 1; i <= 9; i++) 
      soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
      resto = (soma * 10) % 11
      if ((resto == 10) || (resto == 11))  resto = 0
      if (resto != parseInt(cpf.substring(9, 10))) {
          alert("CPF inválido")
          return ""
      }
      soma = 0
      for (var i = 1; i <= 10; i++) 
      soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
      resto = (soma * 10) % 11
      if ((resto == 10) || (resto == 11))  resto = 0
      if (resto != parseInt(cpf.substring(10, 11) ) ) {
          alert("CPF inválido")
          return ""
      }
      alert("CPF válido")
      return cpf
  }
}

let cliente1 = new Cliente('Gesiel', '00367585901', 'Travessa Ressacada, 49', 48991050132)
let cliente2 = new Cliente('Daniel', '22222222222','Rua Olavo Bilac,246',48991646162)

console.log(cliente1)