function echo(objeto: any) {
    return objeto
}

console.log(echo('João').length)
console.log(echo(27).length)
console.log(echo({ nome: 'João', idade: 27 }))

// Usando Generics
function echoMelhorado<T>(objeto: T): T {
    return objeto
}


console.log(echoMelhorado('João').length)
// console.log(echoMelhorado(27).length) // exibe erro na função length
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: 'João', idade: 27 }))


//Generics disponíveia na API
const avaliacoes: Array<number> = [10, 7, 6]
avaliacoes.push(8.8)
// avaliacoes.push('5.5') assim que eu coloquei o tipo no array a string 5.5 foi invalidada pela API
console.log(avaliacoes)

//funções
function imprimir<T>(args: T[]) {
    args.forEach(element => (console.log(element)))
}

imprimir([1, 2, 3])
imprimir<number>([4, 5, 6])
imprimir<string>(['Ana', 'João', 'Maria'])
imprimir<{ nome: string, idade: number }>(
    [
        { nome: 'Carlos', idade: 22 },
        { nome: 'Antonio', idade: 33 },
        { nome: 'José', idade: 44 }
    ]
)

type Aluno = {
    nome: string, idade: number
}
imprimir<Aluno>(
    [
        { nome: 'Carlos', idade: 22 },
        { nome: 'Antonio', idade: 33 },
        { nome: 'José', idade: 44 }
    ]
)


// Class com Generics
class OperacaoBinaria {
    constructor(public operando1: any,
        public operando2: any){}
    
    executar(){
        return this.operando1 + this.operando2
    }    
}

console.log(new OperacaoBinaria('Bom ','Dia').executar())
console.log(new OperacaoBinaria(3,7).executar())
console.log(new OperacaoBinaria(3,' - Opa').executar())
console.log(new OperacaoBinaria({},{}).executar())