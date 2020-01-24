"use strict";
// Exercício 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }
//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log("BiBi");
    }
    acelerar(valor) {
        this.velocidade += valor;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class Objeto2D {
    constructor() {
        this.altura = 0;
        this.base = 0;
    }
}
// var objeto2D = {
//     base: 0,
//     altura: 0
// }
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
// var retangulo = Object.create(objeto2D)
const retangulo = new Retangulo;
retangulo.base = 5;
retangulo.altura = 7;
// retangulo.area = function () {
//     return this.base * this.altura
// }
console.log("Área do Retangulo = ", retangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(nome) {
        if (nome.length >= 3) {
            this._primeiroNome = nome;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const estagiario = new Estagiario;
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafios.js.map