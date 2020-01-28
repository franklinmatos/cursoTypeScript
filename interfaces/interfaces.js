"use strict";
function saudarComOla(pessoa) {
    console.log(pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoaTeste = {
    nome: 'João',
    idade: 27
};
saudarComOla(pessoaTeste);
mudarNome(pessoaTeste);
saudarComOla(pessoaTeste);
//# sourceMappingURL=interfaces.js.map