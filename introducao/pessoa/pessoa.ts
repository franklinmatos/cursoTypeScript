class Pessoa {
    private _idade: number = 0



    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <= 100) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
console.log(pessoa1.idade)
pessoa1.idade = 35
console.log(pessoa1.idade)
pessoa1.idade = 0
console.log(pessoa1.idade)

// Atributos e métodos estáticos
class Matematica {
    static PI = 3.1416

    static areaCirculo(raio: number): number {
        return this.PI * raio * raio
    }
}

// const mi = new Matematica()
// mi.PI = 4.2
// console.log(mi.areaCirculo(4))

console.log(Matematica.areaCirculo(4))