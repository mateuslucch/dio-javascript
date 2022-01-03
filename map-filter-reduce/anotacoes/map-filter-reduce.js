/*
MAP
Map nao altera o array original

uso:
array.map(callback,thisArg);

callback = função que vai ser aplicada em cada elemento
thisArg = opcional, valor de this dentro da função

ex:
map vs forEach

array.map((item) => item*2) arrow function // retorna nova array

array.forEach((item) => item*2); // retorno undefined


FILTER

callback = função que vai ser aplicada em cada elemento
thisArg = opcional, valor de this dentro da função
uso:
array.filter(callback, thisArg)

ex:
const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

frutas.filter((fruta) => fruta.includes('maçã')) //=> ['maçã fuji', 'maçã verde'] retorna elementos que contém 'maçã'


REDUCE

não retorna array, só valor unico (string numero...)

uso:
array.reduce(callbackFn, initialValue)

callback = função a ser executada a partir do acumulador
thisArg = valor sobre o qual o retorno final irá atuar

const callbackFn= function(accumulator, currentValue, index, array){
    //do something
}





 */