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

function contagemRegressiva(inicio: number = 3): void {
  console.log(inicio);
  while (inicio > 0) {
    inicio--;
    console.log('valor atual =>' + inicio);
  }
  console.log('valor final =>' + inicio);
}

contagemRegressiva();
contagemRegressiva(10);

function contagemRegressivaMelhorado(inicio: number = 5, fim: number): void {
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
contagemRegressivaMelhorado(10, 0);
