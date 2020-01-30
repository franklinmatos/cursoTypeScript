"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
// console.log(echoMelhorado(27).length) // exibe erro na função length
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
//Generics disponíveia na API
const avaliacoes = [10, 7, 6];
avaliacoes.push(8.8);
// avaliacoes.push('5.5') assim que eu coloquei o tipo no array a string 5.5 foi invalidada pela API
console.log(avaliacoes);
//funções
function imprimir(args) {
    args.forEach(element => (console.log(element)));
}
imprimir([1, 2, 3]);
imprimir([4, 5, 6]);
imprimir(['Ana', 'João', 'Maria']);
imprimir([
    { nome: 'Carlos', idade: 22 },
    { nome: 'Antonio', idade: 33 },
    { nome: 'José', idade: 44 }
]);
imprimir([
    { nome: 'Carlos', idade: 22 },
    { nome: 'Antonio', idade: 33 },
    { nome: 'José', idade: 44 }
]);
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom ','Dia').executar())
// console.log(new OperacaoBinaria(3,7).executar())
// console.log(new OperacaoBinaria(3,' - Opa').executar())
// console.log(new OperacaoBinaria({},{}).executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 7).executar());
console.log(new SomaBinaria(1, 3).executar());
//# sourceMappingURL=generics.js.map