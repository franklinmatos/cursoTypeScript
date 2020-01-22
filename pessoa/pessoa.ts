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