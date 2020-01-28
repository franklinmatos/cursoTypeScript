"use strict";
function saudarComOla(pessoa) {
    console.log('Olá: ' + pessoa.nome);
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
saudarComOla({ nome: 'Jonas', idade: 27 });
saudarComOla({ nome: 'Adriana', idade: 25, altura: 1.85 });
//# sourceMappingURL=interfaces.js.map