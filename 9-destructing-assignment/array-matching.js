// ES6
let data = ["M.", "Alfa", "Riza"]

console.log(data);

let [awal, , akhir] = data;
[awal, akhir] = [akhir, awal]
console.log([awal, akhir])

// let []

let depan = data[0];
let belakang = data[2];

let temp = depan;
depan = belakang;
belakang = temp;

console.log([depan, belakang])