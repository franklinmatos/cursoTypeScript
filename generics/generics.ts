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