interface Humano {
    nome: string
}

function saudarComOla( pessoa:Humano ){
    console.log(pessoa.nome)

}
function mudarNome(pessoa:Humano) {
    pessoa.nome = 'Joana'
    
}
const pessoaTeste = {
    nome: 'João',
    idade: 27
}

saudarComOla(pessoaTeste)
mudarNome(pessoaTeste)
saudarComOla(pessoaTeste)