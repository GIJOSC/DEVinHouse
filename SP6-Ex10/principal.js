import Temporizador from './cronometro.js';
import Dados from './Dados.js';

let temporizador = new Temporizador();
let dados = new Dados();

dados.carregar();

var btnStart = document.querySelector('#button-start');
var btnStop = document.querySelector('#button-stop');
var btnReset = document.querySelector('#button-reset');
  
btnStart.addEventListener("click", function () {
    temporizador.iniciar();
});
  
btnStop.addEventListener("click", function () {
    temporizador.parar();
    dados.salvar();
});
  
btnReset.addEventListener("click", function () {
    temporizador.reset();
    dados.limpar();
});