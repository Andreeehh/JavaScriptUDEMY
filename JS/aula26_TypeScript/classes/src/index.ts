// class Animal {
//     categoria: string
//     constructor(categoria: string){
//         this.categoria = categoria
//     }
// }
//maneira mais curta
abstract class Animal {
    constructor(protected readonly categoria: string) { }

    mostrarCategoria(): void {
        console.log(`A categoria é: ${this.categoria}`)
    }
}

class Gato extends Animal {
    private nome: string
    constructor(nome: string) {
        super("Mamifero")
        this.nome = nome
    }

    mostrarDetalhes(): void {
        console.log(this.nome, this.categoria)
    }

}

class Cachorro extends Animal {
    constructor(private _nome: string) {
        super("Mamifero")
    }

    get nome() {
        console.log("get chamado")
        return this._nome
    }

    set nome(n: string) {
        console.log("set chamado")
        this._nome = n
    }

    mostrarDetalhes(): void {
        console.log(this._nome + " é um " + this.categoria)
    }
}

// const animal = new Animal("mamifero") caso seja abstract, nao pode ser instanciada, somente extendida para outras classes
// // console.log(animal)
// animal.mostrarCategoria()
// animal.categoria = "nova categoria" nao pode trocar caso seja readonly ou private ou protected(protege de fora da classe mas n protege das classes extendidas)
// console.log(animal.categoria)

const mingal = new Gato("mingal")
console.log(mingal)
// mingal.nome = "Novo nome"
mingal.mostrarDetalhes()
const toto = new Cachorro("toto")
console.log(toto)
// toto.nome = "Novo nome"
// toto.mostrarDetalhes()
console.log(toto.nome)
toto.nome = "novo nome"
console.log(toto.nome)
// toto.mostrarDetalhes()

class Cliente{
    private readonly _listaAnimais: Animal[] = []
    private _tempListaAnimais: Animal[] = []

    adicionarAnimais(...animais: Animal[]): void{
        this._listaAnimais.push(...animais)
        this._tempListaAnimais.length = 0
        this._tempListaAnimais = [...this._listaAnimais]
    }

    get listaAnimais(){
        return this._tempListaAnimais
    }
}

const andre = new Cliente()
andre.adicionarAnimais(toto, mingal)
andre.listaAnimais.length = 0
console.log(andre)