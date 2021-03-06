"use strict";
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    aplicarDesconto() {
        let valorDesconto = this.preco * this.desconto;
        return valorDesconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.aplicarDesconto()} (${this.desconto * 100}% off)`;
    }
}
const produto01 = new Produto("Caneta Bic Preta", 0.2);
produto01.desconto = 0.06;
console.log("### Produto 01 ###");
console.log(produto01);
const produto02 = new Produto("Carderno Escolar", 18.90, 0.2);
console.log("### Produto 02 ###");
console.log(produto02);
console.log("### Produto 02 Resumo ###");
console.log(produto02.resumo());
produto02.aplicarDesconto();
//# sourceMappingURL=produto.js.map