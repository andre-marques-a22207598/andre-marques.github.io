let modoEscuro = false;
let count = 0;
const frase = document.querySelector('h1.titulo');
const barra = document.querySelector('h1.barra');
const botao = document.querySelector('button.mode');
const imagem = document.querySelector('span.lua');
const imagem2 = document.querySelector('span.sol');
function alteraCorFundo() {
    // Verifica a cor atual do corpo
    if (!modoEscuro) { // Muda para modo escuro
        document.body.style.backgroundColor = "#2E3440";
        frase.style.backgroundColor = "#D8DEE9";
        frase.style.color = "#2E3440";
        barra.style.backgroundColor = "#88C0D0";
        /*botao.style.color = "#2E3440";
        botao.style.backgroundColor = "#D8DEE9";*/
        imagem2.style.backgroundColor = "#D8DEE9";
        imagem2.style.color = "#2E3440";
        imagem.style.display = "none";
        imagem2.style.display = "block";
        modoEscuro = true;
    } else {
        // Volta ao estado original
        document.body.style.backgroundColor = "#f0f0f0";
        frase.style.backgroundColor = "chocolate";
        frase.style.color = "#333";
        barra.style.backgroundColor = "rgb(143, 57, 8)";
        /*botao.style.color = "#333";
        botao.style.backgroundColor = "chocolate";*/
        imagem.style.backgroundColor = "chocolate";
        imagem.style.color = "#333";
        imagem2.style.display = "none";
        imagem.style.display = "block";
        modoEscuro = false;
    }
}
function restaurarSite() {

    window.location.href = "index.html";

}
/*function counterParaExplosão() {
    count++;
    document.querySelector('.containerCounter p').innerText = count;
    if (count >= 10) {
        alert("O site vai explodir!");
        setTimeout(1000); // Espera 1 segundo antes de restaurar
        window.location.href = "restaurar.html";
    }
}*/
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

