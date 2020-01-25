"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
// variavel de escopo
let estaFrio = true;
if (estaFrio) {
    let acao = 'colocar o agasalho!';
    console.log(acao);
}
// definindo uma constante e tentando alterar valor
const cpf = '123.456.789.98';
// cpf = '997.345.432-66';
console.log(cpf);
//escopo de variáveis
let segredo = 'externo';
function revelar() {
    let segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        const def = 'def';
        console.log(def);
    }
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// com o uso do let não é permitido acessar a variável de fora do escopo
// com var o acesso ocorre sem problemas.
// console.log(i);
//# sourceMappingURL=ecmascript.js.map