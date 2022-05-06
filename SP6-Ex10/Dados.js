export default class Dados {
        
  get #spanDezenasMilissegundos() {
      return document.querySelector("#tens");
  }
  
  get #spanSegundos() {
      return document.querySelector('#seconds');
  }

  salvar() {
      const ultimoTimer = {
          segundo: this.#spanSegundos.innerHTML,
          milissegundo: this.#spanDezenasMilissegundos.innerHTML
      }
      console.log(ultimoTimer);
      localStorage.setItem('tempo',JSON.stringify(ultimoTimer));
  }

  carregar() {
      let tempoSalvo = JSON.parse(localStorage.getItem('tempo'));
      if (tempoSalvo) {
          this.#spanSegundos.innerHTML = tempoSalvo.segundo;
          this.#spanDezenasMilissegundos.innerHTML = tempoSalvo.milissegundo;
      }
  }
  
  limpar() {
      localStorage.removeItem('tempo');
  }
}