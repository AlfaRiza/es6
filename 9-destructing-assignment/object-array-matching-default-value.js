// ES6
var obj = { nama: "Alfa" }
var list = ["Alfa"]
var { nama, lengkap = "Riza" } = obj
var [x, y = "Riza"] = list

console.log(nama);
console.log(lengkap);
console.log(x);
console.log(y);