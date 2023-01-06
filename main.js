// CHAVES

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

let texto = "ROBESVALDO TESTOU O DECODIFICADOR";
let textoLista = [];

// console.log(texto.replace("O", o));

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

// com o toString, precisamos utilizar do replace para substituir os separadores.
// /,/g captura todas as vírgulas e substitui
// console.log(textoLista.toString().replace(/,/g, ''));

// Já com o join, não precisamos fazer o uso do replace, pois já conseguimos passar o parâmetro para os separadores desejados
console.log(textoLista);
console.log(textoLista.join(''));