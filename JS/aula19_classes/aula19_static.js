//método que faz parte ou da função construtora ou da classe

//ES5

function Animal(){

}

Animal.prototype.whoAmI = function(){
    return this
}

Animal.categoria = "ser vivo"

const dog = new Animal()

console.log(dog)//retorna objeto animal
console.log(dog.whoAmI())//retorna objeto animal
console.log(Animal.categoria)//retorna "ser vivo", compartilhado entre todas as instancias
console.log(dog.categoria)//retorna undefined

//ES6
class Cachorro{
    constructor(nome){
        if(nome) this.nome = nome
        //métodos staticos não podem ser utilizados no construtor pois o this é o próprio objeto, não a classe cachorro
        console.log("chamando método estático de dentro do constructor")
        Cachorro.beber()
    }

    static comer(){
        // console.log(this) //próprio Cachorro
        console.log("chamando método estático de dentro do static comer")
        console.log(`comendo`)
        this.beber()//metodos staticos podem ser utilizados dentro de outros métodos staticos pois o this se torna a função
    }

    static beber(){
        console.log("bebendo")
    }
}

const rex = new Cachorro("rex")
// console.log(rex.comer()) rex não tem as propriedades estáticas comer nem beber
console.log(Cachorro.comer())
