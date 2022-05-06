let idTransf = 1

class Conta {
  constructor(numConta, saldo, cliente) {
      this.numConta = numConta
      this.saldo = saldo
      this.cliente = cliente
  }
}

class Transacoes {
  constructor(conta, valorTransacao, saldo) {
      this.id = idTransf
      this.conta = conta
      this.valorTransacao = valorTransacao
      this.saldo = saldo
      this.dataTrans = new Date()
  }
  Transferencia () {
      if (this.verificarTransf()) {
          if (this.conta.saldo >= this.valorTransacao) {
              this.conta.saldo -= this.valorTransacao
              this.id = idTransf
              idTransf++
              alert("Transferência efetuada com sucesso!")
              return this.conta.saldo
          }
      }
      else {
          alert("Transferência inválida")
          return this.conta.saldo
      }
  }
  Deposito () {
      if (this.verificarTransf()) {
          this.saldo += this.valorTransacao
          this.id = idTransf
          idTransf++
          alert('Depósito efetuado')
          return this.conta.saldo
          }
      }

  verificarTransf() {
      if (this.valorTransacao <= 300) {
        return true;
      } else return false;
    }
}

let clienteGesiel= new Cliente('Gesiel', '00367585901', 'Travessa Ressacada, 49', 48991050132)
let contaGesiel = new Conta(001, 5000, clienteGesiel)
let transferenciaGesiel = new Transacoes(contaGesiel, 500, contaGesiel.saldo)
transferenciaGesiel.Transferencia()
console.log(contaGesiel)
console.log(transferenciaGesiel)
console.log(idTransf)