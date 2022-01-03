// com this.
const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value; // pega o value de thisArg(maca ou laranja)
    }, thisArg);
}

const nums1 = [1, 2];

console.log(`this => maça ${mapComThis(nums1, maca)}`);
console.log(`this => laranja ${mapComThis(nums1, laranja)}`);

// sem this.
function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums2 = [2,4,6,8,10];

console.log(`sem this ${mapSemThis(nums2)}`);