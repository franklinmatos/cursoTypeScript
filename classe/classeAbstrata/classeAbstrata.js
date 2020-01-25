"use strict";
// classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    gerResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => (t + a));
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => (t * a));
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log('Resultado = ', c1.gerResultado());
c1 = new Multiplicacao();
c1.executar(3, 75);
console.log('Resultado = ', c1.gerResultado());
//# sourceMappingURL=classeAbstrata.js.map
// aula construtor privado e singleton
class Unico {
    constructor() {
    }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
// const errado = new Unico()
//construtor privado não permide instanciar o objeto da classe
console.log(Unico.getInstance().agora());
// Aula atributos somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// console.log(turboHelice)
// forma errada, vai gerar um erro na própria IDE
// turboHelice.modelo = 'DC-80'
// turboHelice.prefixo = 'PT-PRF'
// com o modelo apenas leitura não permite que seja alterado os valores dos atributos que 
// são somente leitura gerando erro na ide porém exibe o resultado com a alteração
console.log(turboHelice);
//# sourceMappingURL=classeAbstrata.js.map