console.log('-------------- Arrow Function --------------');
//  Arrow Function

const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};
console.log(somar(2, 1));

const subitrair = function (n1: number, n2: number): number {
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

function contagemRegressivaMelhorado(inicio: number = 5, fim: number = 1): void {
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
const numbers = [10, 20, 50, 2, 2343, 3243, 1599, 1200, 123];
console.log(Math.max(...numbers));

const turmaA: string[] = ['João', 'Maria', 'Poliana'];
console.log(turmaA);

const turmaB: string[] = [
  'Lucas',
  'Miguel',
  'Fernando',
  'Marcos',
  'Antonio',
  ...turmaA,
];
console.log(turmaB);

function retornaArray(...args: number[]) {
  return args;
}
const numeros = retornaArray(10, 20, 30, 40, 50, 60, 90, 80, 66);
console.log(numeros);
console.log(retornaArray(...numbers, ...numeros));

// Rest & Spread (tupla )
const tupla: [number, string, boolean] = [1, 'abc', true];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1)  ${a} ${b} ${c} `);
}
tuplaParam1(...tupla)

function tuplaPram2(...params: [number, string, boolean]): void {
  console.log(Array.isArray(params))
  console.log(`2) ${params[0]} ${params[1]} ${params[2]} `)
}

tuplaPram2(...tupla)

// Destructuring (array)

const caracteristicas = ['Motor Speed 6 Marchas', 2014]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
// console.log(motor)
// console.log(ano)

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

// Destructuring (objeto)

const item = {
  nome: 'SSD 480GB',
  preco: 389,
  caracteristicas: {
    w: 'Importado'
  }
}

console.log(item)

const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem)
console.log(precoItem)

const {
  nome: n, preco: p, caracteristicas: { w }
} = item

console.log(n)
console.log(p)
console.log(w)