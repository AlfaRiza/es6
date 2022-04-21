class Berjalan {
    constructor(id, energi) {
        this.id = id;
        // this.energi = energi;
        this.pakeKaki(energi)
    }

    pakeKaki(energi) {
        this.energi = energi;
    }
}

let init = new Berjalan();

console.log(init.pakeKaki(1, 5))