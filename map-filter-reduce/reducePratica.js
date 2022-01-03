//simples
function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        console.log({ prev }); // acumulador
        console.log({ current });
        return prev + current;
    });
}

const arr = [1, 5, 6, 8, 10];

//console.log(somaNumeros(arr));

//saldo
lista = [
    {
        preco: 2,
        nome: 'maçã',
    },
    {
        preco: 30,
        nome: 'roupa',
    },
    {
        preco: 25,
        nome: 'carne',
    },
];

function calculoSaldo(saldoDisponivel, lista) {
    
    return lista.reduce(function (prev, current) {
        console.log({ prev}); // acumulado
        console.log({ current });
        return prev - current.preco;
        
    }, saldoDisponivel); //inicializa com valor de saldo disponivel
}

saldo = 100;

console.log(calculoSaldo(saldo, lista));

