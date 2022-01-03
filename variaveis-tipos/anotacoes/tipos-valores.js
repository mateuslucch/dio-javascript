let um = "um";
console.log(typeof (um)); // retorna tipo da variavel
um = 1; // posso reatribuir outro tipo de variavel
console.log(typeof (um));


/*
Data types
- Primitive Types:
    numbers
    strings
    boolean
    trivial/other data types:
    null
    undefined
- Composite/Non-Primitive Types
    objects
    arrays
___________________

- Strings
"texto" ou 'texto'
*/
let firstName = "joao";
let lastName = "luiz";

//concatenações
let todosNomes = (`${firstName} ${lastName}`) //=> "joao luiz" concatenação

// dando enter entr variaveis
todosNomes = (`${firstName} 

${lastName}`)
//=> "joao 

// luiz" concatenação

let concatenado = firstName.concat(lastName); //=> "joaoluiz" funcao concat()
concatenado = firstName + " " + lastName; //=>  "joao luiz"
//Obs: \n pula linha, \n\n pula duas linhas

concatenado.length; //=> 8, retorna numero de caracteres da string
let exemplo = new String("blalalb") // declarar string com letra maiuscula é objeto, raramente usa

firstName[1]; // retorna caractere na posição 1

//Obs: imprimir aspas faz "\"" => "

let frase = "Olá, tudo bem?";
frase.split(""); //=> "O","l","á"...
frase.split(" "); //=> "Olá," , "tudo" , "bem?"

frase.includes("tudo"); //=> "true" tem palavra tudo
frase.startsWith("O"); //=> "true" começa com O
frase.endsWith("?"); //=> "true"  termina com ?
let stringModificada = frase.replace(",", "!"); //=> troca "," por "!"


//numeros
// metodos Math (object)
let num = 100;

Math.PI; // retorna valor de pi
Math.floor(1.666); // => "1"  arredonda pra baixo
Math.ceil(1.66); // => "2"  arredonda pra cima

// conversao
num.toString() // converte num para string


// booleanos
// true or false... nao mais que isso
let validation = 3 === 0; //=> "false"
validation = 3 === 3; //=> "true"
validation = 3 > 4; //=> "false"
validation.toString(); // retorna a bool em string


// arrays (vetores)
// declaração
let array = [];
//let array = new Array(); // nao muito comum
array.push(3); //=>[3] adiciona valor 3 no final do array
array.push(2); //=>[3,2] adiciona valor 2 no final
array.pop(); //=> [3] remove ultimo elemento
array.shift() //=> [] remove primeiro elemento
array.unshift(1) //=> [1] adiciona valor no começo
array.includes(3) //=> false nao possui valor 3
array.every(item => item === 1) //=> true todos valores são 1
array.reverse(); //=> inverte valores


// objetos
// tipo chave e valor
let obj = {
}
// adicionado chaves e valores
obj.name = "julia"; //=> adiciona chave name: com valor "julia"
obj.age = 20; //=> adiciona chave age: com valor 20

Object.values(obj); //=> ["julia",20] apresenta valores do objeto
Object.keys(obj); //=> ["name","age"] apresenta chaves

// declarando com chaves e seus valores
let person = {
    name: "julia",
    age: "20"
};

person.name; //=> "julia" retorna valor da chave name
person["name"]; //=> "julia" retorna valor da chave name

person["numberOfSiblings"] = 3; //=> adiciona chave com valor 3

let mom = "name of mom";
person[mom] = "maria"; //=> cria chave usando valor de mom e valor "maria"


// empty(vazio, zero), null(não existe) e undefined
abacaxi; //=> undefined nao foi definido
let abacaxi; //=> undefined , declarou mas nao deu valor
let abacaxi = ""; //=> empty declarou e deu valor vazio, variavel é string
abacaxi = null; //=> null, variavel vira objeto

let fruta =  abacaxi; //=> null

