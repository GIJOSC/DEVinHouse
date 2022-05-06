//function perguntar(pergunta, sim, nao) {
//  if (confirm(pergunta)) sim();
 // else nao();
//}

const perguntar = (pergunta,sim,nao) => {
  if (confirm(pergunta)) sim();
  else nao();
}

perguntar(
 "Você concorda?",
function() { alert("Você concordou."); },
 function() { alert("Você não concordou."); }
);



