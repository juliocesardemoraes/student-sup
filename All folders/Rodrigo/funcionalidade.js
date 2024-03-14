var setaDireita = window.document.getElementById("setadire");
var carrosel1 = window.document.getElementById("carrosel1");
var carrosel2 = window.document.getElementById("carrosel2");
var carrosel3 = window.document.getElementById("carrosel3");
var setaesqu = window.document.getElementById("setaesqu");

function RolarParaDireita() {
  carrosel1.style = "display:none";
  carrosel2.style = "display:flex";
  setaDireita.style = "display:flex";
  setaesqu.style = "display:none";
}
