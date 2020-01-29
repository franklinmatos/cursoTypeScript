interface Humano {
    nome: string
    idade?: number // idade? quer dizer que o nome não é obrigatório
    [prop: string]: any // definição de propriedade com nome dinâmico
    /**
     * 
     * @param sobrenome //para ser uma função não obrigatória
     *  basta colocar o '?' depois do nome da função, similar ao atributo idade
     * seria algo assi: saudar?(sobremone: string):void
     */
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá: ' + pessoa.nome)

}
function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'

}
const pessoaTeste: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log(' Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoaTeste)
mudarNome(pessoaTeste)
saudarComOla(pessoaTeste)
// saudarComOla({nome: 'Jonas',idade: 27})
// saudarComOla({nome: 'Adriana',idade: 25, altura: 1.85})
pessoaTeste.saudar('Skywalker')

//implementando interfaces
class Cliente implements Humano {

    nome: string = ''
    saudar(sobrenome: string): void {
        console.log('Ola, meu nome é ' +
            this.nome + ' ' + sobrenome)
    }
}
const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')