// let & const
var seraQuePode = '?';
console.log(seraQuePode);
// variavel de escopo
var estaFrio = true;
if (estaFrio) {
    var acao = 'colocar o agasalho!';
    console.log(acao);
}
// definindo uma constante e tentando alterar valor
var cpf = '123.456.789.98';
// cpf = '997.345.432-66';
console.log(cpf);
var segredo = 'externo';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        var def = 'def';
        console.log(def);
    }
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
