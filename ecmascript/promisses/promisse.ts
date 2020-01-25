console.log('Aula sobre Promisses!!');

// Exercicio 5
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

//Exercicio 6

const cientista = { primeiroNome: 'Will', experiencia: 12 }
const { primeiroNome, experiencia } = cientista
console.log(primeiroNome, experiencia)

// Callback

function esperar3s(callback: (dado: string) => void) {
    setTimeout(() => {
        callback('3s depois....')
    }, 3000)
}
esperar3s(function (resultado: string) {
    console.log(resultado)
})

// convertendo em promisse

function esperar3sPromise() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3s depois Promise....')
        }, 3000)
    })
}

esperar3sPromise().then(dado => console.log(dado))

fetch('https://swapi.co/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(dado => console.log(dado.title))
    .catch(err => console.log('Catch!!! ', err))