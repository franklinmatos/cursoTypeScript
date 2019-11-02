// boolean
let variavel: boolean = false;
console.log('O valor da variavel boolean é: ' + variavel);

// string
let nome: string = 'O nome dela é Jenifer!!';
console.log(nome);
// se tentar inserir um valor inteiro numa variável string o compitador mesmo barra
// nome = 1890+30
// console.log(nome)

// number
let idade: number = 27;
console.log('A idade atribuida é: ' + idade);
console.log(typeof idade);

let hobbies = [
  'Ler',
  'Correr',
  'Estudar',
  'Correr',
  'Namorar',
  'Namorar',
  'Namorar',
  'Namorar',
  'Namorar',
  'Namorar',
];
console.log(hobbies);

for (let key of hobbies) {
  console.log(key);
}

// tupla
let tuple: [string, number];
tuple = ['Franklin', 2019];
console.log(tuple);

// enum
enum Color {
  Red,
  Blue,
  Green,
}
console.log(Color.Red); // exibe o indice da variável no enum

// enum com atribuição de valores com tipos diferentes
enum cor {
  Red = 'Vermelho',
  Blue = 123,
  Green = 'Cinza',
}
console.log(cor.Red);

let naoTenhoCerteza: any = 4;
console.log(naoTenhoCerteza);
naoTenhoCerteza = 'maybe a string instead';
console.log(naoTenhoCerteza);
naoTenhoCerteza = false; // okay, definitely a boolean
console.log(naoTenhoCerteza);

//usando tipos em funções - parametros ou retorno
function retornaMeuNome(): string {
  return nome;
  // return idade; não funciona porque eu coloquei a função para retornar uma string e a função se retornar idade que é número, dará erro
}
console.log(retornaMeuNome());

function digaOi(): void {
  console.log('Diga Oi.');
}

digaOi();

// função que recebe 2 números do tipo number e retorna um number como resultadl
function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}
console.log(multiplicar(10, 5));
console.log(multiplicar(10.2, 5));

// definição de objeto
let pessoa: { nome: string; idade: number } = {
  nome: 'Maria Antônia',
  idade: 26,
};
console.log(pessoa);

pessoa = {
  idade: 55,
  nome: 'José de Almeida',
};
console.log(pessoa);
//  Desafio
/*  
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (número) e retorna uma string
            ->Ponto normal (<= 8)
            -> Fora do Horário (> 8)
*/
let funcionario: {
  supervisores: string[];
  baterPonto: (hora: number) => string;
} = {
  supervisores: ['Ana', 'Paulo'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto Normal';
    } else {
      return 'Fora do Horário!';
    }
  },
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(10));
console.log(funcionario.baterPonto(7));

// const obj = {
//   a: 123,
//   b: 123,
//   c: 123,
//   d: 123,
// };

// const obj2 = {
//   ...obj,
//   e: 123,
//   f: 123,
// };

// criando tipos personalizados
type funcionarioTipo = {
  supervisores: string[];
  baterPonto: (hora: number) => string;
};

let novoFuncionario: funcionarioTipo = {
  supervisores: ['Joana', 'Mário'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto Normal';
    } else {
      return 'Fora do Horário!';
    }
  },
};

console.log(novoFuncionario.supervisores);
console.log(novoFuncionario.baterPonto(10));
console.log(novoFuncionario.baterPonto(7));

// union types

let nota: number | string = 10;
console.log(nota);

nota = 'nota 10';
console.log(nota);

//  checando tipos no runtime
if (typeof nota === 'number') {
  console.log('O tipo passado é do tipo number');
} else {
  console.log(typeof nota);
}

// função never
function falha(message: string): never {
  throw new Error(message);
}
// gerando um excessão em alguma regra...
const produto = {
  id: 54,
  nome: 'Sabão em pó',
  preco: -1,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha('Produto Inválido');
    }
    if (this.preco <= 0) {
      falha('Valor inválido para o produto');
    }
  },
};

produto.validarProduto();
