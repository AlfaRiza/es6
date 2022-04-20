// es6
let profile = ["Alfa Riza", 23, "alfariza@refactory.id"];
let detail = ["Purwodadi", "082260757992"];

let profile_detail = [...profile, ...detail];

console.log(profile_detail);

function tampil(nama, umur, email, ...detail) {
    return `Nama : ${nama} \nUmur : ${umur}\nEmail : ${email}\nAsal : ${detail[0]}\nWa : ${detail[1]}`
}

console.log(tampil(...profile, ...detail));

let string = "Grobogan";

console.log(...string);

// ES5
var profiledetail = profile.concat(detail);
console.log(profiledetail);

function show(nama, umur, email) {
    var det = Array.prototype.slice.call(arguments, 2);
    return "Nama : " + nama + "\nUmur : " + umur + "\nEmail : " + email + "\nAsal : " + det[0] + "\nWa : " + det[1]
}
console.log(show("Alfa", 22, "alfahmada@gmail.com"));

console.log(string.split(""))