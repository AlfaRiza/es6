// ES6
obj = {
    temp: 5,
    number: function (a) {
        return a - this.temp;
    },

}

console.log(obj.number(3))

// ES5
let data = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(this.data)