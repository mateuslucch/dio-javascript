
//set tem valores unicos, nao podem ser repetidos
const mySet = new Set();

mySet.add(1); // adiciona valor 1
mySet.add(5);

mySet.has(1); //=> true
mySet.has(3); //=> false

mySet.delete(5); // remove valor 5

/*
 set vs array
possui valores unicos
em vez de "length", consulta numero de registro usando "size"
nao possui metodos map, filter, reduce, etc
*/
