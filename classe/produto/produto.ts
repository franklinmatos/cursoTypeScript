class Produto {

    constructor(public nome: string, public preco: number, public desconto: number = 0) {
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }

    public aplicarDesconto(): number {
        let valorDesconto: number = this.preco * this.desconto;
        return valorDesconto
    }

    public resumo(): string {
        return `${this.nome} custa R$${this.aplicarDesconto()} (${this.desconto * 100}% off)`
    }
}

const produto01 = new Produto("Caneta Bic Preta", 0.2);
produto01.desconto = 0.06
console.log("### Produto 01 ###");
console.log(produto01);

const produto02 = new Produto("Carderno Escolar", 18.90, 0.2);
console.log("### Produto 02 ###");
console.log(produto02);
console.log("### Produto 02 Resumo ###");
console.log(produto02.resumo());
produto02.aplicarDesconto();