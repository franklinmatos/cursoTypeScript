// boolean
var variavel = false;
console.log('O valor da variavel boolean é: ' + variavel);
// string
var nome = 'O nome dela é Jenifer!!';
console.log(nome);
// se tentar inserir um valor inteiro numa variável string o compitador mesmo barra
// nome = 1890+30
// console.log(nome)
// number
var idade = 27;
console.log('A idade atribuida é: ' + idade);
console.log(typeof idade);
var hobbies = [
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
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var key = hobbies_1[_i];
    console.log(key);
}
// tupla
var tuple;
tuple = ['Franklin', 2019];
console.log(tuple);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
console.log(Color.Red); // exibe o indice da variável no enum
// enum com atribuição de valores com tipos diferentes
var cor;
(function (cor) {
    cor["Red"] = "Vermelho";
    cor[cor["Blue"] = 123] = "Blue";
    cor["Green"] = "Cinza";
})(cor || (cor = {}));
console.log(cor.Red);
var naoTenhoCerteza = 4;
console.log(naoTenhoCerteza);
naoTenhoCerteza = 'maybe a string instead';
console.log(naoTenhoCerteza);
naoTenhoCerteza = false; // okay, definitely a boolean
console.log(naoTenhoCerteza);
//usando tipos em funções - parametros ou retorno
function retornaMeuNome() {
    return nome;
    // return idade; não funciona porque eu coloquei a função para retornar uma string e a função se retornar idade que é número, dará erro
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Diga Oi.');
}
digaOi();
// função que recebe 2 números do tipo number e retorna um number como resultadl
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(10, 5));
console.log(multiplicar(10.2, 5));
// definição de objeto
var pessoa = {
    nome: 'Maria Antônia',
    idade: 26
};
console.log(pessoa);
pessoa = {
    idade: 55,
    nome: 'José de Almeida'
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
var funcionario = {
    supervisores: ['Ana', 'Paulo'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Horário!';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(10));
console.log(funcionario.baterPonto(7));
var novoFuncionario = {
    supervisores: ['Joana', 'Mário'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Horário!';
        }
    }
};
console.log(novoFuncionario.supervisores);
console.log(novoFuncionario.baterPonto(10));
console.log(novoFuncionario.baterPonto(7));
// union types
var nota = 10;
console.log(nota);
nota = 'nota 10';
console.log(nota);
//  checando tipos no runtime
if (typeof nota === 'number') {
    console.log('O tipo passado é do tipo number');
}
else {
    console.log(typeof nota);
}
// função never
function falha(message) {
    throw new Error(message);
}
// gerando um excessão em alguma regra...
var produto = {
    id: 54,
    nome: 'Sabão em pó',
    preco: 10,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Produto Inválido');
        }
        if (this.preco <= 0) {
            falha('Valor inválido para o produto');
        }
    }
};
produto.validarProduto();
var contato1 = {
    nome: 'Franklin M. Correia',
    idade: null,
    telefone: null
};
console.log(contato1);
console.log(JSON.stringify(contato1));
// ao se atribuir esse valor a variaval assume o tipo any
var podeSerNulo = null;
console.log(podeSerNulo);
console.log(typeof podeSerNulo);
