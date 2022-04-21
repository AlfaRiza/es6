// ES6
function quux() {
    return 12;
}
let obj = {
    foo: "bar",
    ["baz" + quux()]: 42
}

console.log(obj);

// ES5
var objek = {
    foo: "bar"
};
objek["baz" + quux()] = 42;

console.log(objek);