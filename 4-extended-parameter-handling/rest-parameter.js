// ES6
function hitung(a, b, ...etc) {
    return a * b * etc.length;
}

console.log(hitung(1, 2, 3, 4))


// ES5
function jumlah(a, b) {
    var etc = Array.prototype.slice.call(arguments, 2)
    return a + b + etc.length;
}

console.log(jumlah(1, 2, 3, 4))