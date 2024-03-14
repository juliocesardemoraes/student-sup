const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const objetivo = '02 jun 2022'

function countDown(){
    const dataObj = new Date(objetivo)
    const dataHoje = new Date()

    const segTotal = (dataObj - dataHoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60 ) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = checar(finalHoras)
    minuto.innerHTML = checar(finalMinutos)
    segundo.innerHTML = checar(finalSegundos)
}

function checar( tempo ){
    return tempo < 10? `${tempo}` : tempo
}

countDown();
setInterval(countDown, 1000)


var music = new Audio();
music.src = "finalsMusic.mp3";

function Play(){
    music.play();
}

function Stop(){
    music.pause();
}


function Select(selector){
    var element = document.querySelector(selector);
    element.classList.toggle('selectedCard')
}

function Destacar2(){
    var destaque2 = document.getElementsByClassName('imgRoupas');
    destaque2 = Array.from(destaque2);

    for(let i = 0; i < destaque2.length; i++){
        destaque2[i].classList.toggle('destacarRoupas');
    }
}

function getProducts(){
    fetch('http://localhost:3000/produtos').then( (response) => response.json()).then( (dados) => {
        console.log(dados);

     
    });

}

getProducts();
setInterval(Destacar2, 1500);   