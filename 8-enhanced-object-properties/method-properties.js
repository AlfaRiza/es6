let obj = {
    nama: "Alfa",
    umur: 23,
    energi: 100,
    jalan(item) {
        return this.energi = this.energi - item;
    }
}

console.log(obj);
obj.jalan(20);
console.log(obj);