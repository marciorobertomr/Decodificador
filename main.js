// CHAVES

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// APRENDIZADO

// com o toString, precisamos utilizar do replace para substituir os separadores.
// /,/g captura todas as vírgulas e substitui
// console.log(textoLista.toString().replace(/,/g, ''));

// Já com o join, não precisamos fazer o uso do replace, pois já conseguimos passar o parâmetro para os separadores desejados

let texto = "";
let textoLista = [];
let botaoCopiar = false;

function criptografar() {

    texto = "";
    textoLista = [];

    texto = document.getElementById('texto').value;

    for (let i = 0; i < texto.length; i++) {
        textoLista.push(texto.charAt(i));
    }

    for (let i = 0; i < textoLista.length; i++) {
        if (textoLista[i] === "A") {
            textoLista[i] = "AI";
        } else if (textoLista[i] === "E") {
            textoLista[i] = "ENTER";
        } else if (textoLista[i] === "I") {
            textoLista[i] = "IMES";
        } else if (textoLista[i] === "O") {
            textoLista[i] = "OBER";
        } else if (textoLista[i] === "U") {
            textoLista[i] = "UFAT";
        }
    }
    
    document.getElementById('mensagem').remove();
    document.getElementById('resultado').innerHTML += "<div id='mensagem'><div class='nova-mensagem'><span id='codificacao'>" + textoLista.join('') + "</span></div> <div><button class='botao-copiar' onClick='copiarTexto()'>Copiar</button></div></div>";
}

function descriptografar() {
    texto = "";
    textoLista = [];

    texto = document.getElementById('texto').value;

    for (let i = 0; i < texto.length; i++) {
        textoLista.push(texto.charAt(i));
    }

    for (let i = 0; i < textoLista.length; i++) {
        if (textoLista[i] === "A" && textoLista[i+1] === "I") {
            textoLista[i] = "A";
            textoLista.splice(i+1, 1);
        } else if (textoLista[i] === "E" && textoLista[i+1] === "N" && textoLista[i+2] === "T" && textoLista[i+3] === "E" && textoLista[i+4] === "R") {
            textoLista[i] = "E";
            textoLista.splice(i+1, 4);
        } else if (textoLista[i] === "I" && textoLista[i+1] === "M" && textoLista[i+2] === "E" && textoLista[i+3] === "S") {
            textoLista[i] = "I";
            textoLista.splice(i+1, 3);
        } else if (textoLista[i] === "O" && textoLista[i+1] === "B" && textoLista[i+2] === "E" && textoLista[i+3] === "R") {
            textoLista[i] = "O";
            textoLista.splice(i+1, 3);
        } else if (textoLista[i] === "U" && textoLista[i+1] === "F" && textoLista[i+2] === "A" && textoLista[i+3] === "T") {
            textoLista[i] = "U";
            textoLista.splice(i+1, 3);
        }
    }

    document.getElementById('mensagem').remove();
    document.getElementById('resultado').innerHTML += "<div id='mensagem'><div class='nova-mensagem'><span id='codificacao'>" + textoLista.join('') + "</span></div> <div><button class='botao-copiar' onClick='copiarTexto()'>Copiar</button></div></div>";
}

function copiarTexto() {
    let textoCopiado = document.getElementById('codificacao').innerHTML;
    navigator.clipboard.writeText(textoCopiado); //Aplica o texto copiado para a área de transferência
}

function limpar() {
    document.getElementById('texto').value = "";
    document.getElementById('mensagem').innerHTML = "<div id='mensagem'><img src='./img/High quality products 1 1.svg' alt='Pessoa desenhada investigando um diamante com o auxilio de uma lupa'><h3>Nenhuma mensagem encontrada</h3><p>Digite um texto que você deseja criptografar ou descriptografar.</p></div>";
}