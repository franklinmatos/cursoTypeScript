"use strict";
class Carro {
    constructor(marcar, modelo, velocidadeMaxima = 155) {
        this.marcar = marcar;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    // private alterarVelocidadeMaxima(delta: number): number {
    //alterado para protected para poder ser sobrescrito pelas classes que herdam de Carro
    // como no exemplo abaixo da classe Ferrari
    alterarVelocidadeMaxima(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidadeMaxima(5);
    }
    frear() {
        return this.alterarVelocidadeMaxima(-5);
    }
}
// const carro1 = new Carro("Ford", "KA", 155)
// console.log("Velocidade ---> ", carro1.acelerar());
// Array(50).fill(0).forEach(() => (
//     console.log("Acelerando Velocidade ---> ", carro1.acelerar())
// ))
// // console.log("Desacelerando Velocidade ---> ", carro1.frear());
// Array(11).fill(0).forEach(() => (
//     console.log("Desacelerando Velocidade ---> ", carro1.frear())
// ))
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidadeMaxima(20);
    }
    frear() {
        return this.alterarVelocidadeMaxima(-15);
    }
}
const ferrari = new Ferrari('F40', 355);
console.log(`${ferrari.marcar} ${ferrari.modelo}`);
console.log('ACELERANDO ---> ', ferrari.acelerar());
console.log('ACELERANDO ---> ', ferrari.acelerar());
console.log('ACELERANDO ---> ', ferrari.acelerar());
console.log('FREANDO <<======', ferrari.frear());
console.log('FREANDO <<======', ferrari.frear());
console.log('FREANDO <<======', ferrari.frear());
//# sourceMappingURL=carro.js.map