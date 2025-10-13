//A. Variáveis
const p = document.querySelector('#passa');

const pPinta = document.querySelector('#pinta p');
const botoes = document.querySelectorAll('#pinta > button')



let rgb;

let iterador = 0;
const cores = ['red', 'blue', 'purple', 'lightblue', 'yellow'];
const inputcolorir = document.querySelector("#escreve input")

const button_contador = document.querySelector('#contador');
const span_contagem = document.querySelector('#contagem');




//B. Event Handlers

function toggle(toggleStatus) {
    if (toggleStatus) {
        p.textContent = "1. Obrigado por passares!";
    } else {
        p.textContent = "1. Passa por aqui!";
    }
}
function alteraCor(rgb){
    pPinta.style.color = rgb;
}

function colorir() {
    inputcolorir.style.backgroundColor = cores[iterador];
    iterador = (iterador + 1) % cores.length;
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

p.addEventListener('mouseover', () => toggle(true));
p.addEventListener('mouseout', () => toggle(false));

botoes[0].addEventListener('click', () => alteraCor("red"))
botoes[1].addEventListener('click', () => alteraCor("green"))
botoes[2].addEventListener('click', () => alteraCor("blue"))

//inputcolorir.onkeydown = colorir;
inputcolorir.addEventListener('keydown', () => colorir());


button_contador.addEventListener('click', () => contar());


//----------------------------2.0-------------------------//

document.querySelector('#escolher select').onchange = function() {
    document.querySelector("body").style.backgroundColor = this.value;
}

const input_nome = document.querySelector('#nome');
const input_idade = document.querySelector('#idade');
const p_mostrarTexto = document.querySelector('#mostrarTexto'); 
const form = document.querySelector('#form');

function criarTexto(event) {
    event.preventDefault();
    if (input_nome.value == '' && input_idade.value == '') {
        p_mostrarTexto.textContent = 'Dados inválidos';
    } else {
        p_mostrarTexto.textContent = `Olá, ${input_nome.value} tem ${input_idade.value}!`;
    }
}

form.addEventListener('submit', criarTexto);

let countAutomatico = 0;
const spanCounter = document.querySelector("#contadorAutomatico");
function contarAutomatico() {
    spanCounter.textContent = ++countAutomatico;
}

setInterval(contarAutomatico, 1000);