class Data {
    dia: number
    mes: number
    ano: number
    //construtor inicializa o objeto instanciando os valores
    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }



}

const aniversario = new Data(18, 10, 1980)
console.log('### aniversário ##')
console.log(aniversario.dia)
console.log(aniversario.mes)
console.log(aniversario.ano)

// console.log(aniversario)

console.log('### aniversário casamento ##')
const casamento = new Data()
// console.log(casamento)
console.log(casamento.dia)
console.log(casamento.mes)
console.log(casamento.ano)

class DataEsperta {

    //construtor inicializa o objeto instanciando os valores
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }



}

const aniversarioEsperto = new DataEsperta(18, 10, 1980)
console.log('### aniversárioEsperto ##')
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto.mes)
console.log(aniversarioEsperto.ano)

console.log(aniversarioEsperto)

console.log('### casamento esperto ##')
const casamentoEspert = new DataEsperta()
console.log(casamentoEspert)

