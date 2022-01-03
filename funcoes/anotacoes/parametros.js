// valores padrao
/* 
function functionH(argumento) {
    return argumento;
}
functionH(argumento);]
*/


// arguments
// da uma lista de todos argumentos passados
function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) { max = arguments[i] };
    }

    return max;
}

console.log(findMax(1, 2, 3, 6, 90, 1)); // =>90


// Arrays
// spread
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); //=> 6 //  sum(...numbers) combina elementos em um array

// rest
function confereTamanho(...args) { // elementos independentes se tornam um array
    console.log(args.length);
}
confereTamanho(); // => 0
confereTamanho(1, 2); //=> 2 
confereTamanho(3, 4, 5); //=> 3


//object destructuring (popular)
const user = {
    id: 42,
    displayName: "jDoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
};

function userId({ id }) {
    return id;
}

function getFullName({ fullName: { firstName: first, lastName: last } }) {
    return `${first} ${last}`;
}
console.log(userId(user)); //=> 42
console.log(getFullName(user)); //=> John Doe

