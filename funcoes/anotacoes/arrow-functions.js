/* 
//funçao equivalente a...
const helloWorld = function () {
    return "Hello World";
}
//...essa que é equivalente a...
const helloWorld = () => { return "Hello World"; }
//...essa
const helloWorld = () => "Hello World"; 

// mais de um parametro
const soma = (a,b) => a+b;
soma(4,6)

// um unico parametro
const valor = a => a;
valor(4);

funções fazem hoisting
pode chamar funçao antes de declarar
soma()
função soma(){}

função arrow não
primeiro declara a função, depois chama

outras restrições:
- this sempre é global
- nao existe arguments
- constructor nao pode ser utilizado
*/