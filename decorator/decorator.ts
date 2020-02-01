// @logarClasse
// @logarClasseSe(false)
@decorator('Franklin', 123)
class EletroDomertico {
    constructor() {
        console.log('novo...')
    }
}

function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) { }

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

// function logarClasseSe(valor: boolean) {
//     return valor ? logarClasse : null
// }

function decorator(a: string, b: number) {
    return function (_: Function): void {
        console.log(a + ' ' + b)
    }
}