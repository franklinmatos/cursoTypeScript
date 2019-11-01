// boolean
var variavel = false;
console.log('O valor da variavel boolean é: ' + variavel);
// string
var nome = "O nome dela é Jenifer!!";
console.log(nome);
// se tentar inserir um valor inteiro numa variável string o compitador mesmo barra
// nome = 1890+30
// console.log(nome)
// number
var idade = 27;
console.log('A idade atribuida é: ' + idade);
console.log(typeof idade);
var hobbies = ["Ler", "Correr", "Estudar", "Correr", "Namorar"];
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
naoTenhoCerteza = "maybe a string instead";
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
    console.log("Diga Oi.");
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
            return "Ponto Normal";
        }
        else {
            return "Fora do Horário!";
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(10));
console.log(funcionario.baterPonto(7));
