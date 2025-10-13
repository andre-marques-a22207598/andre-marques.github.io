//A. Variáveis
const p = document.querySelector('#passa');

const pPinta = document.querySelector('#pinta p');
const botoes = document.querySelectorAll('#pinta > button')


let toggleStatus = false;
let rgb;

let iterador = 0;
const cores = ['red', 'blue', 'purple', 'lightblue', 'yellow'];
const inputcolorir = document.querySelector("#escreve input")

const input2 = document.querySelector('#escolher input');
const botao = document.querySelector('#escolher button');

const button_contador = document.querySelector('#contador');
const span_contagem = document.querySelector('#contagem');

let countAutomatico = 0;
const spanCounter = document.querySelector("#contadorAutomatico");

//B. Event Handlers

function toggle(toggleStatus) {
    if (toggle) {
        p.textContent = "1. Obrigado por passares!";
    } else {
        p.textContent = "1. Passa por aqui!"
    }
}
function alteraCor(rgb){
    pPinta.style.color = rgb;
}
function colorir() {
    inputcolorir.style.backgroundColor = cores[iterador];
    iterador = (iterador + 1) % cores.length;
}

function colorirFundo() {
    document.querySelector("body").style.backgroundColor = input2.value;
}

if (!localStorage.getItem('contador')) {
    localStorage.setItem('contador', 0);
}
span_contagem.textContent = localStorage.getItem('contador');

function contar() {
    let contador = localStorage.getItem('contador');
    contador++;
    span_contagem.textContent = contador;
    localStorage.setItem('contador', contador);
}


//C. Event Listeners

p.onmouseover = () => toggle(true);
p.onmouseout = () => toggle(false);

botoes[0].addEventListener('click', () => alteraCor("red"))
botoes[1].addEventListener('click', () => alteraCor("green"))
botoes[2].addEventListener('click', () => alteraCor("blue"))

//inputcolorir.onkeydown = colorir;
inputcolorir.addEventListener('keydown', () => colorir());
botao.onclick = colorirFundo;

button_contador.addEventListener('click', () => contar());




function contarAutomatico() {
    spanCounter.textContent = ++countAutomatico;
}

setInterval(contarAutomatico, 1000);