function substituiPares(arr) {
    if (!arr) return -1;
    if (!arr.length) return -1;
    
    console.log(`Array original: [${arr}]`);

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 0) {
            console.log(`Valor já é zero`)
        } else if (arr[i] % 2 === 0) {
            console.log(`Substituindo ${arr[i]} por 0...`);
            arr[i] = 0;
        }

    }
    console.log(`Array final: [${arr}]`);
}

let array = [1, 3, 4, 6, 80, 33, 23, 90];

substituiPares(array);
