let modoEscuro = false;
let modoFestaAtivo = false;
let intervaloFesta;
let count = 0;
let alterado = false;
const frase = document.querySelector('h1.titulo');
const barra = document.querySelector('h1.barra');
const botao = document.querySelector('button.mode');
const imagem = document.querySelector('span.lua');
const imagem2 = document.querySelector('span.sol');
const fraseReload = document.querySelector('p.fraseReload');
const body = document.querySelector('body');
const h1Festa = document.querySelector('button.modo-festa');
const balao = document.querySelector('p.balao');
const botaoFugir = document.querySelector('button.tentaClicar');
const luffy = document.querySelector('img.luffy');
const tipoTransformacao = document.querySelector('p.tipoTransformacao');
const passaPorCima = document.querySelector('p.passaPorCima');
const rebentaText = document.querySelector('p.pRebenta');
const footerTextt = document.querySelector('p.footerText');
const contadorBotao = document.querySelector('p.contador')
const alteraCorDoBotao_ = document.querySelector("button.naoPassar")

function alteraCorFundo() {
    // Verifica a cor atual do corpo
    if (!modoEscuro) { // Muda para modo escuro
        document.body.style.backgroundColor = "#2E3440";
        frase.style.backgroundColor = "#D8DEE9";
        frase.style.color = "#2E3440";
        barra.style.backgroundColor = "#88C0D0";
        fraseReload.style.color = "#D8DEE9";
        imagem2.style.backgroundColor = "#D8DEE9";
        imagem2.style.color = "#2E3440";
        imagem.style.display = "none";
        imagem2.style.display = "block";
        tipoTransformacao.style.color = "#D8DEE9";
        passaPorCima.style.color = "#D8DEE9";
        rebentaText.style.color = "#D8DEE9";
        contadorBotao.style.color = "#D8DEE9";
        footerTextt.style.color = "#D8DEE9";
        modoEscuro = true;
    } else {
        // Volta ao estado original
        document.body.style.backgroundColor = "#f0f0f0";
        frase.style.backgroundColor = "chocolate";
        frase.style.color = "#333";
        barra.style.backgroundColor = "rgb(143, 57, 8)";
        fraseReload.style.color = "black";
        imagem.style.backgroundColor = "chocolate";
        imagem.style.color = "#333";
        imagem.style.display = "block";
        imagem2.style.display = "none";
        tipoTransformacao.style.color = "#333";
        passaPorCima.style.color = "#333";
        rebentaText.style.color = "#333";
        contadorBotao.style.color = "#333";
        footerTextt.style.color = "#333";
        modoEscuro = false;
    }
}
function restaurarSite() {

    window.location.href = "index.html";

}
function counterParaExplosão() {
    count++;
    document.querySelector('.containerCounter p').innerText = count;
    let text = document.querySelector('.botao-proibido');
    if (count >= 10) {
        alert("O site vai explodir!");
        setTimeout(1000); // Espera 1 segundo antes de restaurar
        window.location.href = "restaurar.html";
    } else {
        if (count === 1) {
            text.textContent = "Vou deixar passar desta vez...";
        } else if (count === 2) {
            text.textContent = "Já avisei que é proibido!";
        } else if (count === 3) {
            text.textContent = "Para agora ou vais te arrepender!";
        } else if (count === 4) {
            text.textContent = "Isto não está certo...";
        } else if (count === 5) {
            text.textContent = "Estás a brincar com fogo!";
        } else if (count === 6) {
            text.textContent = "Último aviso!";
        } else if (count === 7) {
            text.textContent = "A sério, vais clicar outra vez?";
        } else if (count === 8) {
            text.textContent = "Quase lá...";
        } else if (count === 9) {
            text.textContent = "À 3ª é de vez mas 9 não chegaram...";
        }
    }
}

function moverCursor(event) {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = event.pageX + "px";
    cursor.style.top = event.pageY + "px";
}

function modoFesta() {
    if (!modoFestaAtivo) {
        modoFestaAtivo = true;
        intervaloFesta = setInterval(() => {
            body.style.background =
                `hsl(${Math.random() * 360}, 100%, 70%)`;
        }, 300);
        h1Festa.textContent = "Double Click para desligar o MODO FESTA!";
    } else {
        modoFestaAtivo = false;
        if (modoEscuro) {
            clearInterval(intervaloFesta);
            body.style.background = "#2E3440";
            h1Festa.textContent = "🎉Double click para o MODO FESTA!🎉";
        } else {
            clearInterval(intervaloFesta);
            body.style.background = "#f0f0f0";
            h1Festa.textContent = "🎉Double click para o MODO FESTA!🎉";
        }

    }
}

function rebentarBalao() {
    balao.textContent = "💥";
    setTimeout(() => {
        balao.textContent = "🎈"; // reaparece o balão
    }, 1000);
}

function transformarLuffy() {
    if (luffy.src.endsWith("luffynormal.png")) {
        luffy.src = "images/Gear_2nd_Luffy.png";
        tipoTransformacao.textContent = "Gear 2nd";
    } else if (luffy.src.endsWith("Gear_2nd_Luffy.png")) {
        luffy.src = "images/G3_Luffy.jpg";
        tipoTransformacao.textContent = "Gear 3rd";
    } else if (luffy.src.endsWith("G3_Luffy.jpg")) {
        luffy.src = "images/gear4.png";
        tipoTransformacao.textContent = "Gear 4th";
    } else if (luffy.src.endsWith("gear4.png")) {
        luffy.src = "images/Luffy-Bounce-Man.png";
        tipoTransformacao.textContent = "Gear 4th - Bounce-Man";
    } else if (luffy.src.endsWith("Luffy-Bounce-Man.png")) {
        luffy.src = "images/gear4snake.png";
        tipoTransformacao.textContent = "Gear 4th - Snake-Man";
    } else if (luffy.src.endsWith("gear4snake.png")) {
        luffy.src = "images/g5.png";
        tipoTransformacao.textContent = "Gear 5th - Nika";
    } else {
        luffy.src = "images/luffynormal.png";
        tipoTransformacao.textContent = "Sem transformação";
    }
}

function alteraCorDoBotao() {
    if (!alterado) {
        alteraCorDoBotao_.style.color = "#333";
        alteraCorDoBotao_.style.backgroundColor = "chocolate"
        alterado = true;
    } else {
        alteraCorDoBotao_.style.backgroundColor = "#000000";  /* vermelho chamativo */
        alteraCorDoBotao_.style.color = "white";
        alterado = false;
    }

}