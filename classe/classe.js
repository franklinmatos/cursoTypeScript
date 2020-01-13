"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(18, 10, 1980);
console.log(aniversario.dia);
console.log(aniversario.mes);
console.log(aniversario.ano);
console.log(aniversario);
console.log('### casamento ##');
const casamento = new Data();
console.log(casamento);
class DataEsperta {
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
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto.mes);
console.log(aniversarioEsperto.ano);
console.log(aniversarioEsperto);
console.log('### casamento esperto ##');
const casamentoEspert = new DataEsperta();
console.log(casamentoEspert);
//# sourceMappingURL=classe.js.map