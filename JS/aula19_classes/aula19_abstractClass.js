//classe abstrata é uma classe que só pode ser extendida, ela não pode ser construida

class Animal {
    constructor(tipo){//sempre chamado mesmo não sendo programado quando utiliza o operador new
        
        if(this.constructor === Animal){//condição que gera erro ao tentar criar um objeto com o operador new do tipo Animal, forçando essa classe a só ser usada no extends
            throw new Error("Animal is an abstract Class")
        }
        
        if (tipo) {
            this.tipo = tipo
        }
    }

    comer(){
        throw new Error("method 'comer()' must be implemented")
    }
}

class Gato extends Animal{
    constructor(nome){
        super("mamifero")
        if(nome){
            this.nome = nome
        }
    }
    comer(){
        console.log(`${this.tipo} está comendo`)
    }
}

const animal = new Animal("mamifero")
const mingal = new Gato("mingal")

console.log(animal)
console.log(animal.comer())
console.log(mingal)