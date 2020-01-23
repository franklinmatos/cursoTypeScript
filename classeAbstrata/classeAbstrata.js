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
    constructor() { }
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
//# sourceMappingURL=classeAbstrata.js.map