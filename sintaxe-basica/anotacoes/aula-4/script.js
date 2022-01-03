// estruturas condicionais

var jogador1 = 0;
var jogador2 = 0;
var placar;
// IF´s e ELSE

if (jogador1 > 0) {
    // jogador 1 marcou gol
} else if (jogador2 > 0) {
    // jogador 2 marocu gol
} else {
    // ninguem marcou ponto
}

// if dentro de outro, aninhamento/ninho de if´s

// if ternario (uma linha)
jogador1 != -1 && jogador2 != -1 ? console.log("jogadores são validos") : console.log("jogadores não são validos");

// SWITCH

switch (placar) {
    case placar = jogador1 > jogador2:
        //jogador 1 ganhou
        break;
    case placar = jogador1 < jogador2:
        // jogador 2 ganhou
        break;
    default:
    // ninguem ganhou        
}

// estruturas de repetição

let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];
let object = { propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3" }

// FOR
for (let indice = 0; indice <= array.length; indice++) {
    // iterar em cada elemento do array
}

for (indice in array) {
    // percorre cada valor de array, i é valor de indice
}

// com object
for (indice in object) {
    // percorre cada valor de object,  i é as propriedades do objeto
}

// for of

for (let value of array) {
    // itera em cada valor onde value é valor, nao indice
}
// nao funciona com objects
for (value of object.propriedade1) {
    // itera só dentro da propriedade1 dentro de object, uma letra de cada linha
}

// WHILE

var a = 0;
while (a <= 10) {
    a++;
    // incrementa a até a for igual a 10
}

do {
    a++;
    // mesmo que while, mas faz checagem no final
}
while (a <= 10)