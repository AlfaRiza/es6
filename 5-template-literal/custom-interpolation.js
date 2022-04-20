// ES 6
let profile = {
    name: "Alfa",
    tahun_lahir: 1998,
    email: 'alfariza@refactory.id',
    tahun_sekarang: 2022,
}

console.log(`Hello my name is : ${profile.name}, I ${profile.tahun_sekarang - profile.tahun_lahir} years old, you can contact me in ${profile.email}`);

// ES5
// console.log(["Hello my name is : ", ""], profile.name)