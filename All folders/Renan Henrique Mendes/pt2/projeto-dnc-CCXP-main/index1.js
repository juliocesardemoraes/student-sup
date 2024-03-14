const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "16 dec 2023"

function countDown(){
    const dataLancamento = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLancamento - hoje)/1000;
    
    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHora = Math.floor(segTotal / 60 / 60)% 24;
    const finalMinutos = Math.floor(segTotal / 60)% 60;
    const finalSegundos = Math.floor(segTotal)% 60;

    dia.innerHTML = finalDias
    hora.innerHTML = (finalHora)
    minuto.innerHTML = (finalMinutos)
    segundo.innerHTML = (finalSegundos)
}

function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

/*Executando a função*/

countDown();

/*Aqui vc coloca o intervalo de tempo que vc quer passando na tela, como quero em segundos eu preciso 
dividir por 1000, uma vez que o sistema adota o "tempo" como milesegundos.*/

setInterval(countDown, 1000)