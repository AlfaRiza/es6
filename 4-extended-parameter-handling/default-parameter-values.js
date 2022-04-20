// ES6
function hitung(panjang, lebar = panjang) {
    return panjang * lebar;
}

console.log(hitung(2))

// ES5
function bagi(panjang, lebar) {
    if (lebar == undefined) {
        lebar = panjang;
    }
    return panjang / lebar;
}

console.log(bagi(4));