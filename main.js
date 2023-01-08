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
    texto = texto.toLowerCase();

    for (let i = 0; i < texto.length; i++) {
        textoLista.push(texto.charAt(i));
    }

    for (let i = 0; i < textoLista.length; i++) {
        if (textoLista[i] === "a") {
            textoLista[i] = "ai";
        } else if (textoLista[i] === "e") {
            textoLista[i] = "enter";
        } else if (textoLista[i] === "i") {
            textoLista[i] = "imes";
        } else if (textoLista[i] === "o") {
            textoLista[i] = "ober";
        } else if (textoLista[i] === "u") {
            textoLista[i] = "ufat";
        }
    }
    
    document.getElementById('mensagem').remove();
    document.getElementById('resultado').innerHTML += "<div id='mensagem'><div class='nova-mensagem'><span id='codificacao'>" + textoLista.join('') + "</span></div> <div><button class='botao-copiar' onClick='copiarTexto()'>Copiar</button></div></div>";
}

function descriptografar() {
    texto = "";
    textoLista = [];

    texto = document.getElementById('texto').value;
    texto = texto.toLowerCase();

    for (let i = 0; i < texto.length; i++) {
        textoLista.push(texto.charAt(i));
    }

    for (let i = 0; i < textoLista.length; i++) {
        if (textoLista[i] === "a" && textoLista[i+1] === "i") {
            textoLista[i] = "a";
            textoLista.splice(i+1, 1);
        } else if (textoLista[i] === "e" && textoLista[i+1] === "n" && textoLista[i+2] === "t" && textoLista[i+3] === "e" && textoLista[i+4] === "r") {
            textoLista[i] = "e";
            textoLista.splice(i+1, 4);
        } else if (textoLista[i] === "i" && textoLista[i+1] === "m" && textoLista[i+2] === "e" && textoLista[i+3] === "s") {
            textoLista[i] = "i";
            textoLista.splice(i+1, 3);
        } else if (textoLista[i] === "o" && textoLista[i+1] === "b" && textoLista[i+2] === "e" && textoLista[i+3] === "r") {
            textoLista[i] = "o";
            textoLista.splice(i+1, 3);
        } else if (textoLista[i] === "u" && textoLista[i+1] === "f" && textoLista[i+2] === "a" && textoLista[i+3] === "t") {
            textoLista[i] = "u";
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