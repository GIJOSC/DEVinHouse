var cronometroInterval;

var segundos = 0;
var mili = 0;

var spanMili = document.querySelector("span#tens");
var spanSegundos = document.querySelector('#seconds');
var btnStart = document.querySelector('#button-start');
var btnStop = document.querySelector('#button-stop');
var btnReset = document.querySelector('#button-reset');

btnStart.addEventListener("click", function () {
  clearInterval(cronometroInterval);
  cronometroInterval = setInterval(iniciaCronometro, 10);
});

btnStop.addEventListener("click", function () {
  clearInterval(cronometroInterval);
});

btnReset.addEventListener("click", function () {
  clearInterval(cronometroInterval);
  mili = 0;
  segundos = 0;
  spanMili.innerHTML = "00";
  spanSegundos.innerHTML = "00";
});

function iniciaCronometro() {
  mili++;

  if (mili <= 9) {
    spanMili.innerHTML = "0" + mili;
  }

  if (mili > 9) {
    spanMili.innerHTML = mili;
  }

  if (mili > 99) {
    segundos++;
    spanSegundos.innerHTML = "0" + segundos;

    mili = 0;

    spanMili.innerHTML = "0" + mili;
  }

  if (segundos > 9) {
    spanSegundos.innerHTML = segundos;
  }

}

//Ao clicar no botão, iniciar contador
//Ao clicar no botão de parar, parar o contador
//Ao clicar no botão de reset, limpar o contador 