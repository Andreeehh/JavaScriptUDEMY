abstract class Animal {

    constructor(protected readonly categoria: string) { }

    mostrarCategoria(): void {
        console.log(`A categoria é: ${this.categoria}`)
    }

    abstract mostrarDetalhes(): void
    abstract idade: number
}

interface AnimalInterface {
    categoria: string;
    mostrarDetalhes(): void;
    idade?: number
}

class Gato extends Animal {

    constructor(public nome: string, public idade: number) {
        super("mamifero")
    }

    mostrarDetalhes() {
        console.log("mostrar detalhe chamado")
    }
}

type CachorroInterface = { //poucas diferenças do type pro interface
    latir(): void
}

class Cachorro implements AnimalInterface, CachorroInterface {
    constructor(public categoria: string, public nome: string, public idade?: number) {
    }

    mostrarDetalhes() {
        console.log("mostrar detalhe chamado")
        console.log(this.nome, this.categoria, (this.idade) ? this.idade : "")
    }

    latir(): void {
        console.log(this.nome, "está latindo")
    }
}

const mingal = new Gato("mingal", 14)
console.log(mingal)

const bud = new Cachorro("mamifero", "bud")
console.log(bud)
bud.mostrarDetalhes()
bud.latir()

//interface pode ser criada em partes diferentes

interface Pessoa {
    name: string
}

interface Pessoa {
    idade: number
}
//Conceito de merging, type nao permite

type TesteT = number | { qtd: number }

const idade: TesteT = 10
//interface nao trabalha com tipos primitivos, nem o | de union

type Cores = "Red" | "Green" | "Blue"

const cor: Cores = "Green"

//interface nao trabalha com enum

type Soma = (x: number, y: number) => number

interface SomaI {
    (x: number, y: number): number
}

const somar: Soma = (x, y) => x + y
console.log(somar(2, 5))
const somarI: SomaI = (x, y) => x + y
console.log(somarI(2, 5))

//diferença apensa visual


export default 1