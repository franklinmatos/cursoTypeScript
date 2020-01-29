"use strict";
function saudarComOla(pessoa) {
    console.log('Olá: ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoaTeste = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log(' Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoaTeste);
mudarNome(pessoaTeste);
saudarComOla(pessoaTeste);
// saudarComOla({nome: 'Jonas',idade: 27})
// saudarComOla({nome: 'Adriana',idade: 25, altura: 1.85})
pessoaTeste.saudar('Skywalker');
//implementando interfaces
class Cliente {
    constructor() {
        this.nome = '';
    }
    saudar(sobrenome) {
        console.log('Ola, meu nome é ' +
            this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
let potencia;
potencia = function (base, exp) {
    // essas 2 formas geram o mesmo resultado
    //  return Math.pow(base,exp)
    //return base**exp
    return Math.pow(base, exp);
};
console.log(potencia(2, 10));
console.log(Math.pow(2, 10));
console.log(Math.pow(2, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    c() { }
    a() { }
    b() { }
}
class AbstradaABD {
    a() { }
    b() { }
}
//# sourceMappingURL=interfaces.js.map