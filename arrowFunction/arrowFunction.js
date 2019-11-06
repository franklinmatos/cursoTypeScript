var _this = this;
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
function normalComThis() {
    console.log(this);
}
normalComThis();
var normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
normalComThisEspecial();
// this??
console.log(this);
var arrowComThis = function () { return console.log(_this); };
arrowComThis();
var arrowComThisEspecial = arrowComThis.bind({ nome: 'Ana' });
arrowComThisEspecial();
