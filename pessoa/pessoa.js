"use strict";
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 100) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
console.log(pessoa1.idade);
pessoa1.idade = 35;
console.log(pessoa1.idade);
pessoa1.idade = 0;
console.log(pessoa1.idade);
//# sourceMappingURL=pessoa.js.map