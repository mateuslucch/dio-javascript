function nome(parametros) {
    // instruções
    return; // valor de retorno
}
// obs: variáveis criadas dentro da função tem escopo só dentro da mesma

// funcao anonima
const soma = function (a, b) { // função nao tem nome
    return a + b;
}
// invoca a variavel atribuida
soma(1, 2); //=> 3
soma(5, 4); //=> 9

// funcao autoinvocavel (IIFE)
// invocadas imediatamente logo que o código roda
(
    function () { // pode ser anonima
        let name = "dio";
        return name;
    }
)();
// com parametros
(
    function (a, b) { // pode ser anonima
        return a + b;
    }
)(1, 2);

// callbacks
// função passada como argumento para outra

const calc = function (operacao, num1, num2) {
    return operacao(num1, num2);
}
const soma = function (num1, num2) {
    return num1 + num2;
}
const sub = function (num1, num2) {
    return num1 - num2;
}
const resultSoma = calc(soma, 1, 2); //=> 3
const resultSub = calc(sub, 1, 2); //=> -1


