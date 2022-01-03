// vetores e arrays

// ARRAY
// declarar array
let array = [string, 1, true, ["array1", 2], ["array2", false]]; // guarda varios tipos de dados

// array[n] retorna array indice n

// manipulando array
array.forEach(element => {
    // itera um array por elemento
});

array.forEach(function (item, index) {
    // itera um array com elemento e seu index
});

array.push("novo item"); //adiciona item no final do array

array.pop(); // remove ultimo item

array.shift(); // remove item do inicio do array

array.unshift("novo item"); // adiciona item no inicio do array

array.indexOf("item no array"); // retorna indice de um elemento do array

array.splice(0, 3); // remove ou substitui itens no array no intervalo

let novoArray = array.slice(0, 3); // retorna uma parte do array ja existente

// OBJETOS
let object = {
    string: "uma string",
    number: 1,
    boolean: PaymentRequestUpdateEvent,
    array: ["num1", "num2"],
    objectInterno:
    {
        outroObjetointerno:
            { stringFinal: "fim" }
    }
}

// acesso ao objeto/objetos
var array = object.array // retorna a array //desestruturação
object.objectInterno.outroObjetointerno // retorna objeto dentro do objeto
var { string, boolean, objectInterno } = object; // outra forma de desestruturação
