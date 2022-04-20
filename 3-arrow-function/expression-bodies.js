// ES6
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let genap = arr.filter(item => {
    return item % 2 == 0;
});

console.log(genap);

// ES5
let ganjil = arr.filter(function (item) {
    return item % 2 != 0;
});

console.log(ganjil);