class Temporizador {
  #segundos;
  #dezenasMilissegundos;
  #interval;

  constructor() {
    this.#segundos = 0;
    this.#dezenasMilissegundos = 0;
    this.#interval;
  }

  get #spanDezenasMilissegundos() {
    return document.querySelector("#tens");
  }

  get #spanSegundos() {
    return document.querySelector('#seconds');
  }

  iniciar() {
    let that = this;
    clearInterval(that.#interval);
    this.#interval = setInterval(function () {
      that.#incrementar();
    }, 10);
  }

  parar() {
    let that = this;
    clearInterval(that.#interval);
  }

  reset() {
    let that = this;
    clearInterval(that.#interval);
    this.#dezenasMilissegundos = 0;
    this.#segundos = 0;
    this.#spanDezenasMilissegundos.innerHTML = "00";
    this.#spanSegundos.innerHTML = "00";
  }

  #incrementar() {
    this.#dezenasMilissegundos += 1;

    if (this.#dezenasMilissegundos >= 9) {
      this.#spanDezenasMilissegundos.innerHTML = "0" + this.#dezenasMilissegundos;
    }

    if (this.#dezenasMilissegundos > 9) {
      this.#spanDezenasMilissegundos.innerHTML = this.#dezenasMilissegundos;
    }

    if (this.#dezenasMilissegundos > 99) {
      this.#segundos++;
      this.#spanSegundos.innerHTML = "0" + this.#segundos;

      this.#dezenasMilissegundos = 0;

      this.#spanDezenasMilissegundos.innerHTML = "0" + this.#dezenasMilissegundos;
    }

    if (this.#segundos > 9) {
      this.#spanSegundos.innerHTML = this.#segundos;
    }
  }
}


let temporizador = new Temporizador();

var btnStart = document.querySelector('#button-start');
var btnStop = document.querySelector('#button-stop');
var btnReset = document.querySelector('#button-reset');

btnStart.addEventListener("click", function () {
  temporizador.iniciar();
});

btnStop.addEventListener("click", function () {
  temporizador.parar();
});

btnReset.addEventListener("click", function () {
  temporizador.reset();
});

