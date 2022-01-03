function filtraPares(arr) {
    return arr.filter(callBack);
}

function callBack(item) {
    return item % 2 === 0;
}

const meuArray = [1, 2, 6, 8, 12, 15, 17, 20];

console.log(filtraPares(meuArray));
