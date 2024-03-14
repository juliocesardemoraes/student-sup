const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");

const lancamento = "1 dec 2023";

function countDown() {
  const dataLancamento = new Date(lancamento);
  const hoje = new Date();

  const segTotal = (dataLancamento - hoje) / 1000;

  const finalDias = formatoTempo(Math.floor(segTotal / 60 / 60 / 24));
  const finalHora = formatoTempo(Math.floor(segTotal / 60 / 60) % 24);
  const finalMinutos = formatoTempo(Math.floor(segTotal / 60) % 60);
  const finalSegundos = formatoTempo(Math.floor(segTotal) % 60);

  dia.innerHTML = `${finalDias}D`;
  hora.innerHTML = `${finalHora}H`;
  minuto.innerHTML = `${finalMinutos}M`;
  segundo.innerHTML = `${finalSegundos}S`;

  function formatoTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
  }
}

countDown();
setInterval(countDown, 1000);
