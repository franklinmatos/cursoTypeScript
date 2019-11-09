console.log('-------------- Arrow Function --------------');
//  Arrow Function
var somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 1));
var subitrair = function (n1, n2) {
    return n1 - n2;
};
console.log(subitrair(3, 1));
var saudacao = function () { return console.log('Olá'); };
saudacao();
var falarCom = function (pessoa) { return console.log('Olá ' + pessoa); };
falarCom('Antônio');
// this
// function normalComThis() {
//   console.log(this);
// }
// normalComThis();
// const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
// normalComThisEspecial();
// // this??
// console.log(this);
// const arrowComThis = () => console.log(this);
// arrowComThis();
// const arrowComThisEspecial = arrowComThis.bind({ nome: 'Ana' });
// arrowComThisEspecial();
// parametro padrao
function contagemRegressiva(inicio) {
    if (inicio === void 0) { inicio = 3; }
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log('valor atual =>' + inicio);
    }
    console.log('valor final =>' + inicio);
}
contagemRegressiva();
contagemRegressiva(10);
function contagemRegressivaMelhorado(inicio, fim) {
    if (inicio === void 0) { inicio = 5; }
    if (fim === void 0) { fim = 1; }
    fim = inicio - 1;
    console.log('inicio ' + inicio);
    console.log('fim ' + fim);
    while (inicio > fim) {
        inicio--;
        console.log('valor atual =>' + inicio);
    }
    console.log('FIM');
}
contagemRegressivaMelhorado(5, 1);
contagemRegressivaMelhorado(10);
// Rest & Spread
var numbers = [10, 20, 50, 2, 2343, 3243, 1599, 1200, 123];
console.log(Math.max.apply(Math, numbers));
var turmaA = ['João', 'Maria', 'Poliana'];
console.log(turmaA);
var turmaB = [
    'Lucas',
    'Miguel',
    'Fernando',
    'Marcos',
    'Antonio'
].concat(turmaA);
console.log(turmaB);
function retornaArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return args;
}
var numeros = retornaArray(10, 20, 30, 40, 50, 60, 90, 80, 66);
console.log(numeros);
console.log(retornaArray.apply(void 0, numbers.concat(numeros)));
// Rest & Spread (tupla )
var tupla = [1, 'abc', true];
function tuplaParam1(a, b, c) {
    console.log("1)  " + a + " " + b + " " + c + " ");
}
tuplaParam1.apply(void 0, tupla);
function tuplaPram2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    console.log(Array.isArray(params));
    console.log("2) " + params[0] + " " + params[1] + " " + params[2] + " ");
}
tuplaPram2.apply(void 0, tupla);
// Destructuring (array)
var caracteristicas = ['Motor Speed 6 Marchas', 2014];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
// console.log(motor)
// console.log(ano)
var motor = caracteristicas[0], ano = caracteristicas[1];
console.log(motor);
console.log(ano);
// Destructuring (objeto)
var item = {
    nome: 'SSD 480GB',
    preco: 389,
    caracteristicas: {
        w: 'Importado'
    }
};
console.log(item);
var nomeItem = item.nome;
var precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);
var n = item.nome, p = item.preco, w = item.caracteristicas.w;
console.log(n);
console.log(p);
console.log(w);
