/* 
original as string
some awesome var

camel case
someAwesomeVar

snake case
some_awesome_var

kebab case
some-awesome-var

pascal case
SomeAwesomeVar

upper case snake case
SOME_AWESOME_VAR
 */

var a = 1;
var b = 2;

if (a === 1) {
    let b = 12; // inside "if" scope, different from var b
    var a = 11; // global scope
    b = 22; // nao pode redeclarar dentro do escopo, mas pode reatribuir
// LET É O IDEAL

    console.log(a); // 11
    console.log(b); // 22 
}
console.log(a); // 11
console.log(b); // 2 

//HOISTING: atribuir valor a variavel antes de declarar
numberOne = 1;
console.log(numberOne);
var numberOne; // declara depois de atribuir
// se declarar como let, vai dar erro, deve declarar antes de atribuir

// constantes
// upper case snake case 
const FIRST_NAME = "Stephany"  // const deve ser declarada e atribuida no inicio
FIRST_NAME = "mateus" // vai dar erro, constante nao pode ser reatribuida

//resumo
// var --> global ou local, redeclarar, reatribuir, hoisting
// const --> bloco
// let --> bloco, reatribuir (MAIS USADA QUE VAR)

