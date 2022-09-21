class Pessoa<T> {
    constructor(private nome: T) { }

    setNome(nome: T): void {
        this.nome = nome
    }
}

const andre = new Pessoa("André")
andre.setNome("André Carvalho")

class List<T>{
    private list: T[] = []

    getFromList(index: number): T | null {
        const len = this.list.length
        if (len === 0) return null
        if (index >= len || index < 0) return null
        return this.list[index]
    }

    removeFromList(index: number): T | null {
        const element = this.getFromList(index)
        if (element !== null){
            this.list.splice(index, 1)
            return element
        }
        return null
    }

    addToList(element: T): this {
        this.list.push(element)
        return this
    }
}

class Animal<T> {
    constructor(private nome: T) { }

    setNome(nome: T): void {
        this.nome = nome
    }
}

const listPessoas = new List<Pessoa<string>>()
listPessoas.addToList(andre).addToList(new Pessoa("Roberto")).addToList(new Pessoa("Luciana"))//.addToList(new Animal("bud")) nao é do tipo pessoa
const listAnimais = new List<Animal<string>>()
listAnimais.addToList(new Animal("bud")).addToList(new Animal("bud"))//.addToList(new Pessoa("Luciana")) nao é do tipo animal

console.log(listPessoas)
console.log(listPessoas.getFromList(2))
console.log(listPessoas.removeFromList(2))
console.log(listPessoas)

export default 1