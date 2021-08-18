//consegurir qualquer valor como sendo chave, diferente dos objetos normais
const myMap = new Map()
const myObj = new Object()

myObj.prop1 = "prop 1"

const arr = []
//passando propriedades ao Map por set e retornando o valor delas por get
myMap.set("prop1", "prop 1")
console.log(myMap.get("prop1"))
myMap.set(true, false)
console.log(myMap.get(true))
myMap.set(myObj, "meu objeto")
console.log(myMap.get(myObj))
myMap.set(arr, myObj)
console.log(myMap.get(arr))

//passando propriedades de chave valor por parametro, obedecendo a orderm de mandar uma array, com as chaves e propriedades dentro de uma outra array
const myMap2 = new Map( [ [0,"zero"], [1,"um"], ["dois",2] ] )
console.log(myMap2.get(0))
console.log(myMap2.get(1))
console.log(myMap2.get("dois"))
console.log(myMap2.has(1))//retorna true pois a chave/indice 1 tem uma propriedade
console.log(myMap2.has(3))//retorna false pois não tem chave/indice 3
console.log(myMap2.keys())//retorna os indices/chaves do objeto
console.log(myMap2.values())//retorna os valores do objeto
console.log(myMap2.entries())//retorna um array com chave ligada aos valores

let keys = myMap2.keys()
for(let k of keys){
    console.log(k)
}

for(let v of myMap2.values()){
    console.log(v)
}
for(let e of myMap2.entries()){
    console.log(e)
}

//Diferença de map e weakMap é que, utilizar um weakMap como propriedade de um objeto, e esse objeto não for mais acessível, o lugar da memória vai ser marcado para que possa ser limpo pelo garbage colector
//além disso o weakMap não utiliza os métodos has,keys,values,entries, é uma diferença de performace

let _contador = new WeakMap()
class Contador {
    constructor(){
        //this.contador = 0
        _contador.set(this, 0)
    }
    increment(){
        //this.contador++
        _contador.set(this, _contador.get(this)+1)
        //console.log(this.contador)
        console.log(_contador.get(this))
    }
    get contador(){
        return _contador.get(this)
    }
}

const c1 = new Contador()
c1.increment()
console.log(c1.contador)
c1.increment()
c1.increment()
console.log(c1.contador)


//se apagar o objeto c1, a referencia dele sendo weakMap também sera apagada pelo garbage colector

