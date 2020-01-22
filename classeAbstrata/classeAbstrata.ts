
// classe abstrata
abstract class Calculo{
    protected resultado: number= 0

    abstract executar(...numeros: number[]): void

    gerResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo{
    executar(...numeros: number[]): void{
        this.resultado = numeros.reduce((t,a) => (t+a) )
    }
}

class Multiplicacao extends Calculo{
    executar(...numeros: number[]): void{
        this.resultado = numeros.reduce((t,a) => (t*a) )
    }
}

let c1 = new Soma()
c1.executar(2,3,4,5)
console.log(c1.gerResultado())

c1 = new Multiplicacao()
c1.executar(3,75)
console.log('Resultado= ',c1.gerResultado())