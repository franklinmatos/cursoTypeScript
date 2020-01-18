"use strict";
class Data {
    //construtor inicializa o objeto instanciando os valores
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(18, 10, 1980);
console.log('### aniversário ##');
console.log(aniversario.dia);
console.log(aniversario.mes);
console.log(aniversario.ano);
// console.log(aniversario)
console.log('### aniversário casamento ##');
const casamento = new Data();
// console.log(casamento)
console.log(casamento.dia);
console.log(casamento.mes);
console.log(casamento.ano);
class DataEsperta {
    //construtor inicializa o objeto instanciando os valores
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(18, 10, 1980);
console.log('### aniversárioEsperto ##');
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto.mes);
console.log(aniversarioEsperto.ano);
console.log(aniversarioEsperto);
console.log('### casamento esperto ##');
const casamentoEspert = new DataEsperta();
console.log(casamentoEspert);
//# sourceMappingURL=classe.js.map