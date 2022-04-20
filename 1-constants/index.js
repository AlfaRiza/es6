// declare const in ES6
const konstanta = 123;
console.log(konstanta);

// declare const in ES5
// with object
Object.defineProperty(typeof global === "object" ? global : window, "konstanta", {
    value: 120,
    enumerable: true,
    writable: false,
    configurable: false
})

console.log(konstanta);