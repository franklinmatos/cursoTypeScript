"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));
//
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
// console.log(echoMelhorado(27).length) // exibe erro na função length
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
//# sourceMappingURL=generics.js.map