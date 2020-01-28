interface Humano {
    nome: string
    idade?: number // idade? quer dizer que o nome não é obrigatório
    [prop: string]: any // definição de propriedade com nome dinâmico
}

function saudarComOla( pessoa:Humano ){
    console.log('Olá: ' + pessoa.nome)

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
saudarComOla({nome: 'Jonas',idade: 27})
saudarComOla({nome: 'Adriana',idade: 25, altura: 1.85})