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
// Atributos e métodos estáticos
class Matematica {
    static areaCirculo(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const mi = new Matematica()
// mi.PI = 4.2
// console.log(mi.areaCirculo(4))
console.log(Matematica.areaCirculo(4));
//# sourceMappingURL=pessoa.js.map