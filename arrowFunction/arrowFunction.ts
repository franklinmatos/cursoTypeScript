console.log('-------------- Arrow Function --------------');
//  Arrow Function

const somar = function(n1: number, n2: number): number {
  return n1 + n2;
};
console.log(somar(2, 1));

const subitrair = function(n1: number, n2: number): number {
  return n1 - n2;
};

console.log(subitrair(3, 1));

const saudacao = () => console.log('Olá');

saudacao();

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa);
falarCom('Antônio');

// this

function normalComThis() {
  console.log(this);
}
normalComThis();

const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
normalComThisEspecial();

// this??
console.log(this);
const arrowComThis = () => console.log(this);
arrowComThis();

const arrowComThisEspecial = arrowComThis.bind({ nome: 'Ana' });
arrowComThisEspecial();
