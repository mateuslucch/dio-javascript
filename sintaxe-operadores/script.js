
function comparaNumeros(num1, num2) {
    
    if (!num1 || !num2) { return "Defina dois números!"; }

    const primeiraFrase = criaPrimeirFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeirFrase(num1, num2) {

    let primeiraFrase = `Os números ${num1} e ${num2}`;
    let simNao = 'não';

    if (num1 === num2) {
        simNao = '';
    }

    return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {

    const soma = num1 + num2;

    let comparaDez = "menor";
    let comparaVinte = "menor";

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) { comparaDez = "maior"; }

    if (compara20) { comparaVinte = "maior"; }

    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(1, 1));