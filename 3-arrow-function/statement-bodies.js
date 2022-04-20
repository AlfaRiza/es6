// ES6
let nums = [5, 20, 4, 328, 32, 13, 98]
let genap = [];
nums.forEach(item => {
    if (item % 2 === 0)
        genap.push(item)
});

console.log(genap);

let ganjil = [];
nums.forEach(item => {
    if (item % 2 != 0)
        ganjil.push(item)
});

console.log(ganjil);