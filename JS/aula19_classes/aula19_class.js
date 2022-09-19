//Factories 
const cachorroProto = {//criar um objeto de prototypo com as funções da Factories que cria objetos, para que as funções não se repitam toda vez que for criada
    latir(){
        console.log(this.name, "está latindo")
    },
    andar(distancia){
        this.posicao += distancia //é como se fosse uma propriedade, porém esta atrelada a função set
        console.log(this.name, "andou", distancia, "m")
    }
}

function criarCachorro(name){
    let posicao = 0

    const obj = {
        name,
        get posicao(){
            console.log(`a posicao atual de ${this.name} é ${posicao}`)
            return posicao
        },
        set posicao(newPosition){
            posicao = newPosition
            console.log(`a nova posicao de ${this.name} é ${posicao}`)
        } 
    }
    Object.setPrototypeOf(obj, cachorroProto)//seta o prototypo do objeto passado pelo primeiro parametro com o prototypo de segundo parametro
    return obj
}

let dog1 = criarCachorro("dog1")
let dog2 = criarCachorro("dog2")
console.log(dog1.__proto__ === dog2.__proto__)//ambos os prototipos são o mesmo objeto, cachorroProto, true
console.log(dog1.posicao)
dog1.andar(12)
console.log(dog1.posicao)





// ES 5
function Animal(tipo){
    if(this instanceof Animal){
        if(tipo) this.tipo = tipo
    }else {
        throw new Error("Animal deve ser criado com new operator")
    }//você deve colocar essa condição no ES 5 para quando pessoas tentarem executar a função sem o operador new, no ES6 isso não é mais necessário, pois ja esta incluso no Class
}

function Cachorro(nome){
    this.nome = nome
    Animal.call(this, "mamifero")
    //this.constructor = Cachorro
    this.comer = function(){//colocar uma função dentro do objeto cachorro é desnecessário, pois poderia ser adicionada no seu prototype,
                            //com ela dentro do objeto, ela ocupa um espaço toda vez que é criado um novo objeto do tipo cachorro
        console.log(`${this.nome} está comendo`)
    }
}

Cachorro.prototype = new Animal("mamifero")
Cachorro.prototype.latir = function(){
    console.log(`${this.nome} está latindo`)
}
Cachorro.prototype.constructor = Cachorro

let dog = new Cachorro("Dog")


console.log(dog)//todas as propriedades do objeto Cachorro
console.log(dog.__proto__)// Animal{tipo : "mamifero"}, testar se o __proto__ esta atribuido
console.log(Object.getPrototypeOf(dog))//igual da linha acima

Animal.prototype.obterTipo = function (){
    return this.tipo
}

Animal.prototype.tipo = "Desconhecido"


// ES 6

class AnimalC{
    constructor(tipo){
        if(tipo)
            this.tipo = tipo
    }
    obterTipo(){
        return this.tipo
    }
}

AnimalC.prototype.tipo = "desconhecido"

let animal = new AnimalC("anfibio")

console.log(animal)//objeto com classe animal com tipo anfibio
console.log(typeof animal)//objeto
console.log(typeof AnimalC)//função
console.log(animal.obterTipo())//retorna anfibio
console.log(AnimalC.prototype)//{tipo: "desconhecido", constructor: ƒ, obterTipo: ƒ}
                                //tipo: "desconhecido"
                                //constructor: class AnimalC
                                //obterTipo: ƒ obterTipo()
                                //[[Prototype]]: Object
let sapo = new AnimalC
console.log(sapo.tipo)// como não foi passado parametro, o construtor não passou da verificação onde atribui o parametro ao tipo, então ele busca o tipo desconhecido atribuido ao prototype do AnimalC

class GatoC extends AnimalC {
    constructor(nome){ // Igual o que aprendi em Java
        super("mamifero")
        this.nome = nome
    }
}

let mingal = new GatoC("mingal")
console.log(mingal)//GatoC {tipo: "mamifero", nome: "mingal"}
console.log(mingal.__proto__)// AnimalC {constructor}






