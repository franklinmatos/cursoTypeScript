@logarClasse
class EletroDomertico {
    constructor() {
        console.log('novo...')
    }
}

function logarClasse(construtor: Function) {
    console.log(construtor)
}

new EletroDomertico()