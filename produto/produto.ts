class Produto{
    
    constructor(public nome: string, public  preco: number, public  desconto: number = 0 ){
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }
}

const produto01 = new Produto("Caneta Bic Preta", 4.99);
produto01.desconto = 0.06
console.log("### Produto 01 ###");
console.log(produto01);

const produto02 = new Produto("Carderno Escolar",18.99,4.50);
console.log("### Produto 02 ###");
console.log(produto02);